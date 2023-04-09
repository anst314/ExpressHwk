const React = require("react");
function Index(props) {
  console.log(props.constellations)
  // const { fruits } = props;
  const constellations = props.constellations;
  return (
    <div>
      <h1>Index Page</h1>
      <ul>
        {constellations.map((constellation, i) => {
          return (
            <li>
              The <a href={`/constellations/${i}`}>{constellation.name}</a> is {constellation.meaning}{" "}
              {/* {constellation.readyToEat
                ? "It is ready to eat"
                : "it is not ready to eat"} */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
module.exports = Index;