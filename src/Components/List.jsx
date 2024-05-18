import { useEffect, useState } from "react";

function List() {
  const [items, setItems] = useState([]);
  const [position, setPosition] = useState(1);

  const List = [
    {
      id: 1,
      name: "Winter's Orbit",
      ratings: 1,
    },
    {
      id: 2,
      name: "Setemi the finisher",
      ratings: 5,
    },
    {
      id: 3,
      name: "The Reviewer of the Codes",
      ratings: 0,
    },
    {
      id: 4,
      name: "Fighting temptations",
      ratings: 4,
    },
  ];

  useEffect(() => {
    const list = List[position];
    console.log(list);
    setItems(list);
  }, [position]);

  function next() {
    setPosition(position + 1);
    if (position === List.length - 1) {
      setPosition(0);
    }
  }

  function prev() {
    setPosition(position - 1);
    if (position < 1) {
      setPosition(List.length - 1);
    }
  }

  return (
    <div>
      <h1>My React App</h1>
      <div className="list">
        <p>{items.id}</p>
        <h2>{items.name}</h2>
        <h3>Ratings: {items.ratings}</h3>
      </div>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default List;
