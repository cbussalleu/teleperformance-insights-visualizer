
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, Users, BarChart, BookOpen } from "lucide-react";

export const AccountManagement = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl bg-gradient-to-r from-[#7B2280] to-[#E40276] bg-clip-text text-transparent">TelePerformance Account Management Process Optimization Framework</CardTitle>
        <CardDescription className="text-center">
          Process flow diagram for optimizing account management
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          {/* Context Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-r from-[#7B2280]/10 to-[#E40276]/10 border-[#7B2280]/20">
              <CardContent className="p-4">
                <h3 className="font-medium text-[#7B2280] mb-2 flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  Account Management Context Analysis
                </h3>
                <p className="text-sm">73% of AM activities focus on operational KPIs vs. 27% on strategic growth</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-[#7B2280]/10 to-[#E40276]/10 border-[#7B2280]/20">
              <CardContent className="p-4">
                <h3 className="font-medium text-[#7B2280] mb-2 flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  B2B Provider Industry Benchmark
                </h3>
                <p className="text-sm">Average TP client uses 1.7 services vs. industry benchmark of 3.2</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-[#7B2280]/10 to-[#E40276]/10 border-[#7B2280]/20">
              <CardContent className="p-4">
                <h3 className="font-medium text-[#7B2280] mb-2 flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  Current TP AM Process Assessment
                </h3>
                <p className="text-sm">82% of AM teams lack comprehensive portfolio training</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-[#7B2280]/10 to-[#E40276]/10 border-[#7B2280]/20">
              <CardContent className="p-4">
                <h3 className="font-medium text-[#7B2280] mb-2 flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  Key Gap Analysis
                </h3>
                <p className="text-sm">C-Suite engagement frequency is 64% below industry average</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Process Journey - with visual flow */}
          <div className="relative mt-8">
            {/* Connecting line for the journey */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#4B4C6A]/30 -translate-x-1/2 z-0" style={{ height: "calc(100% - 40px)" }}></div>
            
            <div className="space-y-12">
              {/* Portfolio Awareness */}
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7B2280] to-[#E40276] flex items-center justify-center text-white shadow-lg">
                    <BookOpen className="h-6 w-6" />
                  </div>
                </div>
                
                <Card className="border-l-4 border-l-[#4B4C6A]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      Portfolio Awareness
                      <span className="text-sm font-normal bg-[#4B4C6A] text-white px-2 py-0.5 rounded">Stage 1</span>
                    </CardTitle>
                    <CardDescription>Current State: Limited to primary service line expertise</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#E91E63]/10 p-3 rounded border border-[#E91E63]/30">
                      <h4 className="font-medium text-[#E91E63] mb-2">Current Pain Points</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Insufficient service introduction in QBRs</li>
                        <li>No formalized cross-service educational events</li>
                        <li>Marketing focused on single-service updates</li>
                        <li>Limited success stories across portfolio</li>
                      </ul>
                    </div>
                    <div className="bg-[#FF5722]/10 p-3 rounded border border-[#FF5722]/30">
                      <h4 className="font-medium text-[#FF5722] mb-2">Recommended Solution</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Portfolio Excellence Program with certification</li>
                        <li>Cross-service shadowing program</li>
                        <li>Monthly portfolio showcase sessions</li>
                        <li>Client-facing portfolio education series</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Stakeholder Engagement */}
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7B2280] to-[#E40276] flex items-center justify-center text-white shadow-lg">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                
                <Card className="border-l-4 border-l-[#4B4C6A]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      Stakeholder Engagement
                      <span className="text-sm font-normal bg-[#4B4C6A] text-white px-2 py-0.5 rounded">Stage 2</span>
                    </CardTitle>
                    <CardDescription>Current State: CX leader relationships only</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#E91E63]/10 p-3 rounded border border-[#E91E63]/30">
                      <h4 className="font-medium text-[#E91E63] mb-2">Current Pain Points</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Inconsistent executive meeting cadence</li>
                        <li>Low presence at client industry events</li>
                        <li>No formalized C-suite program</li>
                        <li>Reactive communication for operational issues</li>
                      </ul>
                    </div>
                    <div className="bg-[#FF5722]/10 p-3 rounded border border-[#FF5722]/30">
                      <h4 className="font-medium text-[#FF5722] mb-2">Recommended Solution</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Enterprise Stakeholder Mapping Plan</li>
                        <li>C-suite persona development toolkit</li>
                        <li>Executive communication framework</li>
                        <li>Strategic client industry presence program</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Value Articulation */}
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7B2280] to-[#E40276] flex items-center justify-center text-white shadow-lg">
                    <BarChart className="h-6 w-6" />
                  </div>
                </div>
                
                <Card className="border-l-4 border-l-[#4B4C6A]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      Value Articulation
                      <span className="text-sm font-normal bg-[#4B4C6A] text-white px-2 py-0.5 rounded">Stage 3</span>
                    </CardTitle>
                    <CardDescription>Current State: Service-specific operational metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#E91E63]/10 p-3 rounded border border-[#E91E63]/30">
                      <h4 className="font-medium text-[#E91E63] mb-2">Current Pain Points</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>QBRs focusing on SLAs not business outcomes</li>
                        <li>Limited executive-ready communication materials</li>
                        <li>Inconsistent value messaging across touchpoints</li>
                        <li>No formal schedule for value reviews</li>
                      </ul>
                    </div>
                    <div className="bg-[#FF5722]/10 p-3 rounded border border-[#FF5722]/30">
                      <h4 className="font-medium text-[#FF5722] mb-2">Recommended Solution</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Enterprise Value Storytelling Framework</li>
                        <li>Business impact measurement toolkit</li>
                        <li>Industry-specific value frameworks</li>
                        <li>Quarterly strategic value review program</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Account Planning */}
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7B2280] to-[#E40276] flex items-center justify-center text-white shadow-lg">
                    <Workflow className="h-6 w-6" />
                  </div>
                </div>
                
                <Card className="border-l-4 border-l-[#4B4C6A]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      Account Planning
                      <span className="text-sm font-normal bg-[#4B4C6A] text-white px-2 py-0.5 rounded">Stage 4</span>
                    </CardTitle>
                    <CardDescription>Current State: Renewal-focused activity planning</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#E91E63]/10 p-3 rounded border border-[#E91E63]/30">
                      <h4 className="font-medium text-[#E91E63] mb-2">Current Pain Points</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>No multi-service relationship roadmap</li>
                        <li>Events without strategic alignment</li>
                        <li>Invitation-based webinars vs. proactive leadership</li>
                        <li>Limited coordination of executive touchpoints</li>
                      </ul>
                    </div>
                    <div className="bg-[#FF5722]/10 p-3 rounded border border-[#FF5722]/30">
                      <h4 className="font-medium text-[#FF5722] mb-2">Recommended Solution</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Strategic Growth Roadmapping Methodology</li>
                        <li>Portfolio expansion prioritization framework</li>
                        <li>Executive alignment summit series</li>
                        <li>Integrated multi-channel communication plan</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Outcome section */}
          <div className="mt-8 p-4 bg-gradient-to-r from-[#7B2280]/5 to-[#E40276]/5 rounded-lg border border-[#7B2280]/20">
            <h3 className="font-medium mb-2 text-center text-[#7B2280]">Implementation Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <div className="p-3">
                <div className="font-medium">Portfolio Awareness</div>
                <p className="text-sm">3.2x increase in cross-service adoption</p>
              </div>
              <div className="p-3">
                <div className="font-medium">Executive Engagement</div>
                <p className="text-sm">68% improved C-suite meeting frequency</p>
              </div>
              <div className="p-3">
                <div className="font-medium">Client Retention</div>
                <p className="text-sm">26% higher multi-year retention rate</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
