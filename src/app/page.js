'use client';
// using serverAction
import { useFormState } from 'react-dom';
import { testServerAction } from '@/lib/serverActions';
// import Image from "next/image";
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const initialState = {
  message: '',
  data: [],
};

export default function Home() {
  const [state, formAction] = useFormState(testServerAction, initialState);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>Home</div>

      <form action={formAction}>
        <Input type='text' placeholder='Name and Surname' name='user' />
        <Input type='text' placeholder='Email Address' name='email' />
        <p aria-live='polite' className='sr-only'>
          {state?.message}
        </p>
        <Button variant='outline' type='submit'>
          Submit
        </Button>
      </form>
      <Table>
        {/* <TableCaption>List of Users</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className='text-right w-[100px]'>User ID</TableHead>
            <TableHead className='text-right'>Name</TableHead>
            <TableHead className='text-right'>User Name</TableHead>
            <TableHead className='text-right'>Email</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {state.data.length > 0 ? (
            state.data.map((usr) => (
              <TableRow key={usr.id}>
                <TableCell className='font-medium w-[100px]'>
                  {usr.id}
                </TableCell>
                <TableCell className='text-right'>{usr.name}</TableCell>
                <TableCell className='text-right'>{usr.username}</TableCell>
                <TableCell className='text-right'>{usr.email}</TableCell>
                <Link
                  href={`/user/${usr.id}`}
                  className='btn btn-primary font-medium'
                  prefetch={false}
                >
                  View User Details
                </Link>
              </TableRow>
            ))
          ) : (
            <div className='m-5 text-center w-[100%]'> No data found</div>
          )}
        </TableBody>
      </Table>
    </main>
  );
}

// // using Client side form submittion
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// const Form = () => {
// const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("handle submit called", formData);
//     // Fetch data from an external API
//     const response = await fetch("/users", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // Check if the request was successful
//     if (response.status === 200) {
//       // Redirect the user to a success page
//       console.log("response", response.json());
// router.push('/')
//     } else {
//       // Display an error message to the user
//       alert("There was an error submitting the form.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>Home</div>
//       <input
//         type="text"
//         placeholder="Name and Surname"
//         name="user"
//         value={formData.name}
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Email Address"
//         name="email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;
