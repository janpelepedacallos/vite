import RootLayout from "./Shared/Layouts/RootLayout";
import { Routes, Route } from 'react-router-dom'
import Dashboard from "./Shared/Components/Dashboard";
import Students from "./Pages/Students";
import Faculty from "./Pages/Faculty";
import Subjects from "./Pages/Subjects";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/students" element={ <Students /> } />
        <Route path="/faculty" element={ <Faculty /> } />
        <Route path="/subjects" element={ <Subjects /> } />
      </Routes>
    </RootLayout>
  )
}

export default App;