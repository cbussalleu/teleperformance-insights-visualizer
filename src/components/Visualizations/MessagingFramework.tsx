
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CRoleCard = ({ role, color, priorities, narrative, portfolioFocus, proofPoints, engagementStrategy }: {
  role: string;
  color: string;
  priorities: string[];
  narrative: string;
  portfolioFocus: string[];
  proofPoints: string[];
  engagementStrategy: string;
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className={`p-3 rounded-t-lg ${color} text-white font-medium text-center`}>
        {role}
      </div>
      <div className="flex-1 border border-t-0 rounded-b-lg p-4 bg-white">
        <div className="mb-4">
          <h4 className="font-medium mb-2 text-sm">Strategic Priorities</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {priorities.map((priority, idx) => (
              <li key={idx}>{priority}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="font-medium mb-2 text-sm">Compelling Narrative</h4>
          <p className="text-sm italic">{narrative}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="font-medium mb-2 text-sm">Portfolio Focus</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {portfolioFocus.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="font-medium mb-2 text-sm">Proof Points</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {proofPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2 text-sm">Engagement Strategy</h4>
          <p className="text-sm">{engagementStrategy}</p>
        </div>
      </div>
    </div>
  );
};

export const MessagingFramework = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl">TelePerformance C-Suite Segmented Messaging Framework</CardTitle>
        <CardDescription className="text-center">
          Based on Harvard Business Review B2B Decision-Maker Research & Forrester Buying Cycle Analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CRoleCard 
            role="CEO"
            color="bg-tp-blue"
            priorities={[
              "Business model innovation",
              "Digital transformation acceleration",
              "Shareholder value creation",
              "Cost structure optimization"
            ]}
            narrative="Beyond operational excellence: TelePerformance delivers enterprise-wide transformation that connects customer experience to strategic business outcomes."
            portfolioFocus={[
              "Business Transformation Consulting",
              "Advanced Analytics",
              "AI-Integrated Business Solutions"
            ]}
            proofPoints={[
              "22% average revenue growth impact",
              "18% operational efficiency improvement",
              "Case: Global banking transformation story"
            ]}
            engagementStrategy="Executive Business Review focused on boardroom-level metrics and strategic roadmapping"
          />
          
          <CRoleCard 
            role="CIO/CTO"
            color="bg-teal-600"
            priorities={[
              "Technology integration & ROI",
              "Digital transformation execution",
              "IT operational efficiency",
              "Data security & governance"
            ]}
            narrative="Accelerate digital transformation with seamless integration of AI-powered technologies and human expertise across your enterprise technology ecosystem."
            portfolioFocus={[
              "Digital CX & AI Solutions",
              "Technology Services",
              "TP Microservices",
              "Trust and Safety"
            ]}
            proofPoints={[
              "52% faster implementation vs. industry average",
              "Enterprise security certifications portfolio",
              "Case: Retail digital transformation integration"
            ]}
            engagementStrategy="Technology Innovation Workshops and ROI modeling with implementation roadmapping"
          />
          
          <CRoleCard 
            role="CFO"
            color="bg-tp-green"
            priorities={[
              "Cost structure optimization",
              "Working capital efficiency",
              "Financial process transformation",
              "Risk management & compliance"
            ]}
            narrative="Transform financial outcomes through operational excellence: TP delivers measurable ROI across your business with integrated solutions that go beyond cost reduction."
            portfolioFocus={[
              "Finance and Accounting",
              "Business Process Optimization",
              "Back-office Processing",
              "Claims Management"
            ]}
            proofPoints={[
              "26% average TCO reduction",
              "Financial impact measurement methodology",
              "Case: Manufacturing financial process transformation"
            ]}
            engagementStrategy="Financial Impact Analysis with phased implementation planning and ROI reviews"
          />
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-3">Research-Based Messaging Framework</h3>
          <ul className="space-y-2">
            <li className="text-sm">
              <span className="font-medium">Harvard Business Review "C-Suite Decision-Making Study" (2023):</span> Executives make purchasing decisions based on how solutions address their strategic priorities rather than solution features.
            </li>
            <li className="text-sm">
              <span className="font-medium">McKinsey "B2B Buying Behavior Analysis" (2024):</span> C-level buyers require 3.2x more business outcome evidence than operational buyers.
            </li>
            <li className="text-sm">
              <span className="font-medium">Forrester "Executive Messaging That Works" (2023):</span> Messaging tailored to role-specific priorities generates 47% higher engagement than generic corporate messaging.
            </li>
            <li className="text-sm">
              <span className="font-medium">Gartner "Tech Buying Committee Research" (2024):</span> The average enterprise purchase now involves 7-8 stakeholders across multiple functional areas.
            </li>
          </ul>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg border">
          <h3 className="font-medium mb-3">Implementation Strategy</h3>
          <ol className="space-y-2 list-decimal pl-5">
            <li className="text-sm">Develop expanded messaging frameworks for all key C-suite roles (CHRO, CMO, COO)</li>
            <li className="text-sm">Create role-specific sales enablement tools aligned with each messaging framework</li>
            <li className="text-sm">Train account teams on stakeholder-specific value articulation</li>
            <li className="text-sm">Implement measurement system to track messaging effectiveness by stakeholder type</li>
            <li className="text-sm">Continuously refine based on engagement analytics and feedback</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};
