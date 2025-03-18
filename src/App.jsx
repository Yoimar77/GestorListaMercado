// market-list/src/App.jsx
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
        Market List 🛒
      </h1>
      <AppRoutes />
    </div>
  );
};

export default App;
