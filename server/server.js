const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());

const fs = require('fs');
const { response } = require('express');
const { request } = require('http');

let users = JSON.parse(fs.readFileSync('json/users.json', 'utf8'));

let posts = JSON.parse(fs.readFileSync('json/posts.json', 'utf8'));

let comments = JSON.parse(fs.readFileSync('json/comments.json', 'utf8'));

let countU = users.length;

let countP = posts.length;

let countC = comments.length;

//============================================================================== GET METHOD ==============================================================================

app.get('/api/users', (req, res) => {
    res.json(users);
})

app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    users.forEach(ele => {
        if (ele.id === +id) {
            res.json(ele);
            return;
        }
        
    });
})

//----------------------------------------------------------

app.get('/api/posts', (req, res) => {
    res.json(posts);
})

app.get('/api/posts/:id', (req, res) => {
    const id = req.params.id;
    posts.forEach(ele => {
        if (ele.id === +id) {
            res.json(ele);
            return;
        }
        
    });
})

//----------------------------------------------------------

app.get('/api/comments', (req, res) => {
    res.json(comments);
})

app.get('/api/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.forEach(ele => {
        if (ele.id === +id) {
            res.json(ele);
            return;
        }
        
    });
})

//============================================================================== POST METHOD ==============================================================================

app.post('/api/users', (req, res) => {
    const obj = req.body;
    obj.id = countU++;
    users.push(obj);
})

//----------------------------------------------------------

app.post('/api/posts', (req, res) => {
    const obj = req.body;
    obj.id = countP++;
    posts.push(obj);
    response.json('Post Aggiunto');
})

//----------------------------------------------------------

app.post('/api/comments', (req, res) => {
    const obj = req.body;
    obj.id = countU++;
    comments.push(obj);
})

//============================================================================== PUT METHOD ==============================================================================

app.put('/api/users', (req, res) => {
    const id = req.params.id;
    const obj_mod = req.body;
    let obj = users.find(ele => ele.id === +id);
    obj = obj_mod;
});

//----------------------------------------------------------

app.put('/api/posts', (req, res) => {
    const id = req.params.id;
    const obj_mod = req.body;
    let obj = posts.find(ele => ele.id === +id);
    obj = obj_mod;
});

//----------------------------------------------------------

app.put('/api/comments', (req, res) => {
    const id = req.params.id;
    const obj_mod = req.body;
    let obj = comments.find(ele => ele.id === +id);
    obj = obj_mod;
});

//============================================================================== DELETE METHOD ==============================================================================

app.delete('/api/users', (req, res) => {
    const id = req.params.id;
    users.filter(ele => ele.id !== +id);
});

//----------------------------------------------------------

app.delete('/api/posts', (req, res) => {
    const id = req.params.id;
    comments.filter(ele => ele.id !== +id);
});

//----------------------------------------------------------

app.delete('/api/posts', (req, res) => {
    const id = req.params.id;
    comments.filter(ele => ele.id !== +id);
});

//============================================================================== LISTENER ==============================================================================

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})