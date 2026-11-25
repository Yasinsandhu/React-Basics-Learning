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
    },
    {
      name: "Saad",
      role: "Aspiring Back-End Developer",
      introduction:
        "I am learning web development and building projects with HTML, CSS, JavaScript and React.",
      image: "/Saad.png",
    },
    {
      name: "Arwa",
      role: "Aspiring Full-Stack Developer",
      introduction:
        "I am learning web development and building projects with HTML, CSS, JavaScript and React.",
      image: "/Arwa.png",
    },
  ];

  return (
    <div className="portfolio">
      {profileData.map((data) => (
        <div key={data.name} className="profile-row">
          <Profile {...data} />
          <About {...data} />
        </div>
      ))}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
