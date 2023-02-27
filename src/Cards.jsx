import Card from "react-bootstrap/Card";
import data2 from "./data.json";
import { Link } from "react-router-dom";
function Cards({ t, data }) {
  return (
    <div
      className="cards"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",

        color: t === "light" ? "black" : "hsl(0, 0%, 100%)",
      }}
    >
      {data?.map((country) => {
        return (
          <Link
            to={`/country/${country.name.official}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              style={{
                width: "18rem",
                backgroundColor: t === "light" ? "white" : "hsl(209, 23%, 22%)",
                marginBottom: "40px",
              }}
            >
              <Card.Img
                variant="top"
                src={country.flags?.png}
                style={{ height: "190px" }}
              />
              <Card.Body>
                <Card.Title style={{ margin: "25px 0px 25px 0px" }}>
                  {country.name.official}
                </Card.Title>
                <Card.Text>
                  <p>
                    <strong>Population : </strong>
                    {country.population}
                  </p>
                  <p>
                    <strong>Region : </strong>
                    {country.region}
                  </p>
                  <p>
                    <strong>Capital : </strong>
                    {country.capital}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
export default Cards;
