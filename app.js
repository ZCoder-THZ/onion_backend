const express=require('express');
const prisma = require('./config/db.config');
const bodyParser=require('body-parser')
const cors=require('cors')
require('dotenv/config');

const router=require('./routes/router')

const app=express();
const port=process.env.PORT || 4001;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);





app.get('/expenses/:id',async (req,res)=>{
    const expenseId=req.params.id;

    try {
        const expense = await prisma.expenses.findUnique({
            where: {
              id: parseInt(expenseId) // Assuming ID is an integer; adjust if it's a different type
            }
          });
          if(!expense){
            return res.status(400).json({
                message:`can't find by Id`
            })
         }
          

          return res.json({message:'retrived successfully',expense})
        
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
})


app.listen(port,console.log(`app running on port ${port}`))