import  express  from 'express';
import path  from 'path';
import open  from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
/* eslint-disable no-console */
const port = 30001;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo : true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
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
