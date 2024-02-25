import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Store from './store/index'
import { Provider } from 'react-redux'
import { Box } from "@mui/material";

import UserRoutes from "./protected/UserRoutes";
import AgentRoutes from "./protected/AgentRoutes";
import Dashboard from "./agent/Dashboard";

import Navbar from "./components/Navbar";

import Downline from "./agent/Downline";
import Account from "./agent/Account";
import Login from "./user/Login";
import CasinoList from "./user/CasinoList";
import AgentLogin from "./agent/Login";
import TeenPatti from "./games/TeenPatti";


function App() {

  return (
    <Provider store={Store}>
      <Router>
        <Navbar />
        <Box sx={{}}>
          <Routes>
            <Route path='/login' exact element={<Login />} />
            <Route path='/agent/login' exact element={<AgentLogin />} />
            <Route path='/' exact element={<CasinoList />} />
            <Route path='/game/teen-patti' exact element={<UserRoutes><TeenPatti /></UserRoutes>} />

            < Route path='/agent/dashboard' exact element={<AgentRoutes><Dashboard /></AgentRoutes>} />
            <Route path='/agent/downline' exact element={<AgentRoutes><Downline /></AgentRoutes>} />
            {/* <Route path='/agent/downline' exact element={<><Downline /></>} /> */}
            <Route path='/agent/account' exact element={<AgentRoutes><Account /></AgentRoutes>} />
            {/* <Route component={<NotFound />} /> */}
          </Routes>
        </Box>
      </Router>
    </Provider>

  );
}

export default App;
