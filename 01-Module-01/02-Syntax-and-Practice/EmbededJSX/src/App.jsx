import EmbededStudent, {
  GetImage,
  GetMessage,
  StudentInfo,
} from "./Embeded.jsx";
export default function App() {
  return (
    <div>
      <EmbededStudent />
      <GetMessage />
      <GetImage />
      <StudentInfo />
    </div>
  );
}
