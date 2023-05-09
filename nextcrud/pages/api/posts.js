// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {connectToDatabase} = require("../../lib/mongodb")

const ObjectId = require('mongodb').ObjectId 
export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }
  