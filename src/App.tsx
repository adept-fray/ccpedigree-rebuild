import { Routes, Route, BrowserRouter } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ccpedigree-rebuild">
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            {/* Add more routes as needed */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
