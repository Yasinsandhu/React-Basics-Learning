import Profile from "./components/Profile";

function App() {
  const profileData = [
    {
      name: "Eshal",
      role: "Aspiring Front-End Developer",
      introduction:
        "I am learning web development and building projects with HTML, CSS, JavaScript and React.",
      image: "Eshal.png",
    },
    {
      name: "Saad",
      role: "Aspiring Back-End Developer",
      introduction:
        "I am learning web development and building projects with HTML, CSS, JavaScript and React.",
      image: "Saad.png",
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
    <div>
      {profileData.map((data) => (
        <Profile {...data} key={data.name} />
      ))}
    </div>
  );
}
export default App;
