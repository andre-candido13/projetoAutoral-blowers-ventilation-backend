import { PrismaClient } from '@prisma/client';
import { timeStamp } from 'console';
import { date } from 'joi';

const prisma = new PrismaClient();

async function seed() {
    const currentDate = new Date();
  try {
    await prisma.users.create({
      data: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
        cpf: 123456789,
      },
    });

    console.log('Seed data created successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
