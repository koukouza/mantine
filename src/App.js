import { AppShell, Navbar, Header, Aside, Footer } from "@mantine/core";
import "./App.css";

// Mantine : Une bibliothèque de composants React complète

function App() {
  return (
    <AppShell
      navbar={
        <Navbar width={{ base: 300 }} height="100vh">
          {/* Navbar Content */}
        </Navbar>
      }
    >
      {/* Your application here */}
    </AppShell>
  );
}

export default App;
