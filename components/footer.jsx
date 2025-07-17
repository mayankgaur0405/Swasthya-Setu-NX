import { Linkedin, Instagram, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-10 border-t border-emerald-900/30 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding / Text */}
        <div className="text-center md:text-left">
          <p className="text-m text-gray-300">
            © {new Date().getFullYear()}{" "}
            <span className="text-emerald-400 font-semibold">Mayank Gaur</span>. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Designed and developed with attention to detail and user experience.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 items-center">
          <Link
            href="https://www.linkedin.com/in/mayank-gaur-36b382254/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </Link>

          <Link
            href="https://www.instagram.com/mayankgaur.8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition duration-200"
          >
            <Instagram className="w-5 h-5" />
          </Link>

          <Link
            href="https://github.com/mayankgaur0405"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
