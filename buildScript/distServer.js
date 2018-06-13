import  express  from 'express';
import path  from 'path';
import open  from 'open';
import compression from 'compression';
/* eslint-disable no-console */
const port = 30001;
const app = express();

app.use(compression());
app.use(express.static('dist'));
 
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});


app.get('/users', function(req, res){
    res.json([
        {"id":1, "firstName":"Bob","latName":"Smith","email":"test@test.com"},
        {"id":2, "firstName":"Bob1","latName":"Smith","email":"test@test.com"},
        {"id":3, "firstName":"Bob2","latName":"Smith","email":"test@test.com"},
        {"id":4, "firstName":"Bob3","latName":"Smith","email":"test@test.com"},
        {"id":5, "firstName":"Bob4","latName":"Smith","email":"test@test.com"}
    ]);
});


app.listen(port, function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        open('http://localhost:'+port);
    }
});
