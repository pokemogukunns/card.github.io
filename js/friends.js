// friends.js

fetch('http://localhost:3000/friends')
    .then(response => response.json())
    .then(data => {
        const friendsDiv = document.getElementById('friends');
        data.forEach(friend => {
            friendsDiv.innerHTML += `<p>${friend.username} - <button onclick="challenge('${friend.username}')">対戦挑戦</button></p>`;
        });
    });

function challenge(username) {
    // フレンドに対戦挑戦のリクエストを送信するコード
}
