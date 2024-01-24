'use server';

// export const testServerAction = async (formData) => {
//   const { user, email } = Object.fromEntries(formData);

//   try {
//     const payload = {
//       user,
//       email,
//     };

//     console.log("test Server called", user, email);
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
//     } else {
//       // Display an error message to the user
//       alert("There was an error submitting the form.");
//     }

//     console.log("saved to db");
//     revalidatePath("/");
//   } catch (err) {
//     console.log(err);
//     return { error: "Something went wrong!" };
//   }
// };

export const testServerAction = async (prevState, formData) => {
  let result = {
    message: '',
    data: [],
  };
  const { user, email } = Object.fromEntries(formData);
  console.log(
    '=======================================================================',
  );
  try {
    // const payload = {
    //   user,
    //   email,
    // };

    console.log('test Server called', user, email, prevState);
    // Fetch data from an external API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Check if the request was successful
    if (response.status === 200) {
      // Redirect the user to a success page
      const data = await response.json();
      console.log('response', data);
      result = {
        message: 'data fetch successfully',
        data,
      };
    } else {
      // Display an error message to the user
      alert('There was an error submitting the form.');
      result = {
        message: 'data fetch error',
        data: [],
      };
    }

    console.log('saved to db');
    console.log(
      '=======================================================================',
    );
    // revalidatePath("/");
    return result;
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};
