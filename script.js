function decodeBase64() {
    const base64Input = document.getElementById('base64Input').value;
    const decodedOutput = document.getElementById('decodedOutput');
    const copyButton = document.getElementById('copyButton');

    try {
        const decodedText = atob(base64Input);
        decodedOutput.textContent = `Decoded Content: ${decodedText}`;
        copyButton.disabled = false; // Enable the copy button
    } catch (error) {
        decodedOutput.textContent = 'Invalid Base64 input.';
        copyButton.disabled = true; // Disable the copy button
    }
}

function copyToClipboard() {
    const decodedOutput = document.getElementById('decodedOutput');
    const textArea = document.createElement('textarea');
    textArea.value = decodedOutput.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Copied to clipboard!');
}
