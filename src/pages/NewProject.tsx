
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Database, 
  ExternalLink, 
  Github, 
  LineChart, 
  Lightbulb, 
  Monitor, 
  Rocket, 
  GraduationCap, 
  Link2, 
  FileText, 
  Eye,
  Target,
  ListChecks,
  BarChart,
  Copy,
  CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GoodCabsSidebar from "@/components/GoodCabsSidebar";
import { toast } from "sonner";

const NewProject = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Code copied to clipboard", {
      description: "You can now paste it anywhere you need",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Cover Image */}
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img 
            src="/alexander-red-S9qxkJN0f4Q-unsplash.jpg" 
            alt="Project cover image" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background flex flex-col justify-end pb-20">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">New Project Title</h1>
              <p className="text-xl text-white/90 mb-6 max-w-2xl">
                A comprehensive project description will go here.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Technology 1</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Technology 2</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Technology 3</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Technology 4</Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                asChild
                className="bg-blue-600/90 hover:bg-blue-700 text-white border-none rounded-md"
              >
                <a 
                  href="https://github.com/yourusername/project-repo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Horizontal Navigation Bar */}
        <GoodCabsSidebar />

        {/* Main Content */}
        <div className="container max-w-7xl mx-auto px-4 py-8">
          {/* Grid Layout for Main Content and Project Sidebar - Modified to full width */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Column - Modified to be wider */}
            <div className="lg:col-span-3">
              {/* Overview Section */}
              <section id="overview" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Eye className="text-primary" /> Project Overview
                </h2>
                <div className="text-muted-foreground mb-4">
                  This is a placeholder for the project overview. You can edit this section to describe your project in detail.
                </div>
                <div className="text-muted-foreground">
                  Include background information, the main goals, and a brief summary of what the project accomplishes.
                </div>
              </section>
                
              {/* Objective Section */}
              <section id="objective" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="text-primary" /> Objective
                </h2>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    First objective of this project.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Second objective of this project.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Third objective of this project.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Fourth objective of this project.
                  </li>
                </ul>
              </section>
              
              {/* Data Description Section */}
              <section id="data-setup" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="text-primary" /> Data Description & Data Model
                </h2>
                <div className="text-muted-foreground mb-4">
                  Description of the data used in this project and how it was modeled.
                </div>
                <h3 className="text-lg font-medium mb-3">Key Data Relationships:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
                  <li>First key data relationship</li>
                  <li>Second key data relationship</li>
                  <li>Third key data relationship</li>
                  <li>Fourth key data relationship</li>
                </ul>
                
                <div className="bg-card/5 p-2 rounded-md overflow-hidden">
                  <img 
                    src="/data_modelling.png" 
                    alt="Data Model Schema" 
                    className="w-full h-auto rounded-md shadow-md border border-border/50" 
                  />
                </div>
              </section>
                
              {/* Methodology Section */}
              <section id="methodology" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <ListChecks className="text-primary" /> Methodology
                </h2>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>First step:</strong> Description of the first methodological step.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Second step:</strong> Description of the second methodological step.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Third step:</strong> Description of the third methodological step.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Fourth step:</strong> Description of the fourth methodological step.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Fifth step:</strong> Description of the fifth methodological step.
                  </li>
                </ul>
              </section>
                
              {/* Dashboard Section */}
              <section id="dashboard" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Monitor className="text-primary" /> Dashboard
                </h2>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <img 
                        src="/placeholder.svg" 
                        alt="Project Dashboard" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-6">
                  <h3 className="text-xl font-medium mb-4">Dashboard Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FeatureCard title="First feature">
                      Description of the first feature
                    </FeatureCard>
                    <FeatureCard title="Second feature">
                      Description of the second feature
                    </FeatureCard>
                    <FeatureCard title="Third feature">
                      Description of the third feature
                    </FeatureCard>
                    <FeatureCard title="Fourth feature">
                      Description of the fourth feature
                    </FeatureCard>
                    <FeatureCard title="Fifth feature">
                      Description of the fifth feature
                    </FeatureCard>
                  </div>
                </div>
              </section>
                
              {/* Code Example Section */}
              <section id="code-examples" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="text-primary" /> Code Examples
                </h2>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="example-1">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          First Code Example
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard("console.log('Hello World');")}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`console.log('Hello World');`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="example-2">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          Second Code Example
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard("const double = (x) => x * 2;")}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`const double = (x) => x * 2;`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </section>
              
              {/* Key Insights & Recommendations Section */}
              <section id="insights" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb className="text-primary" /> Key Insights & Recommendations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InsightCard title="1. First Insight">
                    <p className="mb-2">Description of the first insight from the project.</p>
                    <p className="font-medium text-primary">Recommendation: First recommendation based on this insight.</p>
                  </InsightCard>
                  
                  <InsightCard title="2. Second Insight">
                    <p className="mb-2">Description of the second insight from the project.</p>
                    <p className="font-medium text-primary">Recommendation: Second recommendation based on this insight.</p>
                  </InsightCard>
                  
                  <InsightCard title="3. Third Insight">
                    <p className="mb-2">Description of the third insight from the project.</p>
                    <p className="font-medium text-primary">Recommendation: Third recommendation based on this insight.</p>
                  </InsightCard>
                  
                  <InsightCard title="4. Fourth Insight">
                    <p className="mb-2">Description of the fourth insight from the project.</p>
                    <p className="font-medium text-primary">Recommendation: Fourth recommendation based on this insight.</p>
                  </InsightCard>
                </div>
              </section>
                
              {/* Challenges & Learnings Section */}
              <section id="challenges" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="text-primary" /> Challenges & Learnings
                </h2>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="challenge-1">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          First Challenge
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-2">
                            Description of the first challenge encountered in this project.
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-medium">Solution:</span> How the first challenge was addressed.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="challenge-2">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          Second Challenge
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-2">
                            Description of the second challenge encountered in this project.
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-medium">Solution:</span> How the second challenge was addressed.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="challenge-3">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          Third Challenge
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-2">
                            Description of the third challenge encountered in this project.
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-medium">Solution:</span> How the third challenge was addressed.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </section>
                
              {/* Project Files & Links Section */}
              <section id="files" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Link2 className="text-primary" /> Project Files & Links
                </h2>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
                  <CardContent className="p-6 flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <Monitor className="text-primary h-5 w-5" />
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        Live Demo Link
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Github className="text-primary h-5 w-5" />
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        GitHub Repository
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </section>
                
              {/* Conclusion Section */}
              <section id="conclusion" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Rocket className="text-primary" /> Conclusion & Next Steps
                </h2>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-3">Key Takeaways</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
                      <li>First key takeaway from this project</li>
                      <li>Second key takeaway from this project</li>
                      <li>Third key takeaway from this project</li>
                      <li>Fourth key takeaway from this project</li>
                    </ul>
                    
                    <h3 className="text-lg font-medium mb-3">Next Steps</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>First potential next step for this project</li>
                      <li>Second potential next step for this project</li>
                      <li>Third potential next step for this project</li>
                      <li>Fourth potential next step for this project</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>
            
            {/* Sidebar Column - Now scrolls with the page and is positioned on the right */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-xl transition-all">
                  <img 
                    src="/placeholder.svg" 
                    alt="Project image" 
                    className="w-full h-48 object-cover"
                  />
                </Card>
                
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  <CardContent className="p-5">
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" /> Key Project Insights
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">First key insight highlight</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">Second key insight highlight</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">Third key insight highlight</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">Fourth key insight highlight</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  <CardContent className="p-5">
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <Link2 className="h-4 w-4 text-primary" /> Related Projects
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/goodcabs-analysis" className="group flex items-start gap-3 hover:bg-accent/50 p-2 rounded-md transition-colors">
                          <LineChart className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors">GoodCabs Analysis</h4>
                            <p className="text-xs text-muted-foreground">A data-driven analysis of GoodCabs' operations</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/data-job-market-analysis" className="group flex items-start gap-3 hover:bg-accent/50 p-2 rounded-md transition-colors">
                          <Database className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors">Data Job Market Analysis</h4>
                            <p className="text-xs text-muted-foreground">Analysis of data science job market trends</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/project/realtime-data-pipeline" className="group flex items-start gap-3 hover:bg-accent/50 p-2 rounded-md transition-colors">
                          <LineChart className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors">Real-time Data Processing Pipeline</h4>
                            <p className="text-xs text-muted-foreground">Scalable pipeline for streaming data</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
    <CardContent className="p-6">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{children}</p>
    </CardContent>
  </Card>
);

// Insight Card Component
const InsightCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
    <CardContent className="p-6">
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="text-sm text-muted-foreground">{children}</div>
    </CardContent>
  </Card>
);

export default NewProject;
