'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function AppLogo() {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === 'dark' ? '/logo/dark.svg' : '/logo/light.svg'}
      alt="logo"
      fill
    />
  );
}
