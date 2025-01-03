
import { useState } from 'react';
import './App.css'
import { useForm } from "react-hook-form"


function App() {
  const [formData, setFormdata] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setFormdata(data)
    console.log("Data : ", data);
    
  }
  return (
   <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label htmlFor="">Name : </label>
      <input type="text"   {...register("name", 
      {
        required: true,
        minLength:{value:3 , message: "Min length should be greater than 3"}

      })} />
      </div>
      {errors.name && <p>{errors.name.message}</p>}

      <div>
      <label htmlFor="">Password : </label>
      <input type="password"  {...register("password", {
        required: true,
        pattern: {value : /^[A-Za-z]+$/i , message: "should include any charcter"}
      })} />
      </div>
      {errors.password && <p>{errors.password.message}</p>}

      <div>
      <label htmlFor="">Age : </label>
      <input type="number" {...register("age", {
        required: true
      })} />
      </div>

      <div>
      <label htmlFor="">sex : </label>
      <input type="text" {...register("sex", {
        required: true
      })} />
      </div>

    
      <input type="submit" disabled={isSubmitting}
      value={isSubmitting ? "Submitting" : "submit"}/>
    </form>

 {formData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p>{formData.name}</p>
          <p>{formData.password}</p>
          <p>{formData.sex}</p>
          <p>{formData.age}</p>
        </div>
      )}
   </div>
   
  )
}

export default App
