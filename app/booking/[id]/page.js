import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import query from "@/lib/db";
export default async function booking({params}){

    const eventid=params.id;

    const result = await query("select * from upcoming where id=?",[eventid]);

    console.log(result)

        const event = result[0];

    return(
        <div>
            <Header />
            <div className=" font-bold text-xl bg-gray-400 border rounded-md mt-8 ml-28 mr-14">
                <h1 className=" m-4 text-center">Event Booking</h1>
            </div>

            <div className=" ml-32 mr-16 mt-16">
                <h1 className=" text-left text-2xl mb-6"> {event.event_name} :</h1>

                <p className=" mb-5 text-lg">{event.description}</p>

                    <p>Date : {JSON.stringify(event.date.getDate())}-{JSON.stringify(event.date.getMonth())}-{JSON.stringify(event.date.getFullYear())}</p>
                    <p>Time : {event.time}</p>

                    <div className=" text-center bg-blue-500 text-white font-bold p-4 border rounded-md max-w-fit mx-auto mt-6">
                <input type="button" value="Book Event" />
            </div>
            </div>

            <Footer />


        </div>
    )
}