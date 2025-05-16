
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Circle, ArrowRight, BarChart, Users, Workflow, BookOpen } from "lucide-react";

interface JourneyPhase {
  id: number;
  name: string;
  description: string;
  status: "current" | "past" | "future" | "opportunity";
  icon: React.ElementType;
}

interface InterventionPoint {
  id: number;
  name: string;
  connectsTo: number;
  icon: React.ElementType;
}

const journeyPhases: JourneyPhase[] = [
  {
    id: 1,
    name: "Initial Engagement",
    description: "CX Management Services",
    status: "past",
    icon: Users
  },
  {
    id: 2,
    name: "Operational Stabilization",
    description: "9-12 months",
    status: "past",
    icon: Workflow
  },
  {
    id: 3,
    name: "Value Assessment",
    description: "ROI Review",
    status: "current",
    icon: BarChart
  },
  {
    id: 4,
    name: "Service Expansion Decision",
    description: "Additional CX Services",
    status: "future",
    icon: Circle
  },
  {
    id: 5,
    name: "Strategic Partnership",
    description: "Technology & Consulting Opportunity",
    status: "opportunity",
    icon: BookOpen
  },
  {
    id: 6,
    name: "Enterprise Integration",
    description: "Multi-Service Deployment",
    status: "opportunity",
    icon: Circle
  }
];

const interventionPoints: InterventionPoint[] = [
  {
    id: 1,
    name: "C-Suite Quarterly Business Review",
    connectsTo: 2,
    icon: Users
  },
  {
    id: 2,
    name: "Business Process Assessment Workshop",
    connectsTo: 3,
    icon: Workflow
  },
  {
    id: 3,
    name: "Digital Transformation Roadmap",
    connectsTo: 5,
    icon: BarChart
  },
  {
    id: 4,
    name: "Enterprise Value Integration",
    connectsTo: 6,
    icon: BookOpen
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "past": return "bg-[#4B4C6A]";
    case "current": return "bg-gradient-to-r from-[#7B2280] to-[#E40276]";
    case "future": return "bg-[#7B2280]";
    case "opportunity": return "bg-[#7B2280]/50";
    default: return "bg-[#4B4C6A]";
  }
};

const getStatusTextColor = (status: string) => {
  return "text-black";
};

export const ClientLifecycle = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl text-black">Teleperformance Client Lifecycle Journey</CardTitle>
        <CardDescription className="text-center">
          Strategic Intervention Points
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-10">
          {/* Journey Phases - Made more visual with curved path and arrows */}
          <div className="relative pb-16 pt-10">
            {/* Path line with a slight curve */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#4B4C6A] via-[#7B2280] to-[#E40276] -translate-y-1/2 rounded-full" 
                style={{ 
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", 
                  transform: "translateY(-50%)"
                }}>
            </div>
            
            {/* Small arrows along the path */}
            {[20, 40, 60, 80].map((position) => (
              <div key={position} className="absolute top-1/2 -translate-y-1/2" style={{ left: `${position}%` }}>
                <ArrowRight className="h-3 w-3 text-white" />
              </div>
            ))}
            
            <div className="relative flex justify-between">
              {journeyPhases.map((phase) => (
                <div key={phase.id} className="flex flex-col items-center relative z-10">
                  {/* Circle icon */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getStatusColor(phase.status)} ${getStatusTextColor(phase.status)} shadow-lg`}>
                    <phase.icon className="h-7 w-7" />
                  </div>
                  
                  {/* Phase title - positioned closer to the circle */}
                  <div className="mt-4 text-center w-28 mx-auto">
                    <p className="font-medium">{phase.name}</p>
                    <p className="text-xs text-gray-500">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Add spacing between phases and intervention points */}
          <div className="h-24"></div>
          
          {/* Intervention Points - Styled with gradients and icons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {interventionPoints.map((point) => (
              <Card key={point.id} className="bg-gradient-to-r from-[#7B2280]/10 to-[#E40276]/10 border-[#7B2280]/30 overflow-hidden">
                <CardContent className="p-4 text-center relative">
                  <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-bl-lg bg-gradient-to-r from-[#7B2280] to-[#E40276]">
                    <point.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="pt-6">
                    <div className="font-medium">{point.name}</div>
                    <div className="text-sm text-gray-500">Connects to Phase {point.connectsTo}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Context Information - Using cards with icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border border-[#7B2280]/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#7B2280]" />
                  Client Relationship Context
                </CardTitle>
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
            
            <Card className="border border-[#E40276]/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-[#E40276]" />
                  Current Client Distribution
                </CardTitle>
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
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#7B2280] to-[#E40276]"></div>
              <span className="text-sm">Current Phase (3)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#7B2280]/50"></div>
              <span className="text-sm">Opportunity Phases (5-6)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#7B2280]"></div>
              <span className="text-sm">Intervention Points</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#4B4C6A]"></div>
              <span className="text-sm">Context Information</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
