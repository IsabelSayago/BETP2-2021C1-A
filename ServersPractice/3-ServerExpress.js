import express from 'express';

const PORT = 3000; 
// Esto en una aplicación se define en una variable de entorno.
// al hacer deploy

const people = [
    {
        _id: 1,
        first: 'Isabel',
        last: 'Sayago'
    },
    {
        _id: 2,
        first: 'Jorge',
        last: 'Sayago'
    }
];


const app = express();

app.get('/',(req,res)=>{
    res.send(`
        <html>
            <head></head>
            <body>
                <h1>Hello</h1>
            </body>
        </html>
    `);
});

app.get('/api/people', (req,res)=>{
    res.json(people);
})

app.get('/api/people/:id', (req,res)=>{
    const person = people.find(p => p._id == req.params.id);
    res.json(person);
})



app.listen(PORT, ()=>{
    console.log("Server up!")
})
