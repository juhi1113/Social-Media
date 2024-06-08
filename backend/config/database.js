const moongoose = require('mongoose');

exports.connectDatabase = ()=>{
    moongoose.connect(process.env.MONGO_URI)
        .then(con =>console.log('Database connected..'))
        .catch((err)=> console.log(err));
}; 