import { Routes, Route, BrowserRouter } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { DogFormPage } from "./pages/DogFormPage";
import { ListMyDogs } from "./pages/ListMyDogs";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { EditDog } from "./pages/EditDog";
import { DeleteDog } from "./pages/DeleteDog";
import { NotFoundPage } from "./pages/NotFoundPage";

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
            <Route
              path="edit-dog/:id"
              element={
                <ProtectedRoute>
                  <EditDog />
                </ProtectedRoute>
              }
            />
            <Route
              path="delete-dog/:id"
              element={
                <ProtectedRoute>
                  <DeleteDog />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
