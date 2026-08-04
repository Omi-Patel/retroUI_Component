import CassetteDeckPlayer from '../../components/MediaPlayers/CassetteDeckPlayer';
import CassetteDeckPlayerSrc from '../../components/MediaPlayers/CassetteDeckPlayer.jsx?raw';
import BoomboxPlayer from '../../components/MediaPlayers/BoomboxPlayer';
import BoomboxPlayerSrc from '../../components/MediaPlayers/BoomboxPlayer.jsx?raw';
import RadioTunerPlayer from '../../components/MediaPlayers/RadioTunerPlayer';
import RadioTunerPlayerSrc from '../../components/MediaPlayers/RadioTunerPlayer.jsx?raw';
import WalkmanPlayer from '../../components/MediaPlayers/WalkmanPlayer';
import WalkmanPlayerSrc from '../../components/MediaPlayers/WalkmanPlayer.jsx?raw';

export const mediaPlayerComponents = [
  {
    name: 'CassetteDeckPlayer',
    component: CassetteDeckPlayer,
    code: CassetteDeckPlayerSrc,
  },
  {
    name: 'BoomboxPlayer',
    component: BoomboxPlayer,
    code: BoomboxPlayerSrc,
  },
  {
    name: 'RadioTunerPlayer',
    component: RadioTunerPlayer,
    code: RadioTunerPlayerSrc,
  },
  {
    name: 'WalkmanPlayer',
    component: WalkmanPlayer,
    code: WalkmanPlayerSrc,
  },
];

export default mediaPlayerComponents;
