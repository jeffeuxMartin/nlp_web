import { useState } from 'react';
import styled from 'styled-components';

<<<<<<< HEAD
<<<<<<< HEAD
import Header from './components/Header';
import PokemonCard from './components/PokemonCard/PokemonCard';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import CartInfo from './components/Cart/CartInfo';
=======
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
import CartInfo from './components/CartInfo';
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
import CartInfo from './components/CartInfo';
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
import CartInfo from './components/CartInfo';
>>>>>>> 3dcca5a7 (feat: add cart info)
import useFetch from "./hooks/useFetch";
=======
<<<<<<< HEAD
=======
>>>>>>> 4bc1f888 (feat: add useFetch custom hook for code reuse)
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard/PokemonCard";
=======
import Header from './components/Header';
import PokemonCard from './components/PokemonCard/PokemonCard';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a2aa06c7 (feat: add useFetch custom hook for code reuse)
import CartInfo from './components/Cart/CartInfo';
=======
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
import CartInfo from './components/CartInfo';
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
import useFetch from "./hooks/useFetch";
>>>>>>> 8478e5d8 (feat: add useFetch custom hook for code reuse)
>>>>>>> 52d7fb6a (feat: add useFetch custom hook for code reuse)
=======
import useFetch from "./hooks/useFetch";
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
=======
>>>>>>> c26f4186 (feat: add cart info)
import CartInfo from './components/Cart/CartInfo';
=======
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
import CartInfo from './components/CartInfo';
>>>>>>> 3dcca5a7 (feat: add cart info)
import useFetch from "./hooks/useFetch";
>>>>>>> 8478e5d8 (feat: add useFetch custom hook for code reuse)
>>>>>>> 4bc1f888 (feat: add useFetch custom hook for code reuse)

// https://pokeapi.co/
const url = "https://pokeapi.co/api/v2/pokemon?limit=30";

const PokemonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 200px;
`;

function App() {
<<<<<<< HEAD
<<<<<<< HEAD
  const [notification,setNotification] = useState(null);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
=======
>>>>>>> 4bc1f888 (feat: add useFetch custom hook for code reuse)
  const [notification, setNotification] = useState(null);

=======
  const [notification,setNotification] = useState(null);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c26f4186 (feat: add cart info)
=======
>>>>>>> a2aa06c7 (feat: add useFetch custom hook for code reuse)
  
>>>>>>> 8478e5d8 (feat: add useFetch custom hook for code reuse)
>>>>>>> 52d7fb6a (feat: add useFetch custom hook for code reuse)
  /**
   *  較好的方式是 cart 內只存 {id: id, count: count} ，不存多餘的資訊（e.g., price）
   *  因為 id 應該要是 unique，count 是使用者操作過後的值
   *  然後再回查資料來源： pokemons 列表 or pokemon data ，找到要呈現在 cart 裡對應的資訊
   *  但因為 pokemons 列表裡目前只有 name & url，
   *  所以這裡就先取巧，直接在 handleAddToCart 裡傳入 cart 呈現時需要的所有資料
=======
  
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   *  較好的方式是 cart 內只存 {id: id, count: count} ，不存多餘的資訊（e.g., price）
   *  因為 id 應該要是 unique，count 是使用者操作過後的值
   *  然後再回查資料來源： pokemons 列表 or pokemon data ，找到要呈現在 cart 裡對應的資訊
   *  但因為 pokemons 列表裡目前只有 name & url，
<<<<<<< HEAD
   *  所以這裡就先取巧，直接在 handleAddToCart 理傳入 cart 呈現時需要的所有資料
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
   *  所以這裡就先取巧，直接在 handleAddToCart 裡傳入 cart 呈現時需要的所有資料
>>>>>>> 1eb4fe17 (docs: modify comments)
=======
  
  /**
   *  較好的方式是 cart 內只存 {id: id, count: count} ，不存多餘的資訊（e.g., price）
   *  因為 id 應該要是 unique，count 是使用者操作過後的值
   *  然後再回查資料來源： pokemons 列表 or pokemon data ，找到要呈現在 cart 裡對應的資訊
   *  但因為 pokemons 列表裡目前只有 name & url，
<<<<<<< HEAD
   *  所以這裡就先取巧，直接在 handleAddToCart 理傳入 cart 呈現時需要的所有資料
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
   *  所以這裡就先取巧，直接在 handleAddToCart 裡傳入 cart 呈現時需要的所有資料
>>>>>>> 1eb4fe17 (docs: modify comments)
=======
   *  較好的方式是只存 {id: id, count: count} ，不存多餘的資訊（e.g., price）
=======
   *  較好的方式是 cart 內只存 {id: id, count: count} ，不存多餘的資訊（e.g., price）
>>>>>>> bb9c12d8 (docs: modify comments)
   *  因為 id 應該要是 unique，count 是使用者操作過後的值
   *  然後再回查資料來源： pokemons 列表 or pokemon data ，找到要呈現在 cart 裡對應的資訊
   *  但因為 pokemons 列表裡目前只有 name & url，
<<<<<<< HEAD
   *  所以這裡就先取巧，直接在 handleAddToCart 理傳入 cart 呈現時需要的所有資料
>>>>>>> 3dcca5a7 (feat: add cart info)
<<<<<<< HEAD
>>>>>>> 6c99dfdf (feat: add cart info)
=======
=======
   *  所以這裡就先取巧，直接在 handleAddToCart 裡傳入 cart 呈現時需要的所有資料
>>>>>>> 1eb4fe17 (docs: modify comments)
>>>>>>> bb9c12d8 (docs: modify comments)
   */
   const [cart, setCart] = useState([]);
=======
  const {loading, error, data: pokemons} = useFetch({
=======
  
=======
  
>>>>>>> 8478e5d8 (feat: add useFetch custom hook for code reuse)
>>>>>>> 4bc1f888 (feat: add useFetch custom hook for code reuse)
  /**
   *  較好的方式是 cart 內只存 {id: id, count: count} ，不存多餘的資訊（e.g., price）
   *  因為 id 應該要是 unique，count 是使用者操作過後的值
   *  然後再回查資料來源： pokemons 列表 or pokemon data ，找到要呈現在 cart 裡對應的資訊
   *  但因為 pokemons 列表裡目前只有 name & url，
   *  所以這裡就先取巧，直接在 handleAddToCart 裡傳入 cart 呈現時需要的所有資料
=======
  
  /**
   *  較好的方式是 cart 內只存 {id: id, count: count} ，不存多餘的資訊（e.g., price）
   *  因為 id 應該要是 unique，count 是使用者操作過後的值
   *  然後再回查資料來源： pokemons 列表 or pokemon data ，找到要呈現在 cart 裡對應的資訊
   *  但因為 pokemons 列表裡目前只有 name & url，
<<<<<<< HEAD
   *  所以這裡就先取巧，直接在 handleAddToCart 理傳入 cart 呈現時需要的所有資料
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
   *  所以這裡就先取巧，直接在 handleAddToCart 裡傳入 cart 呈現時需要的所有資料
>>>>>>> 1eb4fe17 (docs: modify comments)
   */
   const [cart, setCart] = useState([]);

<<<<<<< HEAD
   const {loading, error, data: pokemons} = useFetch({
>>>>>>> 3dcca5a7 (feat: add cart info)
    url, 
    resolvedPath: 'results'
  });
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)

<<<<<<< HEAD
<<<<<<< HEAD
   const {loading, error, data: pokemons} = useFetch({
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const {loading, error, data: pokemons} = useFetch({
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
  const {loading, error, data: pokemons} = useFetch({
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
>>>>>>> 3dcca5a7 (feat: add cart info)
    url, 
    resolvedPath: 'results'
=======
=======
>>>>>>> 4bc1f888 (feat: add useFetch custom hook for code reuse)
<<<<<<< HEAD
  const {
    loading,
    error,
    data: pokemons,
  } = useFetch({
    url,
    resolvedPath: "results",
=======
   const {loading, error, data: pokemons} = useFetch({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const {loading, error, data: pokemons} = useFetch({
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
  const {loading, error, data: pokemons} = useFetch({
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
    url, 
    resolvedPath: 'results'
>>>>>>> 8478e5d8 (feat: add useFetch custom hook for code reuse)
>>>>>>> 52d7fb6a (feat: add useFetch custom hook for code reuse)
=======
=======
>>>>>>> c26f4186 (feat: add cart info)
=======
  const {loading, error, data: pokemons} = useFetch({
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
>>>>>>> 3dcca5a7 (feat: add cart info)
    url, 
    resolvedPath: 'results'
>>>>>>> 8478e5d8 (feat: add useFetch custom hook for code reuse)
>>>>>>> 4bc1f888 (feat: add useFetch custom hook for code reuse)
  });

=======
>>>>>>> 3dcca5a7 (feat: add cart info)
  const updateCart = ({pokemonName, count, price}) => {
    const hasPokemonAddedToCart = cart.find(pokemon => pokemon.name === pokemonName);
    if (!hasPokemonAddedToCart) {
      setCart([
        ...cart, 
        {name: pokemonName, count, price}
      ])
    } else {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> c26f4186 (feat: add cart info)
      const updatedCart = cart.map((pokemon) =>
        pokemon.name === pokemonName ? { ...pokemon, count } : pokemon
      );
      setCart(updatedCart);
=======
<<<<<<< HEAD
>>>>>>> 6c99dfdf (feat: add cart info)
=======
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
>>>>>>> c26f4186 (feat: add cart info)
      const updatedCart = cart.map(pokemon => (
        pokemon.name === pokemonName
          ?  {...pokemon, count}
          : pokemon
      ));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      console.log('updatedCart');
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
>>>>>>> 1eb4fe17 (docs: modify comments)
=======
      console.log('updatedCart');
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
>>>>>>> 1eb4fe17 (docs: modify comments)
      setCart(updatedCart)
=======
=======
>>>>>>> bb9c12d8 (docs: modify comments)
=======
      console.log('updatedCart');
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
>>>>>>> 1eb4fe17 (docs: modify comments)
      setCart(updatedCart)
>>>>>>> 0684ec83 (feat: add cart info)
>>>>>>> 6c99dfdf (feat: add cart info)
=======
      console.log('updatedCart');
=======
>>>>>>> 1eb4fe17 (docs: modify comments)
      setCart(updatedCart)
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
=======
>>>>>>> 54166c43 (docs: modify comments)
=======
      console.log('updatedCart');
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
>>>>>>> 1eb4fe17 (docs: modify comments)
      setCart(updatedCart)
>>>>>>> 0684ec83 (feat: add cart info)
>>>>>>> c26f4186 (feat: add cart info)
    }
  }

  const showAlert = ({pokemonName,count}) => {
    setNotification(()=> ({
      pokemonName,
      count,
    }))

    setTimeout(()=>{
      setNotification(null);
    }, 3000)
  }

  const handleAddToCart = ({pokemonName, count, price}) => {
    showAlert({pokemonName, count});
    updateCart({pokemonName, count, price});
  }

  if (loading || !pokemons) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>something wrong QQ</p>
  }

  return (
    <div>
      <Header notification={notification} />

      <PokemonsWrapper>
        {pokemons?.map(pokemon=> (
          <PokemonCard
            key={`${pokemon.id}_${pokemon.url}`} 
            pokemonUrl={pokemon.url} 
            handleAddToCart={handleAddToCart}
          />
        ))}
      </PokemonsWrapper>

      <CartInfo cart={cart} />
      
    </div>
  );
}

export default App;
