import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";

import WorkInProgressPage from "../pages/WorkInProgressPage";
import NotFoundPage from "../pages/NotFoundPage";

import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer';

const RoadmapPage = lazy(() => import("../pages/RoadmapPage"));
const TutorialsPage = lazy(() => import("../pages/TutorialsPage"));
const FaqPage = lazy(() => import("../pages/FaqPage"));
const WalletSupportPage = lazy(() => import("../pages/WalletSupport"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));

const Lazy = props => <Suspense fallback={<div style={{ backgroundColor: '#101010', minHeight: '100vh', width: '100vw' }} />}>{props.children}</Suspense>;

const AppRouter = () => (
    <BrowserRouter>
         <main id="main-content" className="main-content">
            <Navbar/>

            <Routes>
                <Route path="/" element={<HomePage />} exact={true} />

                <Route
                    path="/roadmap"
                    element={
                        <Lazy>
                            <RoadmapPage />
                        </Lazy>
                    }
                    exact={true}
                />
                <Route path="/whitepaper" element={<WorkInProgressPage />} exact={true} />

                <Route
                    path="/tutorials"
                    element={
                        <Lazy>
                            <TutorialsPage />
                        </Lazy>
                    }
                    exact={true}
                />
                <Route
                    path="/wallets"
                    element={
                        <Lazy>
                            <WalletSupportPage />
                        </Lazy>
                    }
                    exact={true}
                />
                <Route
                    path="/faq"
                    element={
                        <Lazy>
                            <FaqPage />
                        </Lazy>
                    }
                    exact={true}
                />

                <Route path="/dashboard" element={<WorkInProgressPage/>} exact={true} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            
            <Footer/>
        </main>
    </BrowserRouter>
);
export default AppRouter;
