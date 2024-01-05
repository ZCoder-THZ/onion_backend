// seed.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedData = Array.from({ length: 10 }, (_, index) => ({
    title: `Expense ${index + 1}`,
    color: '#333333',
    amount: 4000,
  }));

async function seed() {
  for (const data of seedData) {
    await prisma.expenses.create({ data });
  }
}

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
