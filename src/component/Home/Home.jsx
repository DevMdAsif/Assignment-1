import React, { useEffect, useState } from "react";

import { Knowledge } from "../Knowledge/Knowledge";
import "./Home.css";
import { Card } from "../Card/Card";

export default function Home() {
  const [card, setcard] = useState([]);
  const [time, settime] = useState("");

  const [knowledge, setknowledge] = useState([]);
  useEffect(() => {
    fetch("knowledge.json")
      .then((response) => response.json())
      .then((data) => setknowledge(data));
  }, []);

  const handeltime = (duration) => {
    const Savetime = JSON.parse(localStorage.getItem("watchtime"));
    if (Savetime) {
      const addtime = Savetime + duration;
      localStorage.setItem("watchtime", addtime);
      settime(addtime);
    } else {
      localStorage.setItem("watchtime", duration);
      settime(duration)
    }
  };

  return (
    <div className=" pt-8  grid grid-coloum ">
      <div>
        {knowledge.map((info) => (
          <Knowledge
            info={info}
            key={info.id}
            handeltime={handeltime}
          />
        ))}
      </div>
      <div className="">
        <Card card={card} time={time}/>
      </div>
    </div>
  );
}
