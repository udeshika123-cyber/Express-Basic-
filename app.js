import express from 'express';
const app = express();
import user from './routers/user.js';
import student from './routers/student.js';
import morgan from 'morgan';

//app.use(log);
app.use(express.json());
app.use(morgan('dev'))
app.use('/api/user',user);
app.use('/api/student',student);

function log(req,res,next){
    console.log('hello world');
    req.id = '10';
    next();
}

//app.get('/api/student', (req,res)=> {
//   res.send({msg:'Hello student'})
//});

//app.post('/api/student',(req,res)=>{
//   res.send({msg:'hello student'})
//});

//console.log(process.env.PORT);
morgan('tiny');

const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`App is running on port ${port}`));
