import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import query from "@/lib/db";
import Image from "next/image";
export default async function booking({params}){

    const eventid=params.id;

    const result = await query("select * from archive where id=?",[eventid]);

    console.log(result)

        const event = result[0];

    return(
        <div>
            <Header />
            <div className=" font-bold text-xl bg-gray-400 border rounded-md mt-8 ml-28 mr-14">
                <h1 className=" m-4 text-center">Event Booking</h1>
            </div>

            <div className=" flex flex-col items-center  ml-32 mr-16 mt-16">
                <h1 className="text-left text-2xl mb-6"> {event.event_name}</h1>

                <div>
                <Image
                  src={`${event.image}`}
                  width={280}
                  height={120}
                  alt="demoImg"
                />
                </div>

                <p className=" mb-5 text-lg">{event.description}</p>

                

            </div>

            <Footer />


        </div>
    )
}