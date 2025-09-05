import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink, FileText, Calendar, Award, BookOpen } from 'lucide-react';

export default function CV() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-academic-heading mb-6">
            Curriculum Vitae
          </h1>
          <p className="text-lg text-academic-body max-w-3xl mx-auto leading-relaxed mb-8">
            Complete academic and professional profile documenting my journey in 
            operations management research and sustainable value chains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium" asChild>
              <a 
                href="https://drive.google.com/file/d/1TiXhA_Hr-py2zNY-zhvSCqVpsTpdaaoa/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Full CV (PDF)
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://scholar.google.com/citations?user=pZbuMNYAAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View on Google Scholar
              </a>
            </Button>
          </div>
        </div>

        {/* CV Highlights */}
        <div className="space-y-8">
          {/* Current Position */}
          <Card className="shadow-academic-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-academic-heading mb-2">
                    Current Position
                  </h2>
                  <p className="text-lg text-primary font-medium">
                    Doctoral Student, Production and Operations Management
                  </p>
                  <p className="text-academic-body">
                    Indian Institute of Management Bangalore | 2021 - 2026 (Expected)
                  </p>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold text-academic-subheading mb-2">Dissertation</h3>
                <p className="text-academic-body leading-relaxed mb-4">
                  Essays on socially and environmentally responsible value chains in developing economies – A policy perspective for India
                </p>
                <h4 className="font-semibold text-academic-subheading mb-2">Research Interests</h4>
                <p className="text-academic-body leading-relaxed">
                  Sustainable mobility, Healthcare operations, Cadaveric organ supply chain, Environmentally and socially responsible supply chain
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education Summary */}
          <Card className="shadow-academic-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-academic-heading mb-2">
                    Education
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-academic-subheading">
                      PhD, Production and Operations Management
                    </h3>
                    <Badge variant="default">2021-2026</Badge>
                  </div>
                  <p className="text-academic-body">Indian Institute of Management Bangalore</p>
                  <p className="text-academic-body text-sm mt-1">GPA: 3.6/4 | Expected completion: 2026</p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-academic-subheading">
                      MBA, Operations and Supply Chain Management
                    </h3>
                    <Badge variant="outline">2018-2020</Badge>
                  </div>
                  <p className="text-academic-body">Indian Institute of Management Kozhikode</p>
                  <p className="text-academic-body text-sm mt-1">GPA: 3.75/4.33 | Rank: Top 10</p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-academic-subheading">
                      BTech, Mechanical Engineering
                    </h3>
                    <Badge variant="outline">2011-2015</Badge>
                  </div>
                  <p className="text-academic-body">National Institute of Technology Durgapur</p>
                  <p className="text-academic-body text-sm mt-1">GPA: 9.31/10 | Rank: 1 (Institute Gold Medal)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Publications & Research */}
          <Card className="shadow-academic-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-academic-heading mb-2">
                    Publications & Research
                  </h2>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Journal Articles</h3>
                  <div className="bg-muted/30 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-academic-heading mb-1">
                      "Charting a sustainable future: Transformative policies for India's energy, agriculture, and transport sectors"
                    </h4>
                    <p className="text-academic-body text-sm mb-2">
                      <em>IIMB Management Review</em> (2024), with Haritha Saranga & Sayan Chowdhury
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="default">Published</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Working Papers</h3>
                  <div className="space-y-3">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-medium text-academic-heading mb-1">
                        "Driving Green: How Policies Shape Automakers' Choice Between Electric and Flex-Fuel Technologies"
                      </h4>
                      <p className="text-academic-body text-sm mb-2">
                        Manuscript under review
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Working Paper</Badge>
                        <Badge variant="outline">Under Review</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-medium text-academic-heading mb-1">
                        "Coordination Under Constraints to Match Scarce Supply with Demand in a Pro-social Supply Chain"
                      </h4>
                      <p className="text-academic-body text-sm mb-2">
                        The case of Deceased-donation Program in India (Manuscript preparation)
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Working Paper</Badge>
                        <Badge variant="outline">In Preparation</Badge>
                      </div>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-medium text-academic-heading mb-1">
                        "Population Control for Sustainable Development – Navigating Operational Challenges in India's Family Planning Program Through ASHAs"
                      </h4>
                      <p className="text-academic-body text-sm mb-2">
                        Under review
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Working Paper</Badge>
                        <Badge variant="outline">Under Review</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Teaching Case Studies</h3>
                  <div className="space-y-3">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-medium text-academic-heading mb-1">
                        "The evolving semiconductor industry: Post-COVID challenges for automakers"
                      </h4>
                      <p className="text-academic-body text-sm mb-2">
                        Harvard Business Publication, with Haritha Saranga and Jishnu Hazra
                      </p>
                      <Badge variant="default">Published</Badge>
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-medium text-academic-heading mb-1">
                        "Saahas Zero Waste: Breaking the spell of fast fashion with circularity"
                      </h4>
                      <p className="text-academic-body text-sm mb-2">
                        Harvard Business Publication, with Haritha Saranga
                      </p>
                      <Badge variant="default">Published</Badge>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Conference Proceedings</h3>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-medium text-academic-heading mb-1">
                      "Coordination under constraints in a pro-social supply chain – India's deceased-donation program"
                    </h4>
                    <p className="text-academic-body text-sm mb-2">
                      <em>AOM Annual Meeting Proceedings</em> (2025)
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="default">Published</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card className="shadow-academic-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-academic-heading mb-6">
                Professional Experience
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">Senior Analyst, Information Technology Services</h3>
                    <p className="text-academic-body">Everest Group</p>
                    <p className="text-academic-body text-sm text-academic-caption">
                      • Provided research-based advisory for IT service providers and enterprises in BFSI sector<br/>
                      • Prepared market analysis, industry reports, and white papers in BFSI IT services
                    </p>
                  </div>
                  <Badge variant="outline">May 2020 - Jun 2021</Badge>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">Assistant Manager, Quality Assurance</h3>
                    <p className="text-academic-body">Maruti Suzuki India Limited</p>
                    <p className="text-academic-body text-sm text-academic-caption">
                      • Resolved quality concerns at vehicle assembly lines and ensured smooth production<br/>
                      • Audited manufacturing processes at suppliers' end and stabilized part quality for new models
                    </p>
                  </div>
                  <Badge variant="outline">Sep 2017 - Jun 2018</Badge>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">Manager, Quality Management</h3>
                    <p className="text-academic-body">Daimler India Commercial Vehicle</p>
                    <p className="text-academic-body text-sm text-academic-caption">
                      • Conducted biannual warranty rate planning alongside monthly warranty cost analysis<br/>
                      • Performed internal audits at manufacturing plant for IATF 16949, and OHSAS 18001 standards
                    </p>
                  </div>
                  <Badge variant="outline">Jun 2015 - Sep 2017</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Competencies */}
          <Card className="shadow-academic-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-academic-heading mb-6">
                Skills & Competencies
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Research Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Quantitative Analysis</Badge>
                    <Badge variant="secondary">Mixed Methods</Badge>
                    <Badge variant="secondary">Case Study Research</Badge>
                    <Badge variant="secondary">Statistical Modeling</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Mathematica</Badge>
                    <Badge variant="secondary">R Programming</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">ATLAS.ti</Badge>
                    <Badge variant="secondary">LATEX</Badge>
                    <Badge variant="secondary">MS Excel</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Domain Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Supply Chain Management</Badge>
                    <Badge variant="secondary">Sustainability</Badge>
                    <Badge variant="secondary">Operations Research</Badge>
                    <Badge variant="secondary">Quality Management</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Academic Writing</Badge>
                    <Badge variant="secondary">Presentation</Badge>
                    <Badge variant="secondary">Project Management</Badge>
                    <Badge variant="secondary">Cross-cultural Communication</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Awards & Recognition */}
          <Card className="shadow-academic-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-academic-heading mb-6">
                Awards & Recognition
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">Institute Gold Medal for highest CGPA</h3>
                    <p className="text-academic-body">NIT Durgapur, Mechanical Engineering</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">2015</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">IIM Bangalore Doctoral Fellowship</h3>
                    <p className="text-academic-body">IIM Bangalore</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">2021-2026</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">Herbalife Sustainability PhD Fellowship Award</h3>
                    <p className="text-academic-body">IIM Bangalore</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">2024-25</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">IIM Bangalore Doctoral Student Research Paper Award</h3>
                    <p className="text-academic-body">IIM Bangalore</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">2024</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">Second-best Doctoral Paper Award</h3>
                    <p className="text-academic-body">POMS India International Conference</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">2024</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">IIM Kozhikode Merit Scholarship</h3>
                    <p className="text-academic-body">Top 5% of batch (2018-19 and 2019-20)</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">2018-20</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Section */}
        <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-serif font-bold text-academic-heading mb-4">
            Complete Academic CV
          </h2>
          <p className="text-academic-body mb-6 max-w-2xl mx-auto">
            For a comprehensive view of my academic and professional journey, 
            including detailed publication lists, conference presentations, 
            and complete work history, download my full CV.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a 
                href="https://drive.google.com/file/d/1TiXhA_Hr-py2zNY-zhvSCqVpsTpdaaoa/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Full CV (PDF)
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Request Academic References
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}