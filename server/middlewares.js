module.exports = {
  checkUser: async (req, res, next) => {
    const db = req.app.get('db')
    const {username} = req.query

    let users = await db.getUsersByUsername([username])
    let user = users[0]

    if(user) {
      next()
    } else {
      res.status(401).send('user not found')
    }
  }
}