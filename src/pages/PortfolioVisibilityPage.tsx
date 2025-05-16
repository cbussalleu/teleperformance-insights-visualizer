
import { PortfolioVisibility } from "@/components/Visualizations/PortfolioVisibility";
import { MainLayout } from "@/components/Dashboard/MainLayout";

const PortfolioVisibilityPage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <PortfolioVisibility />
      </div>
    </MainLayout>
  );
};

export default PortfolioVisibilityPage;
