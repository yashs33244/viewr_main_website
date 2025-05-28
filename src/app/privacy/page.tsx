"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import MouseGradient from "@/components/ui/mouse-gradient";
import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Shield,
  Eye,
  Database,
  Lock,
  Users,
  Globe,
  FileText,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MouseGradient />
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-viewr-blue hover:text-viewr-purple-light transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-viewr-blue to-viewr-purple-light flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-viewr-blue to-viewr-purple-light bg-clip-text text-transparent">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-viewr-deep-purple/20 border border-viewr-deep-purple/30">
              <Calendar className="w-4 h-4 text-viewr-purple-light" />
              <span className="text-sm text-muted-foreground">
                Effective Date: 31 January 2025
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Introduction */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ViewR Private Limited ("we," "us," or "our") operates a
                  Software-as-a-Service (SaaS) platform specializing in CCTV
                  surveillance and analytics (the "Platform"). We are committed
                  to protecting the privacy of our customers, users, and
                  stakeholders in compliance with the applicable laws in India,
                  including the Information Technology Act, 2000 and the
                  Personal Data Protection Bill, 2019 (as amended or replaced).
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  This Privacy Policy explains how we collect, use, disclose,
                  and protect personal information in connection with our
                  services.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <Database className="w-4 h-4 text-viewr-purple-light" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-viewr-purple/30 pl-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-viewr-purple-light" />
                    1.1 Personal Information
                  </h3>
                  <p className="text-muted-foreground">
                    Name, email address, phone number, organization details, and
                    other contact details. User credentials, including usernames
                    and passwords for accessing the Platform.
                  </p>
                </div>

                <div className="border-l-2 border-viewr-purple/30 pl-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-viewr-purple-light" />
                    1.2 CCTV Data
                  </h3>
                  <p className="text-muted-foreground">
                    Video footage, images, and metadata collected from CCTV
                    cameras integrated with our Platform.
                  </p>
                </div>

                <div className="border-l-2 border-viewr-purple/30 pl-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-viewr-purple-light" />
                    1.3 Analytics Data
                  </h3>
                  <p className="text-muted-foreground">
                    Behavioral patterns, heatmaps, object detection, and other
                    analytics derived from CCTV footage.
                  </p>
                </div>

                <div className="border-l-2 border-viewr-purple/30 pl-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-viewr-purple-light" />
                    1.4 Automatically Collected Data
                  </h3>
                  <p className="text-muted-foreground">
                    Device information, IP address, browser type, operating
                    system, and usage data collected through cookies, log files,
                    and other tracking technologies.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <span className="text-viewr-purple-light font-bold">2</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  How We Use the Information
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We use the collected information for the following purposes:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg p-4">
                    <p>
                      • To provide, maintain, and improve our Platform and
                      services.
                    </p>
                  </div>
                  <div className="bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg p-4">
                    <p>• To analyze video footage and generate insights.</p>
                  </div>
                  <div className="bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg p-4">
                    <p>
                      • To enhance security and monitor compliance with safety
                      protocols.
                    </p>
                  </div>
                  <div className="bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg p-4">
                    <p>
                      • To manage user accounts and provide customer support.
                    </p>
                  </div>
                  <div className="bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg p-4">
                    <p>
                      • To comply with legal obligations and respond to lawful
                      requests.
                    </p>
                  </div>
                  <div className="bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg p-4">
                    <p>
                      • To communicate updates and promotional offers (with
                      consent).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sharing and Disclosure */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <span className="text-viewr-purple-light font-bold">3</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Sharing and Disclosure of Information
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-green-300 font-semibold mb-2">
                    We do not sell, trade, or rent your personal information.
                  </p>
                </div>
                <p>
                  We may share information under the following circumstances:
                </p>

                <div className="space-y-4">
                  <div className="border-l-2 border-viewr-purple/30 pl-4">
                    <h4 className="text-white font-semibold mb-2">
                      3.1 With Service Providers
                    </h4>
                    <p>
                      We may share information with third-party service
                      providers who assist in delivering our services, such as
                      cloud storage providers, analytics partners, and IT
                      service providers.
                    </p>
                  </div>

                  <div className="border-l-2 border-viewr-purple/30 pl-4">
                    <h4 className="text-white font-semibold mb-2">
                      3.2 With Law Enforcement Authorities
                    </h4>
                    <p>
                      We may disclose information to comply with applicable
                      laws, regulations, or legal processes, or to respond to
                      lawful requests by public authorities.
                    </p>
                  </div>

                  <div className="border-l-2 border-viewr-purple/30 pl-4">
                    <h4 className="text-white font-semibold mb-2">
                      3.3 Business Transfers
                    </h4>
                    <p>
                      In the event of a merger, acquisition, or sale of assets,
                      your information may be transferred to the acquiring
                      entity.
                    </p>
                  </div>

                  <div className="border-l-2 border-viewr-purple/30 pl-4">
                    <h4 className="text-white font-semibold mb-2">
                      3.4 With Consent
                    </h4>
                    <p>
                      We may share information with third parties when we have
                      your explicit consent.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <span className="text-viewr-purple-light font-bold">4</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Data Retention
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We retain personal information and CCTV data for as long as
                  necessary to fulfill the purposes outlined in this policy, or
                  as required by law.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-blue-300">
                    CCTV footage and analytics data are stored for a specific
                    retention period agreed upon with the customer.
                  </p>
                </div>
              </div>
            </section>

            {/* Security Measures */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-viewr-purple-light" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Security Measures
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational measures
                  to safeguard your information, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg p-4 flex items-center gap-3">
                    <Lock className="w-5 h-5 text-viewr-purple-light shrink-0" />
                    <span>
                      Encryption of data during transmission and at rest
                    </span>
                  </div>
                  <div className="bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg p-4 flex items-center gap-3">
                    <Users className="w-5 h-5 text-viewr-purple-light shrink-0" />
                    <span>
                      Role-based access controls and multi-factor authentication
                    </span>
                  </div>
                  <div className="bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg p-4 flex items-center gap-3">
                    <Shield className="w-5 h-5 text-viewr-purple-light shrink-0" />
                    <span>Regular audits and vulnerability assessments</span>
                  </div>
                  <div className="bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg p-4 flex items-center gap-3">
                    <Database className="w-5 h-5 text-viewr-purple-light shrink-0" />
                    <span>
                      Secure data storage in compliance with Indian laws
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* User Rights */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <span className="text-viewr-purple-light font-bold">6</span>
                </div>
                <h2 className="text-2xl font-bold text-white">User Rights</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Under applicable Indian laws, you have the following rights:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-viewr-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs text-viewr-purple-light">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        Access and Correction
                      </h4>
                      <p className="text-sm">
                        Request access to or correction of your personal
                        information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-viewr-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs text-viewr-purple-light">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        Data Portability
                      </h4>
                      <p className="text-sm">
                        Receive your data in a portable format.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-viewr-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs text-viewr-purple-light">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        Consent Withdrawal
                      </h4>
                      <p className="text-sm">
                        Withdraw your consent to data processing, where
                        applicable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-viewr-deep-purple/10 border border-viewr-deep-purple/20 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-viewr-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs text-viewr-purple-light">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Erasure</h4>
                      <p className="text-sm">
                        Request the deletion of personal data, subject to legal
                        retention requirements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-300">
                    To exercise your rights, contact us at{" "}
                    <a
                      href="mailto:help@viewr.in"
                      className="text-viewr-blue hover:text-viewr-purple-light transition-colors underline"
                    >
                      help@viewr.in
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Compliance with Indian Laws */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <span className="text-viewr-purple-light font-bold">9</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Compliance with Indian Laws
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This Privacy Policy complies with the Information Technology
                  Act, 2000 and its associated rules, as well as any relevant
                  provisions under the Personal Data Protection Bill, 2019.
                </p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-green-300">
                    We will update this policy as necessary to reflect changes
                    in the legal landscape.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-viewr-purple-light" />
                </div>
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  If you have any questions or concerns regarding this Privacy
                  Policy, please contact us at:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-viewr-purple-light" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a
                        href="mailto:help@viewr.in"
                        className="text-viewr-blue hover:text-viewr-purple-light transition-colors"
                      >
                        help@viewr.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-viewr-purple-light" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <a
                        href="tel:+919891367183"
                        className="text-viewr-blue hover:text-viewr-purple-light transition-colors"
                      >
                        +91 98913 67183
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-viewr-purple-light" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-muted-foreground text-sm">
                        2114-17, Tower 4, DLF CORPORATE GREENS,
                        <br />
                        Sector 74A, Gurugram, Haryana 122004
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <section className="text-center py-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-viewr-deep-purple/10 border border-viewr-deep-purple/20">
                <Calendar className="w-4 h-4 text-viewr-purple-light" />
                <span className="text-sm text-muted-foreground">
                  Last updated: 31 January 2025
                </span>
              </div>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
