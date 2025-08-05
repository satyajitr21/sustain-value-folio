import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, ExternalLink, BookOpen, Clock, CheckCircle } from 'lucide-react';

export default function Research() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-academic-heading mb-6">
            Research
          </h1>
          <p className="text-lg text-academic-body max-w-4xl mx-auto leading-relaxed">
            My research contributes to sustainable operations management through rigorous 
            academic inquiry and practical applications. I focus on developing frameworks 
            that balance environmental, social, and economic objectives in value chains.
          </p>
        </div>

        {/* Research Interests */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-academic-heading mb-8 text-center">
            Research Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-3">Sustainable Supply Chains</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  Design and optimization of environmentally responsible supply chain networks
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-3">Social Responsibility</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  Integration of social impact considerations in operations management
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <ExternalLink className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-3">Multi-Objective Optimization</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  Mathematical models balancing multiple sustainability objectives
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Work */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-academic-heading mb-8 text-center">
            Research Publications & Work
          </h2>

          <Tabs defaultValue="working" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="working">Working Papers</TabsTrigger>
              <TabsTrigger value="progress">Work in Progress</TabsTrigger>
              <TabsTrigger value="published">Published Papers</TabsTrigger>
            </TabsList>

            <TabsContent value="working" className="space-y-6 mt-8">
              <Card className="shadow-academic-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-serif text-academic-heading mb-2">
                        Electric vs Flex-Fuel Vehicles –The Impact of Government Policies on Automaker's Choice
                        Between Green Technologies
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default">Working Paper</Badge>
                        <Badge variant="secondary">Under Review</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 pt-3">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Draft
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Abstract
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-academic-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-serif text-academic-heading mb-2">
                        Coordination Under Constraints to Match Scarce Supply with Demand in a Pro-social Supply
                        Chain – The case of Deceased-donation Program in India
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default">Working Paper</Badge>
                        <Badge variant="outline">Revision Stage</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 pt-3">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-academic-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-serif text-academic-heading mb-2">
                        Energy Saving Through Climate Education: Climate Sensitization in School for Mindful Consumption at Home
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default">Working Paper</Badge>
                        <Badge variant="secondary">Under review</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 pt-3">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Draft
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Abstract
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-academic-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-serif text-academic-heading mb-2">
                        Population Control for Sustainable Development – Navigating Operational Challenges in India's Family Planning Program Through ASHAs
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default">Working Paper</Badge>
                        <Badge variant="secondary">Under review</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 pt-3">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Draft
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Abstract
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="progress" className="space-y-6 mt-8">
              <Card className="shadow-academic-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-academic-heading mb-2">
                    Selling vs Leasing Commercial EVs: Managing Battery Uncertainty and Customer Behaviour
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      In Progress
                    </Badge>
                    <Badge variant="outline">Analysis phase</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-academic-body text-sm">
                    <strong>Expected Completion:</strong> Q4 2025
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-academic-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-academic-heading mb-2">
                    Optimizing Policy Levers in Dual Alcohol Markets: A Stylized Model of Taxation, Adulteration, and Enforcement
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      In Progress
                    </Badge>
                    <Badge variant="outline">Modeling phase</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-academic-body text-sm">
                    <strong>Expected Completion:</strong> Q2 2026
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-academic-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-academic-heading mb-2">
                    (Teaching case study) Operational excellence at Agoda - The Human-AI Conundrum
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      In Progress
                    </Badge>
                    <Badge variant="outline">Case development</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-academic-body text-sm">
                    <strong>Expected Completion:</strong> Q4 2025
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-academic-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-academic-heading mb-2">
                    Cost Optimization and Sensitivity Analysis in Solid Waste Management : A Case Study
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      In Progress
                    </Badge>
                    <Badge variant="outline">Data collection</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-academic-body text-sm">
                    <strong>Expected Completion:</strong> Q1 2026
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-academic-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-academic-heading mb-2">
                    Human AI Collaboration and the Moderating Role of Systematic Thinking
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      In Progress
                    </Badge>
                    <Badge variant="outline">Experiment Design and IRB Approval</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-academic-body text-sm">
                    <strong>Expected Completion:</strong> Q4 2026
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-academic-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-academic-heading mb-2">
                    Balancing Efficiency, Fairness, and Equity in Deceased Organ Allocation - A Stylized Analysis
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      In Progress
                    </Badge>
                    <Badge variant="outline">Model development</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-academic-body text-sm">
                    <strong>Expected Completion:</strong> Q4 2026
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="published" className="space-y-6 mt-8">
              <Card className="shadow-academic-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-academic-heading mb-2">
                    Charting a sustainable future: Transformative policies for India's energy, agriculture, and transport sectors
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="default">Published</Badge>
                    <Badge variant="outline">Journal Article</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-academic-body leading-relaxed mb-4">
                    <strong>Abstract:</strong> To fulfil its commitments towards sustainable development, India is transitioning from fossil fuels to renewables in the energy sector, trying to shift consumption and cropping practices in the agriculture sector, and promoting alternative fuel vehicles in the transport sector. In this study, we analyse the current state of energy, agriculture, and transport policies using the triple bottom line approach and provide a strategic framework that offers a mechanism and a long-term roadmap for a sustainable future by integrating the synergies between these three key sectors. Decentralised production and consumption of resources holds the key to economic, environmental, and social sustainability.
                  </p>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://www.sciencedirect.com/science/article/pii/S0970389624000053" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Full paper
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Research Impact */}
        <section className="mt-16 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-serif font-bold text-academic-heading mb-6 text-center">
            Research Impact & Collaboration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-academic-subheading mb-4">Industry Collaboration</h3>
              <ul className="text-academic-body space-y-2">
                <li>• Consulting firms for real-world case study development</li>
                <li>• Collaboration with Kerala State Organ and Tissue Transplantation Organization to study the state of cadaveric organ donation in Kerala</li>
                <li>• Collaboration with NIMHANS for process improvement and awareness creation for cadaveric organ donation at Neurology and Neurosurgery division</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-academic-subheading mb-4">Academic Recognition</h3>
              <ul className="text-academic-body space-y-2">
                <li>• Second-best Doctoral Paper Award at POMS India International Conference (2024)</li>
                <li>• IIM Bangalore Doctoral Student Research Paper Award (2024)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}