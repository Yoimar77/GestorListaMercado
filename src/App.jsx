// market-list/src/App.jsx
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center p-4">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;