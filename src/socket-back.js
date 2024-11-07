import io from "./servidor.js";

io.on("connection", (socket) =>{
    console.log("Cliente conectado! ID: ", socket.id);

    socket.on("texto_editor", (texto) =>{
        socket.broadcast.emit("texto_editor_clientes", texto);
    });
});