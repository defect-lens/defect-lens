import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Layouts
import DashboardLayout from "./layouts/DashboardLayout";

// Landing page components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/landing/HeroSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import ProductPreview from "./components/landing/ProductPreview";
import HowItWorks from "./components/landing/HowItWorks";
import FAQSection from "./components/landing/FAQSection";
import CTASection from "./components/landing/CTASection";

// Authentication pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Dashboard
import Dashboard from "./pages/dashboard/Dashboard";

// Inspection pages
import NewInspection from "./pages/inspection/NewInspection";
import InspectionResults from "./pages/inspection/InspectionResults";
import InspectionHistory from "./pages/inspection/InspectionHistory";

// Analytics pages
import DefectAnalysis from "./pages/analytics/DefectAnalysis";
import QualityAnalytics from "./pages/analytics/QualityAnalytics";
import PredictiveIntelligence from "./pages/analytics/PredictiveIntelligence";
import Explainability from "./pages/analytics/Explainability";
import AIAssistant from "./pages/analytics/AIAssistant";

// Reports
import Reports from "./pages/reports/Reports";

// Settings
import Settings from "./pages/settings/Settings";
import Profile from "./pages/settings/Profile";

// Not found
import NotFound from "./pages/NotFound";

// Landing page
function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#090b10] text-white">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductPreview />
        <HowItWorks />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

// Reusable dashboard page wrapper
function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC PAGES ================= */}

        <Route path="/" element={<HomePage />} />

        {/* ================= AUTHENTICATION ================= */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* ================= DASHBOARD ================= */}

        <Route
          path="/dashboard"
          element={
            <DashboardPage>
              <Dashboard />
            </DashboardPage>
          }
        />

        {/* ================= INSPECTIONS ================= */}

        <Route
          path="/inspection/new"
          element={
            <DashboardPage>
              <NewInspection />
            </DashboardPage>
          }
        />

        <Route
          path="/inspection/results"
          element={
            <DashboardPage>
              <InspectionResults />
            </DashboardPage>
          }
        />

        <Route
          path="/inspection/history"
          element={
            <DashboardPage>
              <InspectionHistory />
            </DashboardPage>
          }
        />

        {/* ================= ANALYTICS ================= */}

        <Route
          path="/analytics/defects"
          element={
            <DashboardPage>
              <DefectAnalysis />
            </DashboardPage>
          }
        />

        <Route
          path="/analytics/quality"
          element={
            <DashboardPage>
              <QualityAnalytics />
            </DashboardPage>
          }
        />

        <Route
          path="/analytics/predictive"
          element={
            <DashboardPage>
              <PredictiveIntelligence />
            </DashboardPage>
          }
        />

        <Route
          path="/analytics/explainability"
          element={
            <DashboardPage>
              <Explainability />
            </DashboardPage>
          }
        />

        <Route
          path="/analytics/assistant"
          element={
            <DashboardPage>
              <AIAssistant />
            </DashboardPage>
          }
        />

        {/* ================= REPORTS ================= */}

        <Route
          path="/reports"
          element={
            <DashboardPage>
              <Reports />
            </DashboardPage>
          }
        />

        {/* ================= PROFILE & SETTINGS ================= */}

        <Route
          path="/profile"
          element={
            <DashboardPage>
              <Profile />
            </DashboardPage>
          }
        />

        <Route
          path="/settings"
          element={
            <DashboardPage>
              <Settings />
            </DashboardPage>
          }
        />

        {/* ================= SHORTCUT REDIRECTS ================= */}

        <Route
          path="/inspection"
          element={
            <Navigate to="/inspection/new" replace />
          }
        />

        <Route
          path="/analytics"
          element={
            <Navigate to="/analytics/defects" replace />
          }
        />

        {/* ================= 404 ================= */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}