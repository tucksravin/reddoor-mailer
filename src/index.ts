const app =  require('express')();

app.get('/', (request, response) => 
    response.json( {message: "it's working!!" })
);

const port = process.env.PORT || 8080;

app.listen(port, ()=>console.log('listening on '+port))