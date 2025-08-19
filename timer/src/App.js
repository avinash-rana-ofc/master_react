import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import './App.css';

function App() {
  return (
    <div className='flex flex-row mx-auto h-auto gap-4'>
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

export default App;
