import { use } from "react"
import Post from "./Post";

export default function Posts({postPromise}){
     const posts = use(postPromise)
     console.log(posts);
    return(
        <div className="card">
            <h2>All Posts are here : {posts.length}</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}