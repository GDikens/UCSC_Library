var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

var nav = [
    {
        Link:'/gallery',
        Text: 'Gallery'
    },
    {
        Link:'/library',
        Text: 'Library'
    }
];
var galleryRouter = require('./src/routes/galleryRoutes')(nav);

app.use(express.static('public'));
// app.use(express.static('src/views'));

app.set('views','./src/views');
app.set('view engine','ejs');

app.use('/gallery',galleryRouter);

app.get('/',function(req,res){
    res.render('index',{
        title:'Welcome to UCSC Digital Library',
        nav:nav
    });
});

// app.get('/',function(req,res){
//     res.send('index');
// });

app.get('/category',function(req,res){
    res.send('UCSC_Library Project');
});

app.listen(port,function(err){
    console.log('running server on port '+port);
});