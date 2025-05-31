"use client";

import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
    return (
        <nav className="navbar flex items-center justify-between px-6 py-4">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={46}
                        height={44}
                    />
                </div>
            </Link>

            <div className="flex items-center gap-6">
                <NavItems />

                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="text-sm font-medium">Sign In</button>
                    </SignInButton>

                </SignedOut>

                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navbar;
