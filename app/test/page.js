import query from '@/lib/db'

const testdb = async () => {

    const result = await query("select * from upcoming",[])


  return (
    <div>
        <h2>testpage</h2>

        {JSON.stringify(result)}
    </div>
  )
}

export default testdb