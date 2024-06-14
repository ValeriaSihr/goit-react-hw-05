import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css'

const Layout = () => {
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

export default Layout;