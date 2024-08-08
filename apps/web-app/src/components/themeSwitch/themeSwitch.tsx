'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  HiOutlineMoon as MoonIcon,
  HiOutlineSun as SunIcon,
} from 'react-icons/hi';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <button className="flex items-center justify-center rounded-md hover:bg-vanilla-100 text-sm border border-vanilla-200 dark:border-graphite-700 dark:hover:bg-graphite-600 px-3">
        <>...</>
      </button>
    );

  if (currentTheme === 'dark') {
    return (
      <button
        onClick={() => setTheme('light')}
        className="flex items-center justify-center rounded-md hover:bg-vanilla-100 text-sm border border-vanilla-200 dark:border-graphite-700 dark:hover:bg-graphite-600 px-3"
      >
        <SunIcon className="h-6 w-6" />
      </button>
    );
  }

  if (currentTheme === 'light') {
    return (
      <button
        onClick={() => setTheme('dark')}
        className="flex items-center justify-center rounded-md hover:bg-vanilla-100 text-sm border border-vanilla-200 dark:border-graphite-700 dark:hover:bg-graphite-600 px-3"
      >
        <MoonIcon className="h-6 w-6 text-gray-900" />
      </button>
    );
  }
}
