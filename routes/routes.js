const burger = require('../controllers/burger')

exports.route = (app) => {
    app.get('/', burger.read);
    app.post('/burgers', burger.create);
    app.put('/burgers/:id', burger.update);
    app.delete('/burgers/:id', burger.delete);
}