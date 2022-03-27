import Header from "./Components/Header";
import Login from "./Components/Login";
import Product from "./Components/Product";

const App=()=>{
  return (
    <div>
      <Header/>
      <Login/>
      <Product Name="I Phone" Price="120k"></Product>
      <Product Name="Samsung" Price="130k"></Product>
      {/* <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product> */}
    </div>
  )
}

export default App;