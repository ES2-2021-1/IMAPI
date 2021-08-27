app = require("./src/app");

app.listen(process.env.PORT, function(){
    console.log("Servidor rodando na url: http://localhost:"+process.env.PORT);
});
