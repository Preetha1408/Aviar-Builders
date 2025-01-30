import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import PublicLayout from "./container/PublicLayout";
import AviarLayout from "./container/AviarLayout";
import BuildersLayout from "./container/BuildersLayout";
import FinanceLayout from "./container/FinanceLayout";

// Page Components
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import Consulting from "./components/Consulting";
import StaffingSolutions from "./components/StaffingSolutions";
import GIS from "./components/GIS";
import Career from "./components/Career";
import LocalCommunity from "./components/LocalCommunity";
import Events from "./components/Events";
import BuildersHomePage from "./builders/components/homepage/HomePage";
import Integrity from "./builders/components/homepage/Integrity";
import Contact from "./builders/components/Conatct/Contact";
// import DefaultLoyout from "./builders/components/DefaultLayout/DefaultLoyout";
import ClientValueCreation from "./builders/components/homepage/ClientValueCreation";
import AreasServed from "./builders/components/AboutUs/AreasServed";
import BuildingProcess from "./builders/components/AboutUs/BuildingProcess";
import FloorPlans from "./builders/components/FloorPlans/FloorPlans";
import Inspirationalgallery from "./builders/components/PhotoGallery/InspirationalGallery";
import ServiceRequestForm from "./builders/components/Resources/ServiceRequestForm";
import BuildersTrend from "./builders/components/Resources/BuildersTrend";
import WarantyInformation from "./builders/components/Resources/WarantyInformation";
import CommunityLinks from "./builders/components/Resources/CommunityLinks";
import RecomenedPartner from "./builders/components/Resources/RecomenedPartner";
import Testimonials from "./builders/components/AboutUs/Testimonials";
import AboutAVIARBuilders from "./builders/components/AboutUs/AboutAviarBuilders";
import Subdivisions from "./builders/components/Resources/Subdivisions";
import FrequentlyAskedQuestions from "./builders/components/Resources/FrequentlyAskedQuestions";
import CustomConstruction from "./builders/components/Services/CustomConstruction";
import RemodellingServices from "./builders/components/Services/RemodellingServices";
import RealEstateBrokage from "./builders/components/Services/RealEstateBrokage";
import HomeForSales from "./builders/components/ForSale/HomeForSales";
import LotsForSale from "./builders/components/ForSale/LotsForSale";
import CommercialConstruction from "./builders/components/Services/ComersialConstruction";
import OurHomes from "./builders/components/PhotoGallery/OurHomes";
import Remodelprojects from "./builders/components/PhotoGallery/Remodelprojects";
import Loader from "./builders/components/core/loader";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Redirect root to common home */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Common home page for all layouts */}
          <Route path="/home" element={<Home />} />

          {/* Aviar routes under /ats */}
          <Route path="/ats" element={<AviarLayout />}>
            <Route path="home-page" element={<HomePage />} />
            <Route path="consulting-solutions" element={<Consulting />} />
            <Route path="staffing-solutions" element={<StaffingSolutions />} />
            <Route path="geographical-information-services" element={<GIS />} />
            <Route path="careers" element={<Career />} />
            <Route path="we-serve-our-local-community" element={<LocalCommunity />} />
            <Route path="events" element={<Events />} />
          </Route>

          {/* Builders routes under /abs */}
          <Route path="/abs" element={<BuildersLayout />}>
            <Route path="homepage" element={<BuildersHomePage />} />
            <Route path="integrity" element={<Integrity />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="integrity" element={<DefaultLoyout />} /> */}
            <Route path="client-value-creation" element={<ClientValueCreation />} />
            <Route path="aboutUs/areasserved" element={<AreasServed />} />
            <Route path="aboutUs/buildingprocess" element={<BuildingProcess />} />
            <Route path="floorplans" element={<FloorPlans />} />
            <Route path="photogallery/inspirationalgallery" element={<Inspirationalgallery />} />
            <Route path="resources/servicerequestform" element={<ServiceRequestForm />} />
            <Route path="resources/builderstrend" element={<BuildersTrend />} />
            <Route path="resources/warantyinformation" element={<WarantyInformation />} />
            <Route path="resources/communitylinks" element={<CommunityLinks />} />
            <Route path="resources/recommendedpartners" element={<RecomenedPartner />} />
            <Route path="aboutus/testimonials" element={<Testimonials />} />
            <Route path="aboutus/about-aviar-builders" element={<AboutAVIARBuilders />} />
            <Route path="resources/subdivisions" element={<Subdivisions />} />
            <Route path="resources/frequentlyaskedquestions" element={<FrequentlyAskedQuestions />} />
            <Route path="services/customconstruction" element={<CustomConstruction />} />
            <Route path="services/remodellingservices" element={<RemodellingServices />} />
            <Route path="services/realestatebrokage" element={<RealEstateBrokage />} />
            <Route path="forsale/homes-for-sale" element={<HomeForSales />} />
            <Route path="forsale/lots-for-sale" element={<LotsForSale />} />
            <Route path="forsale/homes-for-sale" element={<CommercialConstruction />} />
            <Route path="/abs/services/comersialconstruction" element={<CommercialConstruction />} />
            <Route path="photogallery/ourhomes" element={<OurHomes />} />
            <Route path="photogallery/remoteProjects" element={<Remodelprojects />} />
          </Route>

          {/* Finance routes */}
          {/* <Route path="/finance" element={<FinanceLayout />}>
            <Route path="home" element={<FinanceHomePage />} />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
