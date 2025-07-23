"use client"
import Link from "next/link";
import React, { useState } from "react";
import mlms from "../../../public/images/mlms.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For navigation after login

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);


        try {
            const res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const { error } = await res.json();
                setError(error || "Invalid email or password");
                return;
            }

            const data = await res.json();
            console.log("Logged in with API user:", data);

            localStorage.setItem("user", JSON.stringify(data));
            router.push("/dashboard");
        } catch (err) {
            console.error("Login error:", err);
            setError("An unexpected error occurred");
        }
    };


    return (
        <div className="flex w-full h-screen items-center justify-center bg-white border">
            {/* Image */}
            <div className="flex w-1/2 h-full">
                <Image src={mlms} alt="Description" className="h-full object-cover" />
            </div>

            {/* Right side of the screen (Form) */}
            <div className="w-1/2 h-auto max-w-lg mx-auto bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Insurance Products App</h2>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-600 text-sm mt-4">
                    Don’t have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign up</Link>
                </p>
                <p className="text-center text-gray-600 text-sm mt-4">
                    <Link href="/confirmpass" className="text-blue-600">Forgot Password?</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
