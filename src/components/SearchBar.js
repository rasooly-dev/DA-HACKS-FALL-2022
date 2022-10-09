import React from "react";

export default function searchBar({ onClick }) {
  return (
    <div class="input-group mb-3 px-2">
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
        onClick={onClick}
      >
        Search
      </button>
    </div>
  );
}
