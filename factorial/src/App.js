import "./App.css";

function App() {

  const getFactorial = (num) => {
    let product = 1;
    for(let i=1; i<=num; i++){
      product *=i;
    }
    console.log(product)
    return product;
  }

  return (
    <div>
      
      <button type="button" onClick={() => getFactorial(6)}>Get Factorial</button>
    </div>
  );
}

export default App;
