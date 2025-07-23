"use server";

import { NextResponse } from 'next/server';
import ConnectMysql from '../mysql';

export async function GET() {
  try {
    const connection = await ConnectMysql();
    const [rows] = await connection.promise().query('SELECT * FROM users');
    console.log(rows);

    return NextResponse.json({ data: rows });
  } catch (error) {
         // Narrow the error type to `Error` to access `error.message`
    if (error instanceof Error) {
        console.error('Error fetching users:', error.message);
        return NextResponse.json({ data: 'Failed to fetch data', error: error.message });
      } else {
        console.error('Unknown error:', error);
        return NextResponse.json({ data: 'Failed to fetch data', error: 'An unknown error occurred' });
      }
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, password } = body;

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const connection = await ConnectMysql();
    const query = `
      INSERT INTO users (firstName, lastName, email, password)
      VALUES (?, ?, ?, ?)
    `;

    await connection.promise().execute(query, [firstName, lastName, email, password]);
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error ) {
    if (error instanceof Error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: 'Failed to create user', details: error.message }, { status: 500 });
      } else {
        console.error('Unknown error:', error);
        return NextResponse.json({ data: 'Failed to create user', error: 'An unknown error occurred' });
      }
  
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, firstName, lastName, email, password } = body;

    if (!id) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const connection = await ConnectMysql();
    const query = `
      UPDATE users
      SET 
        firstName = COALESCE(?, firstName),
        lastName = COALESCE(?, lastName),
        email = COALESCE(?, email),
        password = COALESCE(?, password)
      WHERE id = ?
    `;

    const [result] = await connection.promise().execute(query, [
      firstName || null,
      lastName || null,
      email || null,
      password || null,
      id,
    ]);
    const { affectedRows } = result as any;
    if (affectedRows === 0) {
      return NextResponse.json({ error: 'User not found or no changes made' }, { status: 404 });
    }

    return NextResponse.json({ message: 'User updated successfully' });
  } catch (error) {
    if (error instanceof Error) {
        console.error('Error updating user:', error);
        return NextResponse.json({ error: 'Failed to update user', details: error.message }, { status: 500 });
      } else {
        console.error('Unknown error:', error);
        return NextResponse.json({ data: 'Failed to update user', error: 'An unknown error occurred' });
      }
    
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const connection = await ConnectMysql();
    const query = 'DELETE FROM users WHERE id = ?';


    const [result] = await connection.promise().execute(query, [id]);
    const { affectedRows } = result as any;
    if (affectedRows === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    if (error instanceof Error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ error: 'Failed to delete user', details: error.message }, { status: 500 });
      } else {
        console.error('Unknown error:', error);
        return NextResponse.json({ data: 'Failed to delete user', error: 'An unknown error occurred' });
      }
   
  }
}
