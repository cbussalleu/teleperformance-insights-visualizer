
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface OpportunityData {
  signal: string;
  detectionMethod: string;
  servicePath: string;
  timeSensitivity: "High" | "Medium" | "Low";
  successProbability: number;
  reference: string;
}

const opportunityData: OpportunityData[] = [
  {
    signal: "Digital Transformation Initiative",
    detectionMethod: "Client strategic announcements, new CIO/CTO appointment",
    servicePath: "Digital CX and AI → Business Transformation Consulting",
    timeSensitivity: "High",
    successProbability: 73,
    reference: "McKinsey Digital Transformation Index 2024"
  },
  {
    signal: "Back-Office Inefficiency",
    detectionMethod: "Operational KPI reporting, staffing challenges mentioned in reviews",
    servicePath: "CX Management → Finance and Accounting → Business Process Optimization",
    timeSensitivity: "Medium",
    successProbability: 68,
    reference: "Deloitte Back-Office Evolution Study 2023"
  },
  {
    signal: "Multilingual Expansion",
    detectionMethod: "Geographic expansion announcements, new market entry",
    servicePath: "Multilingual Services → Interpretation and Translation → Visa and Consular Services",
    timeSensitivity: "Medium",
    successProbability: 62,
    reference: "Gartner CX Globalization Report 2024"
  },
  {
    signal: "Workforce Management Challenges",
    detectionMethod: "Hiring freezes, restructuring announcements",
    servicePath: "Work-at-home → Recruitment Process Outsourcing → Smartshoring",
    timeSensitivity: "Medium",
    successProbability: 65,
    reference: "HBR Workforce Transformation Study 2023"
  },
  {
    signal: "Customer Analytics Gaps",
    detectionMethod: "NPS fluctuations, voice of customer program mentions",
    servicePath: "CX Management → Advanced Analytics → Business Transformation Consulting",
    timeSensitivity: "Low",
    successProbability: 70,
    reference: "Forrester Customer Intelligence Study 2024"
  },
  {
    signal: "Compliance and Risk Concerns",
    detectionMethod: "Regulatory announcements, security incidents",
    servicePath: "Trust and Safety → Claims Management → Technology Services",
    timeSensitivity: "High",
    successProbability: 78,
    reference: "KPMG Global Risk Management Survey 2023"
  },
  {
    signal: "AI Implementation Interest",
    detectionMethod: "Technology pilot announcements, innovation programs",
    servicePath: "Real-time Speech Understanding → StoryfAI → Agentic Solutions → TP Microservices",
    timeSensitivity: "Medium",
    successProbability: 75,
    reference: "MIT AI Business Applications Report 2024"
  }
];

const getSensitivityColor = (sensitivity: string) => {
  switch (sensitivity) {
    case "High": return "bg-visibility-low text-white";
    case "Medium": return "bg-visibility-medium";
    case "Low": return "bg-visibility-high text-white";
    default: return "bg-gray-100";
  }
};

const SuccessProbabilityMeter = ({ value }: { value: number }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex-1 h-2 bg-gray-200 rounded-full">
        <div 
          className="h-full bg-tp-blue rounded-full" 
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <span className="text-sm font-medium">{value}%</span>
    </div>
  );
};

export const ExpansionOpportunities = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl">TelePerformance EMEA Service Expansion Opportunity Framework</CardTitle>
        <CardDescription className="text-center">
          Opportunity indicators for service portfolio expansion based on market signals
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-medium">Opportunity Signal</TableHead>
                <TableHead className="font-medium">Detection Method</TableHead>
                <TableHead className="font-medium">TP Service Expansion Path</TableHead>
                <TableHead className="font-medium">Time Sensitivity</TableHead>
                <TableHead className="font-medium">Success Probability</TableHead>
                <TableHead className="font-medium">Reference Research</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {opportunityData.map((opportunity, idx) => (
                <TableRow key={idx} className={idx % 2 === 0 ? "bg-gray-50/50" : ""}>
                  <TableCell className="font-medium">{opportunity.signal}</TableCell>
                  <TableCell className="text-sm">{opportunity.detectionMethod}</TableCell>
                  <TableCell className="text-sm">{opportunity.servicePath}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getSensitivityColor(opportunity.timeSensitivity)}>
                      {opportunity.timeSensitivity === "High" ? `${opportunity.timeSensitivity} (1-3 months)` : 
                       opportunity.timeSensitivity === "Medium" ? `${opportunity.timeSensitivity} (2-4 months)` :
                       `${opportunity.timeSensitivity} (3-6 months)`}
                    </Badge>
                  </TableCell>
                  <TableCell className="w-40">
                    <SuccessProbabilityMeter value={opportunity.successProbability} />
                  </TableCell>
                  <TableCell className="text-sm">{opportunity.reference}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Implementation Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3 bg-white rounded-lg border">
              <div className="flex items-center justify-center mb-2">
                <span className="w-8 h-8 bg-tp-blue text-white rounded-full flex items-center justify-center font-medium">1</span>
              </div>
              <p className="text-sm text-center">Signal detection automation</p>
            </div>
            <div className="p-3 bg-white rounded-lg border">
              <div className="flex items-center justify-center mb-2">
                <span className="w-8 h-8 bg-tp-blue text-white rounded-full flex items-center justify-center font-medium">2</span>
              </div>
              <p className="text-sm text-center">Cross-service expansion mapping</p>
            </div>
            <div className="p-3 bg-white rounded-lg border">
              <div className="flex items-center justify-center mb-2">
                <span className="w-8 h-8 bg-tp-blue text-white rounded-full flex items-center justify-center font-medium">3</span>
              </div>
              <p className="text-sm text-center">Account team opportunity alerts</p>
            </div>
            <div className="p-3 bg-white rounded-lg border">
              <div className="flex items-center justify-center mb-2">
                <span className="w-8 h-8 bg-tp-blue text-white rounded-full flex items-center justify-center font-medium">4</span>
              </div>
              <p className="text-sm text-center">Outcome measurement framework</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
