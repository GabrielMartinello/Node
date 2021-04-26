const express = require('express');
const app = express();


const port = 3000
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

app.get('/', (req, res) => res.status(200).send({mensagem: 'Fazendo teste na rota principal :D'}));