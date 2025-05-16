
import { CompetitivePositioning } from "@/components/Visualizations/CompetitivePositioning";
import { MainLayout } from "@/components/Dashboard/MainLayout";

const CompetitivePositioningPage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <CompetitivePositioning />
      </div>
    </MainLayout>
  );
};

export default CompetitivePositioningPage;
