import "./styles.scss";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="https://pokeapi.co/" target="_blank">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="PokeAPI Logo"
            className="navbarImage"
          />
        </a>
      </div>
    </nav>
  );
};
