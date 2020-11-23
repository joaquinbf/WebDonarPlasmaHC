const app = require("./server");
const db = require("./database");
const config = require("./config/config");

/*Esta es la funcion principal*/
app.listen(config.port, () => {
  const msg_init = config.dev
    ? `server run in http://localhost:${config.port}`
    : "server run in production";
  console.log(msg_init);
});

