const express = require('express');
const app = express();
app.use(express.json());

let articles = [
    {
        id: 1,
        title: 'Technology is booming',
        description: 'Technology lorem lorem lorem lorem lorem lorem ',
        author: 'Prabh'
    },
    {
        id: 2,
        title: 'Science is scary',
        description: 'Science lorem lorem lorem lorem lorem lorem ',
        author: 'Daniel'
    },
    {
        id: 3,
        title: 'Maths is boring',
        description: 'Maths lorem lorem lorem lorem lorem lorem ',
        author: 'Mike'
    },
    {
        id: 4,
        title: 'English is a must to know!',
        description: 'English lorem lorem lorem lorem lorem lorem ',
        author: 'David'
    }
];

app.get('/articles', (req, res) => {
    res.send(articles);
});

app.post('/articles', (req, res) => {
    const article = {
        id: articles.length + 1,
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    };
    articles.push(article);

    res.send(article);
});

app.delete('/articles/:id', (req, res) => {
    const articleID = req.params.id;

    console.log(articleID);

    // This filter method here filters only those items which are not having an ID similar to StudentID
    articles = articles.filter((article) => article.id != articleID ? true : false);

    // SPLICE METHOD

    res.send(articles);
});


app.listen(port, () => console.log("Server running on port : "  +PORT));
