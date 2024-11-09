import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();

const cliente = new MongoClient(process.env.DB_CONNECTION_STRING);

let documentosColecao;

try{
    await cliente.connect();

    const db = cliente.db("alura_websockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado ao banco de dados!");
    

}catch(erro){
    console.log(erro);   
}

export { documentosColecao };