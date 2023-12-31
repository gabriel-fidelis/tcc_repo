require('dotenv').config();
const sqlize = require('./utils/DbConn')
const server = require('./server.js');

const port = process.env.PORT || 3301;

process.on('uncaughtException', (err) => {
  console.error(`${(new Date()).toUTCString()} uncaughtException:`, err);
  process.exit(0);
});

process.on('unhandledRejection', (err) => {
  console.error(`${(new Date()).toUTCString()} unhandledRejection:`, err);
});


server.listen({ port }, () => console.log(
  `🚀 Server ready at http://localhost:${port}/api`,
));


//Connect with database
try {
  sqlize.syncDB();
  console.log("Connected with database successfully")
} catch (error) {
  console.error("Connection with database failed: ", error)
}