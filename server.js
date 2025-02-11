const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/employees', {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const db = mongoose.connection;
app.use(bodyParser.json());
// Employee model
const Employee = mongoose.model('Employee', {
    name: String,
    age: Number,
    position: String
});



// Create an employee
app.post('/employees', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.send(employee);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get all employees
app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.send(employees);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get an employee by ID
app.get('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.send(employee);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Update an employee by ID
app.put('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(employee);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete an employee by ID
app.delete('/employees/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.send('Employee deleted successfully');
    } catch (err) {
        res.status(400).send(err);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

















































































//console.log('hello')
// const express = require('express')
// const mongoose = require('mongoose')
// const Product = require('./models/productModel')

// const app = express()
// //using express middleware


// //routes to access in browser
// app.get('/', (req,res) => {
//     res.send('hello node api')
// })

// app.get('/blog', (req,res) => {
//     //res.send('hello blog ')
//     res.send('hello blog , welcome to api program ')
// })


// // app.post('/product', (req,res) => {
// //     console.log(req.body);
// //     res.send(req.body)
// // })



// app.get('/products', async(req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//                 }
//             catch (error){
//                 res.status(500).json({message: error.message})
//             }
//         })



// // app.get('/products/:id', async(req, res) => {
// //             try {
// //                 const {id} = req.params;    
// //                 const product = await Product.findById(id);
// //                 res.status(200).json(product);
// //                         }
// //                     catch (error){
// //                         res.status(500).json({message: error.message})
// //                     }
// //                 })

// // app.post('/product', (req,res) => {
// //     console.log(req.body);
// //     res.send(req.body)
// // })

// // store the details into Mongodb

// app.post('/products', async(req, res) => {
//     try {
//         const product = await Product.create(req.body)
//         res.status(200).json(product);
//                 }
//             catch (error){
//                 console.log(error.message);
//                 res.status(500).json({message: error.message})
//             }
//         })

//         // update a product with ID
//         app.put('/products/:id', async(req, res) => {
//             try{
//                 const {id} = req.params;
//                 const product = await Product.findByIdAndUpdate(id, req.body);
//                //we cannot find any produt in database
//                 if(!product){
//                     return res.status(404).json({message: `cannot find any product with ID ${id}`})
//                      }
//                      const updatedProduct = await Product.findById(id);
//                     res.status(200).json(updatedProduct);
//                 }  catch(error){
//                         res.status(500).json({message: error.message})
//                      }
//             })
        
        
//         //delete a product
        
//         app.delete('/products/:id', async(req, res) => {
//         try{
//             const {id} = req.params;
//             const product = await Product.findByIdAndDelete(id);
//             if(!product){
//                 return res.status(404).json({message: `cannot find any product with ID ${id}`})
//             }
//             res.status(200).json(product);
//         }catch(error) { 
//             res.status(500).json({message: error.message})
//         }
//         })
        

// //connecting to mongodb (mongo atlas)
// mongoose.set('strictQuery', false)
// mongoose.connect('mongodb://dbuser:sadana@ac-0tfzqrx-shard-00-00.wxbygs3.mongodb.net:27017,ac-0tfzqrx-shard-00-01.wxbygs3.mongodb.net:27017,ac-0tfzqrx-shard-00-02.wxbygs3.mongodb.net:27017/sampldb?ssl=true&replicaSet=atlas-el9gbr-shard-0&authSource=admin&retryWrites=true&w=majority')
//                 //mongodb://dbuser:sadana@ac-0tfzqrx-shard-00-00.wxbygs3.mongodb.net:27017,ac-0tfzqrx-shard-00-01.wxbygs3.mongodb.net:27017,ac-0tfzqrx-shard-00-02.wxbygs3.mongodb.net:27017/sampledb?ssl=true&replicaSet=atlas-el9gbr-shard-0&authSource=admin&retryWrites=true&w=majority')
// .then(()=>
// {
//     console.log('connected sucess')
//     app.listen(5501, ()=> {
//         console.log('api running with port 5501')
//     })
    
    
// }).catch((error) => {
//     console.log(error)
// })

// //model to connect with mongodb 
// // app.post('/products', async(req, res) => {
// //     // console.log(res.body)
// //     // res.send(res.body)

// //     try {
// // const product = await Product.create(req.body)
// // res.status(200).json(product);

// // }
// //     catch (error){
// //         console.log(error.message);
// //         res.status(500).json({message: error.message})
// //     }
// // })

// // app.listen(5501, ()=> {
// //     console.log('api running with port 5501')


// app.listen(5501, ()=> {
//             console.log('api running with port 5501')
//         })





































