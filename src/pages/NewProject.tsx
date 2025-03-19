
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
  CheckCircle2,
  Coffee
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

// Custom sidebar navigation for Monday Coffee project
const MondayCoffeeSidebar = () => {
  return (
    <div className="sticky top-[60px] z-10 w-full bg-background/95 backdrop-blur-sm border-b">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto py-2 gap-4 no-scrollbar">
          <a href="#overview" className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Eye className="h-4 w-4" />
            Overview
          </a>
          <a href="#objective" className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Target className="h-4 w-4" />
            Objective
          </a>
          <a href="#data-setup" className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Database className="h-4 w-4" />
            Data Description
          </a>
          <a href="#methodology" className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <ListChecks className="h-4 w-4" />
            Methodology
          </a>
          <a href="#top-cities" className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Rocket className="h-4 w-4" />
            Top Cities
          </a>
          <a href="#ad-hoc-requests" className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Database className="h-4 w-4" />
            Ad Hoc Requests
          </a>
          <a href="#conclusion" className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" />
            Conclusion
          </a>
        </div>
      </div>
    </div>
  );
};

// Top City Card component
const TopCityCard = ({ position, city, description }: { position: string; city: string; description: string }) => {
  return (
    <Card className="overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="text-4xl mb-4">{position}</div>
        <h3 className="text-lg font-medium mb-2">{city}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const NewProject = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fix the scroll offset by changing the value from -150 to a smaller number
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Reduce the offset to prevent the title from scrolling too far up
          const yOffset = -200; // Changed from -150 to -80
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };

    // Handle initial hash if present
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    // Add event listener for future hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
            src="/coffee1.jpg" 
            alt="Monday Coffee Business Analysis" 
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Monday Coffee Business Expansion Analysis</h1>
              <p className="text-xl text-white/90 mb-6 max-w-2xl">
                Analyzing city performance to determine the best locations for business expansion using data-driven insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">SQL</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Data Analysis</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Weighted Scoring</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Decision Making</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Visualization</Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                asChild
                className="bg-blue-600/90 hover:bg-blue-700 text-white border-none rounded-md"
              >
                <a 
                  href="https://github.com/Subhrajyouti/Monday_cofee_sales_store_expansion/tree/main" 
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

        {/* Horizontal Navigation Bar - Updated with custom sidebar */}
        <MondayCoffeeSidebar />

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
                  This project evaluates multiple cities based on business performance metrics to determine the most suitable locations for expansion. By analyzing sales, customer base, spending habits, and rent costs, a weighted scoring system was applied to rank the cities.
                </div>
                <div className="text-muted-foreground">
                  The analysis helps identify cities with the highest growth potential, providing data-driven insights for the expansion of the Monday Coffee business.
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
                    Identify the top 3 cities for business expansion.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Apply a data-driven approach to rank cities using key business metrics.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Use a weighted scoring methodology to balance revenue potential and cost factors.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Ad Hoc Requests – Answering key business questions through SQL queries and visualizations to support expansion decisions.
                  </li>
                </ul>
              </section>
              
              {/* Data Description Section */}
              <section id="data-setup" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="text-primary" /> Data Description
                </h2>
                <div className="text-muted-foreground mb-4">
                  The dataset consists of four main tables, each providing essential business insights:
                </div>

                <div className="space-y-4 mb-6">
                  <Card className="border border-border/50 hover:border-primary/30 transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <Coffee className="h-4 w-4 text-primary" /> Products Table
                      </h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                        <li><strong>product_id</strong> – Unique identifier for each product.</li>
                        <li><strong>product_name</strong> – Name of the product.</li>
                        <li><strong>price</strong> – Selling price of the product.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/50 hover:border-primary/30 transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <BarChart className="h-4 w-4 text-primary" /> Sales Table
                      </h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                        <li><strong>sale_id</strong> – Unique identifier for each sale.</li>
                        <li><strong>sale_date</strong> – Date when the sale occurred.</li>
                        <li><strong>customer_id</strong> – ID of the customer making the purchase.</li>
                        <li><strong>product_id</strong> – ID of the purchased product.</li>
                        <li><strong>rating</strong> – Customer rating for the product.</li>
                        <li><strong>total</strong> – Total revenue from the sale.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/50 hover:border-primary/30 transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <Eye className="h-4 w-4 text-primary" /> Customers Table
                      </h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                        <li><strong>customer_id</strong> – Unique identifier for each customer.</li>
                        <li><strong>customer_name</strong> – Name of the customer.</li>
                        <li><strong>city_id</strong> – ID of the city where the customer resides.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/50 hover:border-primary/30 transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-primary" /> City Table
                      </h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                        <li><strong>city_id</strong> – Unique identifier for each city.</li>
                        <li><strong>city_name</strong> – Name of the city.</li>
                        <li><strong>city_rank</strong> – Rank of the city based on business potential.</li>
                        <li><strong>estimated_rent</strong> – Average rent cost per customer.</li>
                        <li><strong>population</strong> – Total number of residents in the city.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-card/5 p-2 rounded-md overflow-hidden">
                  <img 
                    src="/erd.png" 
                    alt="Data Model Schema" 
                    className="w-full h-auto rounded-md shadow-md border border-border/50" 
                  />
                </div>
              </section>
                
              {/* Methodology Section */}
              <section id="methodology" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <ListChecks className="text-primary" /> Methodology for Selecting Top 3 Cities
                </h2>
                <div className="text-muted-foreground mb-4">
                  A weighted scoring system was applied to rank the cities based on critical business factors.
                </div>

                <h3 className="text-lg font-medium mb-3">Key Metrics Used:</h3>
                <ul className="list-none space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Total Sales (50%)</strong> – Higher revenue is prioritized.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Estimated Consumers (30%)</strong> – A larger customer base is advantageous.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Average Sale per Customer (40%)</strong> – Higher spending per customer is beneficial.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Average Rent per Customer (-20%)</strong> – Higher rent negatively impacts the score.
                  </li>
                </ul>
                
                <Card className="border border-border/50 hover:border-primary/30 transition-all mb-6">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Formula Used:</h3>
                    <p className="text-sm text-muted-foreground mb-2">Each city's weighted score was calculated as:</p>
                    <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                      <button 
                        onClick={() => copyToClipboard("Final Score = (Total Sales * 0.5) + (Estimated Consumers * 0.3) + (Avg Sale per Customer * 0.4) - (Avg Rent per Customer * 0.2)")}
                        className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                        aria-label="Copy code"
                      >
                        <Copy size={16} />
                      </button>
                      <pre className="text-sm">
                        Final Score = (Total Sales * 0.5) + (Estimated Consumers * 0.3) + (Avg Sale per Customer * 0.4) - (Avg Rent per Customer * 0.2)
                      </pre>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      This formula balances revenue generation potential with cost efficiency, ensuring the best cities for expansion are chosen.
                    </p>
                  </CardContent>
                </Card>
              </section>
                
              {/* Top 3 Cities Section */}
              <section id="top-cities" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Rocket className="text-primary" /> Top 3 Cities for Expansion
                </h2>
                <div className="text-muted-foreground mb-6">
                  After applying the weighted scoring system, the top 3 cities for business expansion are:
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <TopCityCard 
                    position="🥇" 
                    city="Pune" 
                    description="Strong revenue, high customer spending, and reasonable rent costs."
                  />
                  <TopCityCard 
                    position="🥈" 
                    city="Chennai" 
                    description="Large customer base with solid sales performance."
                  />
                  <TopCityCard 
                    position="🥉" 
                    city="Delhi" 
                    description="High market potential despite moderate spending per customer."
                  />
                </div>

                <h3 className="text-lg font-medium mb-4">City Metrics Table</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-accent/50">
                        <th className="border border-border p-2 text-left">City Name</th>
                        <th className="border border-border p-2 text-left">Total Sales</th>
                        <th className="border border-border p-2 text-left">Estimated Consumers</th>
                        <th className="border border-border p-2 text-left">Avg Sale per Customer</th>
                        <th className="border border-border p-2 text-left">Avg Rent per Customer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-accent/20">
                        <td className="border border-border p-2">Pune</td>
                        <td className="border border-border p-2">1,258,290</td>
                        <td className="border border-border p-2">1,875,000</td>
                        <td className="border border-border p-2">24,198</td>
                        <td className="border border-border p-2">294</td>
                      </tr>
                      <tr className="hover:bg-accent/20">
                        <td className="border border-border p-2">Chennai</td>
                        <td className="border border-border p-2">944,120</td>
                        <td className="border border-border p-2">2,775,000</td>
                        <td className="border border-border p-2">22,479</td>
                        <td className="border border-border p-2">407</td>
                      </tr>
                      <tr className="hover:bg-accent/20">
                        <td className="border border-border p-2">Bangalore</td>
                        <td className="border border-border p-2">860,110</td>
                        <td className="border border-border p-2">3,075,000</td>
                        <td className="border border-border p-2">22,054</td>
                        <td className="border border-border p-2">762</td>
                      </tr>
                      <tr className="hover:bg-accent/20">
                        <td className="border border-border p-2">Delhi</td>
                        <td className="border border-border p-2">750,420</td>
                        <td className="border border-border p-2">7,750,000</td>
                        <td className="border border-border p-2">11,036</td>
                        <td className="border border-border p-2">331</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-card/5 p-2 rounded-md overflow-hidden">
                  <img 
                    src="/cityscore.png" 
                    alt="Final Visualization" 
                    className="w-full h-auto rounded-md shadow-md border border-border/50" 
                  />
                </div>
              </section>
                
              {/* Ad Hoc Requests Section */}
              <section id="ad-hoc-requests" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="text-primary" /> Ad Hoc Requests
                </h2>
                
                <Card className="overflow-hidden border border-border/50 hover:border-primary/30 transition-all mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">🔹 Question 1: [Placeholder for question]</h3>
                    
                    <Accordion type="single" collapsible className="w-full mb-4">
                      <AccordionItem value="question-1-sql">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          SQL Query
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard("-- SQL query will be added here")}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`-- SQL query will be added here`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <div className="mb-4">
                      <h4 className="text-base font-medium mb-2">Visualization:</h4>
                      <img 
                        src="/q1.jpg" 
                        alt="Question 1 Visualization" 
                        className="w-full rounded-md border border-border/50" 
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-base font-medium mb-2">Insights:</h4>
                      <p className="text-muted-foreground">Insights will be added soon.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border border-border/50 hover:border-primary/30 transition-all mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">🔹 Question 2: [Placeholder for question]</h3>
                    
                    <Accordion type="single" collapsible className="w-full mb-4">
                      <AccordionItem value="question-2-sql">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          SQL Query
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard("-- SQL query will be added here")}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`-- SQL query will be added here`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <div className="mb-4">
                      <h4 className="text-base font-medium mb-2">Visualization:</h4>
                      <img 
                        src="/q2.jpg" 
                        alt="Question 2 Visualization" 
                        className="w-full rounded-md border border-border/50" 
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-base font-medium mb-2">Insights:</h4>
                      <p className="text-muted-foreground">Insights will be added soon.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border border-border/50 hover:border-primary/30 transition-all mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">🔹 Question 3: [Placeholder for question]</h3>
                    
                    <Accordion type="single" collapsible className="w-full mb-4">
                      <AccordionItem value="question-3-sql">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          SQL Query
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard("-- SQL query will be added here")}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`-- SQL query will be added here`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <div className="mb-4">
                      <h4 className="text-base font-medium mb-2">Visualization:</h4>
                      <img 
                        src="/q3.jpg" 
                        alt="Question 3 Visualization" 
                        className="w-full rounded-md border border-border/50" 
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-base font-medium mb-2">Insights:</h4>
                      <p className="text-muted-foreground">Insights will be added soon.</p>
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
                      <li>Data-driven approach provides objective criteria for business expansion decisions</li>
                      <li>Weighted scoring system balances revenue potential with operational costs</li>
                      <li>Pune, Chennai, and Delhi emerge as the most promising locations for expansion</li>
                      <li>Each city offers unique advantages in terms of customer base, spending patterns, and cost structure</li>
                    </ul>
                    
                    <h3 className="text-lg font-medium mb-3">Next Steps</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Conduct detailed market research in the top 3 cities to validate findings</li>
                      <li>Develop tailored business plans for each expansion location</li>
                      <li>Assess real estate options and local operational requirements</li>
                      <li>Create a phased expansion timeline starting with the highest-scoring city</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>
            
            {/* Sidebar Column */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-xl transition-all">
                  <img 
                    src="/coffee2.jpg" 
                    alt="Monday Coffee Analysis" 
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
                        <span className="text-sm">Weighted scoring methodology for objective decision-making</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">SQL-based analysis of business performance metrics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">Data-driven city ranking for strategic expansion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">Balance of revenue potential and operational costs</span>
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
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors">Realtime Data Pipeline</h4>
                            <p className="text-xs text-muted-foreground">Building a scalable data pipeline for analytics</p>
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

export default NewProject;
