import React from 'react'
import { Link } from 'react-router-dom'

const ErrorBoundary = () => {
    return (
        <>
            <div className="bg-gray-100 h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Something went wrong</h1>
                    <p className="text-gray-600 mb-6">Please Try again aftersome Time.</p>
                    <Link to="/" className="inline-block py-3 px-6 bg-blue-700 hover:bg-blue-700 text-white rounded-lg font-semibold">Retry</Link >
                </div>
            </div>
        </>
    )
}

export default ErrorBoundary