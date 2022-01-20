import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="inspires-nav-title">
          <h1>Inspires</h1>
          <div className="inspires-nav-contact">
            <a href="/contact">Contatos</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
