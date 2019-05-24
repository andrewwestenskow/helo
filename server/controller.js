const bcrypt = require('bcryptjs')

module.exports={
  register: async (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body

    let users = await db.getUsersByUsername([username])
    let user = users[0]
    
    if(user) {
      return res.status(409).send(`Account already exists`)
    }

    const salt = bcrypt.genSaltSync(10)

    const hash = bcrypt.hashSync(password, salt)

    let response = await db.register([username, hash, `http://robohash.org/${username}`])

    let newUser = response[0]

    delete newUser.password

    req.session.user = newUser

    res.status(200).send(req.session.user)
  },
  login: async (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body

    let users = await db.getUsersByUsername([username])
    let user = users[0]

    if(!user) {
      return res.status(401).send(`Account does not exist`)
    }

    let isAuthenticated = bcrypt.compareSync(password, user.password)

    if(!isAuthenticated) {
      return res.status(401).send(`Username or password incorrect`)
    }

    delete user.password

    req.session.user = user

    res.status(200).send(user)
  },

  logout: (req, res) => {
    req.session.destroy()

    res.sendStatus(200)
  }
}