'use strict';

const fs = require('fs')

function setUsers (newUsers, file_location) {
    users = {
        users: newUsers
    };
    fs.writeFileSync('/src/data/users.json', JSON.stringify(users));
}

function getUsers (file_location) {
    let rawdata = fs.readFileSync(file_location);
    let users = JSON.parse(rawdata);
    return users.users;
}

module.exports = {
    setUsers,
    getUsers
};