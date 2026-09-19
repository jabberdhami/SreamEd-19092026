# StreamEdu

StreamEdu is a premium, Netflix-inspired local video streaming platform built to organize, watch, and download educational videos effortlessly.

## ✨ Features
- **Netflix-Style Interface**: Beautiful dark mode UI with cinematic hero sections, smooth hover animations, horizontal slider rows, and a robust File Explorer view mode.
- **Binge-Watch Ready**: Built-in "Next Lesson" functionality automatically detects playlists and queues the next video with a seamless 5-second countdown overlay when an episode ends.
- **YouTube Downloading Engine**: Integrated with `yt-dlp` to directly download videos and entire playlists from YouTube right into your server with a simple URL. **When downloading via a YouTube URL, the application automatically ensures that both the best video and audio streams are merged and uploaded as a single, complete file!** It also automatically fetches metadata, descriptions, and chapters.
- **Library Organization**: Easy-to-use folder management, allowing you to organize your courses and playlists. Upload local videos directly from the browser. 
- **Smart Metadata Parsing**: Automatically parses YouTube chapters into clickable timestamps and formats video descriptions elegantly in the sidebar.
- **Watch History tracking**: Remembers where you left off, providing a per-user visual progress bar on video thumbnails.
- **User Authentication**: Secure multi-user login with granular permission controls (Admins vs Users). Admins can edit video details, delete folders, and manage users.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) installed on your system.
- `yt-dlp` (`yt-dlp.exe` for Windows) placed in the root folder to enable high-quality video/audio fetching.
- `ffmpeg` installed on your system or placed in the root folder. This is heavily recommended to allow `yt-dlp` to merge separate high-quality video and audio tracks.

### Installation & Deployment
To properly install and deploy StreamEdu so that it works seamlessly, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jabberdhami/StreamEdu.git
   cd StreamEdu
   ```

2. **Install dependencies:**
   Ensure you run this command in the project root to install all required Node modules (like `express`, `multer`, and `cors`).
   ```bash
   npm install
   ```

3. **yt-dlp Setup (Crucial for Downloads):**
   Make sure you have `yt-dlp.exe` in the root directory. To ensure that when you upload using a YouTube URL, the engine successfully combines the best video and audio streams into the same file, you must also have `ffmpeg` installed on your system.

4. **Directory Setup:**
   The `Videos` folder is intentionally excluded from the repository. The server will automatically generate it and a `data` folder on first launch.

### Running the App
1. Start the server by running:
   ```bash
   node server.js
   ```
   *Alternatively, if on Windows, you can double-click the `StartStreamHub.bat` file!*
   
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
   
3. **Default Login**:
   - **Username**: `jabber`
   - **Password**: `jabber`

*(Note: The default admin account is `jabber`/`jabber` as initialized by the database on the first run. You can manage users from the admin dashboard once logged in).*

## 🛠 Tech Stack
- **Frontend**: HTML5, Vanilla JavaScript, CSS3
- **Backend**: Node.js, Express.js
- **Media Engine**: HTML5 Video Player, `yt-dlp`
