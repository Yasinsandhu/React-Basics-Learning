import Btn from "./components/Btn";
import Keeb from "./components/keeb";
import NumberTest from "./components/NumberTest";
import ParentChild from "./components/ParentChild";
import AgeCheck from "./components/NumberTest";
import FormCheck from "./components/NumberTest";
import { CartCheck } from "./components/NumberTest";
import { BankCheck } from "./components/NumberTest";
import SavedData from "./components/DataCheck";
import SavedProfile from "./components/SavedProfile";

function App() {
  return (
    <div>
      <Btn />
      <Keeb />
      <ParentChild />
      <NumberTest />
      <AgeCheck />
      <FormCheck />
      {/* <CartCheck />
      <BankCheck /> */}
      <SavedData />
      <SavedProfile />
    </div>
  );
}

export default App;
