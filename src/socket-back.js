import io from "./servidor.js";

const documentos = [
    {
        nome: "JavaScript",
        texto: "texto de javascrit..."
    },
    {
        nome: "Node",
        texto: "texto de node..."
    },
    {
        nome: "Socket.io",
        texto: "texto de socket.io..."
    },
];

io.on("connection", (socket) =>{
    console.log("Cliente conectado! ID: ", socket.id);

    socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento);
        const documento = encontrarDocumento(nomeDocumento);

        if (documento){
            devolverTexto(documento.texto);

        }
        
    });

    socket.on("texto_editor", ({texto, nomeDocumento}) =>{
        const documento = encontrarDocumento(nomeDocumento);
        if(documento){
            documento.texto = texto;
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
        }     
    });
});

function encontrarDocumento(nome) {
    const documento = documentos.find(()=> {
        return document.nome === nome;
    });

    return documento
}