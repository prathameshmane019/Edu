"use client";
import { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import hero from "../../src/assets/img/hero-img.png";
import Image from "next/image";
import feedback from "../../src/assets/img/feedback.svg";
import student from "../../src/assets/img/student.svg";
import col from "../../src/assets/img/col.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const toRotate = ["EduNexus", "Smart Education", "Web Development"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner flex flex-row justify-center" id="home">
      <Container>
        <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
            {({ isVisible }) => (
              <>
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1 className="ml-28">
                    {`Hi! Welcome to`}{" "}
                    <span
                      className="txt-rotate"
                      dataperiod="1500"
                      data-rotate='[ "Abhiyantrika", "Web Development", "App Development" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="ml-14">
                    Discover an online hub where students from Indian
                    universities and colleges showcase their projects. Fostering
                    collaboration, innovation, and academic integrity, we unite
                    academias brightest minds.
                  </p>
                  <div className="hero min-h-screen bg-200 mt-36">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                      <Image
                        src={hero}
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt=""
                      />
                      <div>
                        <h1 className="text-5xl font-bold">Add Projects</h1>
                        <p className="py-6">
                          Showcase of Brilliance: Dive into a diverse pool of
                          innovative projects from students across various
                          domains. Explore by title, domain, or tech used. Every
                          project is a testament to the creativity and
                          dedication of our academic community. Whether you are
                          seeking inspiration or collaborative opportunities,
                          this section is your gateway to academic excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hero min-h-max bg-200 mt-10">
                    <div className="hero-content flex-col lg:flex-row">
                      <Image
                        src={feedback}
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt=""
                      />
                      <div>
                        <h1 className="text-5xl font-bold mx-4">
                          Chat with your Vibe
                        </h1>
                        <p className="py-6">
                          Connect, collaborate, and share ideas in real-time
                          with our new "Chatting with Community" feature. Dive
                          into direct messages, join topic-based group chats, or
                          seek instant academic support. Whether you're
                          discussing projects or sharing resources, this feature
                          brings our academic community closer than ever.
                          Discover a vibrant space of knowledge and
                          collaboration today!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hero min-h-screen bg-200 mt-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                      <Image
                        src={student}
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt=""
                      />
                      <div>
                        <h1 className="text-5xl font-bold">Explore Projects</h1>
                        <p className="py-6">
                          See Our Work: Look at different projects students have
                          made. Search by topic or what tools they used. These
                          projects show the hard work and ideas of our students.
                          If you want to see what we're learning and creating,
                          check this section out.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hero min-h-max bg-200 mt-10">
                    <div className="hero-content flex-col lg:flex-row">
                      <Image
                        src={col}
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt=""
                      />
                      <div>
                        <h1 className="text-5xl font-bold">Get Feedbacks</h1>
                        <p className="py-6">
                          Explore our projects and offer valuable insights with
                          our enhanced "Feedbacks for Projects" feature. Whether
                          it's constructive criticism, words of appreciation, or
                          suggestions for improvement, your voice matters.
                          Engage directly with creators, and contribute to our
                          community's continuous growth. Dive into a dynamic
                          space of interactive learning and feedback today!
                        </p>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold mt-32 text-center">
                    FAQ's
                  </h1>
                  <div
                    tabIndex={0}
                    className="collapse border border-base-300 bg-200 mt-10"
                  >
                    <div className="collapse-title text-xl font-medium">
                      What is this platform about?
                    </div>
                    <div className="collapse-content">
                      <p>
                        It is an integrated platform that connects ministries,
                        universities, colleges, and students, allowing
                        streamlined project submissions, feedback, and community
                        interactions.
                      </p>
                    </div>
                  </div>

                  <div
                    tabIndex={0}
                    className="collapse border border-base-300 bg-200 mt-10"
                  >
                    <div className="collapse-title text-xl font-medium">
                      How to connect with community?
                    </div>
                    <div className="collapse-content">
                      <p>
                        We have community based groups(based on tech domains)
                        along with video calling
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="collapse border border-base-300 bg-200 mt-10"
                  >
                    <div className="collapse-title text-xl font-medium">
                      Why should i use this platform?
                    </div>
                    <div className="collapse-content">
                      <p className="pl-8">
                        There are variuos reasons for your involvement on our
                        platform
                        <br />
                        1. Project Discussion
                        <br />
                        2. Feedback Mechanism
                        <br />
                        3. Group Chatting and Video Coferencing
                        <br />
                        and many more ...
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </TrackVisibility>
        </Col>
      </Container>
    </section>
  );
};
