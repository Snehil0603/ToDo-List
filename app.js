// basic-Server setUP

const dotenv = require("dotenv")
dotenv.config()
const express=require("express");
const bodyparser=require("body-parser");
const date=require(__dirname+"/date.js");
const mongoose=require("mongoose");



const app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));   

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
// app.use(express.static(__dirname + "public"));                   // Set the view engine to EJS


// Connecting to mongodb cluster

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

// Making a schema for our collection
const newItemSchema=new mongoose.Schema({
    name : String,
})


// Adding some items to our collection
const newItem =mongoose.model("newItem",newItemSchema)


const item1 =new newItem({
    name :"Buy Food",
})
const item2 =new newItem({
    name :"Cook Food",
})
const item3 =new newItem({
    name :"Eat Food",
})





app.get("/",function(req,res){

    newItem.find({},function(err,foundItem){

        if(foundItem.length===0){
            // adding item1,item2,item3 only on the first time
            newItem.insertMany([item1,item2,item3],function(err){
                if(err) console.log(err)
                else console.log("Saved successfully")
            });

            // redirecting so that the inserted items are displayed
            res.redirect("/");
        }
        else{
        

        res.render("list",{
            listTitle:day,
            Item:foundItem
        });
        }
    
    })


    // to display the current date
   let day =date.getDay();
       
    
})

// Posting new items  
app.post("/", function(req, res) {
    var addItem = req.body.newItem.trim(); // Trim whitespace

    // Check if the newItem is not empty
    if (addItem) {
        const itm = new newItem({
            name: addItem,
        });
        itm.save();
    } else {
        console.log("Empty item not added."); // Log for debugging
    }

    res.redirect("/");
});



// Deleting the item by id
app.post("/delete",function(req,res){


    // here delItem contains the id of checkBox ticked
    const delItem= req.body.checkbox;
    console.log(delItem)
        newItem.findByIdAndDelete(delItem,function(err){
            if(!err) {console.log("Successfully deleted item")

            res.redirect("/")
        }
        })
})


// This helps to host our site locally as well as on other port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
