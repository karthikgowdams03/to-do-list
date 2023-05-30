const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const day = require('./date');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];
let workitems = [];
let worktitle = "Work List";

app.get('/', (req, res) => {
    let date = day.getDate();
    res.render('list', { listTitle: date, newitem: items }); // {ejs:js}
});

app.post('/', (req, res) => {
    // console.log(req.body.list);
    if (req.body.list == "Work") {
        workitems.push(req.body.newitem);
        res.redirect('/work');
    }
    else {
        items.push(req.body.newitem);
        res.redirect('/');
    }

});

app.get('/work', (req, res) => {
    res.render('list', { listTitle: worktitle, newitem: workitems })
});

app.post('/work', (req, res) => {
    workitems.push(req.body.newitem);
    res.redirect('/work');
});

app.get("/about", (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})

