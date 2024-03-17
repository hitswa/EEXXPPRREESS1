module.exports.track = (req, res, next)=>{
    console.log({req: req.get('host'), time: Date.now()})
    next();
}