import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/inventario">Ir al inventario</Link>
    </div>
  );
};

export default Home;
