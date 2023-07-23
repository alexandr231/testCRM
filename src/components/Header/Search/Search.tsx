import styles from './Search.module.css';
import SearchIcon from '../../../assets/img/Search.png';

const Search = () => {
  return (
    <div className={styles.Search}>
      <input
        type="text"
        placeholder="Введите Фамилию, Статус, Приоритет, Тег и т.д. чтобы найти заявки"
      />
      <img src={SearchIcon} alt="search icon" />
    </div>
  );
};

export default Search;
