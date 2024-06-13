import { z } from "zod";
import { openRegisterModal } from "../../store/features/modalSlice";
import { useAppDispatch } from "../../store/store";
import { Button } from "../Button/Button"
import { FormField } from "../FormField/FormField"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/mutationHooks";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

type LoginForm = z.infer<typeof LoginSchema>;

export const ModalEntry = () => {
  const dispatch = useAppDispatch();

  const loginMutation = useLogin();


  const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = ({email, password}: LoginForm) => {
    loginMutation.mutate({email, password});
    reset();
  }

  const handleOpenRegisterModal = () => {
    dispatch(openRegisterModal());
  }

  return (
    <>
      <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="modal__form-fields">
          <FormField errorMessage={errors.email?.message}>
            <input 
              type="text" 
              className="modal__input" 
              placeholder="Электронная почта" 
              {...register('email')}
            />
            <svg className="modal__icon" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 0C21.5523 0 22 0.44772 22 1V17.0066C22 17.5552 21.5447 18 21.0082 18H2.9918C2.44405 18 2 17.5551 2 17.0066V16H20V4.3L12 11.5L2 2.5V1C2 0.44772 2.44772 0 3 0H21ZM8 12V14H0V12H8ZM5 7V9H0V7H5ZM19.5659 2H4.43414L12 8.8093L19.5659 2Z" fill="black"/>
            </svg>
          </FormField>

          <FormField errorMessage={errors.password?.message}>
            <input 
              type="text" 
              className="modal__input" 
              placeholder="Пароль" 
              {...register('password')}
            />
            <svg className="modal__icon" width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.917 7C11.441 9.8377 8.973 12 6 12C2.68629 12 0 9.3137 0 6C0 2.68629 2.68629 0 6 0C8.973 0 11.441 2.16229 11.917 5H22V7H20V11H18V7H16V11H14V7H11.917ZM6 10C8.20914 10 10 8.2091 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.2091 3.79086 10 6 10Z" fill="black"/>
            </svg>
          </FormField>
        </div>

        <Button view={{color: true}} className="modal__btn" isLoading={loginMutation.isPending}>Войти</Button>
      </form>
      <Button view={{outline: true}} className="modal__btn--outline" onClick={handleOpenRegisterModal}>Регистрация</Button>
    </>
  )
}
