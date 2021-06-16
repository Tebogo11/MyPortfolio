import React from "react";
import ProjectCards from "../../Components/ProjectCards";
import "./ProjectCss.css";
const Projects = () => {
  const projects = [
    {
      imageUrl: "./ProjectImages/WebMontioring.png",
      title: "Web Monitoring Site",
      description:
        "This is a website built, to allow users to track the performance of their websites, by checking attributes such; Network traffic, transaction response times, and a number of errors that might pop up on the site.",
      Software:
        "NodeJs, Java, Jmeter, InfluxDB, Grafana, Azure, Virtual Machine, Docker and Docker Compose",
      access: [
        {
          title: "Website",
          Link: "http://webmontiortool.uksouth.cloudapp.azure.com/",
        },
      ],
    },
    {
      imageUrl: "./ProjectImages/GameRanker.PNG",
      title: "Game Ranking Website",
      description:
        "This is a website that allows users get the ranks video games from 1 - 100 based on their sales. Users can change variables to filter the list, these include things such as platforms, genres, or developers.",
      Software: "PHP, MYSQL, Heroku and HTML/CSS",
      access: [
        {
          title: "Website",
          Link: "http://game-ranker.herokuapp.com/Game_Ranker/index.php",
        },
        {
          title: "GitHub",
          Link: "https://github.com/Tebogo11/Game-Ranker-EDD",
        },
      ],
    },
    {
      imageUrl: "./ProjectImages/FaceDetector.PNG",
      title: "Face Detector",
      description:
        "This is a website that allows users to enter images with faces, and allow a machine learning API to detect the face in the image.",
      Software: "React, React Hooks, Redux, NodeJS, Postgres",
      access: [
        {
          title: "Website",
          Link: "https://smartbrainf.herokuapp.com/",
        },
        {
          title: "GitHub",
          Link: "https://github.com/Tebogo11/SmartBrain/tree/master",
        },
      ],
    },
    {
      imageUrl: "./ProjectImages/GuessANumber.jpeg",
      title: "Guess A Number Game",
      description:
        "This is a game that allows the user to select a number, while the application uses a randomizer library to guess a number between the highest last guess and lowest last guess until it gets the right number.",
      Software: "React Native, React Hooks",
      access: [
        {
          title: "GitHub",
          Link: "https://github.com/Tebogo11/GuessANumberApp",
        },
      ],
    },
    {
      imageUrl: "./ProjectImages/ShopApp.jpeg",
      title: "Shopping App",
      description:
        "A standard E-commerce Shopping App with a cart, authencation and the feature for users to add their own products to the store.",
      Software: "React Native, React Hooks,React Navigations, Redux, Firebase",
      access: [
        {
          title: "GitHub",
          Link: "https://github.com/Tebogo11/The_Shop_App",
        },
      ],
    },
    {
      imageUrl: "./ProjectImages/SolentMedical.png",
      title: "Hospital Managament Web Application",
      description:
        "This is a web application built to be used in hospitals. it allows Doctors and staff to edit patient medical records and put appointments on the system. it allows patients to view and make appointments, and also check their medical records. any user can use the system to search for disease information such as Acromegaly.",
      Software: "HTML/CSS, PHP and MySQL",
      access: [
        {
          title: "GitHub",
          Link: "https://github.com/Tebogo11/SolentMedicalAssignment",
        },
        {
          title: "Website",
          Link: "https://solentmedical.herokuapp.com/System/SMS/Views/index.php",
        },
      ],
    },
    {
      imageUrl: "./ProjectImages/PlaceToStay.jpeg",
      title: "Place To Stay",
      description:
        "This is a hotal mobile application built for android, that allows users to save and share hotals, motals and airbnbs that other users to know their location.",
      Software: "HTML/CSS, PHP and MySQL",
      access: [
        {
          title: "GitHub",
          Link: "https://github.com/Tebogo11/MAD_Asignment---Tebogo-Dube",
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="tc">Projects</h1>
      <hr />
      <div className="ContainerProjects ">
        {projects.map((project) => {
          return (
            <div className="CardStyle shadow-2 mh2 mv3">
              <ProjectCards
                image={require(project.imageUrl + "")}
                title={project.title}
                description={project.description}
                Access={project.access}
                Software={project.Software}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
