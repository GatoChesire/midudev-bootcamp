import './App.css';
import Mensaje from './Mensaje';


// Ejemplo de componente en React(no crear componentes 
// dentro de componentes, funciona pero no es buena practica)----
const Description = () => {
  return <p>Esta es la app del curso</p>
}
//------------------------------
const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='en un curso'/>
      <Mensaje color='yellow' message='de React'/>
      <Description/>
    </div>
  );
}

export default App;
