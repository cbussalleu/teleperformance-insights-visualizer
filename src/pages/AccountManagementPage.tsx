
import { AccountManagement } from "@/components/Visualizations/AccountManagement";
import { MainLayout } from "@/components/Dashboard/MainLayout";

const AccountManagementPage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <AccountManagement />
      </div>
    </MainLayout>
  );
};

export default AccountManagementPage;
