import './Navigation.scss';
function Navigation(props) {

    return (
        <div className={props.Active ? "navigation navigation--active" : "navigation navigation--inactive"}>
            {props.children}
        </div>
    );
}

export default Navigation;
