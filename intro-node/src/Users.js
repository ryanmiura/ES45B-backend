const fs = require('fs');
const path = require('path');

class Users {
    constructor() {
        this.users = [];
    }

    loadUsers() {
        try {
            const filePath = path.join(__dirname, '..', 'users.txt');
            const data = fs.readFileSync(filePath, 'utf8');
            this.users = data.split('\n').filter(user => user.trim() !== '');
            this.users.sort();
            return true;
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
            return false;
        }
    }

    getTopFiveUsers() {
        return this.users.slice(0, 5);
    }

    getAllUsers() {
        return this.users;
    }
}

module.exports = Users;