"use client"
import {usePathname} from "next/navigation";
import Link from "next/link";

const navArray = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Companions",
        href: "/companions",
    },
]
const NavItems = () => {
   const pathName = usePathname();
   console.log(pathName);
    return (
        <>
            <nav className="flex items-center gap-4">
            {navArray.map(({href,label}) => (
                <Link
                    href={href}
                    key={label}
                    className={`${pathName == href && 'text-primary font-semibold'}`}
                >
                    {label}
                </Link>
            ))}
            </nav>
        </>
    )
}
export default NavItems;