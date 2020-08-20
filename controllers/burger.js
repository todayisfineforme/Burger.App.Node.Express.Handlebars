const hamburger = require('../classes/burger');

exports.read = async (req,res) =>{
    const burger = new hamburger();
    await burger.selectAll();
    const burger_list = await burger.getLiteral();
    const hbsObj = { burgers: burger_list };
    res.render("index", hbsObj);
} 
exports.create = async (req,res) =>{
    const burger = new hamburger(req.body);
    await burger.insert();
    const burger_list = await burger.getLiteral();
    res.json(burger_list);
}
exports.update = async (req,res) =>{
    const burgerID = req.params.id;
    const burger = new hamburger();
    burger.merge(req.body);
    await burger.update(burgerID);
    const burger_list = await burger.getLiteral();
    res.json(burger_list);
}
exports.delete = async (req,res) =>{
    const burgerID = req.params.id;
    const burger = new hamburger();
    await burger.delete(burgerID);
    res.json({deleted: true});
}