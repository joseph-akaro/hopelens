"use client"

import Link from "next/link"
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white to-gray-50 px-6">
      <div className="text-center max-w-md">

        {/* Icon / Illustration */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-3xl font-bold shadow-sm">
           <img src="/logo.png" alt="HopeLens" className="h-16" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Page not found
        </h1>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          Sorry, the page you're looking for doesn’t exist or has been moved.
          Let’s get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          >
            <Home size={16} />
            Go to Dashboard
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        {/* Extra Hint */}
        <p className="text-xs text-gray-400 mt-8">
          If you believe this is an error, please contact your administrator.
        </p>
      </div>
    </div>
  )
}