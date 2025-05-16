
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const AccountManagement = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl">TelePerformance Account Management Process Optimization Framework</CardTitle>
        <CardDescription className="text-center">
          Process flow diagram for optimizing account management
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          {/* Context Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-tp-blue/10">
              <CardContent className="p-4">
                <h3 className="font-medium text-tp-blue mb-2">Account Management Context Analysis</h3>
                <p className="text-sm">73% of AM activities focus on operational KPIs vs. 27% on strategic growth</p>
              </CardContent>
            </Card>
            <Card className="bg-tp-blue/10">
              <CardContent className="p-4">
                <h3 className="font-medium text-tp-blue mb-2">B2B Provider Industry Benchmark</h3>
                <p className="text-sm">Average TP client uses 1.7 services vs. industry benchmark of 3.2</p>
              </CardContent>
            </Card>
            <Card className="bg-tp-blue/10">
              <CardContent className="p-4">
                <h3 className="font-medium text-tp-blue mb-2">Current TP AM Process Assessment</h3>
                <p className="text-sm">82% of AM teams lack comprehensive portfolio training</p>
              </CardContent>
            </Card>
            <Card className="bg-tp-blue/10">
              <CardContent className="p-4">
                <h3 className="font-medium text-tp-blue mb-2">Key Gap Analysis</h3>
                <p className="text-sm">C-Suite engagement frequency is 64% below industry average</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Process Areas */}
          <div className="space-y-4">
            {/* Portfolio Awareness */}
            <Card className="border-l-4 border-l-tp-gray">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Portfolio Awareness</CardTitle>
                <CardDescription>Current State: Limited to primary service line expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-tp-orange/10 p-3 rounded border border-tp-orange/30">
                  <h4 className="font-medium text-tp-orange mb-2">Recommended: Portfolio Excellence Program with certification path</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Cross-service shadowing program</li>
                    <li>Monthly portfolio showcase sessions</li>
                    <li>Service bundling incentive structure</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Stakeholder Engagement */}
            <Card className="border-l-4 border-l-tp-gray">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Stakeholder Engagement</CardTitle>
                <CardDescription>Current State: CX leader relationships only</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-tp-orange/10 p-3 rounded border border-tp-orange/30">
                  <h4 className="font-medium text-tp-orange mb-2">Recommended: Enterprise Stakeholder Mapping & Engagement Plan</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>C-suite persona development toolkit</li>
                    <li>Executive communication framework</li>
                    <li>Multi-stakeholder influence strategy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Value Articulation */}
            <Card className="border-l-4 border-l-tp-gray">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Value Articulation</CardTitle>
                <CardDescription>Current State: Service-specific operational metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-tp-orange/10 p-3 rounded border border-tp-orange/30">
                  <h4 className="font-medium text-tp-orange mb-2">Recommended: Enterprise Value Storytelling Framework</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Business impact measurement toolkit</li>
                    <li>Cross-service value integration maps</li>
                    <li>Industry-specific value frameworks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Account Planning */}
            <Card className="border-l-4 border-l-tp-gray">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Account Planning</CardTitle>
                <CardDescription>Current State: Renewal-focused activity planning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-tp-orange/10 p-3 rounded border border-tp-orange/30">
                  <h4 className="font-medium text-tp-orange mb-2">Recommended: Strategic Growth Roadmapping Methodology</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Client maturity assessment model</li>
                    <li>Portfolio expansion prioritization framework</li>
                    <li>Long-term partnership vision development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
