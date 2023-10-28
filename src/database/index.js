const mongoose = require('mongoose');
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const port = process.env.PORT

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.o3tvby0.mongodb.net/?retryWrites=true&w=majority`,)
    .then(() => {
        console.log("Conectou ao Banco de Dados");
    })
    .catch((err) => console.log("Conexão ao banco de dados mal sucecida, Error: " + err));


mongoose.Promise = global.Promise;
module.exports = mongoose;
