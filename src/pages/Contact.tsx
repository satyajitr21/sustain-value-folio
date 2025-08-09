import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Linkedin, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Send,
  ExternalLink,
  Building
} from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"err">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const r = await fetch("https://formspree.io/f/xovlyjbw", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (r.ok) {
        form.reset();
        setStatus("ok");
      } else {
        const j = await r.json().catch(() => ({}));
        setError(j?.errors?.[0]?.message || "Submission failed. Please try again.");
        setStatus("err");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("err");
    }
  }
  
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-academic-heading mb-6">
            Contact
          </h1>
          <p className="text-lg text-academic-body max-w-4xl mx-auto leading-relaxed">
            I welcome opportunities for collaboration, academic discussions, and professional networking. Please feel free to reach out for research partnerships, teaching/speaking engagements, or academic consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-academic-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-academic-heading">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Primary Contact */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-academic-subheading mb-1">Academic Email</h3>
                    <a 
                      href="mailto:satyajit.roy21@iimb.ac.in" 
                      className="text-academic-body hover:text-primary transition-academic mb-2 block"
                    >
                      satyajit.roy21@iimb.ac.in
                    </a>
                    <Badge variant="secondary">Primary Contact</Badge>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-academic-subheading mb-1">Institution</h3>
                    <p className="text-academic-body">
                      Indian Institute of Management Bangalore<br />
                      Bannerghatta Road, Bangalore 560076<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-academic-subheading mb-1">Office</h3>
                    <p className="text-academic-body">
                      Room D-110, PhD students' cubicle<br />
                      First floor, D block<br />
                      Available for meetings by appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Links */}
            <Card className="shadow-academic-card">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-academic-heading">
                  Professional Profiles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/satyajit-roy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-academic"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium text-academic-subheading">LinkedIn</h4>
                      <p className="text-academic-body text-sm">Professional networking and updates</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-academic-caption" />
                </a>

                <a 
                  href="https://scholar.google.com/citations?user=pZbuMNYAAAAJ&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-academic"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium text-academic-subheading">Google Scholar</h4>
                      <p className="text-academic-body text-sm">Research publications and citations</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-academic-caption" />
                </a>

                <a 
                  href="https://orcid.org/0009-0008-2615-6982" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-academic"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium text-academic-subheading">ORCID</h4>
                      <p className="text-academic-body text-sm">Research identity and publications</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-academic-caption" />
                </a>
              </CardContent>
            </Card>

            {/* Collaboration Interests */}
            <Card className="shadow-academic-card">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-academic-heading">
                  Collaboration Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-academic-body">Interdisciplinary collaborations to advance social and environmental sustainability</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-academic-body">Guest lectures and speaking engagements</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-academic-body">Industry consulting on supply chain sustainability</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-academic-body">Academic mentoring and PhD guidance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
           <form className="space-y-6" onSubmit={onSubmit}>
      {/* spam honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* optional: email subject seen in your inbox */}
      <input type="hidden" name="_subject" value="New message from sustain-value-folio" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-academic-subheading mb-2">First Name</label>
          <input name="firstName" required
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your first name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-academic-subheading mb-2">Last Name</label>
          <input name="lastName" required
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your last name" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-academic-subheading mb-2">Email Address</label>
        <input name="email" type="email" required
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="your@email.com" />
      </div>

      <div>
        <label className="block text-sm font-medium text-academic-subheading mb-2">Institution / Organization</label>
        <input name="organization"
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your institution or organization" />
      </div>

      <div>
        <label className="block text-sm font-medium text-academic-subheading mb-2">Subject</label>
        <select name="subject" required
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="">Select a subject</option>
          <option>Research Collaboration</option>
          <option>Speaking Engagement</option>
          <option>Industry Consulting</option>
          <option>Academic Mentoring</option>
          <option>Other Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-academic-subheading mb-2">Message</label>
        <textarea name="message" rows={6} required
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Please describe your inquiry in detail..." />
      </div>

      <Button size="lg" className="w-full" type="submit" disabled={status==="sending"}>
        <Send className="mr-2 h-5 w-5" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "ok" && (
        <p className="text-green-600" role="status" aria-live="polite">
          Thanks! Your message has been sent.
        </p>
      )}
      {status === "err" && (
        <p className="text-red-600" role="alert">
          {error}
        </p>
      )}
      {/* Response Time */}
      <div className="mt-6 bg-muted/30 rounded-lg p-4">
        <h3 className="font-semibold text-academic-subheading mb-2">Response Time</h3>
        <p className="text-academic-body text-sm leading-relaxed">
          I aim to respond to all inquiries within 24-48 hours during business days. 
          For urgent matters, please mention "URGENT" in your subject line. 
          During conference travel or research field work, responses may take longer.
        </p>
      </div>
    </form>
        </div>

        {/* Office Hours */}
        <section className="mt-16 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-serif font-bold text-academic-heading mb-6 text-center">
            Office Hours & Availability
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-academic-subheading mb-4">Student Office Hours</h3>
              <div className="space-y-2 text-academic-body">
                <p><strong>Thursdays:</strong> 5:00-6:00 PM</p>
                <p><strong>Fridays:</strong> 4:00-5:00 PM</p>
                <p className="text-sm text-academic-caption">
                  *By appointment during exam periods and holidays
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-academic-subheading mb-4">Research Meetings</h3>
              <div className="space-y-2 text-academic-body">
                <p><strong>Academic Collaborations:</strong> By appointment</p>
                <p><strong>Industry Consultations:</strong> Flexible scheduling</p>
                <p className="text-sm text-academic-caption">
                  *Virtual meetings available for international collaborators
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}