import React, { useEffect, useState } from "react";
import ChildModal from "./ChildModal";
import "./Rocket.css";
import RocketDetails from "./RocketDetails";

function Rocket() {
  const [rockets, setRockets] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (rocket) => {
    setSelectedItem(rocket);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRockets(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="rockets-container">
      {rockets.map((rocket) => (
        <RocketDetails rocket={rocket} onClick={() => handleOpen(rocket)} />
      ))}
      <ChildModal
        open={open}
        handleClose={handleClose}
        selectedItem={selectedItem}
      />
    </div>
  );
}

export default Rocket;
