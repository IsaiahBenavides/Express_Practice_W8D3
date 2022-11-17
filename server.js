const express = require(`express`);
const app = express();
const PORT = 3000
// const reactViews = require(`express-react-views`)

// app.set(`view engine`, `jsx`);
// app.engine(`jsx`, reactViews.createEngine())

app.get(`/greeting`, (req,res)=>{
    res.send(`
    <h1>Greetings</h1>
    <br>
    <p>What might your name be?</p>
    `)
})

app.get(`/greeting/:name`, (req,res)=>{
    res.send(`
    <h1>Greetings</h1>
    <br>
    <p>It is good that you are here, ${req.params.name}</p>
    `)
})

app.get(`/tip/:total/:percent`, (req,res)=>{
    const tipAmount = req.params.total * (req.params.percent * 0.01)
    res.send(`
    <h1>How much you tipped:</h1>
    <p>$${req.params.total} * %${req.params.percent} = $${tipAmount}</p>
    `)
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})