import { Navigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { useMe } from "../../hooks/queryHooks";
import { AccountPage } from "./AccountPage";

export const FetchAccountPage = () => {
  const user = useMe();

  switch (user.status) {
    case 'pending':
      return <Loader />

    case 'success':
      return <AccountPage user={user.data}/>

    case 'error':
      return <Navigate to='/' />
  }
}