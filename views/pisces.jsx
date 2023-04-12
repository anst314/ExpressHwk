const React = require("react");

function Pisces(props) {
    console.log(props.pisces)
    const pisces = props.pisces;
    return(
        <div>
            <h1>{pisces.name}</h1>
            <div>
                <h1>{pisces.meaning}</h1>
                <h1>{pisces.distance}</h1>
            </div>
            <a href="/constellations/">Go back</a>
        </div>
    )
}

module.exports = Pisces;