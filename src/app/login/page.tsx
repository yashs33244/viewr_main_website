"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { BeamButton } from "@/components/ui/beam-button";
import { Input } from "@/components/ui/input";
import MouseGradient from "@/components/ui/mouse-gradient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", email);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MouseGradient />
      <Header />

      <main className="flex-1 flex items-center justify-center py-16">
        <div className="w-full max-w-md p-8 glass-card rounded-xl beam-border">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-viewr-blue to-viewr-purple-light bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-muted-foreground">
                Sign in to your Viewr account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-black/30 border-viewr-deep-purple/30"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link
                    href="/reset-password"
                    className="text-xs text-viewr-purple-light hover:text-viewr-purple-light/90"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-black/30 border-viewr-deep-purple/30"
                />
              </div>

              <BeamButton
                variant="purple"
                type="submit"
                className="w-full mt-2"
              >
                Sign In
              </BeamButton>
            </form>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                Don't have an account?{" "}
              </span>
              <Link
                href="/signup"
                className="text-viewr-purple-light hover:text-viewr-purple-light/90"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
