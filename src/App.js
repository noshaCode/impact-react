import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import NewQuestion from "./components/NewQuestion";
import NotFound from "./components/NotFound";
import Question from "./components/Question";
import QuestionsList from "./components/QuestionsList";
import Signup from "./components/Signup";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<QuestionsList />} />
        <Route path="questions">
          <Route path=":questionId" element={<Question />} />
          <Route path="new" element={<NewQuestion />} />
          <Route index element={<QuestionsList />} />
        </Route>
        <Route path="signup" element={<Signup />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
