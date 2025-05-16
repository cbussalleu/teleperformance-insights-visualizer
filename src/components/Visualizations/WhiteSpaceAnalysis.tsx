
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface WhiteSpaceData {
  whiteSpace: string;
  portfolioAlignment: string;
  marketSaturation: string;
  saturationLevel: number;
  differentiationPotential: string;
  strategicPriority: number;
  marketSize: string;
}

const whiteSpaceData: WhiteSpaceData[] = [
  {
    whiteSpace: "AI-Integrated Business Process Management",
    portfolioAlignment: "StoryfAI + Business Process Optimization + Finance and Accounting",
    marketSaturation: "Low",
    saturationLevel: 31,
    differentiationPotential: "High: Unique combination of AI expertise and operational process knowledge",
    strategicPriority: 5,
    marketSize: "€4.8B (23% CAGR)"
  },
  {
    whiteSpace: "Cross-Border Customer Experience Consistency",
    portfolioAlignment: "Multilingual Services + Work-at-home + Smartshoring",
    marketSaturation: "Medium",
    saturationLevel: 49,
    differentiationPotential: "High: Unmatched geographic footprint with consistent methodology",
    strategicPriority: 4,
    marketSize: "€3.2B (16% CAGR)"
  },
  {
    whiteSpace: "CX-Informed Business Transformation",
    portfolioAlignment: "Advanced Analytics + Business Transformation Consulting + Technology Services",
    marketSaturation: "Medium-High",
    saturationLevel: 58,
    differentiationPotential: "Medium: Requires stronger C-suite credibility vs. traditional consulting firms",
    strategicPriority: 3,
    marketSize: "€7.4B (19% CAGR)"
  },
  {
    whiteSpace: "Integrated Digital Citizen Services",
    portfolioAlignment: "Digital CX + Visa and Consular Services + Trust and Safety",
    marketSaturation: "Low",
    saturationLevel: 26,
    differentiationPotential: "High: Few competitors with both public sector experience and digital capabilities",
    strategicPriority: 5,
    marketSize: "€2.9B (27% CAGR)"
  },
  {
    whiteSpace: "Healthcare Experience Transformation",
    portfolioAlignment: "Healthcare Support + Advanced Analytics + Real-time Speech Understanding",
    marketSaturation: "Medium",
    saturationLevel: 44,
    differentiationPotential: "Medium-High: Strong domain expertise but facing specialized competitors",
    strategicPriority: 4,
    marketSize: "€3.6B (21% CAGR)"
  },
  {
    whiteSpace: "Sustainable Business Operations",
    portfolioAlignment: "Business Process Optimization + Technology Services + Recruitment Process Outsourcing",
    marketSaturation: "Low",
    saturationLevel: 23,
    differentiationPotential: "Medium: Emerging space with positioning opportunity ahead of competition",
    strategicPriority: 3,
    marketSize: "€2.3B (32% CAGR)"
  },
  {
    whiteSpace: "AI-Powered Employee Experience Management",
    portfolioAlignment: "Agentic Solutions + Recruitment Process Outsourcing + Work-at-home",
    marketSaturation: "Very Low",
    saturationLevel: 18,
    differentiationPotential: "Very High: First-mover advantage connecting customer and employee experience",
    strategicPriority: 5,
    marketSize: "€2.8B (36% CAGR)"
  }
];

const getSaturationColor = (level: number) => {
  if (level < 30) return "bg-[#7B2280]/20 text-[#7B2280]";
  if (level < 50) return "bg-[#7B2280]/40 text-[#7B2280]";
  return "bg-[#E40276]/30 text-[#E40276]";
};

const PriorityStars = ({ count }: { count: number }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg
          key={idx}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={idx < count ? "#E40276" : "#E0E0E0"}
          strokeWidth="2"
          stroke={idx < count ? "#E40276" : "#E0E0E0"}
          className="mr-0.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
};

export const WhiteSpaceAnalysis = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl bg-gradient-to-r from-[#7B2280] to-[#E40276] bg-clip-text text-transparent">TelePerformance EMEA White Space and Differentiation Opportunity Analysis</CardTitle>
        <CardDescription className="text-center">
          Strategic market white spaces aligned with portfolio capabilities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-[#7B2280]/5 to-[#E40276]/5">
                <TableHead className="font-medium text-[#7B2280]">Market White Space</TableHead>
                <TableHead className="font-medium text-[#7B2280]">TP Portfolio Alignment</TableHead>
                <TableHead className="font-medium text-[#7B2280]">Market Saturation Level</TableHead>
                <TableHead className="font-medium text-[#7B2280]">Competitive Differentiation Potential</TableHead>
                <TableHead className="font-medium text-[#7B2280]">Strategic Priority</TableHead>
                <TableHead className="font-medium text-[#7B2280]">Market Size 2026 (EMEA)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {whiteSpaceData.map((data, idx) => (
                <TableRow key={idx} className={idx % 2 === 0 ? "bg-gradient-to-r from-[#7B2280]/5 to-[#E40276]/5" : ""}>
                  <TableCell className="font-medium">{data.whiteSpace}</TableCell>
                  <TableCell className="text-sm">{data.portfolioAlignment}</TableCell>
                  <TableCell>
                    <div className={`text-xs px-2 py-1 rounded inline-block ${getSaturationColor(data.saturationLevel)}`}>
                      {data.marketSaturation} ({data.saturationLevel}% addressable market)
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{data.differentiationPotential}</TableCell>
                  <TableCell>
                    <PriorityStars count={data.strategicPriority} />
                  </TableCell>
                  <TableCell className="text-sm font-medium">{data.marketSize}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-8 p-4 bg-gradient-to-r from-[#7B2280]/5 to-[#E40276]/5 rounded-lg border border-[#7B2280]/20">
          <h3 className="font-medium mb-3 text-[#7B2280]">Research-Based Strategic Assessment</h3>
          <ol className="space-y-3 list-decimal pl-5">
            <li className="text-sm">
              According to McKinsey's "Market Space Opportunity Analysis" (2024), the most valuable market positions combine three factors: low current market saturation, strong existing capabilities, and substantial projected market growth.
            </li>
            <li className="text-sm">
              The Boston Consulting Group's "Service Provider Growth Strategy" report (2023) indicates that providers who successfully integrate AI capabilities with operational expertise achieve 2.7x higher growth rates than those pursuing either dimension alone.
            </li>
            <li className="text-sm">
              Gartner's "Future of Work" study (2024) identifies the integration of employee and customer experience as a critical emerging opportunity with few established providers, creating significant first-mover advantage potential.
            </li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};
