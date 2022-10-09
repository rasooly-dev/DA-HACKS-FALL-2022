import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import UserCardSpan from "../components/UserCardSpan/UserCardSpan";

const ResultsPage = ({ location }) => {

  const [courses, setCourses] = React.useState([]);
  const [tutors, setTutors] = React.useState([]);

  const [selectedCourse, setSelectedCourse] = React.useState("");

  React.useEffect(() => {
    setSelectedCourse(location.state?.course);
  }, [location]);

  React.useEffect(() => {
    const abort = new AbortController();

    fetch("http://localhost:8000/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: '#all'
      }),
    } ,abort.signal)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      abort.abort();
    };
  }, []);

  React.useEffect(() => {
    const abort = new AbortController();

    fetch("http://localhost:8000/api/tutors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: selectedCourse,
        action: 'search-subject'
      }),
    } ,abort.signal)
      .then((res) => res.json())
      .then((data) => {
        console.log('TUTOR API: ', data);
        setTutors(data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      abort.abort();
    };
  }, [selectedCourse]);


  return (
  <Layout>
    <Seo title="Search Results" />
    <div className="container my-5">
      <div className="row">
        <h1>Search results for "{selectedCourse}"...</h1>
      </div>
      <div className="row ps-2 text-center">
        <div class="dropdown">
          <button
            class="btn btn-outline-secondary dropdown-toggle ps-5 pe-5 text-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Subject
          </button>
          <ul 
          class="dropdown-menu"
          style={{ maxHeight: 200 + "px", overflowY: "auto" }}
          >
            {courses.map((subject) => (
              <li
                onClick={() => setSelectedCourse(subject)}
              >
                <a class="dropdown-item">
                  {subject}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row mx-3 mt-5">

        {
        tutors.length > 0 && tutors.map((tutor) => (
          <UserCardSpan
            user={tutor}
          />
        ))
        }
      </div>
    </div>
  </Layout>
  )
};

export default ResultsPage;
