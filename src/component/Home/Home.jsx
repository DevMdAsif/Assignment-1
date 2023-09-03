import React, { useEffect, useState } from "react";
import { Knowledge } from "../Knowledge/Knowledge";


export default function Home() {
  const [knowledge ,setknowledge] = useState([])
  useEffect(() => {
    fetch("knowledge.json")
      .then((response) => response.json())
      .then((data) => setknowledge(data));
  }, []);
  return (
    <div className=" pt-8">
      {
        knowledge.map((info)=><Knowledge info={info} key={info.id} />)
      }

    </div>
  )
}
