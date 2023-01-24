//import axios from 'axios';   // type script include method
//const axios = require('axios');

//this is use html script include
axios.get('https://randomuser.me/api/abc')
    .then(res=>{
        console.log(res.data);
    })
    .catch(err=>{
        console.log(err.response);
    });