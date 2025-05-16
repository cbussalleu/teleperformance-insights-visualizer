
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CompetitorPosition {
  name: string;
  x: number;
  y: number;
  size: number;
  color: string;
  isTeleperf: boolean;
}

const digitalCxCompetitors: CompetitorPosition[] = [
  { name: "TelePerformance", x: 25, y: 75, size: 20, color: "#F44336", isTeleperf: true },
  { name: "Concentrix", x: 75, y: 75, size: 15, color: "#2196F3", isTeleperf: false },
  { name: "Sitel", x: 25, y: 25, size: 15, color: "#4CAF50", isTeleperf: false },
  { name: "Tech Boutiques", x: 75, y: 80, size: 10, color: "#9C27B0", isTeleperf: false },
  { name: "Regional Players", x: 20, y: 20, size: 10, color: "#FFC107", isTeleperf: false },
];

const consultingCompetitors: CompetitorPosition[] = [
  { name: "TelePerformance", x: 25, y: 25, size: 20, color: "#F44336", isTeleperf: true },
  { name: "Concentrix", x: 75, y: 25, size: 15, color: "#2196F3", isTeleperf: false },
  { name: "Accenture", x: 25, y: 75, size: 15, color: "#FF9800", isTeleperf: false },
  { name: "Consulting Firms", x: 75, y: 75, size: 15, color: "#9C27B0", isTeleperf: false },
  { name: "Vertical Specialists", x: 80, y: 30, size: 10, color: "#009688", isTeleperf: false },
];

const PositioningMap = ({ 
  title, 
  xLabel,
  yLabel, 
  competitors,
  opportunityZone
}: { 
  title: string;
  xLabel: [string, string];
  yLabel: [string, string];
  competitors: CompetitorPosition[];
  opportunityZone: {x: number, y: number, label: string};
}) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="relative h-80 border border-gray-200 bg-white">
        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
          <span className="text-xs">{xLabel[0]}</span>
          <span className="text-xs">{xLabel[1]}</span>
        </div>
        
        {/* Y-axis labels */}
        <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-4">
          <span className="text-xs transform -rotate-90">{yLabel[0]}</span>
          <span className="text-xs transform -rotate-90">{yLabel[1]}</span>
        </div>
        
        {/* Quadrant lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 border-gray-200" style={{ borderRightWidth: 1, borderTopWidth: 1 }}></div>
        </div>
        
        {/* Competitors */}
        {competitors.map((comp, idx) => (
          <div 
            key={idx} 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-white text-xs"
            style={{
              left: `${comp.x}%`,
              top: `${comp.y}%`,
              width: `${comp.size}px`,
              height: `${comp.size}px`,
              backgroundColor: comp.color,
              border: comp.isTeleperf ? "2px solid black" : "none",
              zIndex: comp.isTeleperf ? 10 : 5
            }}
          >
            {comp.isTeleperf && "TP"}
          </div>
        ))}
        
        {/* Competitor labels */}
        {competitors.map((comp, idx) => (
          <div 
            key={`label-${idx}`} 
            className="absolute text-xs font-medium"
            style={{
              left: `${comp.x}%`,
              top: `${comp.y + (comp.size / 2) + 5}%`,
              transform: "translateX(-50%)"
            }}
          >
            {comp.name}
          </div>
        ))}
        
        {/* Opportunity Zone */}
        <div 
          className="absolute border border-dashed border-tp-red rounded-lg flex items-center justify-center p-1"
          style={{
            left: `${opportunityZone.x - 15}%`,
            top: `${opportunityZone.y - 15}%`,
            width: "30%",
            height: "30%"
          }}
        >
          <span className="text-xs text-tp-red text-center">Opportunity Zone</span>
        </div>
      </div>
    </div>
  );
};

export const CompetitivePositioning = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl">TelePerformance EMEA Competitive Positioning Analysis</CardTitle>
        <CardDescription className="text-center">
          Based on Gartner CX Service Provider Quadrant 2024 & IDC Market Analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PositioningMap 
            title="Digital CX & AI Services Positioning"
            xLabel={["Scale", "Specialized"]}
            yLabel={["Technological Innovation", "Traditional Delivery"]}
            competitors={digitalCxCompetitors}
            opportunityZone={{x: 25, y: 75, label: "Scale + Innovation Leadership"}}
          />
          
          <PositioningMap 
            title="Consulting & Analytics Positioning"
            xLabel={["Generalist", "Specialist"]}
            yLabel={["Strategic Value", "Operational Focus"]}
            competitors={consultingCompetitors}
            opportunityZone={{x: 50, y: 50, label: "CX-Led Strategic Consulting"}}
          />
        </div>
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Research-Based Insights</h3>
          <ul className="space-y-2">
            <li className="text-sm">
              <span className="font-medium">Digital CX & AI:</span> TelePerformance has established a leadership position in scale while advancing technological capabilities, according to Gartner's "CX Technology Provider Evaluation" (2023).
            </li>
            <li className="text-sm">
              <span className="font-medium">Consulting Services:</span> Primary gap exists in strategic value perception, with HBR's "Consulting Services Evolution" study showing that CX providers are typically undervalued for business consulting despite operational expertise.
            </li>
            <li className="text-sm">
              <span className="font-medium">Market Opportunity:</span> IDC's "Service Provider Future" report identifies the convergence of technological scale and strategic consulting as the highest-value positioning territory by 2026.
            </li>
            <li className="text-sm">
              <span className="font-medium">Competitive Advantage:</span> TelePerformance's diverse portfolio offers unique opportunity to bridge operational excellence with strategic transformation, according to Forrester's "CX to Business Value" analysis.
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
