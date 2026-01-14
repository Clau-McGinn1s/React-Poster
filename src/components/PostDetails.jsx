import { useLoaderData, Link, Form } from 'react-router-dom';
import { HiPencilSquare } from "react-icons/hi2";
import { IoTrashBinSharp } from "react-icons/io5";

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.name}</p>
        <p className={classes.text}>{post.content}</p>
        <div className={classes.buttonGroup}>
            <Link to={"/post/" + post.id + "/edit"}><HiPencilSquare size={25}/></Link>
            <Form method='post'>
                <input type="hidden" name="id" value={post.id}/>
                <button className={classes.button}><IoTrashBinSharp size={25}/></button>
            </Form>
        </div>
      </main>
    </Modal>
  );
}

export default PostDetails;