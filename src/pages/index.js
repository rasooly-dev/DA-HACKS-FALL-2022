import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">FHDA Tutor Finder</h1>
          <p className="lead text-muted">Find a great tutor or study group!</p>
        </div>
      </div>
      <div class="input-group mb-3 px-5">
        <input
          type="text"
          class="form-control border border-primary"
          placeholder="Subject"
          aria-label="Subject"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-primary px-5"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
