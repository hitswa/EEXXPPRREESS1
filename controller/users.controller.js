
const User = require('../modal/users.modal')

module.exports.getAllUsers = async (req, res, next) => {
    // await User.create({
    //     username: 'hitesh',
    //     email: 'hitesh@gmail.com',
    //     password: '1234567890'
    // })
    let users = await User.find()
    res.send({users: users});
}