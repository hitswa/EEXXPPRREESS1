const helloHelper = require('../helpers/hello.helper')

module.exports.hello = function (req, res) {
    // res.json(JSON.stringify(helloHelper.hello));
    res.send({msg: 'hello'});
}