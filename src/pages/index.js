import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import heroPic from "../images/studying.png";

import courses from "../data/courses";

// import UserCard from "../components/UserCard/UserCard";

import { navigate } from "gatsby";

const IndexPage = () => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    const abort = new AbortController();

    fetch(
      "http://localhost:8000/api/courses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: "#all",
        }),
      },
      abort.signal
    )
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      abort.abort();
    };
  }, []);

  return (
    <Layout>
      <Seo title="Home" />
      <section className="py-5 text-center justify-content-center container">
        <div className="col-md-6 mx-auto">
          <img className="img-fluid" src={heroPic} />
        </div>
        <div className="row py-lg-2">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">TutoroX Finder</h1>
            <p className="lead text-muted">Looking for a tutor...?!</p>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Course Subject
          </button>
          <ul
            className="dropdown-menu"
            style={{ maxHeight: 200 + "px", overflowY: "auto" }}
          >
            {courses.length &&
              courses.map((course) => (
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => navigate(`/results`, { state: { course } })}
                  >
                    {course}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
