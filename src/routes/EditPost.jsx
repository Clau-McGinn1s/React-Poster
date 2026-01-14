import classes from './EditPost.module.css';
import Modal from '../components/Modal';
import { Link, Form } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';


function EditPost(){
    const basePost = useLoaderData();
    return (
        <Modal>
           <Form method="post" className={classes.form}>
                <input type="hidden" name="id" value={basePost.id}/>
                <p>
                    <label htmlFor="content">Text</label>
                    <textarea id="content" name="content" required rows={3} defaultValue={basePost.content}></textarea>
                </p>

                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" required defaultValue={basePost.name}/>
                </p>

                <p className={classes.actions}>
                    <Link to=".." >Cancel</Link>
                    <button type="submit">Update Post</button>
                </p>
            
            </Form>
        </Modal>
    )
}

export default EditPost;