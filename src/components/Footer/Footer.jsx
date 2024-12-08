import './Footer.css';
import logo_yummy from './../../assets/logo_yummy.svg';

function Footer() {
    return(
        <footer>
      <div className="container">
        <a href="#">
            <img src={logo_yummy} alt="logo" />
        </a>
        <p>Приєднуйся і живи зі мною у світі солодощів!</p>
      </div>
    </footer>
    )
}

export default Footer;