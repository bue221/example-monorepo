import Image from 'next/image';
import Logo from '../../components/appLogo/appLogo';
import DiscordButton from '../../components/discordButton/discordButton';
import ThemeSwitch from '../../components/themeSwitch/themeSwitch';

export default function ShareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-snow-100 dark:bg-graphite-900 sticky top-0 z-40 border-b border-graphite-100 h-12">
        <div className="flex mx-auto px-1 md:px-1 select-none p-1">
          <div className="items-center hidden md:block">
            <div className="cursor-pointer h-7 w-[120px] ml-3 mt-1 relative">
              <Logo />
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <div className="cursor-pointer w-8 lg:w-24 ml-3.5 mt-1 relative">
              <Image
                src="/logo-symbol-crayola-600.svg"
                className={``}
                alt="logo-mobile"
                fill
              />
            </div>
          </div>

          <div className="flex mr-2 justify-end absolute right-0 h-10 gap-2">
            <ThemeSwitch />
            <div className="flex mr-2">
              <DiscordButton />
            </div>

            <div className="flex mr-2">
              <a
                href="https://straico.com"
                target="_blank"
                rel="noreferrer"
                className="flex "
              >
                <button className="flex items-center justify-center px-1 rounded-md hover:bg-vanilla-100 text-graphite-100 text-sm border border-vanilla-200 dark:border-graphite-900 dark:hover:bg-graphite-600">
                  {/* <QuestionMarkCircleIcon className="w-5 h-5 mx-1 text-graphite-400 dark:text-snow-100" /> */}
                </button>
              </a>
            </div>
            <div
              //   onClick={openRegisterModal}
              className={`flex px-2 cursor-pointer bg-snow-800 hover:bg-vanilla-100 text-graphite-200 rounded-md transition items-center dark:border-graphite-900 dark:hover:bg-graphite-600 dark:bg-graphite-800`}
            >
              {/* <UserCircleIcon className="w-7 h-7 transition text-graphite-400 dark:text-snow-100" /> */}
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
