// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {connectToDatabase} = require("../../lib/mongodb")

const ObjectId = require('mongodb').ObjectId 
export default function handler(req, res) {
    switch(req.method){
      case 'GET':{
        return getPosts(req,res)
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
  