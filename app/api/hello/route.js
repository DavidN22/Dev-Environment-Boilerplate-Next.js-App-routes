import { NextResponse } from 'next/server';
export async function GET(res) {
  return NextResponse.json({ message: 'Hello from the server!' });
}
