"use client";

import { motion } from "motion/react";
import { BeamButton } from "@/components/ui/beam-button";

export function AboutSection() {
  return (
    <section id="about" className="py-28 relative bg-noise">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pulse-gradient">
          <div className="w-full h-full bg-gradient-radial from-viewr-blue/30 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex justify-center">
              <BeamButton variant="default" size="sm">
                About Us
              </BeamButton>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Leading Innovation in Security
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Pioneering the industry with AI-powered surveillance solutions featuring cutting-edge technology and unmatched accuracy.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StatCard
            value="983+"
            label="Installations"
            icon={<ShieldIcon />}
          />
          <StatCard
            value="9+"
            label="Patents"
            icon={<PatentIcon />}
          />
          <StatCard
            value="96%+"
            label="Guaranteed Accuracy"
            icon={<TargetIcon />}
          />
          <StatCard
            value="24/7"
            label="Support"
            icon={<ClockIcon />}
          />
        </motion.div>

        {/* Technology Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-viewr-purple/5 rounded-full blur-[100px]"></div>

            <h3 className="text-2xl font-bold mb-8 text-center text-white">Our Technology</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <TechCard
                icon={<AiIcon className="w-5 h-5 text-viewr-purple-light" />}
                title="Advanced AI Analysis"
                description="Our AI models are trained on millions of data points to accurately detect and classify objects, people, and behaviors with industry-leading precision."
              />
              <TechCard
                icon={<EncryptionIcon className="w-5 h-5 text-viewr-purple-light" />}
                title="End-to-End Encryption"
                description="All video feeds and data are protected with military-grade encryption protocols, ensuring your security data remains private and secure."
              />
              <TechCard
                icon={<CloudIcon className="w-5 h-5 text-viewr-purple-light" />}
                title="Cloud-Native Architecture"
                description="Our platform is built on a modern cloud infrastructure for unlimited scalability, automatic updates, and 99.9% uptime."
              />
              <TechCard
                icon={<IntegrationIcon className="w-5 h-5 text-viewr-purple-light" />}
                title="Seamless Integrations"
                description="Connect easily with your existing security systems, smart home devices, and business applications through our extensive API."
              />
            </div>
          </div>
        </motion.div>

        {/* Team Section Preview */}
        <div className="mt-24 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Join a Team of Security Experts</h3>
            <p className="text-muted-foreground max-w-2xl mb-8">
              Our team brings together expertise in AI, cybersecurity, and physical security systems
              to create the most comprehensive security solutions available.
            </p>
            <BeamButton variant="purple">
              Meet Our Team
            </BeamButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TechCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg bg-black/30 backdrop-blur-sm p-6 border border-viewr-deep-purple/30 hover:border-viewr-purple/30 transition-all duration-300">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-viewr-deep-purple/50 mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}

function StatCard({
  value,
  label,
  icon
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="glass-card p-6 rounded-xl hover-lift text-center group">
      <div className="w-12 h-12 mx-auto mb-4 text-viewr-purple-light">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-1 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent shine group-hover:animate-gradient-x">
        {value}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  )
}

// Icons
function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  )
}

function PatentIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  )
}

function AiIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="M9 8.5h4.5a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 0 0 3H15"></path>
      <path d="M7 8v8"></path>
      <path d="M17 8v8"></path>
    </svg>
  )
}

function EncryptionIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  )
}

function CloudIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
    </svg>
  )
}

function IntegrationIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
      <path d="M3 9h18"></path>
      <path d="M9 21V9"></path>
    </svg>
  )
}
