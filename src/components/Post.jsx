import styles from "./Post.module.css";
import { Link } from "react-router-dom";

function Post({name = "Anon", content = "No content", id}) {  
    return(
        <li className={styles.post}>
            <Link to={"post/" + id}>
                <p className={styles.name}>{name}</p>
                <p className={styles.content}>{content}</p>
            </Link> 
        </li>
    )
}

export default Post