"use server";

import { NextResponse } from 'next/server';

const users = [
  { email: "admin@college.com", password: "123", role: "admin" },
  { email: "student@college.com", password: "student123", role: "student" },
  { email: "al@gmail.com", password: "al@gmail.com", role: "teacher" },
];

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({
      message: "Login successful",
      user: { email: user.email, role: user.role },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Login failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
