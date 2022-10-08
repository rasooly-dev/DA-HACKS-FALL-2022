import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SearchBar from "../components/SearchBar";

const TEST__SUBJECTS = [
  { abv: "ADMJ", name: "Administration of Justice" },
  { abv: "AFAM", name: "African American Studies" },
  { abv: "ANTH", name: "Anthropology" },
];
const STUDY_TYPES = ["Tutoring", "Study Groups"];

const TEST__USERS = [
  { name: "Barack Obama", subject: "Politics", rate: "7" },
  { name: "Beyonce Knowles", subject: "Music", rate: "35" },
  { name: "Niel DeGrasse Tyson", subject: "Physics", rate: "7.50" },
];

const ResultsPage = () => (
  <Layout>
    <Seo title="Search Results" />
    <div className="container my-5">
      <div className="row">
        <h1>Search results for ""...</h1>
      </div>
      <SearchBar />
      <div className="row row-cols-3 ps-2">
        <div class="dropdown">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Study Type
          </button>
          <ul class="dropdown-menu">
            {STUDY_TYPES.map((type) => (
              <li>
                <a class="dropdown-item" href="#">
                  {type}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Subject
          </button>
          <ul class="dropdown-menu">
            {TEST__SUBJECTS.map((subject) => (
              <li>
                <a class="dropdown-item" href="#">
                  {subject.abv} - {subject.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row mx-3 mt-5">
        {TEST__USERS.map((user) => (
          <p className="card px-4 py-5">
            {user.name} - {user.subject} .......... ${user.rate} per hour
          </p>
        ))}
      </div>
    </div>
  </Layout>
);

export default ResultsPage;
