import React from "react";
import Icon from "../components/Icon";

import Layout from "../components/layout";
import Seo from "../components/seo";

const TEST__SUBJECTS = ["CIS", "MATH", "SPAN"];
const TEST__LOREM_IPSUM =
  "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const TEST__AVAILABILITY = [
  ["08-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22"],
  [0, 0, 0, 0, 0, 0, 0],
  [2, 2, 1, 1, 2, 2, 0],
  [2, 2, 2, 2, 2, 2, 2],
  [2, 1, 0, 1, 1, 0, 0],
  [2, 2, 1, 2, 1, 0, 0],
  [2, 2, 1, 1, 1, 2, 0],
  [0, 0, 1, 1, 0, 0, 0],
];

export default function listingPage() {
  const TEST__RATING = Math.ceil(Math.random() * 5);
  const TEST__HOURLY_RATE = Math.ceil(Math.random() * 25);
  const stars = [];
  for (let index = 0; index < TEST__RATING; index++) {
    stars.push("*");
  }

  return (
    <Layout>
      <Seo title="TODO: Tutor Name - Tutor" />
      <div className="container my-5">
        <div className="row">
          <div className="col-3">
            <img
              src="https://via.placeholder.com/150"
              class="rounded-circle border border-2 border-primary ms-5"
              alt="..."
            ></img>
          </div>
          <div className="col-6">
            <div className="row mb-4">
              <h1>Tutor Name</h1>
            </div>
            <div className="row">
              <div className="pt-3">
                {stars.map(() => (
                  <span className="me-2">
                    <Icon iconType="star" />
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-3 pt-2 text-center">
            <div className="row">
              <h2>${TEST__HOURLY_RATE}</h2>
            </div>
            <div className="row">
              <h5>per hour</h5>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-8">
            <div className="row ps-5">
              <h4>Teaches...</h4>
              <div className="row ps-5">
                <div>
                  {TEST__SUBJECTS.map((subject) => (
                    <span class="badge rounded-pill text-bg-primary mt-3 me-3">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="row mt-5 px-5">
              <h3>About Me</h3>
              <p className="ps-5">{TEST__LOREM_IPSUM}</p>
            </div>
          </div>
          <div className="col-4">
            <h4>Availability</h4>
            <div className="d-flex">
              {TEST__AVAILABILITY.map((day) => (
                <div className="flex-column text-center">
                  {day.map((availability) => {
                    switch (availability) {
                      case 0:
                        return <Icon className="mb-3" iconType="cross" />;
                      case 1:
                        return <Icon className="mb-3" iconType="triangle" />;
                      case 2:
                        return <Icon className="mb-3" iconType="circle" />;
                      default:
                        return <p className="me-2">{availability}</p>;
                    }
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
