const React = require("react");

function Aries(props) {
    console.log(props.aries)
    const aries = props.aries;
    return(
        <div>
            <h1>{aries.name}</h1>
            <div>
                <h1>{aries.meaning}</h1>
                <h1>{aries.distance}</h1>
            </div>
            <a href="/constellations/">Go back</a>
        </div>
    )
}

module.exports = Aries;