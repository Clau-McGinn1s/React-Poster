import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import './index.css'
import NewPost from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import Posts from './routes/Posts.jsx'
import PostDetails from './components/PostDetails.jsx'
import Loading from './components/Loading.jsx'

import { loader as postsLoader } from './loaders/posts.loader.js'
import { action as newPostAction } from './actions/NewPost.action.js'
import { loader as postDetailsLoader } from './loaders/PostDetails.loader.js'

const routes = [{
  path: '/', 
  element: <RootLayout/>, 
  children:[{ 
    path: '/', 
    element: <Posts />,
    loader: postsLoader, 
    children:[{ 
      path: '/create-post', 
      element: <NewPost />,
      action: newPostAction
    },
    {
      path:'/post/:id',
      element: <PostDetails />, 
      loader : postDetailsLoader
    }]
  }],
}];

const router = createBrowserRouter(
  routes,
  {
    hydrateFallbackElement: <Loading />
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
