exports.route = (app) => {
    app.get('/', (req,res) => {
        res.render('index', { title: "CONSUME"});
    })
}