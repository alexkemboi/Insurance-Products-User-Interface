"use client";
import React, { useEffect, useState } from "react";
import TopCards from "../TopCards";
import Layout from "@/app/layouts";


// Table component
const ProductsTable = ({ data }: { data: InsuranceProduct[] }) => {
	if (data.length === 0) return null;

	return (
		<div className="overflow-x-auto mt-6 px-4">
			<table className="min-w-full border border-gray-300 text-sm text-left text-black bg-white rounded-lg shadow">
				<thead className="bg-gray-100 text-gray-700 font-semibold">
					<tr>
						{Object.keys(data[0]).map((key) => (
							<th key={key} className="px-4 py-2 border">
								{key}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index} className="hover:bg-gray-50 text-black">
							{Object.values(row).map((val, i) => (
								<td key={i} className="px-4 py-2 border">
									{String(val)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
type InsuranceProduct = {
	id: number;
	name: string;
	type: string;
	coverage: string;
	price: number;
};
const Dashboard = () => {

	const [products, setProducts] = useState<InsuranceProduct[]>([]);
	const [loading, setLoading] = useState(true);



	useEffect(() => {
		const fetchproducts = async () => {
			try {
				// Simulate an actual API call
				const response = await fetch("https://insurance-products-user-int-git-1c3b24-alexkemboi4127s-projects.vercel.app/api/products");
				const data = await response.json();

				if (Array.isArray(data.data)) {
					setProducts(data.data);
				}
			} catch (error) {
				console.error("Failed to fetch products", error);
			} finally {
				setLoading(false);
			}
		};

		fetchproducts();
	}, []);

	return (
		<Layout>
			<div className="m-5 bg-transparent">
				<div className="flex flex-col w-full">
					<div className="bg-transparent px-4">
						<div className="mixed-chart">
							<TopCards />
						</div>
						<div className="w-full">
							{loading ? (
								<p className="mt-4 text-sm text-gray-600">Loading products...</p>
							) : products.length > 0 ? (
								<ProductsTable data={products} />
							) : (
								<p className="mt-4 text-sm text-gray-600">No products found.</p>
							)}
						</div>

					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Dashboard;
