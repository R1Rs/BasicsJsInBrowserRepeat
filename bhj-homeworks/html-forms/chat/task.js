// открытие чата
let chatWidget = document.querySelector(".chat-widget");
chatWidget.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active");
    setInterval(verificationClientLive, 30000);
}
);

// поле ввода сообщения
let chatInput = document.querySelector(".chat-widget__input");

// отображение сообщения клиента
let messageText = document.querySelector(".chat-widget__messages");
let messageContainer = document.querySelector(".chat-widget__messages-container");

// слушатель на отправку сообщения
chatInput.addEventListener("keydown", sendMessage);

let date = new Date();
let time = date.getHours() + ":" + date.getMinutes();
let lastTimeMessage = date; // время для отсчёта 30сек, обновляется временем последнего сообщения

function sendMessage(e) {
    let text = chatInput.value;

    if (e.keyCode == 13 & !text.match(/^[ ]+$/) & text !="") {
     messageText.innerHTML += ` <div class="message message_client">
                                <div class="message__time">${time}</div>
                                <div class="message__text">${text}</div>
                               </div>`
    chatInput.value = "";
    messageContainer.scrollTop = messageContainer.scrollHeight;
    setTimeout(getMessage, 1000);

    lastTimeMessage = new Date(); //обновляем время последнего сообщения клиента
    setTimeout(verificationClientLive, 30000); // через 30 секунд вызываем проверку клиента
}
}

function getMessage() {
    let messagesRobot = ["Здравствуйте", "До свидания", "Пишите ещё", "Обед"];
    let randomMessageRobot = messagesRobot[Math.floor(Math.random() * messagesRobot.length)];
    messageText.innerHTML += `<div class="message">
                              <div class="message__time">${time}</div>
                              <div class="message__text">${randomMessageRobot}</div>
                              </div>`
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function verificationClientLive() {
    let timeNow = new Date();
    if ((timeNow - lastTimeMessage > 30000) & chatWidget.classList.contains("chat-widget_active")) {
        messageText.innerHTML += `<div class="message">
                                    <div class="message__time">${time}</div>
                                    <div class="message__text">Спишь?
                                  </div>`;
    }
}
