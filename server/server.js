const express = require('express');
const app = express();

app.use(express.static('./../build'));

const PORT= process.env.PORT||3000;

app.use('/',(req,res,next) => {
  next();
});

app.get('/test', (req, res) =>{
  console.log('Test Route hit!!');
  res.send('Server Working')
})

app.listen(PORT, ()=>{
  console.log('NativeConnect server is on');
});
