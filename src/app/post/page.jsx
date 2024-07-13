"use client";
import { usePathname } from "next/navigation";

export default function Post() {
    const pathname = usePathname();
    return <p> {pathname}</p>;
    //write in your understanding what pathname is
    //doing here
}
