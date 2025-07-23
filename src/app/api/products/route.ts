"use server";

import { NextResponse } from 'next/server';

type InsuranceProduct = {
  id: number;
  name: string;
  type: string;
  coverage: string;
  price: number;
};

// Mock data
const products: InsuranceProduct[] = [
  { id: 1, name: 'Health Protect Plus', type: 'Health', coverage: 'Full', price: 120 },
  { id: 2, name: 'Auto Secure', type: 'Auto', coverage: 'Collision + Liability', price: 90 },
  { id: 3, name: 'Home Shield', type: 'Home', coverage: 'Fire, Theft, Natural Disasters', price: 150 },
];

// GET all products
export async function GET() {
  console.log(products)
  return NextResponse.json({ data: products });
}

// POST a new product
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, type, coverage, price } = body;

    if (!name || !type || !coverage || typeof price !== 'number') {
      return NextResponse.json({ error: 'All fields (name, type, coverage, price) are required' }, { status: 400 });
    }

    const newProduct: InsuranceProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name,
      type,
      coverage,
      price,
    };

    products.push(newProduct);
    return NextResponse.json({ message: 'Product added successfully', product: newProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add product', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

// PUT update an existing product
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, name, type, coverage, price } = body;

    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    products[index] = {
      ...products[index],
      name: name ?? products[index].name,
      type: type ?? products[index].type,
      coverage: coverage ?? products[index].coverage,
      price: typeof price === 'number' ? price : products[index].price,
    };

    return NextResponse.json({ message: 'Product updated successfully', product: products[index] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

// DELETE a product
export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = Number(url.searchParams.get('id'));

    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const deleted = products.splice(index, 1);
    return NextResponse.json({ message: 'Product deleted successfully', product: deleted[0] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete product', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
