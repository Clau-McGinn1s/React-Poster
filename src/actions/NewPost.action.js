import axios from "axios";
import { redirect } from "react-router-dom";

export async function action({request}){
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    try {
        const response = await axios.post("http://localhost:8080/posts", postData);
        console.log(response.data.message);
    } catch (error) {
        console.log(error.response.data);
    }
    return redirect('/');
}


