const mongoose = require("mongoose");
const MONGODB_URI = "mongodb+srv://admin-mdatabase:nx3QpjCLU0G1QlBc@mdatabase.wrbsk.mongodb.net/HDC?retryWrites=true&w=majority;";
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("Mongodb is connected to", db.connection.host))
  .catch((err) => console.error(err));