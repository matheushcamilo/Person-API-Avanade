//const cors = require("cors")

/*app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});*/


var xhr = new XMLHttpRequest()


xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        console.log(xhr)
    }
}


xhr.open("GET", "https://peopleapi7321.herokuapp.com/api/v1/people")
console.log(xhr)




//xhr.open("GET", "http://localhost:8080/api/v1/people")




xhr.send()