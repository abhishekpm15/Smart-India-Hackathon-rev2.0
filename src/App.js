import "./App.css";
import HomePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/SignupPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import MentorPage from "./pages/MentorPage";
import Feeds from "./pages/Feeds";
import Blog from "./pages/Blog";
import Badges from "./pages/Badges";
import Questions from "./pages/Questions";
import Communities from "./pages/Communities";
import Events from "./pages/Events";
import GroupPage from "./pages/GroupPage";
import DashBoard2 from "./pages/DashBoard2";
import Events2 from "./pages/Events2";
import Feeds2 from "./pages/Feeds2";
import Questions2 from "./pages/Questions2";
import Communities2 from "./pages/Communities2";
import Blog2 from "./pages/Blog2";
import Badges2 from "./pages/Badges2";
import GroupPage2 from "./pages/GroupPage2";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/SignupPage" element={<SignupPage />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/DashBoard2" element={<DashBoard2 />} />
            <Route path="/MentorPage" element={<MentorPage />} />
            <Route path="/Feeds" element={<Feeds />} />
            <Route path="/Feeds2" element={<Feeds2/>} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blog2" element={<Blog2 />} />
            <Route path="/Badges2" element={<Badges2 />} />
            <Route path="/Badges" element={<Badges />} />
            <Route path="/Questions" element={<Questions/>} />
            <Route path="/Questions2" element={<Questions2  />} />
            <Route path="/Communities" element={<Communities/>} />
            <Route path="/Communities2" element={<Communities2 />} />
            <Route path="/Events" element={<Events/>} />
            <Route path="/Events2" element={<Events2/>} />
            <Route path="/GroupPage2" element={<GroupPage2/>} />
            <Route path="/GroupPage" element={<GroupPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
