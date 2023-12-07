import query from '@/lib/db'
import Link from 'next/link'

const Updata = async () => {

    const result = await query("select * from upcoming",[])


  return (
    <div className="mt-8 ml-20 mr-16">

        {result.map((upcoming=>(
            

                <div className="flex bg-upcom-1 border rounded-md px-4 py-8 mb-6" key={upcoming.id}>
                    <div className="">
                        <p> {upcoming.description} <Link className=" ml-3 text-blue-500 font-bold" href="/booking"> read more...</Link></p>
                    </div>
                    <div className=" ml-16">
                        <input className=" p-3 bg-blue-500 border rounded-md text-white text-bold" type="button" value="Book Your Seat" />
                    </div>
                </div>

        )))}

            </div>
  )
}

export default Updata