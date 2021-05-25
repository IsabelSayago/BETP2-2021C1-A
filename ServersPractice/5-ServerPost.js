import express from 'express';

const people = [
    {
        first: "Isa",
        last: "Sayago",
        year: 1997
    },
    {
        first: "Fer",
        last: "Bustamante",
        year: 1997
    }
]

const app = express();
const PORT = 3000;

app.use(express.json());


app.post('/people',(req,res) => {
    res.send(`
        ${req.body.first}
        ${req.body.last}
        ${req.body.year}
    `);
});

app.get('/people',(req,res) => {

});

app.listen(PORT, () => {

});