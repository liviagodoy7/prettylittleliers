//configurar back end
//criar duas variáveis - consumir o framework expres e instância

const express = require('express');
const app = express();

// rota para os arquibos estaticos (public)

app.use(express.static('public'));

//qual porta ira rodar
app.listen(3000, () => {
    console.log(`servidor rodando no link http://localhost:3000`)
})