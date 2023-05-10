import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";

export default function Home({posts}) {
  return (
    <>  
    <div>
      <Navbar />
      <main>
        <div>
          {posts.length === 0 ? (
            <h2>No Added Posts</h2>
          ) : (
            <ul>
              {posts.map((post,i) => (
                <PostCard post={post} key={i} />
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>

      
    </>
  )
}

export async function getServerSideProps(){
  let dev = process.env.NODE_ENV !== 'production';
  let {DEV_URL} = process.env;

  let response = await fetch(`${dev}/api/posts`)

  let data = await response.json()

  return {
    props:{
      posts: data['message']
    }
  }
}