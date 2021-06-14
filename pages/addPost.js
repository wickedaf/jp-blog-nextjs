import React from "react";

const AddPost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      body: e.target.description.value,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Post Added");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <form className="col-md-6" onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="postTitle"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postDescription" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              name="description"
              id="postDescription"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
