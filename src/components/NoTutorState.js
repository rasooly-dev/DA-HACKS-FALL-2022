import * as React from "react";

import UserCard from "../components/UserCard/UserCard";

export default function NoTutorState() {
  const [tutors, setTutors] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8000/api/tutors")
      .then((res) => res.json())
      .then((data) => {
        setTutors(
          data
            .filter((item) => {
              return item.rating > 4;
            })
            .map((item) => {
              const newBio = item.bio.substring(0, 135) + "...";
              return {
                ...item,
                bio: newBio,
              };
            })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="my-3 text-center">
        <h3 className="mb-4">No results found for your chosen subject.</h3>
        <h5>Why not try one of our top-rated tutors?</h5>
      </div>
      <div
        style={{
          width: "100%",
        }}
        className="d-flex flex-row flex-wrap justify-content-center"
      >
        {tutors.length &&
          tutors.map((tutor) => (
            // <div className="d-flex flex-row flex-wrap justify-content-center">
            <UserCard user={tutor} />
            // </div>
          ))}
      </div>
    </div>
  );
}
