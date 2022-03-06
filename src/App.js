import React, {useState} from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Logout from './components/Logout';
import NewQuestion from "./components/NewQuestion";
import NotFound from "./components/NotFound";
import Question from "./components/Question";
import QuestionsList from "./components/QuestionsList";
import Signup from "./components/Signup";

export const UserContext = React.createContext(null);

function App() {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<QuestionsList />} />
          <Route path="questions">
            <Route path=":questionId" element={<Question />} />
            <Route path="new" element={<NewQuestion />} />
            <Route index element={<QuestionsList />} />
          </Route>
          <Route path="signup" element={<Signup />}/>
          <Route path="logout" element={<Logout />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
