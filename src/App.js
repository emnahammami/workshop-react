
import './App.css';
import Products from './Components/Products';
/*import Fonction from './ecmascript/fonction';

const input = [  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
const product=[  {
  "name": "PC Lenovo",
  "price": "1400",
  "img": "product1.webp",
  "like":0,
  "quantity":10,
  "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
},
{
  "name": "Mouse",
  "price": "30",
  "img": "product2.jpg",
  "like":0,
  "quantity":0,
  "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
},
{
  "name": "KeyBoard",
  "price": "70",
  "img": "product3.jpg",
  "like":0,
  "quantity":20,
  "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
}]
const output = input.flat().reduce((acc, curr) => {
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
  return acc;
}, {});
let a="c"
console.log("output"+output[a]);

  let students = [
    {"name":"emna","id":123,"mark":32},
    {"name":"sarah","id":1234,"mark":54},
    {"name":"anis","id":12345,"mark":75}
  ]
*/

  
/*

const map1 = students.map(x =>x.mark< 50 ? x.mark + 15:x.mark);
console.log("map1"+map1)
let data = map1.filter(
  element => element >= 50);
console.log("data"+data)
const initialValue = 0;
const sumWithInitial = data.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial)*/
const product=[  {
  "name": "PC Lenovo",
  "price": "1400",
  "img": "product1.webp",
  "like":0,
  "quantity":10,
  "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
},
{
  "name": "Mouse",
  "price": "30",
  "img": "product2.jpg",
  "like":0,
  "quantity":0,
  "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
},
{
  "name": "KeyBoard",
  "price": "70",
  "img": "product3.jpg",
  "like":0,
  "quantity":20,
  "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
}]

function App() {
  return (
    <div >
    
    
      <Products product={product}
        
        
        />
         
      </div>
  );
}

export default App;
