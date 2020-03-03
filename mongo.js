var ClienteMongo = require('mongodb').MongoClient;

var url = "mongodb://localhost/loja";

ClienteMongo.connect(url, function(erro,banco){

    if(erro) throw erro;

    console.log("Banco criado...");
    banco.close();

});

var ClienteMongo = require('mongodb').MongoClient;

var url = "mongodb://localhost/loja";

ClienteMongo.connect(url, function(erro,banco){

    if(erro) throw erro;
    banco.createCollection("produtos", function(erro, resultado){
        if(erro) throw erro;
        console.log("Colecao criada com sucesso");
    });
    
    banco.close();

});

ClienteMongo.connect(url, function(erro,banco){
    if (erro) throw erro;
    var objetos = [
        {'nome':'Dorflex','preco':'2','quantidade':'3'},
        {'nome':'Torsilax','preco':'3','quantidade':'4'},
        {'nome':'Clenil','preco':'1','quantidade':'5'},
        {'nome':'Aerolin','preco':'2','quantidade':'3'},
        {'nome':'Rivotril','preco':'20','quantidade':'30'}
    ];
    banco.collection('minhaColecao').insertMany(objetos, function(erro,resultado){
        if(erro) throw erro;
        console.log('Vários documentos inseridos...');
    });
    banco.close();
});

ClienteMongo.connect(url, function(erro,banco){
    if (erro) throw erro;
    banco.collection('minhaColecao').find({}).toArray(function(erro,resultado){
        if(erro) throw erro;
        console.log(resultado);
    });
    banco.close();
})
