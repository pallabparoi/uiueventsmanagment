import Footer from "@/components/footer/page"
import Header from "@/components/header/page"
import Link from "next/link"
export default function upcoming(){
return(

    <div>
        <Header />
        <div className=" font-bold text-xl bg-gray-400 border rounded-md mt-8 ml-16 mr-14">
                <h1 className=" m-4 text-center">Upcoming Events</h1>
            </div>

            <div className=" text-center bg-blue-500 text-white font-bold p-4 border rounded-md max-w-fit mx-auto mt-6">
                <Link href="/createevent">Create New Event</Link>
            </div>


            <div className="mt-8 ml-20 mr-16">

                <div className="flex bg-upcom-1 border rounded-md px-4 py-8 mb-6">
                    <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo iste dolorum possimus impedit, eveniet at
  lai animi saepe repellat aperiam autem  ipsum dolor sit amet consectetur adipisicing elit.Nemo iste desoto <Link className=" ml-3 text-blue-500 font-bold" href="/booking"> read more...</Link></p>
                    </div>
                    <div className=" ml-16">
                        <input className=" p-3 bg-blue-500 border rounded-md text-white text-bold" type="button" value="Book Your Seat" />
                    </div>
                </div>

                <div className="flex bg-upcom-2 border rounded-md px-4 py-8 mb-6">
                    <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo iste dolorum possimus impedit, eveniet at
  lai animi saepe repellat aperiam autem  ipsum dolor sit amet consectetur adipisicing elit.Nemo iste desoto <Link className=" ml-3 text-blue-500 font-bold" href="/booking"> read more...</Link></p>
                    </div>
                    <div className=" ml-16">
                        <input className=" p-3 bg-blue-500 border rounded-md text-white text-bold" type="button" value="Book Your Seat" />
                    </div>
                </div>

                <div className="flex bg-upcom-1 border rounded-md px-4 py-8 mb-6">
                    <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo iste dolorum possimus impedit, eveniet at
  lai animi saepe repellat aperiam autem  ipsum dolor sit amet consectetur adipisicing elit.Nemo iste desoto <Link className=" ml-3 text-blue-500 font-bold" href="/"> read more...</Link></p>
                    </div>
                    <div className=" ml-16">
                        <input className=" p-3 bg-blue-500 border rounded-md text-white text-bold" type="button" value="Book Your Seat" />
                    </div>
                </div>

                <div className="flex bg-upcom-2 border rounded-md px-4 py-8 mb-6">
                    <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo iste dolorum possimus impedit, eveniet at
  lai animi saepe repellat aperiam autem  ipsum dolor sit amet consectetur adipisicing elit.Nemo iste desoto <Link className=" ml-3 text-blue-500 font-bold" href="/"> read more...</Link></p>
                    </div>
                    <div className=" ml-16">
                        <input className=" p-3 bg-blue-500 border rounded-md text-white text-bold" type="button" value="Book Your Seat" />
                    </div>
                </div>

                <div className="flex bg-upcom-1 border rounded-md px-4 py-8 mb-6">
                    <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo iste dolorum possimus impedit, eveniet at
  lai animi saepe repellat aperiam autem  ipsum dolor sit amet consectetur adipisicing elit.Nemo iste desoto <Link className=" ml-3 text-blue-500 font-bold" href="/"> read more...</Link></p>
                    </div>
                    <div className=" ml-16">
                        <input className=" p-3 bg-blue-500 border rounded-md text-white text-bold" type="button" value="Book Your Seat" />
                    </div>
                </div>

                <div className="flex bg-upcom-2 border rounded-md px-4 py-8 mb-6">
                    <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo iste dolorum possimus impedit, eveniet at
  lai animi saepe repellat aperiam autem  ipsum dolor sit amet consectetur adipisicing elit.Nemo iste desoto <Link className=" ml-3 text-blue-500 font-bold" href="/"> read more...</Link></p>
                    </div>
                    <div className=" ml-16">
                        <input className=" p-3 bg-blue-500 border rounded-md text-white text-bold" type="button" value="Book Your Seat" />
                    </div>
                </div>

            </div>

<Footer />
    </div>

)
}