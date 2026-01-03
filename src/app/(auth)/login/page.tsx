"use client"

import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"; 
import { Image } from "next/image"; 
import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";


export default function LoginPage () {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const handleLogin = async(e: React.FormEvent) => {
        e.preventDefault();
        setLoading (true);
        setError("");

       const supabase = createClient();

      const {error} = await supabase.auth.signInWithPassword({
        email,
        password,
       });

       if(error){
        setError(error.message);
        setLoading(false);
        return;
       }

       router.push("/dashboard");
       router.refresh();
    };


    return (
        <div className="flex min-h-screen">
            {/* Left Side -Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#1E293B] relative overflow-hidden">
             {/* Background Image */}
             <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                    alt="team collaboration"
                    fill
                    className="object-cover opacity-40"
                
                
                />

             </div>

             {/*Content Overlay  */}
             <div className="relative z-10 flex flex-col justify-end p-12 text-white">
                {/* Logo */}
                <div className="absolute top-12 left-12 flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0D9488]" >
                        <span className="text-xl font-bold text-white">E</span>
                    </div>
                    <span className="text-xl font-semibold">HRDashboard</span>

                </div>
                {/* Tagline */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold leading-tight mb-4">
                        Let&apos;s empower your<br />employees today.

                    </h1>
                    <p className="text-gray-300 text-lg">
                        We help to complete all your conveyancing needs easily

                    </p>
                </div>
             </div>
            </div>

            {/* Right Side Login Form */}
            <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
               <div className="w-full max-w-md">
                {/* Mobile Logo */}
                <div className="flex lg:hidden items-center gap-2 mb-8 justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0D9488]">
                        <span className="text-xl font-bold text-white">E</span>
                    </div>
                    <span className="text-xl font-semibold">HRDashboard</span>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900" >
                        Login first to your account
                    </h2>

                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    {error && (
                        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600" >
                            {error}

                        </div>
                    )}

                    {/* Email Field */}
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700">
                            Email Address <span className="text-red-500">*</span>

                        </Label>
                        <Input
                         id="email"
                         type="email"
                         placeholder="Input your registered email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         className ="h-12 border-gray-200 focus:border-[#0D9488] focus:ring-[#0D9488]"
                         required
                        
                        />

                    </div>
                    {/* Password */}
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-gray-700">
                            Password <span className="text-red-500">*</span>

                        </Label>
                        <div className ="relative">
                            <Input
                             id="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Input you password account"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="h-12 border-gray-200 focus:border-[#0D9488] focus:ring-[#0D9488] pr-12"
                              required
                            
                            />
                            <button
                             type="button"
                             onClick={() => setShowPassword(!showPassword)}
                             className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"

                            
                             >

                                {showPassword ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/> }


                            </button>

                        </div>

                    </div>
                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                         <Checkbox
                           id="remember"
                           checked={rememberMe}
                           onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                           className="border-gray-300 data-[state=checked]:bg-[#]D9488] data-[state=checked]:border-[#0D9488]"
                        />
                        <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                            Remember Me
                        </Label>
                        </div>
                        <Link
                            href="/forgot-password"
                            className="text-sm text-gray-600 hover:text-[#0D9488]"
                        
                        >
                        
                          Forgot Password
                        
                        </Link>

                    </div>

                    {/* Login Button */}
                    <Button
                      type="submit"
                      className="w-full h-12 bg-[#0D9488] hover:bg-[#0B7C72] text-white font-medium"
                      disabled={loading}
                    >
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

                        Login

                    </Button>

                    {/* {Divider} */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>

                        </div>
                        <div  className="relative flex justify-center text-sm">
                            <span className="bg-white px-4 text-gray-500">Or login with</span>

                        </div>

                    </div>
                        {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">
                        <Button
                            type="button"
                            variant="outline"
                            className="h-12 border-gray-200 hover:bg-gray-50"
                        >
                            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                            </svg>
                            Google
                       </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="h-12 border-gray-200 hover:bg-gray-50"
                        >
                            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            Apple
                        </Button>
                    </div>

                    {/* Register Link */}
                    <p className="text-center text-sm text-gray-600">
                        You&apos;re new in here?{" "}
                        <Link href="/register" className="text-[#0D9488] hover:underline font-medium">
                          Create Account
                        </Link>

                    </p>

                </form>

                {/* footer */}
                <div  className="mt-8 text-center text-xs text-gray-500">
                    <p>© 2025 Emploify HRDashboard. All rights reserved.</p>
                    <div className="mt-2 space-x-4">
                        <Link href="/terms" className="hover:text-gray-700 underline">
                           Terms & conditions
                        
                        </Link>

                        <Link href="/terms" className="hover:text-gray-700">
                            Privacy Policy
                        </Link>

                    </div>

                </div>

               </div>

            </div>


        </div>        
        
    );
}