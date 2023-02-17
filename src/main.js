import SearchBar from "./SearchBar";
import SelectRegion from "./SelectRegion";

import Cards from "./Cards";
import { useEffect, useState } from "react";
function Main(params) {
  let theme = params.theme;
  const [allCountries, setAllCountries] = useState(null);
  const [all, setAll] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setAllCountries(data);
      })
      .catch((error) => console.log(error));
  }, [all]);

  return (
    <main
      style={{
        padding: " 0px 60px 0px 60px",
        backgroundColor:
          theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)",
        color: theme === "light" ? "black" : "hsl(0, 0%, 100%)",
      }}
    >
      <div className="filters">
        <SearchBar t={theme} data={allCountries} setData={setAllCountries} />
        <SelectRegion
          t={theme}
          data={allCountries}
          setData={setAllCountries}
          a={all}
          seta={setAll}
        />
      </div>
      <Cards t={theme} data={allCountries} />
    </main>
  );
}
export default Main;
