import styles from './Header.module.css';
import Search from './Search/Search';

const Header = () => {
  return (
    <header>
      <div className={styles.Header}>
        <Search />
      </div>
    </header>
  );
};

export default Header;
