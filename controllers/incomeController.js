const prisma = require('../config/db.config');

exports.getIncomes=async (req,res)=>{

    const incomes=await prisma.incomes.findMany();


    return res.status(200).json({
        message:'expense',data:incomes
    })

}
exports.createIncome=async (req,res)=>{

    const incomes=await prisma.incomes.create({data:req.body});

    return res.json({
        message:'created successfully',data:incomes
    })
}