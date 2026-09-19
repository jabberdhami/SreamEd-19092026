const fs = require('fs');
const https = require('https');
const os = require('os');
const path = require('path');

const isWin = os.platform() === 'win32';
const filename = isWin ? 'yt-dlp.exe' : 'yt-dlp';
const dest = path.join(__dirname, filename);
const url = `https://github.com/yt-dlp/yt-dlp/releases/latest/download/${filename}`;

console.log(`Downloading ${filename} from ${url}...`);

const file = fs.createWriteStream(dest);

https.get(url, (response) => {
    if (response.statusCode === 302 || response.statusCode === 301) {
        https.get(response.headers.location, (res) => {
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                if (!isWin) fs.chmodSync(dest, 0o755);
                console.log('yt-dlp downloaded successfully!');
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            console.error('Error downloading yt-dlp:', err.message);
        });
    } else {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            if (!isWin) fs.chmodSync(dest, 0o755);
            console.log('yt-dlp downloaded successfully!');
        });
    }
}).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error('Error downloading yt-dlp:', err.message);
});
