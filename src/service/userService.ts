const db = require("../config/db");

module.exports = {
    findAll: (callback: any) => {
        db.query("SELECT * FROM user", callback);
    },

    findById: (id: number, callback: { err: Error, result: any }): void => {
        db.query(`SELECT u.* FROM user as u WHERE u.id_user = ${id}`, callback);
    }

}
