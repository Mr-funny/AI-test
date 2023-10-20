// base64Decode.js

function customBase64Decode(base64String) {
    try {
        // Decoding standard Base64
        const decoded = atob(base64String);
        return decoded;
    } catch (error) {
        // If there are non-base64 characters, use decodeURIComponent
        const decoded = decodeURIComponent(escape(atob(base64String)));
        return decoded;
    }
}

// 示例用法
// const base64String = '5YyX5Lqs6KW/5LqM5peX5ZKM5LiK5rW35byg5rGf56iL5bqP5ZGY55qE57uI5p6B5oKy5oOo5ZG96L+Q';
// const decodedString = customBase64Decode(base64String);
// console.log(decodedString);
