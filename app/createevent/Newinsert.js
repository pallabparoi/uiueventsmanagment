"use client";
import { useFormState, useFormStatus } from "react-dom";
import insert from './insert';

const initialState = {
    message :null,
}


const Newinsert = () => {

    const {pending} = useFormStatus();
    const [state,formAction] = useFormState(insert,initialState);
  return (

    <div>

    <form method="post" action={formAction}>
    <div className=" flex justify-center ml-20 mr-16 mt-8">
                <div className=" flex flex-col"> 
                     <label className=" mt-3 mb-12" htmlFor="">Event Name :</label>
                     <label className=" mb-8" htmlFor="">Date:</label>
                     <label className=" mb-20" htmlFor="">Time:</label>
                     <label htmlFor="">Description:</label>
                     
                </div>
                <div className="flex flex-col">
                <input className=" bg-upcom-2 border rounded-md p-4 mb-2" type="text" name="eName" id="eName" />
                <input className="bg-upcom-2 border rounded-md p-4 mb-2" type="date" name="eDate" id="eDate" />
                <input className="bg-upcom-2 border rounded-md p-4 mb-2" type="time" name="eTime" id="eTime" />
                <input className=" h-32 bg-upcom-2 border rounded-md p-4" type="text" name="eDes" id="eDes"/>
                </div>
            </div>
            <div>
                {state?.message?<h3 className=" mx-auto border-orange-500">{state?.message}</h3>: null}
            </div>
            <div className=" text-center bg-blue-500 text-white font-bold p-4 border rounded-md max-w-fit mx-auto mt-6">
                <button className="px-5" type="submit" name="addUpcoming" id="addUpcoming" value="addUpcoming">
                    {pending?"Submiting...":"Submit"}</button>
            </div>
    
    </form>

    </div>

  )
}

export default Newinsert