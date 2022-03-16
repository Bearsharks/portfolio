

function Badge(props) {
    return (
        <img src={`https://img.shields.io/badge/-${props.name}-${props.color}?style=flat&logo=${props.logo ? props.logo : props.name}${props.logoColor ? ("&logoColor=" + props.logoColor) : ""}`} alt={props.name} />
    );
}
export default Badge;