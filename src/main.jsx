import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, useRouteError} from 'react-router-dom'

import './index.css'
import NewPost from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import Posts from './routes/Posts.jsx'
import PostDetails from './components/PostDetails.jsx'
import EditPost from './routes/EditPost.jsx'
import Loading from './components/Loading.jsx'

import { loader as postsLoader } from './loaders/posts.loader.js'
import { action as newPostAction } from './actions/NewPost.action.js'
import { loader as postDetailsLoader } from './loaders/PostDetails.loader.js'
import { loader as editPostLoader } from './loaders/EditPost.loader.js'
import { action as editPostAction } from './actions/EditPost.action.js'
import { action as deletePostAction } from './actions/DeletePost.action.js'

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
      path: '/post/:id/edit',
      element : <EditPost />,
      loader : editPostLoader,
      action : editPostAction,
      ErrorBoundary: <h2>Error</h2>
    },
    {
      path:'/post/:id',
      element: <PostDetails />, 
      loader : postDetailsLoader,
      action : deletePostAction,
      ErrorBoundary: <h2>Error</h2>
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
