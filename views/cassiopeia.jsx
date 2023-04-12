const React = require("react");

function Cassiopeia(props) {
    console.log(props.cassiopeia)
    const cassiopeia = props.cassiopeia;
    return(
        <div>
            <h1>{cassiopeia.name}</h1>
            <div>
                <h1>{cassiopeia.meaning}</h1>
                <h1>{cassiopeia.distance}</h1>
            </div>
            <a href="/constellations/">Go back</a>
        </div>
    )
}

module.exports = Cassiopeia;