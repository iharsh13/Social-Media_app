const { Posts, Users } = require('../db/models')

async function createNewPost(userId, title, body) {
  const post = await Posts.create({
    title,
    body,
    userId,
  })

  return post
}
async function findAllPosts(query) {
    // TODO: Handle query params
    const posts = await Posts.findAll({
      include: [ Users ]
    })
  
    return posts
  }
  
  module.exports = {
    createNewPost,
    findAllPosts
  }

 