// show databases
use ("dda")

db.pessoas.insertOne({
    name:"Malu",
    lastname: "Luiza",
    salary: 2

})

use("dda") 
db.pessoas.insertMany([
     { name: "julinha", lastname: "gabriel", salary: 2 }, 
     { name: "jhennie", lastname: "Big", salary: 2 }, 
     { name: "fer", lastname: "fer", salary: 2 }, 
     { name: "joyce", lastname: "r", salary: 2 }, 
     { name: "kessy", lastname: "anne", salary: 2 }, 
     { name: "thay", lastname: "nar", salary: 2 }, 
     { name: "Ket", lastname: "jones", salary: 2 }, 
     { name: "Bruna", lastname: "Bonk", salary: 2 }, 
     { name: "lays", lastname: "coreaninha", salary: 2 }, 

])

use("dda")
db.pessoas.find({name: "fer"})



use("dda")
db.pessoas.find({name: /j/})