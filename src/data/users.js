'use strict';

const fs = require('fs')

let users

function setUsers (newUsers) {

    console.log(__dirname)

    users = {
        users: newUsers
    };
    fs.writeFileSync('./users.json', JSON.stringify(users));
}

function getUsers () {

    let raw_data

    console.log(__dirname)

    try {
        raw_data = fs.readFileSync('./users.json')
    }
    catch (err) {
        setUsers([])
        raw_data = fs.readFileSync('./users.json')
    }

    users = JSON.parse(raw_data);

    return users.users;
}

function reset () {
    setUsers([])
}

module.exports = {
    setUsers,
    getUsers,
    reset
};