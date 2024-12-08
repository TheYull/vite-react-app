import './Subheader.css';

function Subheader() {
    return(
        <div className="subheader">
            <div className="container">
                <div className="greetigs">
                <h1>
                    <span>yummy</span><br />
                    pug
                </h1>
                <p>
                    Всім привіт, я Ямі і я мопс, який дуже сильно полюбляє солодощі.
                    Сьогодні я розкажу вам, чому саме солодощі і чому вони так важливі в
                    нашому житті. <br />
                    Доречі, моє імʼя з англійської мови перекладається як “Смачний”.
                </p>
                <a href="#my_favorite"><button>Мої улюбленні солодощі</button></a>
                </div>
            </div>
        </div>
    )
}

export default Subheader;