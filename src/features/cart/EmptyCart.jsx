import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='p-6 font-bold'>
      <LinkButton to="/menu" >&larr; Back to menu</LinkButton>

      <p className='text-lg mt-7'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
