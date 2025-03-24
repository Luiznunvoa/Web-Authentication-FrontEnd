import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "Nome é obrigatório",
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
              message: "Nome inválido (somente letras e espaços são permitidos)",
            },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Formato de email inválido",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          type="password"
          {...register("password", { required: "Senha é obrigatória" })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Registrar</button>
      <NavLink to={"/login"}>Já tem conta??</NavLink>
    </form>
    
  );
}

