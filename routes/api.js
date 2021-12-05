
const moment = require("moment")
const skillModel = require("../models/skills.js")
const showdown = require("showdown")


module.exports = {
  // FUNCTIONS WILL GO HERE
  getAllBlogPosts: function(callback) {
    const now = moment().unix()
  
    skillModel.find()
    .sort()
    .exec(function(error, skills) {
      if (error) {
        callback({getDataError: true})
        console.log(error)
      } else {
        callback({success: true, skills})
      }
    })
  }
  // getBlogPostsByTag: function(tag, callback) {
  //   const now = moment().unix()
  
  //   skillModel.find({tags: tag, dateTimestamp: {$lte: now}}, "title urlTitle dateTimestamp tags thumbnailImageUrl")
  //   .sort({dateTimestamp: -1})
  //   .exec(function(error, skills) {
  //     if (error) {
  //       callback({getDataError: true})
  //     } else {
  //       callback({success: true, skills: skills})
  //     }
  //   })
  // },
  // getFiveNewestPosts: function(callback) {
  //   const now = moment().unix()
  
  //   skillModel.find({dateTimestamp: {$lte: now}}, "title urlTitle dateTimestamp tags thumbnailImageUrl")
  //   .sort({dateTimestamp: -1})
  //   .limit(5)
  //   .exec(function(error, skills) {
  //     if (error) {
  //       callback({getDataError: true})
  //     } else {
  //       callback({success: true, skills: skills})
  //     }
  //   })
  // },
  // getBlogPostByUrlTitle: function(urlTitle, callback) {
  //   skillModel.findOne({urlTitle: urlTitle}).exec(function(error, skill) {
  //     if (error) {
  //       callback({getDataError: true})
  //     } else if (!post) {
  //       callback({notFoundError: true})
  //     } else {
  //       const markdownConverter = new showdown.Converter()
  //       post.markdownContent = markdownConverter.makeHtml(skill.markdownContent)
  
  //       callback({success: true, skill: skill})
  //     }
  //   })
  // }
}