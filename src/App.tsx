import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Tasks from './pages/Tasks/Tasks';
import { useAppDispatch } from './redux/store';
import { HOME_ROUTE } from './utils/routeConstants';
import { fetchPriorities, fetchStatuses } from './redux/TasksSlice/slice';

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
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
