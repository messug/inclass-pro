const express = require("express");
const cors = require("cors");
import{getMessages, addMessage} from './index3.js'

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

app.get("/messages", function(request,response){
  const messages = getMessages()

  response.json(messages);
})

app.post("/messages", function(request, response){
  var newMessage = request.body
  addMessage(newMessage)
  response.send('ok')
})

app.listen(port, (request, response) => {
  console.log('server running on' , port)
})



