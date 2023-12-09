"use server";

import query from "@/lib/db";
import { revalidatePath } from "next/cache";

const insert = async (_prevState,formData) => {

  const eName = formData.get("eName");
  const eDate = formData.get("eDate");
  const eTime = formData.get("eTime");
  const eDes = formData.get("eDes");

  if(eName!="" && eDate!="" && eDes!=""){
    const result = await query("INSERT INTO upcoming(event_name,date,time,description) VALUES (?,?,?,?)",[eName,eDate,eTime,eDes]);

    if(result.affectedRows){
      revalidatePath("/createevent")
    return {message: "Submitted"}
    }
    else{
      revalidatePath("/createevent")
    return {message: "Insert Eror"}
    }
    
  }
  else {
    revalidatePath("/createevent")
    return {message: "Field Can't be Empty"}
  }
}
 
export default insert