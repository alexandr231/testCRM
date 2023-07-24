import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Tasks from './pages/Tasks/Tasks';
import { useAppDispatch } from './redux/store';
import {
  ACTIVES_ROUTE,
  CLIENTS_ROUTE,
  HOME_ROUTE,
  KNOWLEDGE_ROUTE,
  SETTINGS_ROUTE,
  USERS_ROUTE,
} from './utils/routeConstants';
import { fetchPriorities, fetchStatuses } from './redux/TasksSlice/slice';
import Knowledge from './pages/Knowledge/Knowledge';
import Users from './pages/Users/Users';
import Clients from './pages/Clients/Clients';
import Actives from './pages/Actives/Actives';
import Settings from './pages/Settings/Settings';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStatuses());
    dispatch(fetchPriorities());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="width100">
        <Header />
        <main>
          <Routes>
            <Route path={HOME_ROUTE} element={<Tasks />} />
            <Route path={KNOWLEDGE_ROUTE} element={<Knowledge />} />
            <Route path={USERS_ROUTE} element={<Users />} />
            <Route path={CLIENTS_ROUTE} element={<Clients />} />
            <Route path={ACTIVES_ROUTE} element={<Actives />} />
            <Route path={SETTINGS_ROUTE} element={<Settings />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
