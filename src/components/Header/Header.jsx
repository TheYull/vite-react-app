import './Header.css';
import logo_yummy from './../../assets/logo_yummy.svg';

function Header() {
    return(
        <header>
        <div className="container">
        <a href="#">
            <img src={logo_yummy} alt="logo" />
        </a>
          <nav>
            <a href="#advice">Порада від Ямі</a>
            <a href="#my_favorite">Мої улюбленній солодощі</a>
          </nav>
        </div>
      </header>
    )
}

export default Header;