"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return <p> {pathname}</p>;//write in your understanding what pathname is
//doing here


//pathname is used to store the path and simply return it whereas usePathname is basically a function that returns the path of the current directory
}