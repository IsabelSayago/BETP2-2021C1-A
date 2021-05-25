import express from 'express';

const app = express();
const PORT = 3000;

app.use('/',(req,res,next)=>{
    if(req.query.token === 'abc123'){
        next();
    }
    else {
        res.status(401).send("No está autorizado.");
    }

});


app.get('/', (req,res) => {
    
    res.send("I am answering!")
})



app.listen(PORT, ()=>{
    console.log("Server up!")
});

