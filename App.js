import React from 'react';
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);
  
  return (
    <>
      <p className="title">Registration Form</p>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
        <input type="text" {...register("name")} />
        </label>
        <label>
          Email :
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}
        </label>
        Password :
        <input type="password" {...register("password")} />
        <label>
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        </label>
      </form>
    </>
  );
}
export default App;