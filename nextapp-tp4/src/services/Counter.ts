import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getCounter() {
  let counter = await prisma.counter.findFirst();
  if (!counter) {
    counter = await prisma.counter.create({
      data: {
        value: 0,
      },
    });
  }
  return counter;
}

export const incrementCounter = async (): Promise<{ value: number }> => {
  const counter = await getCounter();

  const updatedCounter = await prisma.counter.update({
    where: { id: counter.id },
    data: { value: { increment: 1 } },
  });

  return { value: updatedCounter.value };
};


