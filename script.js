function decodeBase64() {
    const base64Input = document.getElementById('base64Input').value;
    const decodedOutput = document.getElementById('decodedOutput');

    try {
        const decodedText = atob(base64Input);
        decodedOutput.textContent = `Decoded Content: ${decodedText}`;
    } catch (error) {
        decodedOutput.textContent = 'Invalid Base64 input.';
    }
}
