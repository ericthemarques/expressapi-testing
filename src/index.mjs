import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
const mockArray = [{
    id: 1,
    username: 'eric',
    displayName: 'Eric',
}, {
    id: 2,
    username: 'miguel',
    displayName: 'Miguel',
}, {
    id: 3,
    username: 'aura',
    displayName: 'Aura',
}];
const mockProducts = [{
    id: 187,
    name: 'Monster Capturer',
    price: 12.0
},
{
    id: 452,
    name: 'Dark Scrolls',
    price: 50.0
},
{
    id: 283,
    name: 'Elden Ping',
    price: 70.0
}];

app.get('/', (req, res) => {
    res.send({ msg: "Hello!" })
});

app.get('/api/users', (req, res) => {
    res.send(mockArray);
})

app.get('/api/users/:id', (req, res) => {
    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId)) {
        return res.status(400).send({ msg: "para ai doido"})
    } // validação para saber se o ID está correto, se não, mandar um bad request
    const findUser = mockArray.find((user) => user.id === parsedId);
    if (!findUser) return res.sendStatus(404);
    return res.send(findUser);
})

app.get('/api/products', (req, res) => {
    res.send(mockProducts);
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)
});
