export default function SubHeader({
  title,
  description,
  icon,
}: Readonly<{
  description?: string;
  title: string;
  icon: React.ReactNode;
}>) {
  return (
    <div className="bg-snow-300 dark:bg-graphite-800 pt-1 pb-1 border-b border-graphite-100 relative">
      <div className="container px-4 flex items-center">
        <div className="flex justify-center items-center gap-2">
          <div className="">{icon}</div>
          <div>
            <div className="flex">
              <h2 className="font-lexend font-bold text-lg flex align-center uppercase text-eggplant-700 dark:text-flax-700">
                {title}
              </h2>
            </div>
            {description && (
              <p
                className={`text-base dark:text-white text-graphite-400 font-barlow md:text-md lg:text-lg mt-1 lg:mx-0`}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
