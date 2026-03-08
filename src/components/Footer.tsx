import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-surfaceBorder pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                            <div className="w-8 h-8 rounded-[8px] overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                                <img src="/logo.png" alt="Get Earn Next Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-bold text-lg tracking-tight text-white group-hover:text-getearnnext-green transition-colors">
                                Get Earn
                            </span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Empowering users worldwide to monetize their digital presence seamlessly. Start earning from your fingertips today.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-getearnnext-green hover:border-getearnnext-green transition-colors bg-white/5 hover:bg-getearnnext-green/10">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-getearnnext-green hover:border-getearnnext-green transition-colors bg-white/5 hover:bg-getearnnext-green/10">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-getearnnext-green hover:border-getearnnext-green transition-colors bg-white/5 hover:bg-getearnnext-green/10">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-getearnnext-green hover:border-getearnnext-green transition-colors bg-white/5 hover:bg-getearnnext-green/10">
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/50 hover:text-getearnnext-green transition-colors text-sm">Features</a></li>
                            <li><a href="#" className="text-white/50 hover:text-getearnnext-green transition-colors text-sm">How it Works</a></li>
                            <li><a href="#" className="text-white/50 hover:text-getearnnext-green transition-colors text-sm">Pricing</a></li>
                            <li><a href="#" className="text-white/50 hover:text-getearnnext-green transition-colors text-sm">Case Studies</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/50 hover:text-getearnnext-green transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="text-white/50 hover:text-getearnnext-green transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="text-white/50 hover:text-getearnnext-green transition-colors text-sm">Contact</a></li>
                            <li><a href="#" className="text-white/50 hover:text-getearnnext-green transition-colors text-sm">Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/50 hover:text-getearnnext-green transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-white/50 hover:text-getearnnext-green transition-colors text-sm">Terms of Service</a></li>
                            <li><a href="#" className="text-white/50 hover:text-getearnnext-green transition-colors text-sm">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-surfaceBorder flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {currentYear} Get Earn Next. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-getearnnext-green animate-pulse" />
                        <span className="text-white/40 text-sm">All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
