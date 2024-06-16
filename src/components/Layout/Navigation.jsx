import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul>
            <li className={css.navList}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;