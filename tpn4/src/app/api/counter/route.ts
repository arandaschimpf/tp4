import { connect } from '../../libs/mongo';
import Counter from '@/app/models/counter';
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(request: NextRequest) {
  try {
    const {newCount: count} = await request.json();
    await connect();
    const updateCounter = await Counter.findOneAndUpdate({}, { $set: {count} }, { new: true, upsert: true });
    if (updateCounter) {
      return NextResponse.json({ message: "Counter updated", count: updateCounter.count}, { status: 200 });
    } else {
      return NextResponse.json({ message: "Counter not found" }, { status: 404 });
    }
  } catch (error) {
    console.error('Error in PUT /api/counter', error);
    return NextResponse.error();
  }
}

export async function POST(request: NextRequest) {
  await connect();
  const existingCounter = await Counter.findOne();
  if (existingCounter) {
    return NextResponse.json({ message: "Counter already exists", count: existingCounter.count}, { status: 400 }); 
  }
  const counter = new Counter ({count: 0});
  await counter.save();
  return NextResponse.json({ message: "Counter created", count: 0}, { status: 200 }); 
}

export async function GET(request: NextRequest) {
  await connect();
  const counter = await Counter.findOne();
  return NextResponse.json({ count: counter ? counter.count: 0},{ status: 200 }); 
}