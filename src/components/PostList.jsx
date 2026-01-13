import classes from "./PostList.module.css"
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import { RiEmotionSadLine } from "react-icons/ri";
import axios from "axios";

function PostList({showModal, onClickBg, onPostCancel}){
    const [posts, updatePosts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    function isFetchingHandler(){
        setIsFetching(false);
    }

    async function addPostHandler(postData){ 
       try {
            const response = await axios.post("http://localhost:8080/posts", postData);
            console.log(response.data.message);
            loadPosts();
       } catch (error) {
            console.log(error.response.data);
       }
    }

    async function loadPosts(){
        try{
            const response = await axios.get("http://localhost:8080/posts");
            updatePosts(response.data.posts);
            isFetchingHandler();
        }catch (error) {
            console.log(error.response.data);
       }
    }

    useEffect(()=>{
        loadPosts();
    }, []);

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
            {!isFetching && posts.length > 0 && (
                <ul className={classes.postList}>
                  {posts.map((post, index) => <Post key={index} name={post.name} content={post.content}/>) }
                </ul>
            )}
            {!isFetching && posts.length === 0 &&(
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
            {isFetching &&(
                <>
                    <p className={classes.loading}>
                        Loading posts...
                    </p>
                </>
                )
            }
            
            
        </>
  )
}


export default PostList;