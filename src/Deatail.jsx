import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

import { useParams } from "react-router-dom";
function Deatail() {
  const params = useParams();

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      })
      .then(() => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>{}</div>;
}
export default Deatail;
