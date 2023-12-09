import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import query from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function archive() {
  const result = await query("select * from archive", []);

  return (
    <div className="">
      <Header />

      <div className="font-bold text-xl bg-gray-400 border rounded-md mt-8 ml-28 mr-14">
        <h1 className="m-4 text-center">Events Archive</h1>
      </div>

      <div className="text-center bg-blue-500 text-white font-bold p-4 border rounded-md max-w-fit mx-auto mt-6">
        <Link href="/archiveup">Create Event Archive</Link>
      </div>

      <div>
        <div className="grid grid-cols-4 grid-flow-row mt-6 ml-28 mr-10 mb-12">
          {result.reverse().map((archive) => (
            <div key={archive.id} className="flex flex-col mb-8">
              <div className="flex h-60">
                <Image
                  src={`${archive.image}`}
                  width={280}
                  height={120}
                  alt="demoImg"
                />
              </div>

              <div className="flex flex-col bg-gray-200 border rounded-md mt-2 h-16 max-h-16 min-h-max">
                <p className="flex-grow p-2">{archive.event_name}</p>
                <div className="flex items-center justify-center bg-blue-500 border rounded-b-md h-12">
                  <Link href={`/archiveshow/${archive.id}`}>
                    <h3 className="text-white">See Details</h3>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}