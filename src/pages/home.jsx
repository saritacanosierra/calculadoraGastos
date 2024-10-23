import Footer from '../components/footer';
import './home.css'
function Home() {
  return (
    <>
      <div className='container_home'>
        <div className="container_home_tittle">
          <h1>ORGANIZA TUS FINANZAS CON SIMPLICIDAD</h1>
          <p>Bienvenido a la plataforma que te ayudara a administrar tus ingresos y gastos de manera eficiente. Ya no mas complicaciones, manten tus finanzas bajo control con tan solo unos clicks. ¡Tu camino hacia una mejor organizacion comienza aqui!</p>
          <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-contabilidad_114360-16970.jpg" />
        </div>

        <div className="container_info_home">
          <div className="container-title">
            <h2>QUE PUEDES HACER AQUI ?</h2>
            <img src="https://www.shutterstock.com/image-vector/family-budget-set-yong-couple-260nw-2388839515.jpg" />
          </div>

          <div className='container-description'>
            <div className='container-description-one'>
              <p>
                <span>Registrar tus gastos
                  fácilmente:</span> Añade tus gastos
                diarios con unos pocos clics y
                mantenlos organizados.
              </p>
              <img src="https://img.freepik.com/vector-premium/escritorio-contable-calculadora-manos-libreta-registrar-gastos-o-ingresos-cerca-efectivo-tarjetas-credito-contable-calcula-presupuesto-monto-impuestos-pagados-despues-recibir-salarios_198530-6218.jpg?w=360" alt="" />
            </div>

            <div className='container-description-two'>
              <img src="https://www.chipax.com/wp-content/uploads/2022/09/Control.png" alt="" />
              <p>
                <span>Controlar tus ingresos:</span> Lleva un
                registro claro de todos tus
                ingresos para tener una visión
                completa de tu situación fi
                nanciera.
              </p>
            </div>

            <div className='container-description-trhee'>
              <p>
                <span>Obtener un balance instantáneo:</span>
                Visualiza el balance entre tus
                ingresos y gastos en cualquier
                momento
              </p>
              <img src="https://cdn.prod.website-files.com/5a43f26a7b791a0001995f0f/6310de18874afd7244b44cc5_administracion-de-edificios-como-hacer-un-balance-de-ingresos-y-egresos.jpg" alt="" />
            </div>

            <div className='container-description-four'>
              <img src="https://qonto.com/blog/images/a8994cc78e0058ae5fd9081e62839e4e.png" alt="" />
              <p>
                <span>Generar reportes detallados:</span>
                Obtén reportes personalizados
                sobre tus finanzas para tomar
                mejores decisiones
              </p>
            </div>
          </div>
        </div>

        <div className="container-testimonio">
          <h1>TESTIMONIOS</h1>
          <div className="container-info_testimonio">
            <div className="elemento">
              <p>
                <span>María Gomez.</span>
                Gracias a los consejos financieros de esta página, he logrado ahorrar  un 30% más de lo que pensaba. Ahora tengo un fondo de emergencia y me  siento más tranquila sobre mi futuro.
              </p>
            </div>
            <div className="elemento">
              <p>
                <span>José Rodriguez.</span>
                La guía sobre presupuesto me cambió la vida. Antes, vivía al día sin saber a dónde iba mi dinero. Ahora tengo un plan claro y he empezado a ahorrar. ¡Recomiendo esta página a todos!
              </p>
            </div>
            <div className="elemento">
              <p>
                <span>Laura Tobon.</span>
                Nunca pensé que podría salir de mis deudas, pero con las herramientas y recursos que encontré aquí, en menos de un año logré pagar todo. Estoy muy agradecida por el apoyo y la motivación.
              </p>
            </div>
            <div className="elemento">
              <p>
                <span>Andrés Morales.</span>
                La comunidad de esta página es increíble. He aprendido tanto de las experiencias de otros y he encontrado un grupo de apoyo que me ha animado a seguir adelante con mis metas financieras.
              </p>
            </div>
            <div className="elemento">
              <p>
                <span>Clara Salgado.</span>
                Las recomendaciones de inversión que encontré aquí me han abierto un mundo nuevo. Gracias a los cursos y artículos, ahora entiendo cómo hacer crecer mi dinero de manera segura. ¡Estoy muy emocionada por el futuro!
              </p>
            </div>
            <p></p>
            <p></p>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Home;