import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const counter = await prisma.counter.findFirst();
  if (counter) {
    return NextResponse.json({ count: counter.count });
  } else {
    return NextResponse.json({ count: 0 });
  }
}

export async function POST() {
  const counter = await prisma.counter.findFirst();
  if (counter) {
    const updatedCounter = await prisma.counter.update({
      where: { id: counter.id },
      data: { count: counter.count + 1 },
    });
    return NextResponse.json({ count: updatedCounter.count });
  } else {
    const newCounter = await prisma.counter.create({
      data: { count: 1 },
    });
    return NextResponse.json({ count: newCounter.count });
  }
}
