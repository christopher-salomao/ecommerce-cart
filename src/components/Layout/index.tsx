import { Outlet } from "react-router-dom";
import Header from "../Header";

function Layout() {
  return (
    <>
      <Header />
      <main className="grow-1">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
