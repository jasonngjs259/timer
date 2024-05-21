import { TimerContextProvider } from "./Context/Timer";
import Timer from "./Timer";

function App() {
  return (
    <TimerContextProvider>
      <Timer />
    </TimerContextProvider>
  );
}

export default App;
