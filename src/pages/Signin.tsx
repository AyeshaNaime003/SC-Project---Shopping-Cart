// import { useState } from "react";
// import { Container } from "react-bootstrap";

// export function Signin(){
//     // state varables
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // event handlers 
//     const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
//     const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)

//     // 
//     const handleSubmit = (event: ) => {
//         event.preventDefault();
//         // your signup code here
//       };

//     return(
//         <>
//         <Container>
//             <form action="">
//                 <input type="text" placeholder="First Name"/>
//                 <input type="text" placeholder="Last Name"/>
//                 <input type="email" placeholder="Email"/>
//                 <input type="password" placeholder="Password"/>
//                 <input type="password" placeholder="Confirmed Password"/>
//                 <input type="submit" value="Register" />
//             </form>
//         </Container>
//         </>
//     )
// }

import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
}

export function Signin() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData); // Do whatever you need with the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input type="text" key='firstname' name="firstName" value={formData.firstName} onChange={handleInputChange} />
      </label>
      <label>
        Last name:
        <input type="text" key='lastname' name="lastName" value={formData.lastName} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signin;
