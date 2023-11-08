const express = require('express');
const app = express();

app.get('/send/JSON',(_req, res) => {
  res.send({"hello": "world"});
})

const PORT = 4000;
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}.`)
})


