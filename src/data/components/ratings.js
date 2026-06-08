// Component imports
import StarRating from '../../components/Ratings/StarRating';
import StarRatingSrc from '../../components/Ratings/StarRating.jsx?raw';
import StampRating from '../../components/Ratings/StampRating';
import StampRatingSrc from '../../components/Ratings/StampRating.jsx?raw';
import HeartRating from '../../components/Ratings/HeartRating';
import HeartRatingSrc from '../../components/Ratings/HeartRating.jsx?raw';
import EmojiRating from '../../components/Ratings/EmojiRating';
import EmojiRatingSrc from '../../components/Ratings/EmojiRating.jsx?raw';
import NumberPillRating from '../../components/Ratings/NumberPillRating';
import NumberPillRatingSrc from '../../components/Ratings/NumberPillRating.jsx?raw';

export const ratingComponents = [
  { name: 'StarRating', component: StarRating, code: StarRatingSrc },
  { name: 'StampRating', component: StampRating, code: StampRatingSrc },
  { name: 'HeartRating', component: HeartRating, code: HeartRatingSrc },
  { name: 'EmojiRating', component: EmojiRating, code: EmojiRatingSrc },
  { name: 'NumberPillRating', component: NumberPillRating, code: NumberPillRatingSrc },
];

export default ratingComponents;
