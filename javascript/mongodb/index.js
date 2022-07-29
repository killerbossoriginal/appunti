/*  */
const mongodb = require('mongodb');
const MongoClient = new mongodb.MongoClient('link al database');

MongoClient.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to database');
  }
})


//documento = object che contiene jhon
const obj = {
  name: 'John',
  age: 30,
  hobbies: ['sports', 'music']
}

// funzione per ritornare tutti i documenti che hanno come contenuto della field "name" John
// si può usare toArray() per ritornare i dati in un array di oggetti
// si può usare limit(numero massimo) per ritornare un numero massimo di documenti
MongoClient.db('nome database').collection('nome collection').find({name: 'John'}).toArray().limit(2)
// funzione per ritornare il primo documento che ha 'name: John'
MongoClient.db('nome database').collection('nome collection').findOne({name: 'John'})

// esempio di variabile che ha come contenuto un documento
const user = await MongoClient.db('nome database').collection('nome collection').findOne({name: 'John'})

// funzione per inserire un documento
MongoClient.db('nome database').collection('nome collection').insertOne(obj)
// funzione per inserire più documenti
MongoClient.db('nome database').collection('nome collection').insertMany([obj, obj])

// funzione per eliminare un documento
MongoClient.db('nome database').collection('nome collection').deleteOne({name: 'John'})
// funzione per eliminare un documento
MongoClient.db('nome database').collection('nome collection').deleteMany({name: 'John'})

// funzione per aggiornare un documento
MongoClient.db('nome database').collection('nome collection').updateOne({name: 'John'}, {name: 'Jack'}) // cambia tutto l'object togliendo age e hobbies
MongoClient.db('nome database').collection('nome collection').updateOne({name: 'John'}, {$set: {name: 'Jack'}}) //cambia solo 'john' in 'jack'
MongoClient.db('nome database').collection('nome collection').replaceOne({name: 'John'}, {name: 'Jack'}) // cambia tutto l'object togliendo age e hobbies
MongoClient.db('nome database').collection('nome collection').updateOne({name: 'John'}, {$push: {hobbies: 'football'}}) // aggiunge un elemento all'array hobbies
MongoClient.db('nome database').collection('nome collection').updateOne({name: 'John'}, {$pull: {hobbies: 'football'}}) // rimuove un elemento dall'array hobbies
MongoClient.db('nome database').collection('nome collection').updateOne({name: 'John'}, {$inc: {age: 1}}) // incremento di 1 la field age
MongoClient.db('nome database').collection('nome collection').updateOne({name: 'John'}, {$inc: {age: -1}}) // incremento di -1 la field age 