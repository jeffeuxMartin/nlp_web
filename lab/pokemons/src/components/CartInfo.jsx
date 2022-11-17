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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c26f4186 (feat: add cart info)
                    <span>count: {pokemon.count}</span>
                  </p>
=======
                    <span>count: {pokemon.count}</span></p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
>>>>>>> 0684ec83 (feat: add cart info)
>>>>>>> 6c99dfdf (feat: add cart info)
=======
                    <span>count: {pokemon.count}</span></p>
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
>>>>>>> 0684ec83 (feat: add cart info)
>>>>>>> c26f4186 (feat: add cart info)
=======
=======
>>>>>>> 16a2ed63 (feat: add cart info)
>>>>>>> 0684ec83 (feat: add cart info)
=======
>>>>>>> 3dcca5a7 (feat: add cart info)
>>>>>>> 19fc13ae (feat: add cart info)
<<<<<<< HEAD
>>>>>>> ae4cf03e (feat: add cart info)
=======
=======
>>>>>>> 3dcca5a7 (feat: add cart info)
=======
>>>>>>> 0684ec83 (feat: add cart info)
>>>>>>> 6c99dfdf (feat: add cart info)
>>>>>>> e7a629df (feat: add cart info)
>>>>>>> 16a2ed63 (feat: add cart info)
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