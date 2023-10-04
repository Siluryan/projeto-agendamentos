require('dotenv').config()

const Client = require('pg').Client
const client = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: "127.0.0.1",
    port: "5432"
})

connectToDatabase()

async function connectToDatabase(){
    try{
        console.log('Iniciando a conexão com o servidor de banco de dados')
        await client.connect()
        console.log('Conexão bem sucedida')
    }
    catch(e){
        console.log('Ocorreu um erro na tentativa de conexão com o servidor de banco de dados: '+ e)
    }
}
