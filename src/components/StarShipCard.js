const StarShipCard = ({ name, model, manufacturer }) => {

    return (

        <div className="shipcard">
            <div className="starshipname">
            <h1> {name}</h1>
            </div>
            <h1>Model: {model}</h1>
            <h1>Manufacturer: {manufacturer}</h1>
        </div>


    )
}
export default StarShipCard;