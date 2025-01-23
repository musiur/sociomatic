"use client"

import Link from "next/link";
import { T__Gig } from "../types/gigs-data-types";

export default function GigCard({ gig }: { gig: T__Gig }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={gig.image}
        alt={gig.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{gig.title}</h2>
        <p className="text-gray-600 mb-4">{gig.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${gig.price}</span>
          <div className="space-x-2">
            <Link
              href={gig.fiverrLink}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Buy on Fiverr
            </Link>
            <button
              onClick={() => handleStripePurchase(gig.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Buy with Stripe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

async function handleStripePurchase(gigId: number) {
  try {
    const response = await fetch("/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gigId }),
    });

    const { url } = await response.json();
    window.location.href = url;
  } catch (error) {
    console.error("Error:", error);
  }
}
