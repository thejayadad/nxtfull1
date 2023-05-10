import Navbar from "@/components/Navbar";


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
            <div>
              {posts}
            </div>
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

  let response = await fetch(`${DEV_URL}/api/posts`)

  let data = await response.json()

  return {
    props:{
      posts: data['message']
    }
  }
}