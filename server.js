var express = require('express'); //importing library
var morgan = require('morgan');   //importing library
var path = require('path');

var app = express();
app.use(morgan('combined'));
//array of objects
var articles = {
	'article-one':{title:"Article # 1",
	             heading:"Article # 1",
	             date:"Sept 5, 2016",
				 content:`<p>
				            Hello everyone my first article. Hello everyone my first article.Hello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first article.

				         </p>
				         <p>
				            Hello everyone my first article. Hello everyone my first article.Hello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first article.

           				</p>
						<p>
							Hello everyone my first article. Hello everyone my first article.Hello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first article.

						</p>`},
	'article-two':{title:"Article # 2",
	             heading:"Article # 2",
	             date:"Sept 10, 2016",
				 content:`<p>
				            Hello everyone my first article. Hello everyone my first article.Hello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first article.

				         </p>`},
	'article-three':{title:"Article # 3",
	               heading:"Article # 3",
	               date:"Sept 5, 2016",
				   content:`<p>
				            Hello everyone my first article. Hello everyone my first article.Hello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first articleHello everyone my first article.

				           </p>` }
};

function createTemplate (data){
	var title = data.title ;
	var heading = data.heading ;
	var date = data.date ;
	var content = data.content ;
	var htmlTemplate = `
<html>
    <head>
        <title> ${title}
        </title>
        <meta name = "viewport" content = "width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
    <div class = "container">
        <div>
            <a href='/'>Home</a>
        </div>
        <hr/>
        <h1>${heading}</h1>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
     </div>   
    </body>
</html>`
;
return htmlTemplate ;
}

var counter = 0 ;
app.get('/counter',function(req, res){
	counter = counter + 1 ;
	res.send(counter.toString()) ;
}) ;

app.get('/', function (req, res) {                         //when url '/' is selected/requested then function is ececuted 
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names = [] ;
app.get('/submit-name', function (req, res){
	//get the name from request
	var name = req.query.name ;
	//concat this name to list of names
	names.push(name) ;
    res.send(JSON.stringify(names)) ;
});



app.get('/:articleName',function(req, res){
	var articleName = req.params.articleName ;
    res.send(createTemplate(articles[articleName]));
}) ;

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
}) ;

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
