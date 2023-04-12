const React = require("react");

function Aquarius(props) {
    console.log(props.aquarius)
    const aquarius = props.aquarius;
    return(
        <div>
            <h1>{aquarius.name}</h1>
            <div>
                <h1>{aquarius.meaning}</h1>
                <h1>{aquarius.distance}</h1>
            </div>
            <a href="/constellations/">Go back</a>
        </div>
    )
}

module.exports = Aquarius;