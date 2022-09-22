import "./Header.css";

const Header = (props) => {
    return(
        <header class="header">
        <h1 class= "header__h1">{props.bigTitle}</h1>
        <h2 class= "header__h2">{props.smallTitle}</h2>
        <button class= "header__button">bestel</button>
        </header>
      
    )
}

export default Header;