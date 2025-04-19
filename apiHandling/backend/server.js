import express from 'express';

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Server is working ")
})

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'table metal',
            price: 20,
            image: 'https://images.pexels.com/photos/2480481/pexels-photo-2480481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 2,
            name: 'table wooden',
            price: 80,
            image: 'https://images.pexels.com/photos/451589/pexels-photo-451589.jpeg'
        },
        {
            id: 3,
            name: 'table polyster',
            price: 100,
            image: 'https://images.pexels.com/photos/30021733/pexels-photo-30021733/free-photo-of-tropical-outdoor-cafe-setting-with-umbrella.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 4,
            name: 'table glass',
            price: 120,
            image: 'https://images.pexels.com/photos/30018818/pexels-photo-30018818/free-photo-of-elegant-holiday-champagne-with-festive-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 5,
            name: 'table marble',
            price: 140,
            image: 'https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg'
        }

    ]
    //simulating a delay in response of api

    // adding searching query params
    if (req.query.search) {
        const filterProduct = products.filter(product => product.name.includes(req.query.search));
        res.send(filterProduct);
        return; // IF we do not return here, then the below code will also run and send the products array (crashing the app)
    }

    setTimeout(() => {
        res.send(products);
    }, 3000)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})