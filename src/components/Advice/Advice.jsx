import './Advice.css';

function Advice() {
    return(
        <div id="advice" className="advice">
      <div className="container">
        <div className="advice_text">
          <h2>
            <span>Порада –</span><br />
            від Yummy
          </h2>
          <p>
            З'ївши чергову шоколадку, ви не просто набираєте трохи додаткових
            калорій, але покращуєте тим самим роботу мозку, настрій і стаєте
            трішки добрішим. Вирішивши поласувати шоколадкою, віддавайте
            перевагу саме чорному шоколаду з високим вмістом какао-бобів. У
            цьому вигляді шоколаду менше жиру і цукру, ніж в молочному шоколаді,
            але зате магнію, кальцію, заліза, білка, антиоксидантів і вітамінів
            предостатньо.
          </p>

          <div className="advice_candys">
            <h3>Солодощі, які радить їсти Ямі:</h3>
            <ul>
              <li>Чорний шоколад</li>
              <li>Зефір</li>
              <li>Пастила</li>
              <li>Мармелад</li>
              <li>Мед</li>
              <li>Халва</li>
              <li>Цукати</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Advice;