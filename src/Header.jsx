const Header = ({ user, currentDate }) => {
  return (
    <header>
      <img
        src="https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1712016000&semt=sph"
        alt="dbz"
      />
      <p>
        Bonjour {user.firstName} {user.lastName}
      </p>
      <p>Date du jour : {currentDate}</p>
    </header>
  );
};

export default Header;
