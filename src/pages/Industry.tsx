import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Calendar, MapPin, TrendingUp, Users2, Briefcase, Quote, ExternalLink } from 'lucide-react';

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
          {/* Everest Group */}
          <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users2 className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-academic-heading">
                        Senior Analyst, Research & Advisory
                      </h2>
                      <h3 className="text-xl text-primary font-semibold mt-1">
                        Everest Group
                      </h3>
                    </div>
                    <Badge variant="default" className="self-start sm:self-center mt-2 sm:mt-0">
                      May 2020 - Jun 2021
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-academic-body">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>Research & Advisory Consulting</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Customized Research Based Advisory</h4>
                      <ul className="text-academic-body space-y-1 ml-4">
                        <li>• Developed growth strategy around core banking & wealth management platform for a growing IT firm</li>
                        <li>• Identified and prioritized suitable acquisition targets in China for a leading IT and consulting firm</li>
                        <li>• Built prioritization framework and recommended suitable service partners for Indian unicorn</li>
                        <li>• Identified opportunities for large deals and built account level attacker strategy for a leading IT firm</li>
                        <li>• Handled end-to-end workflow for a flagship PEAK Matrix report, featuring 25+ IT service providers</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Research Connections</h4>
                      <p className="text-academic-body leading-relaxed">
                        This strategic consulting experience directly enhances my academic research by providing exposure to 
                        market dynamics, competitive strategies, and business model innovations. The analytical frameworks 
                        developed here inform my approach to operations research and strategic decision-making models.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Strategic Consulting</Badge>
                      <Badge variant="secondary">Market Research</Badge>
                      <Badge variant="secondary">Growth Strategy</Badge>
                      <Badge variant="secondary">Acquisition Analysis</Badge>
                      <Badge variant="secondary">IT Services</Badge>
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
                        Assistant Manager, Quality Assurance
                      </h2>
                      <h3 className="text-xl text-academic-subheading font-semibold mt-1">
                        Maruti Suzuki India Limited
                      </h3>
                    </div>
                    <Badge variant="outline" className="self-start sm:self-center mt-2 sm:mt-0">
                      Sep 2017 - Jun 2018
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-academic-body">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>Parts/Supplier Quality Assurance</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Key Responsibilities</h4>
                      <ul className="text-academic-body space-y-1 ml-4">
                        <li>• Resolved assembly line quality concerns going up to 90-100 per month for fuel & exhaust system parts</li>
                        <li>• Conducted manufacturing process audit at suppliers' end and stabilized part quality for new models</li>
                        <li>• Trained 10+ new recruits for drawing study and usage of quality core tools like MSA, SPC, PFMEA</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Achievements</h4>
                      <ul className="text-academic-body space-y-1 ml-4">
                        <li>• Reduced overall defect for CNG cylinder by 40% in 3 running models by ensuring countermeasures</li>
                        <li>• Recognized for excellent commitment towards assembly line support & defect reduction in Q4, 2017-18</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Learning Impact</h4>
                      <p className="text-academic-body leading-relaxed">
                        Hands-on experience with quality management systems and supplier relationships provides practical 
                        insights into quality optimization and continuous improvement methodologies that inform my research 
                        on operations excellence and supply chain quality management.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Quality Assurance</Badge>
                      <Badge variant="secondary">Supplier Management</Badge>
                      <Badge variant="secondary">Process Audit</Badge>
                      <Badge variant="secondary">Statistical Process Control</Badge>
                      <Badge variant="secondary">Defect Reduction</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Daimler India */}
          <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary/50 rounded-xl flex items-center justify-center">
                    <Building className="h-8 w-8 text-secondary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-academic-heading">
                        Manager, Quality Management
                      </h2>
                      <h3 className="text-xl text-academic-subheading font-semibold mt-1">
                        Daimler India Commercial Vehicles
                      </h3>
                    </div>
                    <Badge variant="outline" className="self-start sm:self-center mt-2 sm:mt-0">
                      Jun 2015 - Sep 2017
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-academic-body">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>Quality Management & Internal Audit</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Core Responsibilities</h4>
                      <ul className="text-academic-body space-y-1 ml-4">
                        <li>• Conducted biannual warranty rate planning for 16 models in domestic and 6 in export segment</li>
                        <li>• Analyzed monthly warranty cost and key quality issues in each major category and ensured actions</li>
                        <li>• Performed more than 20 internal audits for ISO/TS 16949, IATF 16949, and OHSAS 18001 standard</li>
                        <li>• Provided awareness sessions to more than 1000 operators regarding Occupational Health and Safety</li>
                        <li>• Streamlined a total of 11 department level KPIs; monitored & presented to management every month</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Key Achievements</h4>
                      <ul className="text-academic-body space-y-1 ml-4">
                        <li>• Awarded Achiever of the month in QM department by the leadership team in December 2016</li>
                        <li>• Chosen as lead from DICV for warranty analysis in Daimler Global Powertrain Integration project</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Initiatives</h4>
                      <ul className="text-academic-body space-y-1 ml-4">
                        <li>• Developed an easily accessible internal web-based tool for warranty rate planning and budgeting</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Research Impact</h4>
                      <p className="text-academic-body leading-relaxed">
                        Comprehensive experience in quality management systems, warranty analysis, and process optimization 
                        provides foundational understanding of operational excellence that directly informs my research on 
                        quality management, process improvement, and sustainable operations.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Quality Management</Badge>
                      <Badge variant="secondary">Warranty Analysis</Badge>
                      <Badge variant="secondary">Internal Audit</Badge>
                      <Badge variant="secondary">KPI Management</Badge>
                      <Badge variant="secondary">Process Improvement</Badge>
                      <Badge variant="secondary">ISO Standards</Badge>
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

        {/* Testimonials Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-academic-heading mb-4">
              Professional Testimonials
            </h2>
            <p className="text-lg text-academic-body max-w-3xl mx-auto">
              Recommendations from colleagues and partners highlighting collaborative excellence and professional impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-academic-body leading-relaxed mb-4">
                      "Satyajit was part of our banking and financial services technology and IT services team as a senior analyst, where he worked on several research projects helping enterprises and suppliers optimize, manage, and enable services delivery. In addition to being a quick learner and strong problem solver, Satyajit is a team player who seamlessly collaborates with his team and clients. Satyajit brings a strong degree of ownership and accountability to all his projects. He inspired the team with his home gardening skills and his positive outlook to challenges in life. Wishing him all the luck with his further studies."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="font-semibold text-academic-subheading">Ronak Doshi</p>
                    </div>
                    <p className="text-sm text-academic-body">Partner at Everest Group</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-academic-body leading-relaxed mb-4">
                      "I worked with Satyajit during his time with Everest Group. It was an absolute pleasure to work with him on various initiatives. He brings great diligence and analytical rigor to problem statements and is able to manage different activities in complex projects. He is collaborative and seeks to take the team along with him as well."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="font-semibold text-academic-subheading">Nitish Mittal</p>
                    </div>
                    <p className="text-sm text-academic-body">Partner at Everest Group</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-academic-body leading-relaxed mb-4">
                      "Satya is a well connected professional that always takes the time to support anyone is his network. Soft skills which he possess, like patience, communication, and a willingness to learn, makes him different from others. He has a very impressive background and profile, I recommend Satya as an expert to connect with and consider for anything appropriate."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="font-semibold text-academic-subheading">Vinod Babu</p>
                    </div>
                    <p className="text-sm text-academic-body">Head of FUSO Technical Field Service and Warranty</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-academic-body leading-relaxed mb-4">
                      "I have known Satyajit since he started his professional career at Daimler India, just after his graduation. I always admired his dedication towards whatever he does. With his natural ability to take prompt decisions and handle complex situations, he would be a real asset for any organization. The best part is his humble character and never thinking twice when needed to walk an extra mile for his team. Wish him all the best for his journey."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="font-semibold text-academic-subheading">Amar Jagtap</p>
                    </div>
                    <p className="text-sm text-academic-body">Senior Manager at (Daimler) Mitsubishi Fuso Truck and Bus Corporation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Read More Link */}
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a 
                href="https://www.linkedin.com/in/satyajit-roy/details/recommendations/?detailScreenTabIndex=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Read more testimonials here
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}