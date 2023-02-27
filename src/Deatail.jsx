import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";

function Deatail(param) {
  let theme = param.theme;

  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      })

      .catch((err) => console.log(err));
  }, [params.name]);
  return (
    <>
      {data.length ? (
        <div
          style={{
            backgroundColor:
              theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)",
            color: theme === "light" ? "black" : "hsl(0, 0%, 100%)",
            height: "1000px",
          }}
        >
          {console.log(data)}
          <div className="filters" style={{}}>
            {/* <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button> */}
            <Link to="/" relative="path">
              <button
                style={{
                  padding: "8px 20px",
                  backgroundColor:
                    theme === "light" ? "white" : "hsl(209, 23%, 22%)",
                  color: theme === "light" ? "black" : "hsl(0, 0%, 100%)",
                  border: "0",
                  boxShadow: "2px 2px 8px 1px rgba(0, 0, 0, 0.2)",
                  margin: "50px",
                }}
              >
                Back
              </button>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div style={{ padding: "0px 50px", display: "flex" }}>
              <img src={data[0]?.flags.png} alt="" style={{ width: "500px" }} />
              {console.log(data)}
            </div>
            <div style={{ marginLeft: "90px" }}>
              <h3 style={{ marginBottom: "20px" }}>{data[0]?.name.official}</h3>

              <div style={{ display: "flex" }}>
                <div style={{ padding: "20px 0px", marginRight: "50px" }}>
                  <p>
                    <strong>Native Name: </strong>
                    {
                      Object.values(
                        Object.values(data[0]?.name?.nativeName)[0]
                      )[1]
                    }
                  </p>
                  <p>
                    <strong>Population: </strong> {data[0]?.population}
                  </p>
                  <p>
                    <strong>Region: </strong> {data[0]?.region}
                  </p>
                  <p>
                    <strong>Sub Region: </strong> {data[0]?.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong> {data[0]?.capital[0]}
                  </p>
                </div>
                <div style={{ padding: "20px 0px" }}>
                  <p>
                    <strong>Top Level Domain: </strong> {data[0]?.tld[0]}
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    {
                      Object.values(
                        Object.values(Object.values(data[0]?.currencies))[0]
                      )[0]
                    }
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    {Object.values(data[0]?.languages)[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
export default Deatail;
