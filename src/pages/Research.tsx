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
              <TabsTrigger value="published">Conference Papers</TabsTrigger>
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
                    <Badge variant="outline">Data Collection Phase</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-academic-body text-sm">
                    <strong>Expected Completion:</strong> Q2 2024
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="published" className="space-y-6 mt-8">
              <Card className="shadow-academic-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-academic-heading mb-2">
                    "Sustainability Metrics in Operations Management: A Systematic Review"
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="default">Published</Badge>
                    <Badge variant="outline">Conference Paper</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-academic-body leading-relaxed mb-4">
                    Presented at the International Conference on Operations Management and Sustainability, 
                    this paper provides a comprehensive review of sustainability metrics used in 
                    operations management research and practice.
                  </p>
                  <div className="text-academic-body text-sm mb-4">
                    <strong>Published in:</strong> Proceedings of ICOMS 2023, Pages 145-162
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Citation
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
                <li>• Automotive manufacturers for supply chain sustainability research</li>
                <li>• Consulting firms for real-world case study development</li>
                <li>• NGOs for social impact assessment frameworks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-academic-subheading mb-4">Academic Recognition</h3>
              <ul className="text-academic-body space-y-2">
                <li>• Best Student Paper Award, ICOMS 2023</li>
                <li>• Research Excellence Fellowship Recipient</li>
                <li>• Peer reviewer for leading operations journals</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}