// chat.js

document.getElementById('send-message').addEventListener('click', function() {
    const message = document.getElementById('chat-message').value;
    sendMessage(message);
});

function sendMessage(message) {
    // メッセージを送信するコード
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p>${message}</p>`;
    document.getElementById('chat-message').value = '';
}
