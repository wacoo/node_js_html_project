//Imports
const express = require('express');
const app = express();
const port = 5000;


//Static files
app.use(express.static('pubilc'));

//Example for other folders
//app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'));

//Set View's

app.set('views', './views');
app.set('view engine', 'ejs');

//Navigation
app.get('', (req, res)=>{
    
    res.render('index', {text: 'This is EJS'});
});

app.get('/about', (req, res)=>{
   
    res.render('about', { text: 'About Page'})
});

//Listen on port 5000
app.listen(port, ()=> console.info(`App is listening on port ${port}`));