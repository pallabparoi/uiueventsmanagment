import Footer from "@/components/footer/page"
import Header from "@/components/header/page"
import Link from "next/link"
import Updata from "./Updata"
export default async function upcoming(){


    
return(

    

    <div>
        <Header />
        <div className=" font-bold text-xl bg-gray-400 border rounded-md mt-8 ml-16 mr-14">
                <h1 className=" m-4 text-center">Upcoming Events</h1>
            </div>

            <div className=" text-center bg-blue-500 text-white font-bold p-4 border rounded-md max-w-fit mx-auto mt-6">
                <Link href="/createevent">Create New Event</Link>
            </div>

            <Updata/>


<Footer />
    </div>

)
}