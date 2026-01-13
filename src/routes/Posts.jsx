import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

function Posts() {
  
  return (
    <main>
      <>
        <Outlet />
        <main>
          <PostList />
        </main>
      </>
    </main>
  );
}

export default Posts
