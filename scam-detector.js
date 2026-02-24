// advanced detection logic
function detectScam(inputText) {
    // Placeholder for detection logic
    const scamKeywords = ['scam', 'winner', 'urgent', 'congratulations'];
    let detected = false;

    scamKeywords.forEach(keyword => {
        if (inputText.toLowerCase().includes(keyword)) {
            detected = true;
        }
    });

    return detected ? 'Scam detected!' : 'No scam detected.';
}

document.getElementById('detectButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    const result = detectScam(userInput);
    document.getElementById('result').innerText = result;
});
