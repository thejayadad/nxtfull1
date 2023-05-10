// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {connectToDatabase} = require("../../lib/mongodb")

const ObjectId = require('mongodb').ObjectId 
export default function handler(req, res) {
    switch(req.method){
      case 'GET':{
        return getPosts(req,res)
      }
      case 'POST': {
        return addpost(req,res)
      }
    }

    //insert post to mongodb

    async function addpost(req,res){
      try {
        let {db} = await connectToDatabase()
        await db.collection('posts')
                .insertOne(JSON.parse(req.body))

        return res.json({
          message: 'Post Added Successfully',
          success: true
        })
        
      } catch (error) {
        return res.json({
          message: new Error(error).message,
          success: false
        })
        
      }
    }

    async function getPosts(req,res){
      try {
        
        let {db} = await connectToDatabase()

        let posts = await db.collection('posts')
                          .find({})
                          .toArray()

        return res.json({
          message:JSON.parse(JSON.stringify(posts)),
          success:true
        })
      } catch (error) {
        return res.json({
          message: new Error(error).message,
          success: false,
        })
      }
    }
  }
  