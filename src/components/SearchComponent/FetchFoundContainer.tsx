import { FC } from "react";
import { Loader } from "../Loader/Loader";
import { FoundContainer } from "./FoundContainer";
import { useSearcFilms } from "../../hooks/queryHooks";

interface PropsFoundContainer {
  value: string;
}

export const FetchFoundContainer: FC<PropsFoundContainer> = ({value}) => {
  const searchFilmsQuery = useSearcFilms(value)

  switch (searchFilmsQuery.status) {
    case 'pending':
      return (
        <ul className="found found__loader">
          <Loader />
        </ul>
      )

    case 'success':
      return <FoundContainer data={searchFilmsQuery.data}/>
  }
}