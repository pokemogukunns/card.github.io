// settings.js

document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardDesign = document.getElementById('card-design').value;
    const soundEnabled = document.getElementById('sound').checked;
    const bgmEnabled = document.getElementById('background-music').checked;

    saveSettings(cardDesign, soundEnabled, bgmEnabled);
});

function saveSettings(cardDesign, soundEnabled, bgmEnabled) {
    // 設定を保存するコード
    console.log(`Card Design: ${cardDesign}, Sound: ${soundEnabled}, BGM: ${bgmEnabled}`);
}
