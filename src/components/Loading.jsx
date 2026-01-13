import { IoReloadOutline } from "react-icons/io5";
import classes from './Loading.module.css';

function Loading(){

    return (
        <>
            <p className={classes.loading}>
                <p>Loading...</p>
                <IoReloadOutline size={50}/>
            </p>
        </>        
    );

}

export default Loading;