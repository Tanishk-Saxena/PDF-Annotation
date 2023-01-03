import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Document from "./pages/Document";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element={<Home />} />
        <Route exact path = "/document1" element={<Document doc='08011' />} />
        <Route exact path = "/document2" element={<Document doc='07937' />} />
        <Route exact path = "/document3" element={<Document doc='07931' />} />
      </Routes>
    </Router>
  );
}

export default App;
