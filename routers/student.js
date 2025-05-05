import express from 'express';
import router from './user.js';
import user from './user.js';

router.get('/', (req,res)=> {
    res.send({msg:'Hello student get'})
});

router.post('/',(req,res)=>{
    res.send({msg:'hello student post'})
});


export default router;