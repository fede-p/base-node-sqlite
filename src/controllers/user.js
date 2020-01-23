const { userModel } = require('../models')


module.exports = self = {
  async getAllUserResolver(_, rawArgs, context, info) {
    try {
      return  userModel.findAll()
    } catch (error) {
      console.log(error)
      return error
    }
  },

 
  async addUserResolver(_, rawArgs, context, info) {
    try {
      console.log(rawArgs.user)
      userModel.create(rawArgs.user)
      return "addUserResolver andando"
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
