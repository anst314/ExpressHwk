const React = require("react");

function Sagittarius(props) {
    console.log(props.sagittarius)
    const sagittarius = props.sagittarius;
    return(
        <div>
            <h1>{sagittarius.name}</h1>
            <div>
                <h1>{sagittarius.meaning}</h1>
                <h1>{sagittarius.distance}</h1>
            </div>
            <a href="/constellations/">Go back</a>
        </div>
    )
}

module.exports = Sagittarius;