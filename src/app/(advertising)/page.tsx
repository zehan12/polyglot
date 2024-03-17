/*-------------------------------------------------------------------
|  🐼 React FC ADVERTISING
|
|  🐯 Purpose: THIS IS THE ADVERTISING PAGE OF THE APPLICATION
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import {
  ClerkLoading,
  ClerkLoaded,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Advertising() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col  lg:flex-row items-center justify-center p-4 gap-5">
      <div className="flex justify-center items-center w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image width={840} height={200} src={"/assets/hero.png"} alt="hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice, and master new languages with Lingo.
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
