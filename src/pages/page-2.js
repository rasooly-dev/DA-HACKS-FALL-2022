import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import UserCard from "../components/UserCard/UserCard"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div className="container text-center my-5">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    <div className='d-flex flex-row flex-wrap justify-content-center'>
      <UserCard user={
        {
          name: "John Doe",
          rate: 20,
          bio: `I am a tutor who can help you with math and science. I have a degree in physics and I am currently working on my masters in math.`,
          image: "https://picsum.photos/500",
          specialSubjects: ["Math", "Science"],
          subjects: ["Math", "Science", "English"],
          availability: "M•W•F - 9am-11am"
        }
      }/>

      <UserCard user={
        {
          id:1,
          name: "John Doe",
          rate: 20,
          bio: `I am a tutor who can help you with math and science. I have a degree in physics and I am currently working on my masters in math.`,
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          specialSubjects: ["Math", "Science"],
          subjects: ["Math", "Science", "English", "History", "Chemistry"],
          availability: "T•Th - 10am-11pm"
        }
      }/>

      <UserCard user={
        {
          id: 2,
          name: "John Doe",
          rate: 20,
          bio: `I am a tutor who can help you with math and science. I have a degree in physics and I am currently working on my masters in math.`,
          image: "https://picsum.photos/200",
          specialSubjects: ["Math", "Science"],
          subjects: ["Math", "Science", "English"],
          availability: "W•Su - 5pm-7pm"
        }
      }/>
      </div>
    </div>
  </Layout>
)

export default SecondPage
