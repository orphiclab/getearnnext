import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import EarningOpportunities from "@/components/EarningOpportunities";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background selection:bg-accent-purple/30 selection:text-white">
            <Navbar />
            <Hero />
            <HowItWorks />
            <Features />
            <EarningOpportunities />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    );
}
