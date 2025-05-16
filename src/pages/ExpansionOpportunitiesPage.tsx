
import { ExpansionOpportunities } from "@/components/Visualizations/ExpansionOpportunities";
import { MainLayout } from "@/components/Dashboard/MainLayout";

const ExpansionOpportunitiesPage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <ExpansionOpportunities />
      </div>
    </MainLayout>
  );
};

export default ExpansionOpportunitiesPage;
