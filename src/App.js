import { Routes, Route } from 'react-router-dom';
import './App.css';
import CreateQuestion from './components/CreateQuestion';
import Layout from './components/Layout';
import Logout from './components/Logout';
import NotFound from './components/NotFound';
import QuestionsList from './components/QuestionsList';
import ReadQuestion from './components/ReadQuestion';
import Signup from './components/Signup';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<QuestionsList />} />
        <Route path="signup" element={<Signup />} />
        <Route path="logout" element={<Logout />} />
        <Route path="questions">
          <Route index element={<QuestionsList />} />
          <Route path=":id" element={<ReadQuestion />} />
          <Route path="new" element={<CreateQuestion />} />
        </Route>
      
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
