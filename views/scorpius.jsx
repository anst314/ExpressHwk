const React = require("react");

function Scorpius(props) {
    console.log(props.scorpius)
    const scorpius = props.scorpius;
    return(
        <div>
            <h1>{scorpius.name}</h1>
            <div>
                <h1>{scorpius.meaning}</h1>
                <h1>{scorpius.distance}</h1>
            </div>
            <a href="/constellations/">Go back</a>
        </div>
    )
}

module.exports = Scorpius;