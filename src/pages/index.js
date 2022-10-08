import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SearchBar from "../components/SearchBar";

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
      <SearchBar />
    </section>
  </Layout>
);

export default IndexPage;
