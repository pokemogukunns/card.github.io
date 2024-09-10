// profile.js

document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('profile-username').value;
    const imageUrl = document.getElementById('profile-image').value;
    const theme = document.getElementById('profile-theme').value;

    saveProfileSettings(username, imageUrl, theme);
});

function saveProfileSettings(username, imageUrl, theme) {
    // プロフィール設定を保存するコード
    console.log(`Username: ${username}, Image URL: ${imageUrl}, Theme: ${theme}`);
}
