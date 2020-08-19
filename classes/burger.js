const model = require('../models/burger');

class Burger {
    constructor(burger_obj) {
        this._burger = burger_obj;
    }
    get id() {
        return this._burger.id;
    }
    get burger_name() {
        return this._burger.burger_name;
    }
    set burger_name(burger_name) {
        this._burger.burger_name = burger_name;
    }
    get devoured() {
        return this._burger.devoured;
    }
    set devoured(devoured) {
        this._burger.devoured = devoured;
    }
    merge(new_burger) {
        this._burger = { ...this._burger, ...new_burger };
    }
    async getLiteral() {
        return this._burger;
    }
    async selectAll() {
        this._burger = await model.selectAll();
    }
    async insert() {
        const results = await model.insertOne(this._burger);
        this._burger.id = results.insertId;
    }
    async update(burgerId) {
        await model.updateOne(burgerId, this._burger);
    }
    async delete(burgerId) {
        await model.deleteOne(burgerId);
    }
}
module.exports = Burger;