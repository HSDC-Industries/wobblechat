const { Pool } = require("pg");

// Connect to our database and assign the result of that connection to a new object
// Then export that object so that we can make queries to our DB.
// This object is used inside of our controllers.
const uri =
  "postgres://omkpkxdv:crQ1vGvY9HGr_q2U9N6TanZoAjlKtOuV@chunee.db.elephantsql.com/omkpkxdv";
const pool = new Pool({
  connectionString: uri,
}
);

module.exports = pool;
