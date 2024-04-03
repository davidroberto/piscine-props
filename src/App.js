import Header from "./Header";
import Jobs from "./Jobs";

function App() {
  const userData = {
    firstName: "David",
    lastName: "Robert",
    job: "web dev",
  };

  return (
    <>
      <Header user={userData} />
      <Jobs user={userData} />
    </>
  );
}

export default App;
