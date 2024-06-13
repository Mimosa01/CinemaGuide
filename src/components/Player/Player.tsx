import { FC } from 'react';
import { Button } from '../Button/Button';
import './Player.scss';
import { useAppDispatch } from '../../store/store';
import { closePlayer } from '../../store/features/playerSlice';

interface PropsPlayer {
  id: string;
}

export const Player: FC<PropsPlayer> = ({id}) => {
  const dispatch = useAppDispatch();
  const url = `http://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&origin=http://localhost/`
  
  const handleClosePlayer = () => {
    dispatch(closePlayer());
  }

  return (
    <div className="background-modal-player">
      <div className="modal-player">
        <iframe className="modal-player__player" id="player" width="640" height="360" src={url}></iframe>

        <Button view={{none: true}} className="modal-player__close" onClick={handleClosePlayer}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.9997 5.5865L11.9495 0.636719L13.3637 2.05093L8.4139 7.0007L13.3637 11.9504L11.9495 13.3646L6.9997 8.4149L2.04996 13.3646L0.635742 11.9504L5.5855 7.0007L0.635742 2.05093L2.04996 0.636719L6.9997 5.5865Z" fill="black"/>
          </svg>          
        </Button>
      </div>
    </div>
  )
}