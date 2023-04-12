const React = require("react");

function Orion(props) {
    console.log(props.orion)
    const orion = props.orion;
    return(
        <div>
            <h1>{orion.name}</h1>
            <div>
                <h1>{orion.meaning}</h1>
                <h1>{orion.distance}</h1>
            </div>
            <a href="/constellations/">Go back</a>
        </div>
    )
}

module.exports = Orion;