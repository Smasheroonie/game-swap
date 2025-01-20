import { Route, Routes } from "react-router-dom"; // Ensure you are using react-router-dom v6
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToggleMode } from "./components/ToggleMode";
import Home from "./pages/Home";
import BrowseGames from "./pages/BrowseGames";
import Header from "./components/Header";
import GamePage from "./pages/GamePage";
import MapPage from "./pages/MapPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfileSetup from "./pages/UserProfileSetup";
import UserProfilePage from "./pages/UserProfilePage";
import UserList from "./components/UserList";
import Footer from "./components/Footer";
import UserProfileTemp from "./pages/UserProfileTemp";
import Messages from "./components/Messages";

function App() {
  return (
    <div>
      <Header />
      <main id="main-container">
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <ToggleMode />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* Dynamic Route for GamePage */}
            <Route path="/game/:game_slug" element={<GamePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/browse-games" element={<BrowseGames />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user-profile-setup" element={<UserProfileSetup />} />
            <Route path="/user-profile" element={<UserProfilePage />} />
            <Route path=":user_id/profile" element={<UserProfileTemp />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/messages/:username" element={<Messages />} />
          </Routes>
        </ThemeProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
