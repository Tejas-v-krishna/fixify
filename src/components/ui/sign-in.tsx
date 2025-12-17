"use client";

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

// --- HELPER COMPONENTS (ICONS) ---

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z" />
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z" />
    </svg>
);


// --- TYPE DEFINITIONS ---

export interface Testimonial {
    avatarSrc: string;
    name: string;
    handle: string;
    text: string;
}

interface AuthPageProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    heroImageSrc?: string;
    testimonials?: Testimonial[];
    onSignIn?: (event: React.FormEvent<HTMLFormElement>) => void;
    onGoogleSignIn?: () => void;
    onResetPassword?: () => void;
    // New props for flexibility
    submitButtonText?: string;
    footerText?: string;
    footerActionText?: string;
    onFooterAction?: () => void;
    showRememberMe?: boolean;
}

// --- SUB-COMPONENTS ---

const GlassInputWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-2xl border border-input dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm transition-colors focus-within:border-[#2DD4BF] dark:focus-within:border-[#2DD4BF]/50 focus-within:ring-1 focus-within:ring-[#2DD4BF] dark:focus-within:bg-white/10">
        {children}
    </div>
);

const TestimonialCard = ({ testimonial, delay }: { testimonial: Testimonial, delay: string }) => (
    <div className={`animate-testimonial ${delay} flex items-start gap-3 rounded-3xl bg-card dark:bg-[#0F0E17]/60 backdrop-blur-xl border border-border dark:border-white/10 p-5 w-64 shadow-xl`}>
        <img src={testimonial.avatarSrc} className="h-10 w-10 object-cover rounded-2xl border border-border dark:border-white/10" alt="avatar" />
        <div className="text-sm leading-snug text-foreground dark:text-white">
            <p className="flex items-center gap-1 font-medium">{testimonial.name}</p>
            <p className="text-muted-foreground">{testimonial.handle}</p>
            <p className="mt-1 text-foreground/80 dark:text-white/80">{testimonial.text}</p>
        </div>
    </div>
);

// --- MAIN COMPONENT ---

export const AuthPage: React.FC<AuthPageProps> = ({
    title = <span className="font-light text-foreground dark:text-white tracking-tighter">Welcome</span>,
    description = "Access your account and continue your journey with us",
    heroImageSrc,
    testimonials = [],
    onSignIn,
    onGoogleSignIn,
    onResetPassword,
    submitButtonText = "Sign In",
    footerText = "New to our platform?",
    footerActionText = "Create Account",
    onFooterAction,
    showRememberMe = true,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-[100dvh] flex flex-col md:flex-row w-[100dvw] bg-background text-foreground dark:text-white overflow-hidden transition-colors duration-500">
            {/* Left column: sign-in form */}
            <section className="flex-1 flex items-center justify-center p-8 relative z-10">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#2DD4BF]/5 rounded-full blur-[100px] pointer-events-none opacity-0 dark:opacity-100 transition-opacity" />

                <div className="w-full max-w-md relative z-10">
                    <div className="flex flex-col gap-6">
                        <h1 className="animate-element animate-delay-100 text-4xl md:text-5xl font-medium leading-tight text-foreground dark:text-white">{title}</h1>
                        <p className="animate-element animate-delay-200 text-muted-foreground">{description}</p>

                        <form className="space-y-5" onSubmit={onSignIn}>
                            <div className="animate-element animate-delay-300">
                                <label className="text-sm font-normal text-muted-foreground mb-2 block">Email Address</label>
                                <GlassInputWrapper>
                                    <input name="email" type="email" placeholder="Enter your email address" className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none text-foreground dark:text-white placeholder:text-muted-foreground" />
                                </GlassInputWrapper>
                            </div>

                            <div className="animate-element animate-delay-400">
                                <label className="text-sm font-normal text-muted-foreground mb-2 block">Password</label>
                                <GlassInputWrapper>
                                    <div className="relative">
                                        <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none text-foreground dark:text-white placeholder:text-muted-foreground" />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center">
                                            {showPassword ? <EyeOff className="w-5 h-5 text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors" /> : <Eye className="w-5 h-5 text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors" />}
                                        </button>
                                    </div>
                                </GlassInputWrapper>
                            </div>

                            {showRememberMe ? (
                                <div className="animate-element animate-delay-500 flex items-center justify-between text-sm">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative">
                                            <input type="checkbox" name="rememberMe" className="peer sr-only" />
                                            <div className="w-5 h-5 border border-border dark:border-white/20 rounded-md peer-checked:bg-[#2DD4BF] peer-checked:border-[#2DD4BF] transition-all bg-white dark:bg-transparent" />
                                            <svg className="absolute top-1 left-1 w-3 h-3 text-[#0F0E17] opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-muted-foreground group-hover:text-foreground dark:group-hover:text-white transition-colors">Keep me signed in</span>
                                    </label>
                                    <a href="#" onClick={(e) => { e.preventDefault(); onResetPassword?.(); }} className="hover:underline text-[#2DD4BF] transition-colors">Reset password</a>
                                </div>
                            ) : (
                                <div className="h-4" />
                            )}

                            <button type="submit" className="animate-element animate-delay-600 w-full rounded-2xl bg-gradient-to-r from-[#2DD4BF] to-[#0D9488] hover:from-[#14B8A6] hover:to-[#0F766E] py-4 font-bold text-[#0F0E17] transition-all shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]">
                                {submitButtonText}
                            </button>
                        </form>

                        <div className="animate-element animate-delay-700 relative flex items-center justify-center">
                            <span className="w-full border-t border-border dark:border-white/10"></span>
                            <span className="px-4 text-sm text-muted-foreground bg-background absolute">Or continue with</span>
                        </div>

                        <button onClick={onGoogleSignIn} className="animate-element animate-delay-800 w-full flex items-center justify-center gap-3 border border-border dark:border-white/10 rounded-2xl py-4 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors text-foreground dark:text-white bg-white dark:bg-transparent">
                            <GoogleIcon />
                            Continue with Google
                        </button>

                        <p className="animate-element animate-delay-900 text-center text-sm text-muted-foreground">
                            {footerText} <a href="#" onClick={(e) => { e.preventDefault(); onFooterAction?.(); }} className="text-[#2DD4BF] hover:underline transition-colors font-medium">{footerActionText}</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Right column: hero image + testimonials */}
            {heroImageSrc && (
                <section className="hidden md:block flex-1 relative p-4 bg-zinc-100 dark:bg-[#0F0E17]">
                    <div className="absolute inset-4 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-[2s]" style={{ backgroundImage: `url(${heroImageSrc})` }}></div>
                        {/* Gradient overly only for dark mode or for text contrast if needed? Keeping it for both but adjusting opacity if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-[#0F0E17] via-transparent to-transparent opacity-80" />
                    </div>

                    {testimonials.length > 0 && (
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 px-8 w-full justify-center">
                            <TestimonialCard testimonial={testimonials[0]} delay="animate-delay-1000" />
                            {testimonials[1] && <div className="hidden xl:flex"><TestimonialCard testimonial={testimonials[1]} delay="animate-delay-1200" /></div>}
                            {testimonials[2] && <div className="hidden 2xl:flex"><TestimonialCard testimonial={testimonials[2]} delay="animate-delay-1400" /></div>}
                        </div>
                    )}
                </section>
            )}
        </div>
    );
};
