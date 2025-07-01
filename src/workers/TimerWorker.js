self.onmessage = function(event){
  console.log("Work recebeu", event.data)
  self.postMessage('Olá tudo!')
}