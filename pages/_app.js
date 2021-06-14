import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { createContext, useCallback, useEffect, useState } from "react";
import {NavBar} from "../components/navBar";

export const BlogContext = createContext();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data));
  // }, []);

    const fetchUserAPI = useCallback(async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    response = await response.json()
    setUser(response)
  }, [])


  useEffect(() => {
    fetchUserAPI();
  }, [fetchUserAPI]);

  return (
    <BlogContext.Provider
      value={{ userData: [user, setUser], postData: [post, setPost] }}
    >
      <NavBar></NavBar>
      <Component {...pageProps} />
    </BlogContext.Provider>
  );
}

export default MyApp;
