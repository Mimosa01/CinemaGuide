import { QueryObserverResult } from "@tanstack/react-query";
import { Button } from "../Button/Button"
import { Container } from "../Container/Container"
import { FC } from "react";

interface PropsRefetch {
  handleRefetch: () => Promise<QueryObserverResult<unknown, Error>>;
}

export const RefetchComponent: FC<PropsRefetch> = ({handleRefetch}) => {
  return (
    <Container>
      <div style={{'padding': '160px 50px'}}>
        <Button view={{color: true}} onClick={handleRefetch}>Попробовать еще раз</Button>
      </div>
    </Container>
  )
}