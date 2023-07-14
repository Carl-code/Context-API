// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import './App.css';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import { MiComponenteConContexto } from './hooks/Ejemplo3';
import TaskListComponent from './components/container/task.list';
// import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      {/* <div className="App-header"> */}
      {/* <GreetingF name="Charly"/> */}
      {/* <Ejemplo1/> */}
      {/* <Ejemplo2/>  */}
      {/* <MiComponenteConContexto/> */}
      {/* </div> */}
     <TaskListComponent/>
     {/* <GreetingStyled name={ 'Carlos' }/> */}
    </div>
  );
}

export default App;
