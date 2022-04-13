import React from 'react';

const Login = () => {
    return (
        <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-ehe-100">
            <div className="max-w-md w-full space-y-8">
                <div>
                    {/* <img className="mx-auto h-12 w-auto" src="" alt="logo" /> */}
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-poppins">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-8 ">
                    <input type="hidden" name="remember" defaultValue="true"/>
                    <div className="rounded-md shadow-sm flex flex-col gap-3">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className={`appearance-none  relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm `}
                                placeholder="Email"

                            />
                        </div>

                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Password
                            </label>
                            <input
                                name="Password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className={`appearance-none  relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm `}
                                placeholder="Password"

                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">

                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                        >

                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;