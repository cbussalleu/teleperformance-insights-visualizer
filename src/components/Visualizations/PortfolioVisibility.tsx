
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCategory {
  name: string;
  visibility: "high" | "mediumHigh" | "medium" | "lowMedium" | "low";
  color: string;
  services: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    name: "Digital CX and AI",
    visibility: "mediumHigh",
    color: "bg-visibility-mediumHigh",
    services: [
      "Artificial Intelligence",
      "Agentic Solutions",
      "Real-time Speech Understanding",
      "StoryfAI",
      "TP Microservices",
      "Digital CX / Video CX",
      "Trust and Safety"
    ]
  },
  {
    name: "CX Management",
    visibility: "high",
    color: "bg-visibility-high",
    services: [
      "Back-office Processing",
      "Integrated Sales",
      "Finance and Accounting",
      "Smartshoring",
      "Work-at-home",
      "Multilingual Services",
      "Ad Sales",
      "Rebadging Solutions"
    ]
  },
  {
    name: "Consulting, Analytics and Technology",
    visibility: "lowMedium",
    color: "bg-visibility-lowMedium",
    services: [
      "Advanced Analytics",
      "Business Process Optimization",
      "Business Transformation Consulting",
      "Technology Services"
    ]
  },
  {
    name: "Specialized Services",
    visibility: "low",
    color: "bg-visibility-low",
    services: [
      "Claims Management",
      "Collection Services",
      "Interpretation and Translation",
      "Recruitment Process Outsourcing",
      "Visa and Consular Services",
      "Healthcare Support"
    ]
  }
];

const VisibilityLegend = () => (
  <div className="flex flex-wrap gap-4 mt-6">
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-visibility-high"></div>
      <span className="text-sm">High Visibility</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-visibility-mediumHigh"></div>
      <span className="text-sm">Medium-High Visibility</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-visibility-medium"></div>
      <span className="text-sm">Medium Visibility</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-visibility-lowMedium"></div>
      <span className="text-sm">Low-Medium Visibility</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-visibility-low"></div>
      <span className="text-sm">Low Visibility</span>
    </div>
  </div>
);

export const PortfolioVisibility = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl">TelePerformance EMEA Portfolio Visibility Analysis</CardTitle>
        <CardDescription className="text-center">
          Hierarchical analysis of service portfolio by market visibility
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          {/* Root node */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-56 py-3 border border-tp-blue rounded-lg bg-tp-blue/10 text-center font-medium">
              TelePerformance Service Portfolio
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
          </div>
          
          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {serviceCategories.map((category, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className={`w-full py-2 ${category.color} text-white text-center rounded-t-lg font-medium`}>
                  {category.name}
                </div>
                <div className="border border-t-0 rounded-b-lg p-4 w-full bg-white shadow-sm">
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIdx) => (
                      <li key={serviceIdx} className="text-sm">{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <VisibilityLegend />
        </div>
      </CardContent>
    </Card>
  );
};
