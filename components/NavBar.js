import React from 'react';
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            TN Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex">
              <li className="nav-item">
                <Link
                  className="text-decoration-none text-white"
                  href="/addPost"
                >
                  Add Post
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="text-decoration-none text-white"
                  href="/allUser"
                >
                  All User
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="text-decoration-none text-white"
                  href={`/profile/2`}
                >
                  User - 2
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;