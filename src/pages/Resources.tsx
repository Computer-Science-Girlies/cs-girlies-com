
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ResourceCard } from "@/components/ResourceCard";
import {
  Brain, 
  TestTube, 
  Cloud, 
  Book, 
  Lock, 
  BarChart, 
  Search,
  Gamepad,
  Cpu,
  Wifi,
  Smartphone,
  Monitor,
  Terminal,
  Globe,
  Code,
  Coffee,
  Moon,
  Swords,
  Bot,
  ScrollText,
  PiSquare,
  Snake,
  LineChart,
  Cog,
  Palette
} from "lucide-react";

const ResourcesPage = () => {
  const categories = [
    { title: "AI/ML Girlies", icon: Brain, count: 3 },
    { title: "Biotech Girlies", icon: TestTube },
    { title: "Cloud Girlies", icon: Cloud },
    { title: "CS Theory Girlies", icon: Book, count: 4 },
    { title: "Cybersec Girlies", icon: Lock, count: 10 },
    { title: "Data Analytics Girlies", icon: BarChart },
    { title: "Digital Forensics Girlies", icon: Search },
    { title: "Game Dev Girlies", icon: Gamepad },
    { title: "Hardware Girlies", icon: Cpu, count: 2 },
    { title: "IoT Girlies", icon: Wifi },
    { title: "Mobile Dev Girlies", icon: Smartphone },
    { title: "Software Dev Girlies", icon: Monitor },
    { title: "Unix Girlies", icon: Terminal, count: 1 },
    { title: "Web Dev Girlies", icon: Globe },
    { title: "Assembly Girlies", icon: Code, count: 3 },
    { title: "C/C++ Girlies", icon: Code, count: 13 },
    { title: "Codédex Girlies", icon: Moon },
    { title: "Codewars Girlies", icon: Swords },
    { title: "Go Lang Girlies", icon: Bot },
    { title: "Java/C# Girlies", icon: Coffee, count: 6 },
    { title: "JavaScript Girlies", icon: ScrollText, count: 2 },
    { title: "LeetCode Girlies", icon: Code },
    { title: "Mathematics Girlies", icon: PiSquare, count: 1 },
    { title: "Python Girlies", icon: Snake, count: 3 },
    { title: "R Lang Girlies", icon: LineChart },
    { title: "Rust Girlies", icon: Cog },
    { title: "UI/UX Design Girlies", icon: Palette, count: 2 }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      <div className="py-12 md:py-16">
        <div className="cs-container">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-csgirlies-pink mb-16">
            Resources
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <ResourceCard 
                key={category.title}
                title={category.title}
                Icon={category.icon}
                count={category.count}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;
