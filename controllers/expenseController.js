const prisma = require('../config/db.config');

exports.getExpenses=async (req,res)=>{

    const expenses=await prisma.expenses.findMany();


    return res.status(200).json({
        message:'expense',data:expenses
    })

}
exports.createExpense=async (req,res)=>{

    const expenses=await prisma.expenses.create({data:req.body});

    return res.json({
        message:'created successfully',data:expenses
    })
}
exports.updateExpense=async (req,res)=>{
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
        const updateExpense = await prisma.expenses.update({ where: { id: Number(expenseId) }, data: req.body });

        return res.json({message:'updated successfully',updateExpense})
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.deleteExpense=async (req,res)=>{
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
        const deletedExpense = await prisma.expenses.delete({ where: { id: Number(expenseId) }});
        const expenses=await prisma.expenses.findMany();
       
        return res.json({message:'deleted successfully',expenses})
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.getExpenseById=async (req,res)=>{
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
}