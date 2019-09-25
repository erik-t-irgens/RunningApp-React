const Card = (props) => {
    return (
        <div>
            <div>
                {props.image}
            </div>
            <h3>
                {props.name}
            </h3>
        </div>
    );
}

export default Card;