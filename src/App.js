import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import TopBar from "./Scenes/global/topbar";
import SideBar from "./Scenes/global/sidebar";
import DashBoard from "./Scenes/dashboard";
import Team from "./Scenes/team";
import Contacts from "./Scenes/contacts";
import Invoices from "./Scenes/invoices";
import Form from "./Scenes/form";
import Calendar from "./Scenes/calendar";
import FAQ from "./Scenes/faq";
import Bar from "./Scenes/bar";
import Pie from "./Scenes/pie";
import Line from "./Scenes/line";
import Geo from "./Scenes/geography";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSidebar={isSidebar} />


          <main className="content">
            <TopBar setIsSidebar={SideBar} />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geo />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
