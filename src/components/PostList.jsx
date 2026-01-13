import classes from "./PostList.module.css"
import Post from "./Post";
import { RiEmotionSadLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";

function PostList(){
    const posts = useLoaderData()
   
    return (
        <>  
            {posts.length > 0 && (
                <ul className={classes.postList}>
                  {posts.map((post) => <Post 
                    key={post.id}
                    id={post.id} 
                    name={post.name} 
                    content={post.content}/> ) 
                    }
                </ul>
            )}
            {posts.length === 0 &&(
                <>
                    <p className={classes.noPosts}>
                        No posts yet
                        <RiEmotionSadLine size={60}/>
                    </p>
                    <p className={classes.emptyMessage}>
                        Start adding new posts
                    </p>
                </>
            )}
        </>
    )
}


export default PostList;