import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { createContext, useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const NavBarDynamic = dynamic(() => import("../components/NavBar"));

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
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    response = await response.json();
    setUser(response);
  }, []);

  useEffect(() => {
    fetchUserAPI();
  }, [fetchUserAPI]);

  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
        integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
        crossorigin="anonymous"
      ></script>
      <BlogContext.Provider
        value={{ userData: [user, setUser], postData: [post, setPost] }}
      >
        <NavBarDynamic />
        <Component {...pageProps} />
      </BlogContext.Provider>
    </>
  );
}

export default MyApp;
