import { Routes, Route, BrowserRouter } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { DogFormPage } from "./pages/DogFormPage";
import { ListMyDogs } from "./pages/ListMyDogs";
import { ProtectedRoute } from "./routes/protectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="ccpedigree-rebuild">
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route
              path="add-dog"
              element={
                <ProtectedRoute>
                  <DogFormPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-dogs"
              element={
                <ProtectedRoute>
                  <ListMyDogs />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
