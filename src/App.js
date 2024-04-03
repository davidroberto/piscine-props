import Footer from "./Footer";
import Header from "./Header";
import Profil from "./Profil";

function App() {
  const userData = {
    firstName: "John",
    lastName: "Robert",
    job: "web dev",
    age: "34",
  };

  const user2Data = {
    firstName: "Robert",
    lastName: "David",
    job: "charpentier",
    age: "43",
  };

  const currentDate = "Mercredi 3 avril";

  return (
    <>
      <Header user={userData} currentDate={currentDate} />
      <Profil user={userData} />
      <Profil user={user2Data} />
      <Footer currentDate={currentDate} />
    </>
  );
}

export default App;
