import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog1 from "./pages/MovieRecommendationBlog";
import Blog2 from "./pages/BeginnerMistakesBlog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route
          path="/blog/What-I-Learned-Building-a-Movie-Recommendation-App-from-Scratch"
          element={<Blog1 />}
        />
        <Route
          path="/blog/Common-Mistakes-I-Made-as-a-Beginner-Developer"
          element={<Blog2 />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
