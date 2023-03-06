import SingleItem from './SingleItem';

const Items = ({ items, removeItem }) => {
  return (
    <div className='items'>
      {items.map((item) => (
        <SingleItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </div>
  );
};
export default Items;
