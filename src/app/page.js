'use client'
// pages/index.js
import { useState } from 'react';

export default function Page() {
  // State to manage dynamic content
  const [isTailwindApplied, setTailwindApplied] = useState(false);

  // Function to apply Tailwind CSS on button click
  const applyTailwind = () => {
    setTailwindApplied(true);
  };

  // Dynamic content based on the button click
  const dynamicContent = isTailwindApplied ? (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.
          </h1>
          <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
            Button
          </button>
        </div>
      </div>
    </section>
  ) : null;

  return (
    <div>
      <h1>Next.js Dynamic Content Example</h1>
      {/* Render the dynamic content */}
      {dynamicContent}
      <button onClick={applyTailwind}>Apply Tailwind CSS</button>
    </div>
  );
};


