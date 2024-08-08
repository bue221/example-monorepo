import type { Metadata } from 'next';
import { IoIosBookmarks } from 'react-icons/io';
import SubHeader from '../../../../components/subHeader/subHeader';
import { PropsShareChat } from './types';

async function getData(id: string) {
  const res = await fetch(`https://platform.straico.com/api/shareChats/${id}`);
  if (!res.ok) {
    console.error('Failed to fetch data', res);
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: PropsShareChat): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const chat = await getData(id);

  return {
    title: chat.title,
    openGraph: {
      title: chat.title,
      description: 'Generated with Next.js',
      images: [
        {
          url: 'https://straico.com/wp-content/uploads/2023/06/StraicoBot_4x-2048x1365.png',
          width: 800,
          height: 600,
          alt: chat.title,
        },
      ],
    },
  };
}

export default async function ShareChat({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getData(id);
  console.log(data);
  return (
    <>
      <SubHeader
        title={`Shared template • ${data.title}`}
        icon={
          <IoIosBookmarks className="text-eggplant-900 dark:text-flax-900" />
        }
      />
      <div className="relative h-[84.5dvh] md:h-[90.5dvh] flex flex-col">
        <div className="flex h-[100%] md:h-[100%]">
          <div
            className="flex flex-col w-[100%] md:w-[100%] h-[100%] md:h-[100%] relative justify-center items-cente"
            // className={`flex flex-col h-full w-[${
            //   showPromptSidebar ? (isMobile ? 100 : 70) : 100
            // }%] relative justify-center items-center`}
          >
            <div
              className={
                'flex max-w-[600px] mx-auto p-4  border rounded-sm bg-[#F6F7F5] border-eggplant-900 dark:bg-[#141114] dark:border-white'
              }
            >
              {/* <TemplateModalShare /> */}
            </div>
          </div>
          {/* {!showPromptSidebar && (
            <div
              className="z-10 fixed top-[40px] md:top-20 right-0 flex flex-col "
              onClick={togglePromptSidebar}
            >
              <div className="mr-2.5 mt-3 mb-2 px-2 py-2 transition rounded-md transform text-white cursor-pointer bg-flax-700">
                <div className="flex">
                  <div className="flex items-center justify-center m-auto">
                    <ToolSvg className="h-6 w-6 cursor-pointer text-eggplant-700" />
                  </div>
                </div>
              </div>
            </div>
          )} */}
          <div
            className="flex flex-col md:w-[30%]"
            // className={`${
            //   showPromptSidebar ? 'flex' : 'hidden'
            // } flex-col md:w-[${showPromptSidebar ? 30 : 0}%]`}
          >
            <div className="flex flex-col h-full bg-[#F0F1EE] dark:bg-transparent ">
              <div className="h-full">.</div>
              {/* <PromptSide /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
