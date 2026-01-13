import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  
  function showModal(){
    setModalIsVisible(true);
  }

  function closeModal(){
    setModalIsVisible(false)
  }

  return (
    <main>
      <>
        <MainHeader onCreatePost = {showModal}/>  
        <PostList 
          onClickBg = {closeModal} 
          showModal = {modalIsVisible} 
          onPostCancel = {closeModal} 
        />
      </>
    </main>
  );
}

export default App
