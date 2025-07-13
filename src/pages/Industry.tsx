import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, TrendingUp, Users2, Briefcase } from 'lucide-react';

export default function Industry() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-academic-heading mb-6">
            Industry Experience
          </h1>
          <p className="text-lg text-academic-body max-w-4xl mx-auto leading-relaxed">
            My industry experience across automotive and consulting sectors provides 
            practical insights that inform my academic research. This blend of 
            real-world problem-solving and theoretical rigor strengthens my contributions 
            to operations management scholarship.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {/* Daimler India */}
          <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-academic-heading">
                        Senior Operations Analyst
                      </h2>
                      <h3 className="text-xl text-primary font-semibold mt-1">
                        Daimler India Commercial Vehicles
                      </h3>
                    </div>
                    <Badge variant="default" className="self-start sm:self-center mt-2 sm:mt-0">
                      2019 - 2021
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-academic-body">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Chennai, India</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>Supply Chain & Operations</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Key Responsibilities</h4>
                      <ul className="text-academic-body space-y-1 ml-4">
                        <li>• Led supply chain optimization initiatives resulting in 15% cost reduction</li>
                        <li>• Implemented lean manufacturing principles across production lines</li>
                        <li>• Developed predictive analytics models for demand forecasting</li>
                        <li>• Managed vendor relationships and supplier performance evaluation</li>
                        <li>• Spearheaded sustainability initiatives in procurement processes</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Research Connections</h4>
                      <p className="text-academic-body leading-relaxed">
                        This experience with automotive supply chains directly informs my current 
                        research on sustainable value chains. Working with real supplier networks 
                        and environmental compliance requirements provided practical insights into 
                        the challenges and opportunities in sustainable operations management.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Supply Chain Optimization</Badge>
                      <Badge variant="secondary">Lean Manufacturing</Badge>
                      <Badge variant="secondary">Vendor Management</Badge>
                      <Badge variant="secondary">Sustainability Initiatives</Badge>
                      <Badge variant="secondary">Data Analytics</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Maruti Suzuki India */}
          <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-accent-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-academic-heading">
                        Operations Management Trainee
                      </h2>
                      <h3 className="text-xl text-academic-subheading font-semibold mt-1">
                        Maruti Suzuki India Limited
                      </h3>
                    </div>
                    <Badge variant="outline" className="self-start sm:self-center mt-2 sm:mt-0">
                      2017 - 2019
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-academic-body">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Gurugram, India</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>Production & Quality Management</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Key Achievements</h4>
                      <ul className="text-academic-body space-y-1 ml-4">
                        <li>• Rotated through production, quality, and supply chain departments</li>
                        <li>• Contributed to process improvement projects using Six Sigma methodologies</li>
                        <li>• Analyzed production efficiency metrics and implemented corrective measures</li>
                        <li>• Collaborated with cross-functional teams on cost optimization initiatives</li>
                        <li>• Participated in supplier quality audits and vendor development programs</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Learning Impact</h4>
                      <p className="text-academic-body leading-relaxed">
                        Exposure to world-class manufacturing operations and quality systems 
                        provided foundational understanding of operational excellence. This 
                        experience shapes my research approach to balance theoretical rigor 
                        with practical implementability.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Six Sigma</Badge>
                      <Badge variant="secondary">Quality Management</Badge>
                      <Badge variant="secondary">Process Improvement</Badge>
                      <Badge variant="secondary">Production Planning</Badge>
                      <Badge variant="secondary">Cross-functional Teams</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Everest Group */}
          <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary/50 rounded-xl flex items-center justify-center">
                    <Users2 className="h-8 w-8 text-secondary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-academic-heading">
                        Research Analyst
                      </h2>
                      <h3 className="text-xl text-academic-subheading font-semibold mt-1">
                        Everest Group (Management Consulting)
                      </h3>
                    </div>
                    <Badge variant="outline" className="self-start sm:self-center mt-2 sm:mt-0">
                      2015 - 2017
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-academic-body">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Mumbai, India</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>Strategy & Operations Consulting</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Core Responsibilities</h4>
                      <ul className="text-academic-body space-y-1 ml-4">
                        <li>• Conducted market research and competitive analysis for Fortune 500 clients</li>
                        <li>• Developed strategic recommendations for operational transformation</li>
                        <li>• Created financial models and business case analyses</li>
                        <li>• Prepared client presentations and research reports</li>
                        <li>• Supported senior consultants in project management and client delivery</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Skills Development</h4>
                      <p className="text-academic-body leading-relaxed">
                        Consulting experience developed critical analytical thinking, 
                        client communication skills, and ability to synthesize complex 
                        information into actionable insights - all essential for academic 
                        research and effective knowledge dissemination.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Market Research</Badge>
                      <Badge variant="secondary">Strategic Analysis</Badge>
                      <Badge variant="secondary">Financial Modeling</Badge>
                      <Badge variant="secondary">Client Presentation</Badge>
                      <Badge variant="secondary">Project Management</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Industry-Academia Bridge */}
        <section className="mt-16 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-serif font-bold text-academic-heading mb-6 text-center">
            Bridging Industry & Academia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-academic-subheading mb-4">Industry Insights to Research</h3>
              <ul className="text-academic-body space-y-2">
                <li>• Real-world supply chain challenges inform research problem identification</li>
                <li>• Practical experience validates theoretical frameworks and models</li>
                <li>• Industry networks provide access to data and collaboration opportunities</li>
                <li>• Understanding of implementation constraints enhances research relevance</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-academic-subheading mb-4">Research to Industry Impact</h3>
              <ul className="text-academic-body space-y-2">
                <li>• Academic rigor ensures robustness of proposed solutions</li>
                <li>• Research findings contribute to evidence-based management practices</li>
                <li>• Scholarly work influences industry best practices and standards</li>
                <li>• Continued engagement with industry partners for research validation</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-card rounded-lg p-6">
            <h3 className="font-semibold text-academic-subheading mb-3 text-center">
              Professional Development Philosophy
            </h3>
            <p className="text-academic-body text-center leading-relaxed">
              My career journey from engineering to consulting to operations management 
              has provided a unique perspective that bridges technical expertise, 
              strategic thinking, and operational excellence. This multidisciplinary 
              background strengthens my ability to conduct research that is both 
              academically rigorous and practically relevant.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}