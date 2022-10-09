import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import heroPic from "../images/studying.png";

import courses from "../data/courses";

// import UserCard from "../components/UserCard/UserCard";

const IndexPage = () => {
  console.log(courses.courses.courses);
  const courseSet = new Set();
  courses?.courses?.courses.forEach((course) => {
    courseSet.add(course["course-id"].split(" ")[0]);
  });
  const courseSetArray = Array.from(courseSet);

  return (
    <Layout>
      <Seo title="Home" />
      <section className="py-5 text-center justify-content-center container">
        <div className="col-md-6 mx-auto">
          <img className="img-fluid" src={heroPic} />
        </div>
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">TutoroX Finder</h1>
          <p className="lead text-muted">Looking for a tutor.?!</p>
            </p>
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
            {courseSetArray.length &&
              courseSetArray.map((course) => (
                <li>
                  <a className="dropdown-item" href="#">
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
