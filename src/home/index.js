import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <main>
        <h2>We are happy to have you here!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/foodmenu">Explore our Food Menu</Link>
      </nav>
    </>
  );
};
