import styles from "./Post.module.css";

function Post({name = "Anon", content = "No content"}) {  
    return(
        <li className={styles.post}>
            <p className={styles.name}>{name}</p>
            <p className={styles.content}>{content}</p>
        </li>
    )
}

export default Post