import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({onCancel, addPost}){
    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredName, setEnteredName ] = useState('');

   
    function submitHandler(e){
        e.preventDefault();
        const postData = {
            content : enteredBody,
            name : enteredName
        }

        addPost(postData);
        onCancel();
    }

    function changeBodyHandler(e) {
        setEnteredBody(e.currentTarget.value);
    }

    function changeNameHandler(e){
        setEnteredName(e.currentTarget.value);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler}></textarea>
            </p>

            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={changeNameHandler}/>
            </p>

            <p className={classes.actions}>
               <button type="button" onClick={onCancel} >Cancel</button>
               <button type="submit">Submit</button>
            </p>
         
        </form>
    );
}

export default NewPost;