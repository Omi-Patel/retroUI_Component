// Component imports
import ProductCard from '../../components/Cards/ProductCard';
import ProductCardSrc from '../../components/Cards/ProductCard.jsx?raw';
import ProfileCard from '../../components/Cards/ProfileCard';
import ProfileCardSrc from '../../components/Cards/ProfileCard.jsx?raw';
import ServiceCard from '../../components/Cards/ServiceCard';
import ServiceCardSrc from '../../components/Cards/ServiceCard.jsx?raw';
import TestimonialCard from '../../components/Cards/TestimonialCard';
import TestimonialCardSrc from '../../components/Cards/TestimonialCard.jsx?raw';
import BlogCard from '../../components/Cards/BlogCard';
import BlogCardSrc from '../../components/Cards/BlogCard.jsx?raw';

export const cardComponents = [
  {
    name: 'ProductCard',
    component: ProductCard,
    code: ProductCardSrc,
  },
  {
    name: 'ProfileCard',
    component: ProfileCard,
    code: ProfileCardSrc,
  },
  {
    name: 'ServiceCard',
    component: ServiceCard,
    code: ServiceCardSrc,
  },
  {
    name: 'TestimonialCard',
    component: TestimonialCard,
    code: TestimonialCardSrc,
  },
  {
    name: 'BlogCard',
    component: BlogCard,
    code: BlogCardSrc,
  },
];

export default cardComponents;
