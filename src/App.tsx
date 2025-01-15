import MainLayout from "./Components/layout/MainLayout";
import ProtectedRoute from "./Components/layout/ProtectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    </>
  );
}

export default App;
