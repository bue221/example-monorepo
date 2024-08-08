'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function DiscordButton() {
  const { theme } = useTheme();

  const onClickDiscordButton = () => {};

  return (
    <>
      <button
        onClick={onClickDiscordButton}
        className="flex items-center justify-center px-1 rounded-md hover:bg-vanilla-100 text-graphite-100 text-sm border border-vanilla-200 dark:border-graphite-700 dark:hover:bg-graphite-600"
      >
        <div className="cursor-pointer w-4 h-4 mx-3 relative">
          <Image
            src={theme !== 'dark' ? '/discord/dark.svg' : '/discord/light.svg'}
            alt="discord-image"
            fill
          />
        </div>
      </button>
    </>
  );
}
