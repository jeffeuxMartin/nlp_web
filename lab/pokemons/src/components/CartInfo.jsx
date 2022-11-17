import React from 'react';
import styled from 'styled-components';

import { sumPrices } from '../utils/sumPrices';

const Cart = styled.div`
  margin: 10px;
  float: right;
`;

export default function CartInfo({cart}) {
  return (
    <Cart>
    <h3>cart</h3>
        {cart.length <= 0 
          ? 'no added pokemon'
          : (
            <>
            {cart.map(pokemon => (
              <div key={`${pokemon.id}_${pokemon.name}`}>
                  <p>
                    <span>{pokemon.name}{' '}</span>
<<<<<<< HEAD
                    <span>count: {pokemon.count}</span>
                  </p>
=======
                    <span>count: {pokemon.count}</span></p>
>>>>>>> 3dcca5a7 (feat: add cart info)
                  <p>subtotal: ${pokemon.count * pokemon.price}</p>
                  <hr />
              </div>
            ))}
            <p style={{fontWeight: 'bold'}}>Total: ${sumPrices({obj: cart, initialValue: 0})}</p>
            </>
          )}
    </Cart>
  )
}