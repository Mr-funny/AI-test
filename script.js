// base64Decode.js

function customBase64Decode(base64String) {
    const binaryString = window.atob(base64String);
    const bytes = new Uint8Array(binaryString.length);

    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    const text = new TextDecoder().decode(bytes);
    return text;
}

// 示例用法
const base64String = '5YyX5Lqs6KW/5LqM5peX5ZKM5LiK5rW35byg5rGf56iL5bqP5ZGY55qE57uI5p6B5oKy5oOo5ZG96L+Q';
const decodedString = customBase64Decode(base64String);
console.log(decodedString);
