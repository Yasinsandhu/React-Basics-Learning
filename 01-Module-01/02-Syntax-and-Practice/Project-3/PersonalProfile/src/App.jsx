import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  const profileData = [
    {
      name: "Eshal",
      role: "Aspiring Front-End Developer",
      introduction:
        "I am learning web development and building projects with HTML, CSS, JavaScript and React.",
      image: "/Eshal.png",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      projects: [
        {
          projectName: "Student Report Cards",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus harum voluptatibus, fuga quae officia repellendus. Deserunt porro quod beatae. Ipsa.",
          image: "/keyboard.jpg",
        },
      ],
      contact: {
        email: "mailto:someone@example.com",
        linkedin: "https://www.linkedin.com",
        github: "https://www.github.com",
      },
    },
    // {
    //   name: "Saad",
    //   role: "Aspiring Back-End Developer",
    //   introduction:
    //     "I am learning web development and building projects with HTML, CSS, JavaScript and React.",
    //   image: "/Saad.png",
    // },
    // {
    //   name: "Arwa",
    //   role: "Aspiring Full-Stack Developer",
    //   introduction:
    //     "I am learning web development and building projects with HTML, CSS, JavaScript and React.",
    //   image: "/Arwa.png",
    // },
  ];

  return (
    <div className="portfolio">
      {profileData.map((data) => (
        <div key={data.name} className="profile-row">
          <Profile {...data} />
          <About {...data} />
          <Contact contact={data.contact} />
        </div>
      ))}
      <Skills />
      <Projects />
    </div>
  );
}
export default App;
