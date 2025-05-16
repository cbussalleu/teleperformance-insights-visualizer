
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/Dashboard/MainLayout";
import { Link } from "react-router-dom";
import { 
  ChartBarStacked, 
  ChartLine, 
  Table, 
  Workflow, 
  CircleCheck, 
  TableProperties, 
  MessageSquare
} from "lucide-react";

const dashboardItems = [
  {
    title: "Portfolio Visibility",
    description: "Hierarchical analysis of service portfolio by market visibility",
    icon: ChartBarStacked,
    href: "/portfolio-visibility",
    color: "border-blue-500"
  },
  {
    title: "Client Lifecycle",
    description: "Strategic intervention points in the client journey",
    icon: ChartLine,
    href: "/client-lifecycle",
    color: "border-green-500"
  },
  {
    title: "Expansion Opportunities",
    description: "Service expansion opportunity framework",
    icon: Table,
    href: "/expansion-opportunities",
    color: "border-yellow-500"
  },
  {
    title: "Account Management",
    description: "Process optimization framework for accounts",
    icon: Workflow,
    href: "/account-management",
    color: "border-purple-500"
  },
  {
    title: "Competitive Positioning",
    description: "EMEA market positioning analysis",
    icon: CircleCheck,
    href: "/competitive-positioning",
    color: "border-red-500"
  },
  {
    title: "White Space Analysis",
    description: "Market white space and differentiation opportunities",
    icon: TableProperties,
    href: "/white-space",
    color: "border-orange-500"
  },
  {
    title: "Messaging Framework",
    description: "C-Suite segmented messaging strategy",
    icon: MessageSquare,
    href: "/messaging-framework",
    color: "border-teal-500"
  }
];

const Index = () => {
  return (
    <MainLayout>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-tp-blue mb-2">TelePerformance EMEA Research Dashboard</h1>
        <p className="text-lg text-gray-600">Strategic Visualizations for Portfolio Expansion</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardItems.map((item, idx) => (
          <Card key={idx} className={`border-l-4 ${item.color} animate-fade-in`} style={{ animationDelay: `${idx * 0.1}s` }}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild className="w-full">
                <Link to={item.href}>View Visualization</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-10 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">About This Dashboard</h2>
        <p>
          This research visualization dashboard is designed to showcase TelePerformance EMEA's strategic analysis 
          across multiple dimensions. The visualizations are based on comprehensive research and designed to help 
          executives and business leaders understand market opportunities, competitive positioning, and strategic priorities.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          <p>Research sources include Gartner, Forrester, McKinsey, BCG, IDC, and HBR studies between 2023-2024.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
