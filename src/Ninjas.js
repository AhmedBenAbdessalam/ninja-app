import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    if (ninja.age > 20) {
      return (
        <li className="ninja" key={ninja.id}>
          <h3>Ninja #{ninja.id}</h3>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
          <div>
            <button
              onClick={() => {
                deleteNinja(ninja.id);
              }}
            >
              Delete Ninja
            </button>
          </div>
        </li>
      );
    } else {
      return null;
    }
  });
  console.log(ninjaList);
  return <ul className="ninja-list">{ninjaList}</ul>;
};
export default Ninjas;
