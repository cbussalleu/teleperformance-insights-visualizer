
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  ChartBarStacked, 
  ChartLine, 
  Table, 
  Workflow, 
  CircleCheck, 
  TableProperties, 
  MessageSquare
} from "lucide-react";

const navItems = [
  {
    title: "Portfolio Visibility",
    href: "/portfolio-visibility",
    icon: ChartBarStacked
  },
  {
    title: "Client Lifecycle",
    href: "/client-lifecycle",
    icon: ChartLine
  },
  {
    title: "Expansion Opportunities",
    href: "/expansion-opportunities",
    icon: Table
  },
  {
    title: "Account Management",
    href: "/account-management",
    icon: Workflow
  },
  {
    title: "Competitive Positioning",
    href: "/competitive-positioning",
    icon: CircleCheck
  },
  {
    title: "White Space Analysis",
    href: "/white-space",
    icon: TableProperties
  },
  {
    title: "Messaging Framework",
    href: "/messaging-framework",
    icon: MessageSquare
  }
];

export function SidebarNav() {
  const location = useLocation();
  
  return (
    <nav className="grid gap-1 px-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            location.pathname === item.href 
              ? "bg-tp-blue text-white" 
              : "hover:bg-tp-lightgray"
          )}
        >
          <item.icon className="h-4 w-4" />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
