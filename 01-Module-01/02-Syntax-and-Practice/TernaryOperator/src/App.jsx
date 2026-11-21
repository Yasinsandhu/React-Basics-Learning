import AgeChecker, {
  Result,
  IsLogged,
  GetMessage,
  GetRandomNumber,
  Temperature,
  ShoppingDiscount,
  ExampResult,
  MembershipStatus,
  WelcomeMsg,
  CalculateTotal,
  GenerateNumber,
  ResultMessage,
} from "./Ternary.jsx";

export default function App() {
  return (
    <div>
      <AgeChecker />
      <Result />
      <IsLogged />
      <GetMessage />
      <GetRandomNumber />
      <Temperature />
      <ShoppingDiscount />
      <ExampResult />
      <MembershipStatus />
      <WelcomeMsg />
      <CalculateTotal />
      <GenerateNumber />
      <ResultMessage />
    </div>
  );
}
