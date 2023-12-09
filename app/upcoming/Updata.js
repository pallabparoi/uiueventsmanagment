import query from '@/lib/db';
import Link from 'next/link';


const truncateDescription = (description, maxWords) => {
  const words = description.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return description;
};

const Updata = async () => {
  const result = await query("select * from upcoming", [])

  return (
    <div className="mt-8 ml-20 mr-16">
      {result.reverse().map((upcoming) => (
        <div className="bg-upcom-1 border rounded-md px-4 py-8 mb-6" key={upcoming.id}>
          <div className="flex">
            <div className="flex-grow"> {/* Added flex-grow to take available space */}
              <h3 className=" text-2xl">Event Name : {upcoming.event_name}</h3>
              <p>{truncateDescription(upcoming.description, 40)}</p>
            </div>
            <div className=" text-center bg-blue-500 text-white font-bold p-4 border rounded-md h-14 w-64">
              <div className=''>
              <Link href={`/booking/${upcoming.id}`}>
                <h1 className='' >See Details</h1>
              </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Updata
