"use strict";

const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 서버가동 시작!!`);
});
