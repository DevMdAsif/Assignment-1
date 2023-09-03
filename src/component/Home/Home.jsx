import React, { useEffect, useState } from "react";

import { Knowledge } from "../Knowledge/Knowledge";
import "./Home.css";
import { Card } from "../../Card/Card";

export default function Home() {
  const [knowledge, setknowledge] = useState([]);
  useEffect(() => {
    fetch("knowledge.json")
      .then((response) => response.json())
      .then((data) => setknowledge(data));
  }, []);
  return (
    <div className=" pt-8  grid grid-coloum ">
      <div>
        {knowledge.map((info) => (
          <Knowledge info={info} key={info.id} />
        ))}
      </div>
      <div>
        <Card />
      </div>
      
    </div>
  );
}
