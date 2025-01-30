import React from "react";
import "./styles.css";
import Card from "./Card";
import contacts from "./contacts";

function App() {
  return (
    <div>
      <Card
        name={contacts[0].name}
        img={contacts[0].img}
        phn={contacts[0].phn}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        phn={contacts[1].phn}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        phn={contacts[2].phn}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
