const express=require("express");
const bodyparser=require("body-parser");
const date=require(__dirname+"/date.js");
const mongoose=require("mongoose");

const app=express();

mongoose.connect("mongodb+srv://admin-Snehil:admin123@cluster0.is2hohp.mongodb.net/toDoListDB");

const newItemSchema=new mongoose.Schema({
    name : String,
})

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



app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));


app.set('view engine', 'ejs');

app.get("/",function(req,res){

    newItem.find({},function(err,foundItem){

        if(foundItem.length===0){

            newItem.insertMany([item1,item2,item3],function(err){
                if(err) console.log(err)
                else console.log("Saved successfully")
            });
            res.redirect("/");
        }
        else{
        
        res.render("list",{
            listTitle:day,
            Item:foundItem
        });
        }
    
    })

   let day =date.getDay();
       
    
})


app.post("/",function(req,res){
    var addItem = req.body.newItem;
    const itm= new newItem({
        name :addItem,
    })
    itm.save();
    res.redirect("/");


})


app.post("/delete",function(req,res){

    const delItem= req.body.checkbox;
    console.log(delItem)
        newItem.findByIdAndDelete(delItem,function(err){
            if(!err) {console.log("Successfully deleted item")

            res.redirect("/")
        }
        })
})

// app.get("/work",function(req,res){
//     res.render("list",{
//         listTitle:"Work list",
//         Item:workItem,
//     });
// })

// app.post("/work",function(req,res){
//     var addItem = req.body.newItem;
//     workItem.push(addItem);
//     res.redirect("/work");
// })

// app.get("/about",function(req,res){
// res.render("about");
// })

let port=process.env.PORT;
if(port==null ||port==""){
    port=3000
}

app.listen(port , function(){
    console.log("Server running successfully");
});