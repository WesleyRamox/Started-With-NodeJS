const db = require('./db');

const Post = db.sequelize.define('posts', {
  titulo: {
    type: db.Sequelize.STRING
  },
  conteudo: {
    type: db.Sequelize.TEXT
  }
});

module.exports = Post;

// Post.sync({force: true})