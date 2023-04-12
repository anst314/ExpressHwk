const React = require("react");

function Draco(props) {
    console.log(props.draco)
    const draco = props.draco;
    return(
        <div>
            <h1>{draco.name}</h1>
            <div>
                <h1>{draco.meaning}</h1>
                <h1>{draco.distance}</h1>
            </div>
            <a href="/constellations/">Go back</a>
        </div>
    )
}

module.exports = Draco;