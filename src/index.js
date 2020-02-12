const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const http = require('http')

app.use(cors());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Routes
app.use(require('./routes/index'))

app.set('port',process.env.PORT || 3000);
app.listen(app.get('port'),()=>{
    console.log('Servidor escuchando en el puerto',app.get('port'));
});


// Se llaman las rutas de redirrecion del front despues de la configuracion de los webservices (API)
const distDirectory = path.join(__dirname, 'public');

app.get('*', function (req, res, next) {
    const file_path = path.join(distDirectory, req.url.split('?').shift());
    if (fs.existsSync(file_path)) next();
    else res.sendFile(path.join(distDirectory, 'index.html'));  
}); 

app.use(express.static(distDirectory));
