const Header = ({ user }) => {
  return (
    <header>
      <h1>LinkDone</h1>

      <nav>
        <ul>
          <li>Accueil</li>
          <li>Les offres d'emploi</li>
        </ul>
      </nav>

      <p>
        Bonjour {user.firstName} {user.lastName}
      </p>
    </header>
  );
};

export default Header;
