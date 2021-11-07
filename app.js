const express = require("express")
let app = express()
const PORT = 3001
let path = require("path")


app.use(express.static("public"))


// RUTAS
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})


// SERVIDOR
app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))
