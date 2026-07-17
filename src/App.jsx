import Home from './pages/Home';
import { useTheme } from './hooks/useTheme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div className="min-h-screen bg-slate-50 text-slate-700 dark:bg-slate-950 dark:text-slate-300">
              <Home 
                theme={theme} 
                onToggleTheme={toggleTheme} 
              />
            </div>
          }
        />

        <Route
          path="/admin"
          element={
            <div className="min-h-screen bg-slate-50 text-slate-700 dark:bg-slate-950 dark:text-slate-300">
              <Admin />
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}