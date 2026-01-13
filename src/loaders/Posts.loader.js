import axios from "axios";

export async function loader(){
    try {
      const response = await axios.get("http://localhost:8080/posts");
      return response.data.posts;
    } catch (error) {
      console.log(error.response.data);
    }
  } 
