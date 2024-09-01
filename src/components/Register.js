import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User } from "../store/userStore";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
    } = useForm();
    const { createUser } = User((state) => state);
    const onSubmit = (data) => {
        console.log(data);
        if (!data.email && !data.name && !data.password) return;
        if (createUser(data)) {
            navigate("/login");
        }
    };
    return (
        <div className="h-full bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Create a New Account
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="name"
                            {...register("name")}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
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
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-purple-600">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
