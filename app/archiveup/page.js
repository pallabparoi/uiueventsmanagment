import Footer from '@/components/footer/page';
import Header from '@/components/header/page';
import query from '@/lib/db';
import { writeFile } from 'fs/promises';

export default function archiveup() {
    async function formAction(data){
        'use server';
        const eName = data.get("eName");
        const eDes = data.get("eDes");
        const image = data.get("image");

        if(!image){
            throw new Error('No file uploded')
        }

        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)

        // const path = join('/','tmp', image.name)
        const path = `./public/archive/${image.name}`
        const path2 = `/archive/${image.name}`
        await writeFile(path,buffer)

        console.log (`open image linl ${path} `)

        const result = await query("INSERT INTO archive(event_name,image,description) VALUES (?,?,?)",[eName,path2,eDes]);

        console.log(result)

        
    }
  return (
    <div>

            <Header />
            <div className=" font-bold text-xl bg-gray-400 border rounded-md mt-8 ml-16 mr-14">
                <h1 className=" m-4 text-center">Upload For archieve</h1>
            </div>

            <form method="post" action={formAction}>
    <div className=" flex justify-center ml-20 mr-16 mt-8">
                <div className=" flex flex-col"> 
                     <label className=" mt-3 mb-12" htmlFor="">Event Name :</label>
                     <label className=" mb-8" htmlFor="">Image:</label>
                     <label htmlFor="">Description:</label>
                     
                </div>
                <div className="flex flex-col">
                <input className=" bg-upcom-2 border rounded-md p-4 mb-2" type="text" name="eName" id="eName" />
                <input className='bg-upcom-2 border rounded-md p-4 mb-2' type="file" name="image" id="image" />
                <input className=" h-32 bg-upcom-2 border rounded-md p-4" type="text" name="eDes" id="eDes"/>
                </div>
            </div>
            <div>
                {/* {state?.message?<h3>{state?.message}</h3>: null} */}
            </div>
            <div className=" text-center bg-blue-500 text-white font-bold p-4 border rounded-md max-w-fit mx-auto mt-6">
                <button className="px-5" type="submit" name="addUpcoming" id="addUpcoming" value="addUpcoming">
                    {/* {pending?"Submiting...":"Submit"}  */}
                    Submit</button>
            </div>
    
    </form>
            
            

            <Footer/>

    </div>
  )
}
