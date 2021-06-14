import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { createContext, useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const NavBarDynamic = dynamic(() => import("../components/NavBar"))

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
      <NavBarDynamic />
      <Component {...pageProps} />
    </BlogContext.Provider>
  );
}

export default MyApp;
