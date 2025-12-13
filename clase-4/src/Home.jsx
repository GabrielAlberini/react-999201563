import "./Home.css"

const Home = () => {
  let nombre = "Juan"
  const imagenJuan = "https://www.argentina.gob.ar/sites/default/files/foto_01662024.jpg"

  const imagenGabriel = "https://github.com/GabrielAlberini.png"

  const stylesGabriel = { background: "red" }
  const stylesJuan = { background: "blue" }

  const handleClick = () => {
    nombre = nombre === "Gabriel" ? "Juan" : "Gabriel"
    console.log(nombre)
  }

  // Si el nombre es gabriel, mostrar la imagen de él, sino de juan
  return (
    <>
      <header style={nombre === "Gabriel" ? stylesGabriel : stylesJuan}>
        <div>
          <img src={nombre === "Gabriel" ? imagenGabriel : imagenJuan} />
          <h2>Mi nombre es {nombre}</h2>
        </div>
        <button onClick={handleClick}>Cambiar usuario</button>
      </header >
      <main>
        <section className="bio">
          <h2>Nuestra misión</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum esse labore amet architecto. Similique excepturi sint rem praesentium veritatis optio suscipit eligendi non harum fugiat nihil autem, reprehenderit maiores fuga enim ducimus? Reiciendis eos laboriosam ut totam tempora qui asperiores delectus in. Laudantium distinctio nihil ratione fugiat nesciunt facilis libero, cumque saepe dicta, eaque quae voluptas numquam corporis culpa veritatis iste ab atque dolores laborum, eum minus accusamus sapiente ullam. Harum expedita doloribus ut eligendi provident itaque corporis est non assumenda a, saepe nisi dignissimos architecto nihil vel voluptatum. Temporibus commodi exercitationem libero minus quas in perferendis incidunt corrupti maiores!</p>
        </section>
        <section className="products">
          <h2>Nuestros productos</h2>
          <div className="products-list">
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/960px-Placeholder_view_vector.svg.png?20220519031949" alt="" />
              <h4>Notebook Ultra</h4>
              <p>Perfecta para estudiar, trabajar y tareas de oficina</p>
              <div className="buy">
                <p>$1200</p>
                <button>Comprar</button>
              </div>
            </div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/960px-Placeholder_view_vector.svg.png?20220519031949" alt="" />
              <h4>Auriculares Pro</h4>
              <p>Sonido envolvente con reducción de ruido activa</p>
              <div className="buy">
                <p>$250</p>
                <button>Comprar</button>
              </div>
            </div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/960px-Placeholder_view_vector.svg.png?20220519031949" alt="" />
              <h4>Teclado Mecánico RGB</h4>
              <p>Ideal para gamers y programadores, switches táctiles</p>
              <div className="buy">
                <p>$180</p>
                <button>Comprar</button>
              </div>
            </div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/960px-Placeholder_view_vector.svg.png?20220519031949" alt="" />
              <h4>Mouse Inalámbrico</h4>
              <p>Diseño ergonómico, batería de larga duración</p>
              <div className="buy">
                <p>$60</p>
                <button>Comprar</button>
              </div>
            </div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/960px-Placeholder_view_vector.svg.png?20220519031949" alt="" />
              <h4>Monitor 27" 144Hz</h4>
              <p>Experiencia fluida para juegos y edición multimedia</p>
              <div className="buy">
                <p>$350</p>
                <button>Comprar</button>
              </div>
            </div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/960px-Placeholder_view_vector.svg.png?20220519031949" alt="" />
              <h4>PC de Oficina</h4>
              <p>Rendimiento confiable para tareas diarias y navegación</p>
              <div className="buy">
                <p>$800</p>
                <button>Comprar</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>Sitio desarrollado por UTN</p>
      </footer>
    </>
  )
}

export { Home }