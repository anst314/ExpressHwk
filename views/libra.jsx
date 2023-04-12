const React = require("react");

function Libra(props) {
    console.log(props.libra)
    const libra = props.libra;
    return(
        <div>
            <h1>{libra.name}</h1>
            <div>
                <h1>{libra.meaning}</h1>
                <h1>{libra.distance}</h1>
            </div>
            <a href="/constellations/">Go back</a>
        </div>
    )
}

module.exports = Libra;