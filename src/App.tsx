import React , {ReactNode , useState} from 'react';
import logo from './logo.svg';
import Card , {CardVariant} from './components/card'
import './App.css';

function App() {
  const [width , setWidth] = useState<string>('400px')
  return (
    <div className="App">
      <Card width={width} height='350px' variant={CardVariant.primary} onClick={() => setWidth('200px')}><h1> Hello world </h1></Card>
    </div>
  );
}

export default App;
