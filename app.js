const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
app.set('views','views');



app.get('/',(req, res,next)=>{
    res.render('home');
});

app.get('/about',(req, res,next)=>{
    res.render('about');
});

app.get('/contact',(req, res,next)=>{
    res.render('contact');
});

app.get('/products',(req, res,next)=>{
    res.render('products');
});

app.get('/service',(req, res,next)=>{
    res.render('service');
});

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(404);
    res.render('404.ejs', { title: '404 Not Found' }); // Render 404 page
  });
  
  // Error handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.ejs', { title: '500 Internal Server Error', error: err }); // Render 500 page
  });
  app.get('/error', function(req, res, next) {
    const error = new Error('This is an example error.');
    next(error);
  });
  
  

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});