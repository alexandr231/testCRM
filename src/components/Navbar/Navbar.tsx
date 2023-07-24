import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import Actives from '../../assets/img/Actives.png';
import Clients from '../../assets/img/Clients.png';
import Knowledge from '../../assets/img/Knowledge.png';
import Logo from '../../assets/img/Logo.png';
import Requests from '../../assets/img/Requests.png';
import Settings from '../../assets/img/Settings.png';
import Staff from '../../assets/img/Staff.png';
import {
  ACTIVES_ROUTE,
  CLIENTS_ROUTE,
  HOME_ROUTE,
  KNOWLEDGE_ROUTE,
  SETTINGS_ROUTE,
  USERS_ROUTE,
} from '../../utils/routeConstants';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.Navbar}>
      <img src={Logo} alt="logo icon" className={styles.logo} />
      <Link to={KNOWLEDGE_ROUTE}>
        <div
          className={
            pathname === KNOWLEDGE_ROUTE ? `${styles.NavButton} ${styles.active}` : styles.NavButton
          }>
          <img src={Knowledge} alt="Knowledge icon" />
          <p>База знаний</p>
        </div>
      </Link>
      <Link to={HOME_ROUTE}>
        <div
          className={
            pathname === HOME_ROUTE ? `${styles.NavButton} ${styles.active}` : styles.NavButton
          }>
          <img src={Requests} alt="Requests icon" />
          <p>Заявки</p>
        </div>
      </Link>
      <Link to={USERS_ROUTE}>
        <div
          className={
            pathname === USERS_ROUTE ? `${styles.NavButton} ${styles.active}` : styles.NavButton
          }>
          <img src={Staff} alt="Staff icon" />
          <p>Сотрудники</p>
        </div>
      </Link>
      <Link to={CLIENTS_ROUTE}>
        <div
          className={
            pathname === CLIENTS_ROUTE ? `${styles.NavButton} ${styles.active}` : styles.NavButton
          }>
          <img src={Clients} alt="Clients icon" />
          <p>Клиенты</p>
        </div>
      </Link>
      <Link to={ACTIVES_ROUTE}>
        <div
          className={
            pathname === ACTIVES_ROUTE ? `${styles.NavButton} ${styles.active}` : styles.NavButton
          }>
          <img src={Actives} alt="Actives icon" />
          <p>Активы</p>
        </div>
      </Link>
      <Link to={SETTINGS_ROUTE}>
        <div
          className={
            pathname === SETTINGS_ROUTE ? `${styles.NavButton} ${styles.active}` : styles.NavButton
          }>
          <img src={Settings} alt="Settings icon" />
          <p>Настройки</p>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
