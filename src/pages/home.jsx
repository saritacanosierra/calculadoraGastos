import './home.css'
function Home() {
  return (
    <>
      <div className='container_home'>
        <div className="title_home">
          <h1>calculadora de gastos mensuales</h1>
        </div>
        <div className="content">
          <div className="container-title">
            <h2>integrantes del grupo</h2>
          </div>
          <div className="container-integrantes">
            <ul>
              <li>Sara Cristina Cano Sierra</li>
              <li>Maria Gomez</li>
              <li>Pedro Rodriguez</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;