
import { ClientLifecycle } from "@/components/Visualizations/ClientLifecycle";
import { MainLayout } from "@/components/Dashboard/MainLayout";

const ClientLifecyclePage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <ClientLifecycle />
      </div>
    </MainLayout>
  );
};

export default ClientLifecyclePage;
