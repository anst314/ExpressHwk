const React = require("react");

function Leo(props) {
    console.log(props.leo)
    const leo = props.leo;
    return(
        <div>
            <h1>{leo.name}</h1>
            <div>
                <h1>{leo.meaning}</h1>
                <h1>{leo.distance}</h1>
            </div>
            <a href="/constellations/">Go back</a>
        </div>
    )
}

module.exports = Leo;