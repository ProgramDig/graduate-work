const Role = require("../models/role-model");

class RoleService {
    createRole() {
        const role = new Role({value: 'TEACHER'})
        role.save()
        return role
    }
}

module.exports = new RoleService()