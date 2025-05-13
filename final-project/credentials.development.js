module.exports = {
    "cookieSecret": "MysuperSecretCookieSecret",
    "postgres": {
      "connectionString": process.env.DBCONNECTIONSTRING || "postgresql://postgres:mypostgresql@localhost:5432/barkedin"
    }
  }
    