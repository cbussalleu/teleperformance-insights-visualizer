
import { MessagingFramework } from "@/components/Visualizations/MessagingFramework";
import { MainLayout } from "@/components/Dashboard/MainLayout";

const MessagingFrameworkPage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <MessagingFramework />
      </div>
    </MainLayout>
  );
};

export default MessagingFrameworkPage;
