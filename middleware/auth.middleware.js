module.exports.validate = (req, res, next)=>{
    if(true) {
        next();
    } else {
        return res.send({msg: 'error'});
    }
}