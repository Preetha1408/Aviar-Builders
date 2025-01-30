import { lazy } from "react";
const HomePage = lazy(() => import("../components/homepage/HomePage"));
const Contact = lazy(() => import("../components/Conatct/Contact"));
const DefaultLayout = lazy(() => import("../components/DefaultLayout/DefaultLoyout"));
const Integrity = lazy(() => import("../components/homepage/Integrity"));
const ClientValueCreation = lazy(() => import("../components/homepage/ClientValueCreation"));
const AreasServed = lazy(() => import("../components/AboutUs/AreasServed"));
const BuildingProcess = lazy(() => import("../components/AboutUs/BuildingProcess"));
const FloorPlans = lazy(() => import("../components/FloorPlans/FloorPlans"));
const InspirationalGallery = lazy(() => import("../components/PhotoGallery/InspirationalGallery"));
const ServiceRequestForm = lazy(() => import("../components/Resources/ServiceRequestForm"));
const BuildersTrend = lazy(() => import("../components/Resources/BuildersTrend"));
const WarantyInformation = lazy(() => import("../components/Resources/WarantyInformation"));
const CommunityLinks = lazy(() => import("../components/Resources/CommunityLinks"));
const RecomenedPartner = lazy(() => import("../components/Resources/RecomenedPartner"));
const Testimonials = lazy(() => import("../components/AboutUs/Testimonials"));
const AboutAviarBuilders = lazy(() => import("../components/AboutUs/AboutAviarBuilders"));
const Subdivisions = lazy(() => import("../components/Resources/Subdivisions"));
const FrequentlyAskedQuestions = lazy(() => import("../components/Resources/FrequentlyAskedQuestions"));
const CustomConstruction = lazy(() => import("../components/Services/CustomConstruction"));
const RemodellingServices = lazy(() => import("../components/Services/RemodellingServices"));
const RealEstateBrokage = lazy(() => import("../components/Services/RealEstateBrokage"));
const HomeForSales = lazy(() => import("../components/ForSale/HomeForSales"));
const LotsForSale = lazy(() => import("../components/ForSale/LotsForSale"));
const ComersialConstruction = lazy(() => import("../components/Services/ComersialConstruction"));
const OurHomes = lazy(() => import("../components/PhotoGallery/OurHomes"));
const RemodelProjects = lazy(() => import("../components/PhotoGallery/Remodelprojects"));
const Loader = lazy(() => import("../components/core/loader"));
// const OurWebsites=lazy(()=>import("../components/OurWebsites/OurWebsites"));


export {
  HomePage,
  Integrity,
  ClientValueCreation,
  Contact,
  DefaultLayout,
  AreasServed,
  BuildingProcess,
  FloorPlans,
  InspirationalGallery,
  ServiceRequestForm,
  BuildersTrend,
  WarantyInformation,
  CommunityLinks,
  Testimonials,
  AboutAviarBuilders,
  RecomenedPartner,
  Subdivisions,
  FrequentlyAskedQuestions,
  CustomConstruction,
  RemodellingServices,
  RealEstateBrokage,
  HomeForSales,
  LotsForSale,
  ComersialConstruction,
  OurHomes,
  RemodelProjects,
  Loader,
};
