const data = [
  { id: 1, region: "Asia" },
  {
    id: 2,
    region: "Africa",
  },
  {
    id: 3,
    region: "America",
  },
  {
    id: 5,
    region: "Europe",
  },
  {
    id: 6,
    region: "Oceania",
  },
];
function SelectRegion(p) {
  return (
    <select
      style={{
        color: p.t === "light" ? "black" : "hsl(0, 0%, 100%)",
        backgroundColor: p.t === "light" ? "white" : "hsl(209, 23%, 22%)",
      }}
      name="Select-by-Region"
      id="select-region"
      onChange={(event) => {
        if (event.target.value !== "") {
          let x = [];
          p.data.forEach((element) => {
            element.region
              .toLowerCase()
              .includes(event.target.value.toLocaleLowerCase()) &&
              x.push(element);
          });
          p.setData(x);
        } else {
          p.a !== true ? p.seta(true) : p.seta(false);
        }
      }}
    >
      <option value="">Select by Region</option>

      {data?.map((element) => {
        return <option value={element.region}>{element.region}</option>;
      })}
    </select>
  );
}

export default SelectRegion;
