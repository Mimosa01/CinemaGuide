import { FC } from "react";
import { User } from "../../types/IUser";
import { Button } from "../Button/Button";
import './AccountSettings.scss'
import { useLogout } from "../../hooks/mutationHooks";

interface PropsAccountSettings {
  user: User;
}

// нужны будут данные
export const AccountSettings: FC<PropsAccountSettings> = ({user}) => {

  const logoutMutate = useLogout();

  return (
    <div className='account-settings'>
      <div className='account-settings__info'>
        <div className='account-settings__info-wrapper'>
          {/* <!-- тут может быть изображение --> */}
          <div className='account-settings__avatar'>{`${user.name.slice(0, 1)}${user.surname.slice(0, 1)}`}</div>
          <div className='account-settings__wrapper'>
            <span className='account-settings__title'>Имя Фамилия</span>
            <span className='account-settings__desc'>{`${user.name} ${user.surname}`}</span>
          </div>
        </div>
        <div className='account-settings__info-wrapper'>
          <div className='account-settings__avatar account-settings__avatar--svg'>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 0C21.5523 0 22 0.44772 22 1V17.0066C22 17.5552 21.5447 18 21.0082 18H2.9918C2.44405 18 2 17.5551 2 17.0066V16H20V4.3L12 11.5L2 2.5V1C2 0.44772 2.44772 0 3 0H21ZM8 12V14H0V12H8ZM5 7V9H0V7H5ZM19.5659 2H4.43414L12 8.8093L19.5659 2Z" fill="white"/>
            </svg>
          </div>
          <div className='account-settings__wrapper'>
            <span className='account-settings__title'>Электронная почта</span>
            <span className='account-settings__desc'>{user.email}</span>
          </div>
        </div>
      </div>
      <Button 
        className='account-settings__btn' 
        view={{color: true}}
        onClick={() => logoutMutate.mutate()}
        isLoading={logoutMutate.isPending}
      >
        Выйти из аккаунта
      </Button>
    </div>
  )
}