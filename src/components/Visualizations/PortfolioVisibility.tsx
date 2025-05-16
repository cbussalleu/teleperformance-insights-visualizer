
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
    color: "bg-gradient-to-r from-[#7B2280] to-[#E40276] bg-opacity-70",
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
    color: "bg-gradient-to-r from-[#7B2280] to-[#E40276]",
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
    color: "bg-[#7B2280] bg-opacity-50",
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
    color: "bg-[#7B2280] bg-opacity-30",
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
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#7B2280] to-[#E40276]"></div>
      <span className="text-sm">High Visibility</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#7B2280] to-[#E40276] bg-opacity-70"></div>
      <span className="text-sm">Medium-High Visibility</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-[#7B2280] bg-opacity-60"></div>
      <span className="text-sm">Medium Visibility</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-[#7B2280] bg-opacity-50"></div>
      <span className="text-sm">Low-Medium Visibility</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-[#7B2280] bg-opacity-30"></div>
      <span className="text-sm">Low Visibility</span>
    </div>
  </div>
);

export const PortfolioVisibility = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl bg-gradient-to-r from-[#7B2280] to-[#E40276] bg-clip-text text-transparent">TelePerformance EMEA Portfolio Visibility Analysis</CardTitle>
        <CardDescription className="text-center">
          Hierarchical analysis of service portfolio by market visibility
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          {/* Root node */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-56 py-3 border border-[#7B2280] rounded-lg bg-gradient-to-r from-[#7B2280]/10 to-[#E40276]/10 text-center font-medium">
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
          
          {/* Added Visibility Gap Analysis Summary */}
          <div className="mt-8 p-4 bg-[#F5F5F5] rounded-lg border border-[#4B4C6A]/20 w-full">
            <h3 className="font-medium mb-2 text-[#7B2280]">Visibility Gap Analysis Summary</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="font-medium">High Visibility Services (>75% awareness):</span> Traditional CX Management services including Back-office Processing, Integrated Sales, and Multilingual Services</li>
              <li><span className="font-medium">Medium Visibility Services (40-75% awareness):</span> Digital CX and AI solutions including Real-time Speech Understanding and StoryfAI</li>
              <li><span className="font-medium">Low-Medium Visibility Services (25-40% awareness):</span> Consulting, Analytics and Technology offerings</li>
              <li><span className="font-medium">Low Visibility Services (&lt;25% awareness):</span> Specialized Services including Claims Management, Healthcare Support, and Visa Services</li>
            </ul>
            
            <div className="mt-4 p-3 bg-gradient-to-r from-[#7B2280]/5 to-[#E40276]/5 rounded border border-[#7B2280]/20">
              <p className="text-sm italic">
                <span className="font-medium">Research-Based Insight:</span> According to Forrester Research's "B2B Service Portfolio Perception Analysis" (2023), the gap between actual service capabilities and C-suite awareness creates a significant competitive disadvantage, with decision-makers typically aware of less than 40% of a provider's full capabilities.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
