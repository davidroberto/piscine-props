const Profil = ({ user }) => {
  return (
    <section>
      <p>Nom : {user.firstName}</p>
      <p>Prénom : {user.lastName}</p>
      <p>Age : {user.age}</p>
      <p>Job : {user.job}</p>
    </section>
  );
};

export default Profil;
