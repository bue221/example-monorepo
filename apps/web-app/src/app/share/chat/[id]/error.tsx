'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="h-[100vh] w-full dark:bg-graphite-900 flex justify-center items-center px-4">
      <div className="text-center gap-4 flex flex-col">
        <h1 className="text-eggplant-600 dark:text-flax-600 text-3xl font-barlow font-bold">
          Oops, Trouble Accessing Shared Content!
        </h1>
        <p className="text-eggplant-600 dark:text-flax-600 text-xl font-barlow max-w-[700px]">
          This shared tool seems to be currently unavailable. For the best
          experience, we recommend reaching out to the original creator to
          request a new share link.
        </p>
        <button
          onClick={reset}
          className="bg-crayola-500 text-white font-barlow font-bold text-lg py-2 px-4 rounded-lg mt-4"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
