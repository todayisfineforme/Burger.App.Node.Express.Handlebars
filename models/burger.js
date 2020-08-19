const mysql = require('../config/connection');

exports.selectAll = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`select * from burgers ;`);
    return data;
}
exports.insertOne = async (burger_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`insert into burgers set ? ;`, burger_obj);
    return data;
}
exports.updateOne = async (burgerId, burger_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`update burgers set ? where (id=?) ;`, [burger_obj, burgerId]);
    return data;
}
exports.deleteOne = async (burgerId) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`delete from burgers where id=? ;`, burgerId);
    return data;
}