import React from 'react';
import './CartItemStyles.scss';
// useCallback let us memoize inline function on func comps
// const sth = useCallback(() => cl(sth), [arr of dependencies]);

// use Memo => to cache value of comp that does sth complex like match
// for not re compute useMemo(()=> {}, [])
const CartItem = ({ item : {imageUrl, price, name, quantity }}) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt={name}/>
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default React.memo(CartItem);
