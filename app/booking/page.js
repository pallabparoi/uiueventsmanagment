import Footer from "@/components/footer/page"
import Header from "@/components/header/page"
export default function booking(){
    return(
        <div>
            <Header />
            <div className=" font-bold text-xl bg-gray-400 border rounded-md mt-8 ml-28 mr-14">
                <h1 className=" m-4 text-center">Event Booking</h1>
            </div>

            <div className=" ml-32 mr-16 mt-16">
                <h1 className=" text-left text-2xl mb-6">Lorem ipsum dolor sit Event :</h1>

                <p className=" mb-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste dolorum possimus impedit, 
                    eveniet at tenetur ratione, odio dignissimos soluta laudantium id deleniti animi saepe repellat aperiam autem cum aut.
                    met consectetur adipisicing elit. Nemo iste dolorum possimus impedit, 
                    eveniet at tenetur ratione, odio dignissimos soluta laudantium id deleniti animi saepe rep</p>

                    <p>Date : 00/00/0000</p>
                    <p>Time : 00:00 PM</p>

                    <div className=" text-center bg-blue-500 text-white font-bold p-4 border rounded-md max-w-fit mx-auto mt-6">
                <input type="button" value="Create New Event" />
            </div>
            </div>

            <Footer />


        </div>
    )
}