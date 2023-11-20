import Footer from "@/components/footer/page"
import Header from "@/components/header/page"
export default function createevent(){
    return(
        <div>

            <Header />
            <div className=" font-bold text-xl bg-gray-400 border rounded-md mt-8 ml-16 mr-14">
                <h1 className=" m-4 text-center">Create Your Event</h1>
            </div>

            <div className=" flex justify-center ml-20 mr-16 mt-8">
                <div className=" flex flex-col"> 
                     <label className=" mt-3 mb-12" htmlFor="">Event Name :</label>
                     <label className=" mb-8" htmlFor="">Date:</label>
                     <label className=" mb-20" htmlFor="">Time:</label>
                     <label htmlFor="">Description:</label>
                     
                </div>
                <div className="flex flex-col">
                <input className=" bg-upcom-2 border rounded-md p-4 mb-2" type="text" />
                <input className="bg-upcom-2 border rounded-md p-4 mb-2" type="date" name="" id="" />
                <input className="bg-upcom-2 border rounded-md p-4 mb-2" type="time" name="" id="" />
                    <input className=" h-32 bg-upcom-2 border rounded-md p-4" type="text" />
                </div>
            </div>
            <div className=" text-center bg-blue-500 text-white font-bold p-4 border rounded-md max-w-fit mx-auto mt-6">
                <input className="px-5" type="button" value="Submit" />
            </div>
            <Footer/>
        </div>
    )
}