import express from 'express';

//Note: Express is used for routing purposes on the server side 
const app = express();

// app.get('/', (req, res) => {
//     res.send("Server is ready");
// })

//List 5 jokes 

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "This is a Joke",
        },
        {
            id: 2,
            title: "Joke 2",
            content: "This is a Joke",
        },
        {
            id: 3,
            title: "Joke 3",
            content: "This is a Joke",
        },
        {
            id: 4,
            title: "Joke 4",
            content: "This is a Joke",
        },
        {
            id: 5,
            title: "Joke 5",
            content: "This is a Joke",
        }
    ]
    //Defaultly sends the data in the JSON format
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});