import axios from "axios";

export async function loader({params}) {
    try {
        const response = await axios.get(("http://localhost:8080/posts/" + params.id));
        return response.data.post;
    } catch (error) {
        console.log(error.response.data);
    }
}