
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface JourneyPhase {
  id: number;
  name: string;
  description: string;
  status: "current" | "past" | "future" | "opportunity";
}

interface InterventionPoint {
  id: number;
  name: string;
  connectsTo: number;
}

const journeyPhases: JourneyPhase[] = [
  {
    id: 1,
    name: "Initial Engagement",
    description: "CX Management Services",
    status: "past"
  },
  {
    id: 2,
    name: "Operational Stabilization",
    description: "9-12 months",
    status: "past"
  },
  {
    id: 3,
    name: "Value Assessment",
    description: "ROI Review",
    status: "current"
  },
  {
    id: 4,
    name: "Service Expansion Decision",
    description: "Additional CX Services",
    status: "future"
  },
  {
    id: 5,
    name: "Strategic Partnership",
    description: "Technology & Consulting Opportunity",
    status: "opportunity"
  },
  {
    id: 6,
    name: "Enterprise Integration",
    description: "Multi-Service Deployment",
    status: "opportunity"
  }
];

const interventionPoints: InterventionPoint[] = [
  {
    id: 1,
    name: "C-Suite Quarterly Business Review",
    connectsTo: 2
  },
  {
    id: 2,
    name: "Business Process Assessment Workshop",
    connectsTo: 3
  },
  {
    id: 3,
    name: "Digital Transformation Roadmap",
    connectsTo: 5
  },
  {
    id: 4,
    name: "Enterprise Value Integration",
    connectsTo: 6
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "past": return "bg-gray-200";
    case "current": return "bg-visibility-high";
    case "future": return "bg-tp-blue";
    case "opportunity": return "bg-visibility-low";
    default: return "bg-gray-200";
  }
};

const getStatusTextColor = (status: string) => {
  switch (status) {
    case "past": return "text-gray-700";
    case "current": return "text-white";
    case "future": return "text-white";
    case "opportunity": return "text-white";
    default: return "text-gray-700";
  }
};

export const ClientLifecycle = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl">TelePerformance Client Lifecycle Journey</CardTitle>
        <CardDescription className="text-center">
          Strategic Intervention Points
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-10">
          {/* Journey Phases */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              {journeyPhases.map((phase) => (
                <div key={phase.id} className="flex flex-col items-center relative z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getStatusColor(phase.status)} ${getStatusTextColor(phase.status)}`}>
                    {phase.id}
                  </div>
                  <div className="mt-2 text-center">
                    <p className="font-medium">{phase.name}</p>
                    <p className="text-sm text-gray-500">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Intervention Points */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {interventionPoints.map((point) => (
              <Card key={point.id} className="bg-tp-blue/10 border-tp-blue/30">
                <CardContent className="p-4 text-center">
                  <div className="font-medium">{point.name}</div>
                  <div className="text-sm text-gray-500">Connects to Phase {point.connectsTo}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Context Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Client Relationship Context</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Average Client Tenure: 4.8 years</li>
                  <li>67% of clients use only 1-2 services</li>
                  <li>CX Management is entry point for 82% of clients</li>
                  <li>Only 23% progress to advanced services</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Client Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Stage 1-2: 61% of clients</li>
                  <li>Stage 3: 22% of clients</li>
                  <li>Stage 4: 11% of clients</li>
                  <li>Stage 5-6: 6% of clients</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Legend */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-visibility-high"></div>
              <span className="text-sm">Current Phase (3)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-visibility-low"></div>
              <span className="text-sm">Opportunity Phases (5-6)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-tp-blue"></div>
              <span className="text-sm">Intervention Points</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-tp-gray"></div>
              <span className="text-sm">Context Information</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
