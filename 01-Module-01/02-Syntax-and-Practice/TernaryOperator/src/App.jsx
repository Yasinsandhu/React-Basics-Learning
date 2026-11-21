import AgeChecker, {
  Result,
  IsLogged,
  GetMessage,
  GetRandomNumber,
} from "./Ternary.jsx";

export default function App() {
  return (
    <div>
      <AgeChecker />
      <Result />
      <IsLogged />
      <GetMessage />
      <GetRandomNumber />
    </div>
  );
}
