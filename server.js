// ====================================================
//              🌐 Core Imports
// ====================================================
const http = require("http"); // Node.js HTTP module
const app = require("./app"); // Import Express app

// ====================================================
//              ⚙️ Server Configuration
// ====================================================
const port = process.env.PORT || 3000; // Default: 3000 OR from .env

// ====================================================
//              🚀 Create HTTP Server
// ====================================================
const server = http.createServer(app);

// ====================================================
//              🌍 Start Listening
// ====================================================
server.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
