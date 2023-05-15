import { AppShell, Navbar, Button, Group } from "@mantine/core";
import CustomNavbar from './components/CustomNavbar/CustomNavbar.js';
import "./App.css";

// Mantine : Une bibliothèque de composants React complète

function App() {
  return (
    <AppShell
    navbar={
      <Navbar
        width={{ base: 300 }}
        height='100vh'
      >
        <CustomNavbar />
      </Navbar>
    }
  >
    {/* Your application here */}
  </AppShell>
  );
}

export default App;
