import query from '@/lib/db'
import Link from 'next/link'

export default async function Upevent() {

    const result = await query("select * from upcoming LIMIT 2", [])

    console.log(result)
  return (

        <div>
      {result.reverse().map((upcoming) => (
        <div key={upcoming.id}>
            
          

          <Link href={`/booking/${upcoming.id}`}>
          <div className=' pb-2'> * {upcoming.event_name}</div>
              </Link>
        </div>
      ))}
    </div>
    
  )
}
