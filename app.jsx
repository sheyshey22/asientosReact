
const RowTable = (props) => {
  const _tds = props.items.map((item, index) => <td key={index}> {item} </td>);
  return (
    <tr>
      {_tds}
    </tr>
  )
}

const RTable = ({ seats }) => {
  return (
    <table width="300" height="200" border="3" className="tableSeat">
      <RowTable items={seats[0]} />
      <RowTable items={seats[1]} />
      <RowTable items={seats[2]} />
      <RowTable items={seats[3]} />
    </table>
  );
}
const Drawrender = () => {
  return (
    <div class="body">
      <header>
        <h1 class="text-center">SISTEMA DE RESERVA DE ASIENTOS</h1>
      </header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <h2>MAPA DE ASIENTOS</h2>
            <h6>Escoge tu número de asiento</h6>
            <table id="seats">
              <RTable seats={seats} /> 
            </table>
          </div>
          <div class="col-md-6 ">
            <h2>Identificación</h2>
            <h6>Completa tus datos</h6>
            <form class="form" action="#">
              <label for="NRO ASIENTO">
                <span data-text="NRO ASIENTO">Nro Asiento</span>
                <div id="nSeat"></div>
              </label>
              <fieldset class="form-fieldset ui-input __first">
                <input type="text" id="username" tabindex="0" />
                <label for="Nombre">
                  <span data-text="Nombre">Nombre</span>
                </label>
              </fieldset>

              <fieldset class="form-fieldset ui-input __second">
                <input type="text" id="last_name" tabindex="0" />
                <label for="apellido">
                  <span data-text="Apellido">Apellido</span>
                </label>
              </fieldset>

              <fieldset class="form-fieldset ui-input __third">
                <input type="number" id="nro_dni"></input>
                <label for="Número de DNI">
                  <span data-text="Número de DNI">Número de DNI</span>
                </label>
              </fieldset>    
              <div class="form-footer text-center">
                <button class="btn" id="btn-reserv">Reservar</button>
                <button class="btn" id="btn-allList">Listar</button>
                <button class="btn" id="btn-cancel">Cancelar</button>
              </div>
              <div id="search">
                <input id="inputDni" placeholder="Ingrese número de DNI"/>
                <button id="btn-search"><span  class="glyphicon glyphicon-search"></span></button>
              </div>
            <div id="info" >
              {listPairs(seats)}
            </div>
          </form>
          </div>
        </div>
		
	    </div>
    </div>
  );
}
function listPairs(seats) {
  console.log("seats: ", seats);
  let newSeats = [];
  let allUser = [
    { Item: 1, Nombre: "shey", Apellido: "vilca", Dni: 12323434 },
    { Item: 10, Nombre: "juani", Apellido: "sds", Dni: 12323438 },
    { Item: 5, Nombre: "periquito", Apellido: "palote", Dni: 12323437 },
    { Item: 15, Nombre: "Clau", Apellido: "dsdsd", Dni: 12323436 },
    { Item: 20, Nombre: "dssdf", Apellido: "sdsd", Dni: 12323435 }
  ];
  return allUser.map((allUser, index) => {
    return (
      <div key={index} className="list">
        <p>Asiento N°: {allUser.Item}</p>
        <p>Nombre: {allUser.Nombre}</p>
        <p>Apellido: {allUser.Apellido}</p>
        <p>DNI N°: {allUser.Dni}</p>
      </div>
    );
  });
}
const App = ({ title, seats }) => {
  return (
    <div>
      <Drawrender />
      <h3>{title}</h3>
    </div>
  );
}

let seats = [
  [4, 8, 12, 16, 20, 24, 28, 32],
  [3, 7, 11, 15, 19, 23, 27, 31],
  [2, 6, 10, 14, 18, 22, 26, 30],
  [1, 5, 9, 13, 17, 21, 25, 29]
]

ReactDOM.render(
  <App title={'Hola Mundo!'} seats={seats} />,
  document.getElementById("root")
);
