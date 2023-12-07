import mysql from 'mysql2/promise';

const query = async (query,value) => {

    try{
        const db = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWOARD,
            database: process.env.MYSQL_DATABASE,
         })
         const [result]=await db.execute(query,value) 
         await db.end()      
         console.log(result);
         return result;
    }
    catch(error){
        console.log(error)
        return error
    }
  
}

export default query