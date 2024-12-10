const chatID = "259124796971941890"; //id чата, куда будут отправлены запросы
const voiceChatName = "Комната"; //название голосовой комнаты откуда брать линки для пинга
const authorization = "MTA0MTY5NjUxOTQ2MTUzOTk4************************************"; // токен для авторизации
const message = "привет" // сообщение, которое будет спамиться
let avatars = document.querySelectorAll(`div[data-dnd-name*='${voiceChatName}'] div[class*=userAvatar]`)

if(avatars.length){
  let items = Array.from(avatars);
  let ids = items.map(e => e.style.backgroundImage.split("/")[4]);
  ids = `<@${ids.join("> <@")}>`;
    
  for (let i = 0; i < 200000; i++) {
    await new Promise(resolve => {
      let randomNum = Math.floor(Math.random()*1000000);
      let xhr = new XMLHttpRequest();
      
      xhr.open("POST",`https://discord.com/api/v9/channels/${chatID}/messages`)
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.setRequestHeader("authorization", authorization);
      xhr.onload = () => resolve("OK");

      xhr.send(`{"content":"${ids} ${message}","nonce":"${randomNum}","tts":false}`);
    })
  }
}
