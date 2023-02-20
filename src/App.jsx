
import './App.scss'
import Box from './assets/Components/Box'

function App() {

  return (
    <div className="App">
      <Box shape="circle" x={0} y={0} />
      <Box shape="triangle" x={200} y={0} />
      <Box shape="square" x={0} y={200} />
      <Box shape="star" x={200} y={200} />
    </div>
  )
}

export default App;
