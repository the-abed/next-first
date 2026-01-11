"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-4">
      <div className="relative">
        <h1 className="text-9xl font-black text-base-200 select-none">404</h1>
      </div>

      <div className="mt-8 space-y-3">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Page Not Found
        </h2>
        <p className="text-base-content/70 max-w-md mx-auto">
          We can&apos;t seem to find the page you&apos;re looking for. It might have been moved or deleted.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="btn btn-primary btn-wide rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105"
        >
          Return Home
        </Link>
        <button 
          onClick={() => router.back()} 
          className="btn btn-outline btn-wide rounded-full"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}