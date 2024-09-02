import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User } from "../store/userStore";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
    } = useForm();
    const { loginUser, isLoggedIn } = User((state) => state);
    const onSubmit = (data) => {
        if (!data.email && !data.password) return;
        loginUser(data);
    };
    useEffect(() => {
        if (isLoggedIn) navigate("/home");
    }, [isLoggedIn, navigate]);
    return (
        <div className="h-full bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Login to Your Account
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register("password")}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 rounded"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-purple-600">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
