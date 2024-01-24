import { Input } from '@/components/ui/input';

const getData = async (id) => {
  let data = [];
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error('Something went wrong!!!');
  } else {
    data = res.json();
  }
  console.log(data);
  return data;
};

export default async function userDetails({ params, searchParams }) {
  console.log('params =====>', params, searchParams);

  const userDetails = await getData(params?.id);

  return (
    <form>
      <Input
        type='text'
        placeholder='user ID'
        name='id'
        value={userDetails.id}
      />
      <Input
        type='text'
        placeholder='Name and Surname'
        name='name'
        value={userDetails.name}
      />
      <Input
        type='text'
        placeholder='User name'
        name='username'
        value={userDetails.username}
      />
      <Input
        type='text'
        placeholder='Email'
        name='email'
        value={userDetails.email}
      />
      <Input
        type='text'
        placeholder='Phone'
        name='phone'
        value={userDetails.phone}
      />
      <Input
        type='text'
        placeholder='Website'
        name='website'
        value={userDetails.website}
      />
    </form>
  );
}
