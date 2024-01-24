const getItems = async () => {
  try {
    const res = await fetch('http://jsonplaceholder.typicode.com/users', {
      cache: 'no-store',
    });
    console.log('res==>', res.json());
    if (!res.ok) {
      throw new Error('Failed to fetch items');
    }

    return res.json();
  } catch (error) {
    console.log('Error loading items: ', error);
  }
};

async function ItemList() {
  const { items } = await getItems();
  console.log('items ==>', items);
  return (
    <div>
      {items?.map((item) => (
        <div key={item.id} className='p-2'>
          {item?.id}--{item?.user || '-'}
        </div>
      ))}
    </div>
  );
}

export default ItemList;
