import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

function NewPost(){

    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="content">Text</label>
                    <textarea id="content" name="content" required rows={3}></textarea>
                </p>

                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" required />
                </p>

                <p className={classes.actions}>
                    <Link to=".." >Cancel</Link>
                    <button type="submit">Submit</button>
                </p>
            
            </Form>
        </Modal>
    );
}

export default NewPost;

