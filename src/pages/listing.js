import React from "react";
import Icon from "../components/Icon";

import Layout from "../components/layout";
import Seo from "../components/seo";

import * as styles from "./listing.module.scss";

export default function listingPage({ location }) {
  const user = location.state.user;

  const stars = [];

  for (let index = 0; index < user.rating; index++) {
    stars.push("*");
  }

  return (
    <Layout>
      <Seo title={`${user.name}'s Listing`} />
      <div className="container my-5">
        <div className="row">
          <div
            className={`col-lg-3 ${styles.centerItem} ${styles.paddingBottom2rem}`}
          >
            <img
              src={user.image}
              width="200"
              height="200"
              class="rounded-circle border border-2 border-primary ms-lg-5"
              alt="..."
            ></img>
          </div>
          <div className={`col-lg-6 ${styles.lgTextCenter}`}>
            <div className="row mb-4">
              <h1>{user.name}</h1>
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
          <div
            className={`col-sm-3 mx-auto pt-2 text-end ${styles.lgTextCenter}`}
          >
            <div className="row">
              <h1>${user.rate}</h1>
            </div>
            <div className="row">
              <h5>per hour</h5>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-8">
            <div className="row ps-lg-5">
              <h3>Teaches...</h3>
              <div className="row ps-5">
                <div className="d-flex flex-row flex-wrap">
                  {user.subjects.map((subject) => (
                    <div
                      className={`${styles.subject}`}
                      style={{
                        backgroundColor: user.specialSubjects.includes(subject)
                          ? "var(--primary)"
                          : "var(--secondary)",
                      }}
                    >
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row mt-5 px-lg-5">
              <h3>About Me</h3>
              <p className="ps-5">{user.bio}</p>
            </div>
          </div>
          <div className={`col-lg-4 text-end ${styles.lgTextStart}`}>
            <h4>Availability</h4>
            <div
              className={`pt-2 fs-4 text-end ${styles.lgTextStart} ${styles.paddingLeft2rem}`}
            >
              {user.availability}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
