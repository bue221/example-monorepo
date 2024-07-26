import type { Metadata } from "next";
import { PropsShareChat } from "./types";

async function getData(id: string) {
  const res = await fetch(`https://platform.straico.com/api/shareChats/${id}`);
  if (!res.ok) {
    console.error("Failed to fetch data", res);
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
      description: "Generated with Next.js",
      images: [
        {
          url: "https://straico.com/wp-content/uploads/2023/06/StraicoBot_4x-2048x1365.png",
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
    <div>
      <header>
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-600">
          <h1 className="text-3xl text-orange-500 font-bold">Straico</h1>
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-500">
              The better Place for IA&apos;s
            </p>
          </div>
        </div>
      </header>
      <div className="px-4 py-2 border-b border-gray-600">
        <h1 className="text-xl text-fuchsia-950">
          <strong>Shared chat • Models: </strong> {data.modelList.join(", ")}
        </h1>
      </div>
    </div>
  );
}
