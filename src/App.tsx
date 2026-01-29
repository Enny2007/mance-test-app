import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UseCaseDetail from "./pages/UseCaseDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-cases/:slug" element={<UseCaseDetail />} />
      </Routes>
    </>
  );
}

export default App;
