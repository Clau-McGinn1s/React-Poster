import classes from "./PostList.module.css"
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";
import { RiEmotionSadLine } from "react-icons/ri";

function PostList({showModal, onClickBg, onPostCancel}){
    const [posts, updatePosts] = useState([]);

    function addPostHandler(postData){
        updatePosts((existingPosts) => [postData, ...existingPosts]);
    }


    return (
        <>  
            {showModal && (
                <Modal onClickBg={onClickBg} >
                    <NewPost 
                        addPost={addPostHandler}
                        onCancel={onPostCancel}
                    />
                </Modal>
            )}
            {posts.length > 0 ? (
                <ul className={classes.postList}>
                  {posts.map((post, index) => <Post key={index} name={post.name} content={post.content}/>) }
                </ul>
            ): (
                <>
                    <p className={classes.noPosts}>
                        No posts yet
                        <RiEmotionSadLine size={60}/>
                    </p>
                    <p className={classes.emptyMessage}>
                        Start adding new posts
                    </p>
                </>
            ) }
            
        </>
  )
}


export default PostList;