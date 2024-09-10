// leaderboard.js

fetch('http://localhost:3000/leaderboard')
    .then(response => response.json())
    .then(data => {
        const leaderboardDiv = document.getElementById('leaderboard');
        data.forEach(entry => {
            leaderboardDiv.innerHTML += `<p>${entry.username} - スコア: ${entry.score}</p>`;
        });
    });
