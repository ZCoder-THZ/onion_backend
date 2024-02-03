const prisma = require('../config/db.config');

exports.getIncomes = async (req, res) => {

    const userId = req.userId;

    const incomes = await prisma.incomes.findMany({
        where: {
            user_id: userId // Assuming the field in the incomes table representing the user ID is named "userId"
        }
    });

    return res.status(200).json({
        message: 'expense', data: incomes
    })

}
exports.createIncome = async (req, res) => {
    try {
        const userId = req.userId;

        // Add userId to the income data
        const incomeData = { ...req.body, user_id: userId };

        // Create income using Prisma
        const income = await prisma.incomes.create({ data: incomeData });

        // Respond with success message and created data
        return res.json({ message: 'Income created successfully', data: income });
    } catch (error) {
        // Handle errors
        console.error('Error creating income:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
