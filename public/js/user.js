const fs = require("fs")
const path = require("path")

let usersDB = readUsers()

function readUsers() {
    let users = fs.readFileSync(path.normalize(`${__dirname}/../../JSON/usuarios.JSON`))
    return JSON.parse(users); 
}

function writeUser(newUser) {
  usersDB.push(newUser)
  usersDB = JSON.stringify(usersDB, null, " ");
  fs.writeFileSync(path.normalize(`${__dirname}/../../JSON/usuarios.JSON`), usersDB)
}

module.exports= {
    writeUser,
    readUsers
}