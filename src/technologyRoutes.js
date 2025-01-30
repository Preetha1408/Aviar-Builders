import HomePage from "./components/HomePage";
import Home from "./components/Home";
import Consulting from "./components/Consulting";
import StaffingSolutions from "./components/StaffingSolutions";
import GIS from "./components/GIS";
import Career from "./components/Career";
import Localcommunity from "./components/LocalCommunity";
import Events from "./components/Events";

const technologyRoutes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    publiclayout: false,
    component: Home,
  },
  {
    path: "/ats/home-page",
    exact: true,
    publiclayout: true,
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/ats/aviar-technology/consulting-solutions",
    exact: true,
    publiclayout: true, // Public layout needed here too
    name: "Consulting",
    component: Consulting,
  },
  {
    path: "/ats/aviar-technology/staffing-solutions",
    exact: true,
    publiclayout: true, // Public layout needed here too
    name: "StaffingSolutions",
    component: StaffingSolutions,
  },
  {
    path: "/ats/aviar-technology/geographical-information-services",
    exact: true,
    publiclayout: true,
    name: "GIS",
    component: GIS,
  },
  {
    path: "/ats/aviar-technology/careers",
    exact: true,
    publiclayout: true,
    name: "Career",
    component: Career,
  },
  {
    path: "/ats/aviar-technology/we-serve-our-local-community",
    exact: true,
    publiclayout: true,
    name: "LocalCommunity",
    component: Localcommunity,
  },
  {
    path: "/ats/aviar-technology/Events",
    exact: true,
    publiclayout: true,
    name: "Events",
    component: Events,
  },
];

export default technologyRoutes;
