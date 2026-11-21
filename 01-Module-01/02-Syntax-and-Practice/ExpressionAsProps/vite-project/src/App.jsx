import { Student } from "./ExpressionPorps";

export default function App() {
  const name = "Saad";
  const age = 20;
  const marks = 85;
  const isPresent = true;

  return (
    <div>
      <Student
        name={name}
        age={age}
        marks={marks}
        isPresent={isPresent}
        result={marks >= 50}
      />
      <Student
        name="Ahmad"
        age={16}
        marks={40}
        isPresent={false}
        result={marks >= 50}
      />
    </div>
  );
}
