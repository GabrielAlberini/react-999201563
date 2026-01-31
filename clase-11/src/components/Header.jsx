import { use, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.css";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [name, setName] = useState("Juan");

  const { logout, user } = useAuth();

  const imagenJuan =
    "https://www.argentina.gob.ar/sites/default/files/foto_01662024.jpg";

  const imagenGabriel = "https://github.com/GabrielAlberini.png";

  const stylesGabriel = { background: "red" };
  const stylesJuan = { background: "blue" };

  // HANDLE -> manejador
  const handleClick = () => {
    setName((valorPrevio) => (valorPrevio === "Gabriel" ? "Juan" : "Gabriel"));
  };

  return (
    <header style={name === "Gabriel" ? stylesGabriel : stylesJuan}>
      <div>
        <img src={name === "Gabriel" ? imagenGabriel : imagenJuan} />
        <h2>Mi nombre es {name}</h2>
      </div>
      <nav>
        <ul>
          {
            user && <li><Link to="/">Home</Link></li>
          }
          <li><Link to="/quienes-somos">Quienes somos?</Link></li>

          {
            !user && <>
              <li><Link to="/registrarme">Registrarme</Link></li>
              <li><Link to="/login">Ingresar</Link></li>
            </>
          }
        </ul>
        {
          user && <button onClick={logout}>Cerrar sesión</button>
        }
      </nav>
      <button onClick={handleClick}>Cambiar usuario</button>
    </header>
  )
}

export { Header }