import Head from "next/head";
import Link from "next/link";
import { useState} from "react";


export default function Home({blogPost}) {
  // const [blogPost, setBlogPost] = useState([]);
  const [limit, setLimit] = useState(5);
  
  const handleLoadMore = () => {
    if (limit <= 100) {
      setLimit(limit + 5);
    }
  };

  // const fetchBlogAPI = useCallback(async () => {
  //   let response = await fetch("https://jsonplaceholder.typicode.com/posts")
  //   response = await response.json()
  //   setBlogPost(response)
  // }, [])


  // useEffect(() => {
  //   fetchBlogAPI();
  // }, [fetchBlogAPI]);



  return (
    <div>
      <Head>
        <title>JP Blog Using NextJs</title>
        <meta name="description" content="JP Blog Using NextJs" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {blogPost.slice(0, limit).map((post, index) => (
              <div key={index} className="card rounded shadow mb-4">
              <div className="card-header w-100">{post.title}</div>
              <div className="card-body text-secondary">
                <p className="card-text">
                  {post.body}
                </p>
              </div>
            </div>
            ))}
            <button
              disabled={limit >= 100}
              onClick={handleLoadMore}
              variant="contained"
              type="button"
              className="btn btn-dark form-control"
            >
              Load More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await res.json()
  return { blogPost: json }
}
