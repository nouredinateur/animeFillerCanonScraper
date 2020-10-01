const express = require('express');
const getAnimeFiller = require('./getAnimeFiller');
const app = express();
const ejs = require('ejs');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/filler' , async (req, res) => {
    const episodes = await getAnimeFiller();
    // console.log(episodes.length);
    // for(var i = 0 ; i < episodes.length ; i++){
        res.render('index', {
           eps : episodes ,
        })

    // }
    
});


const port = process.env.PORT || 1337;
app.listen(port, () =>{
    console.log(`Listening at http://localhost:${port}`);
});