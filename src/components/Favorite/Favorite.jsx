import './Favorite.css';
import candy_poppy from './../../assets/candy_poppy.png';
import candy_cream from './../../assets/candy_cream.png';
import candy_nut from './../../assets/candy_nut.png';

function Favorite() {
    return(
        <div id="my_favorite" className="favorite_candies">
      <div className="container">
        <h2><span>мої улюбленні</span> солодощі</h2>

        <div className="candys">
          <img src={candy_poppy} alt="candy_poppy" />
          <h3>Червоний мак</h3>
          <p>
            Праліне з додаванням карамельної крихти, пасти ядер горіхів фундука
            та мигдалю покрите шоколадною глазурʼю
          </p>
        </div>

        <div className="candys">
          <img src={candy_cream} alt="" />
          <h3>Сливки-ленивки</h3>
          <p>
            Світлі вафельні листи, поєднані молочно-вершковою начинкою та
            покриті глазур’ю.
          </p>
        </div>

        <div className="candys">
          <img src={candy_nut} alt="candy_nut" />
          <h3>Ліщина</h3>
          <p>
            Праліне з додаванням подрібненої та тертої ліщини та мигдалю,
            покрите шоколадною глазур’ю.
          </p>
        </div>
      </div>
    </div>

    )
}

export default Favorite