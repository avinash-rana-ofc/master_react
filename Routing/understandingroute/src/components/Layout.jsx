import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul className="flex gap-4 bg-neutral-50 shadow-md p-5 font-semibold">
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? "text-blue-500 font-bold": ""}>Home</NavLink>
        </li>
        {/* <li>
          <NavLink to="/products" className={({isActive}) => isActive ? "text-blue-500 font-bold": ""}>Products</NavLink>
        </li> */}
        <li>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-500 font-bold": ""}>About</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
