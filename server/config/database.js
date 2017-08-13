const crypto = require('crypto').randomBytes(256).toString('hex');
module.exports = {
    database: 'localhost:27017/awesomeapp',
    secret: crypto
}