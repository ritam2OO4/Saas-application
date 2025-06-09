"use client"
import {useSearchParams,useRouter} from "next/navigation";
import {useState,useEffect} from "react";
import Image from "next/image";
import {formUrlQuery,removeKeysFromUrlQuery} from "@jsmastery/utils";

export const  TopicFilter= () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery,setSearchQuery] = useState("")

    useEffect(() => {
        setTimeout(() => {
           if(searchQuery){
               const newUrl = formUrlQuery({
                   params:searchParams.toString(),
                   key:"topic",
                   value:searchQuery,
               })
               router.push(newUrl,{scroll:false})
           }
           else{
               const newUrl = removeKeysFromUrlQuery({
                   params:searchParams.toString(),
                   keysToRemove:["topic"],
               })
               router.push(newUrl,{scroll:false})
           }
       },500)
    },[searchQuery,router,searchParams])

    return (
        <div className="relative border bg-teal-200 border-black rounded-lg h-fit flex gap-2 py-1 px-2 items-center">
        <Image src="/icons/search.svg" alt="search" width={18} height={18}/>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-transparent outline-none focus:ring-0" placeholder="Search companions" />
        </div>
    );
};
