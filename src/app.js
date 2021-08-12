const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3100;

// const static_path = path.join(__dirname, "../public");
// console.log(path.join(__dirname, "../views/partials"));

const partialsPaths = (path.join(__dirname, "../templates/partials"));
hbs.registerPartials(partialsPaths);

app.set('view engine', "hbs");
// app.use(express.static(static_path));

const viewPath = path.join(__dirname,"../templates/views")
app.set("views", viewPath)
app.get("", (req,res)=>{
    res.render("weather");
})

app.get("/home", (req,res)=>{
    res.render("index")
})

app.get('/about', (req,res)=>{
    res.render("about")
})

app.get('/weather', (req,res)=>{
    res.render("weather")
})

app.get('*', (req,res)=>{
    res.render("404error",{
        errmsg:"Oops you are in wrong url"
    });
})



app.listen(port , ()=>{
    console.log(`connection on ${port}`);
})