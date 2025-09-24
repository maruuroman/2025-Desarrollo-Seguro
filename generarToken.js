const jwt = require('jsonwebtoken');
const secret = "secreto_super_seguro";
const userId = "1";
const token = jwt.sign({id:userId}, secret, {expiresIn:'1h'});
console.log(token);