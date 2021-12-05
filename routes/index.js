const express = require("express")

const api = require("./api.js")

const app = express.Router()

// API ENDPOINT CODE WILL GO HERE

app.get("/", function(req, res) {
    api.getAllBlogPosts(function(apiResponse) {
      res.json(apiResponse)
    })
  })

  // app.get("/posts/get-blog-posts-by-tag", function(req, res) {
  //   api.getBlogPostsByTag(req.query.tag, function(apiResponse) {
  //     res.json(apiResponse)
  //   })
  // })

  // app.get("/posts/get-five-newest-posts", function(req, res) {
  //   api.getFiveNewestPosts(function(apiResponse) {
  //     res.json(apiResponse)
  //   })
  // })

  // app.get("/posts/get-blog-post-by-url-title", function(req, res) {
  //   api.getBlogPostByUrlTitle(req.query.urlTitle, function(apiResponse) {
  //     res.json(apiResponse)
  //   })
  // })

module.exports = app