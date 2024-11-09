import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://alura:123@aluracluster.ft4lk.mongodb.net/?retryWrites=true&w=majority&appName=AluraCluster");

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