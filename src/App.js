import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Main from "./Layout/Main";
import Friends from "./Components/Friends/Friends";
import FriendDetails from "./Components/FriendDetails/FriendDetails";
import Post from "./Components/Posts/Post";
import PostDetails from "./Components/PostDetails/PostDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <About></About> },
        { path: "/About", element: <About></About> },
        { path: "/home", element: <Home></Home> },
        {
          path: "/friends",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },

          element: <Friends></Friends>,
        },
        {
          path: "/friend/:friendId",
          loader: async ({ params }) => {
            // console.log(params.friendId);
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
          element: <FriendDetails></FriendDetails>,
        },
      ],
    },
    { path: "products", element: <Products></Products> },
    { path: "*", element: <div>this route not found 404</div> },
    {
      path: "posts",
      loader: async () => {
        return fetch("https://jsonplaceholder.typicode.com/posts");
      },
      element: <Post></Post>,
    },
    {
      path: "/post/:postId",
      loader: async ({ params }) => {
        return fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.postId}`
        );
      },
      element: <PostDetails></PostDetails>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
