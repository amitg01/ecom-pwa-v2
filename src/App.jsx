import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProductList from "./pages/ProductList";
import DashOutlet from "./components/DashOutlet";
import ProfileOutlet from "./components/ProfileOutlet";
import ProductPage from "./pages/ProductPage";
import Me from "./pages/Me";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashOutlet />}>
        <Route index element={<ProductList />} />
        <Route path="products">
          <Route index element={<ProductList />} />
          <Route path=":productId" element={<ProductPage />} />
        </Route>
        <Route path="me" element={<ProfileOutlet />}>
          <Route index element={<Me />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
