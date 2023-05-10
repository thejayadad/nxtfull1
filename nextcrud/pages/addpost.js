import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

const addpost = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    

  return (
    <div>
        <Navbar />
        <section>
            <form>
                <input
                    name='title'
                    value=""
                    placeholder='Title'
                />
                <textarea
                name='content'
                value=""
                placeholder='Posts'         
                
                />
                 <button type='submit'>Add Post</button>               
            </form>
        </section>


    </div>
  )
}

export default addpost