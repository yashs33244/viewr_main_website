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
  FileText,
  Users,
  CreditCard,
  Scale,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function TermsPage() {
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
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-viewr-blue to-viewr-purple-light bg-clip-text text-transparent">
                Terms and Conditions
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our CCTV
              surveillance and analytics platform.
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
                  Welcome to ViewR Private Limited ("we," "us," or "our"). These
                  Terms and Conditions ("Terms") govern your access to and use
                  of our Software-as-a-Service (SaaS) platform specializing in
                  CCTV surveillance and analytics (the "Platform") and all
                  related services (collectively, the "Services"). By accessing
                  or using the Platform, you agree to be bound by these Terms.
                  If you do not agree with any part of these Terms, you must not
                  access or use the Platform.
                </p>
              </div>
            </section>

            {/* Definitions */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <span className="text-viewr-purple-light font-bold">1</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Definitions</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div className="border-l-2 border-viewr-purple/30 pl-4">
                  <p>
                    <strong className="text-white">"User":</strong> Refers to
                    any individual, organization, or entity accessing or using
                    the Platform.
                  </p>
                </div>
                <div className="border-l-2 border-viewr-purple/30 pl-4">
                  <p>
                    <strong className="text-white">"Customer":</strong> Refers
                    to a paying subscriber of our Services.
                  </p>
                </div>
                <div className="border-l-2 border-viewr-purple/30 pl-4">
                  <p>
                    <strong className="text-white">"Account":</strong> Refers to
                    the unique profile created by a User to access the Platform.
                  </p>
                </div>
                <div className="border-l-2 border-viewr-purple/30 pl-4">
                  <p>
                    <strong className="text-white">"Content":</strong> Includes
                    all data, video footage, analytics, text, graphics, and
                    other materials provided through the Platform.
                  </p>
                </div>
              </div>
            </section>

            {/* Eligibility */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <span className="text-viewr-purple-light font-bold">2</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Eligibility</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  • To use the Platform, you must be at least 18 years old or
                  the age of majority in your jurisdiction.
                </p>
                <p>
                  • By using the Platform, you represent and warrant that you
                  have the legal capacity to enter into a binding agreement.
                </p>
              </div>
            </section>

            {/* Account Registration */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <Users className="w-4 h-4 text-viewr-purple-light" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Account Registration
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  • Users must create an Account to access certain features of
                  the Platform.
                </p>
                <p>
                  • You agree to provide accurate, complete, and up-to-date
                  information during registration and to update it as necessary.
                </p>
                <p>
                  • You are responsible for maintaining the confidentiality of
                  your Account credentials and for all activities that occur
                  under your Account.
                </p>
                <p>
                  • Notify us immediately if you suspect unauthorized access to
                  your Account.
                </p>
              </div>
            </section>

            {/* Use of Platform */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-viewr-purple-light" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Use of the Platform
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You agree to use the Platform solely for lawful purposes and
                  in compliance with these Terms.
                </p>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    You must not:
                  </h4>
                  <ul className="space-y-2 text-red-300">
                    <li>
                      • Use the Platform to upload, store, or distribute content
                      that violates any laws, regulations, or third-party
                      rights.
                    </li>
                    <li>
                      • Interfere with the operation or security of the
                      Platform.
                    </li>
                    <li>
                      • Reverse-engineer, decompile, or attempt to extract the
                      source code of the Platform.
                    </li>
                  </ul>
                </div>
                <p>
                  We reserve the right to suspend or terminate your access if
                  you violate these Terms.
                </p>
              </div>
            </section>

            {/* Customer Responsibilities */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <span className="text-viewr-purple-light font-bold">5</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Customer Responsibilities
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  • Customers must ensure that their use of the Platform
                  complies with applicable laws, including privacy and data
                  protection laws.
                </p>
                <p>
                  • Customers are responsible for obtaining the necessary
                  consents from individuals whose data is captured through CCTV
                  surveillance.
                </p>
                <p>
                  • Customers agree not to misuse analytics derived from the
                  Platform.
                </p>
              </div>
            </section>

            {/* Fees and Payment */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-viewr-purple-light" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Fees and Payment
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  • Customers must pay the subscription fees specified in the
                  applicable order form or agreement.
                </p>
                <p>
                  • All payments are non-refundable unless otherwise agreed in
                  writing.
                </p>
                <p>
                  • We may suspend access to the Platform if fees remain unpaid
                  beyond the due date.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <span className="text-viewr-purple-light font-bold">7</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Intellectual Property
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  • The Platform, including its software, design, and Content,
                  is owned by us or our licensors and is protected by
                  intellectual property laws.
                </p>
                <p>
                  • You may not use our trademarks, logos, or other proprietary
                  materials without prior written consent.
                </p>
                <p>
                  • You retain ownership of Content you upload to the Platform.
                  By uploading Content, you grant us a non-exclusive,
                  royalty-free license to use it for the purpose of providing
                  Services.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <Scale className="w-4 h-4 text-viewr-purple-light" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Limitation of Liability
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To the fullest extent permitted by law, we are not liable for:
                </p>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <ul className="space-y-2 text-yellow-300">
                    <li>
                      • Indirect, incidental, special, or consequential damages.
                    </li>
                    <li>
                      • Loss of data, profits, or revenue arising from your use
                      of the Platform.
                    </li>
                    <li>
                      • Our total liability is limited to the amount paid by the
                      Customer in the twelve (12) months preceding the claim.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section className="glass-card p-8 rounded-xl beam-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center">
                  <span className="text-viewr-purple-light font-bold">13</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Governing Law and Dispute Resolution
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>• These Terms are governed by the laws of India.</p>
                <p>
                  • Any disputes will be resolved through arbitration under the
                  Arbitration and Conciliation Act, 1996. The seat of
                  arbitration will be Gurgaon, India, and proceedings will be
                  conducted in English.
                </p>
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
                  If you have any questions or concerns regarding these Terms,
                  please contact us at:
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
