const messages = [{message: "one"}, {message: "two"}]

export function getmessage(){
    return messages
}

export function addMessage(message) {
  messages.push(message)
}