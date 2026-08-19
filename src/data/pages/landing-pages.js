import {
  AnalogHouseLanding,
  AtelierLanding,
  RivieraClubLanding,
} from "../../pagesComponents/LandingPages/PremiumLandingPages";

const GH =
  "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/LandingPages";

export default {
  slug: "landing-pages",
  title: "Landing Pages",
  description:
    "Premium retro landing pages with original imagery, responsive editorial layouts, and polished calls to action.",
  variants: [
    {
      name: "RivieraClubLanding",
      label: "Riviera Club",
      component: RivieraClubLanding,
      githubUrl: GH,
    },
    {
      name: "AnalogHouseLanding",
      label: "Analog House",
      component: AnalogHouseLanding,
      githubUrl: GH,
    },
    {
      name: "AtelierLanding",
      label: "Atelier Morrow",
      component: AtelierLanding,
      githubUrl: GH,
    },
  ],
};
