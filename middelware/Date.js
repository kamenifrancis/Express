const date = (req,res,next)=>{
    let date = new Date()
    let h = date.getHours()
    if(! (h=>9 && h<=14) ) {
      res.send('come back, we only work from 9am till 3pm')
    }
    next()
}


module.exports = date