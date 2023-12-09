import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Newinsert from "./Newinsert";

const initialState = {
    message:null,
}

export default function createevent(){

    return(
        <div>

            <Header />
            <div className=" font-bold text-xl bg-gray-400 border rounded-md mt-8 ml-16 mr-14">
                <h1 className=" m-4 text-center">Create Your Event</h1>
            </div>
            
            <Newinsert/>

            <Footer/>
        </div>
    )
}