
import { WhiteSpaceAnalysis } from "@/components/Visualizations/WhiteSpaceAnalysis";
import { MainLayout } from "@/components/Dashboard/MainLayout";

const WhiteSpacePage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <WhiteSpaceAnalysis />
      </div>
    </MainLayout>
  );
};

export default WhiteSpacePage;
