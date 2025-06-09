"use server"
import {createSupabaseClient} from "@/lib/supabase";
import {auth} from "@clerk/nextjs/server"


export const createCompanion  = async(formData : CreateCompanion)=>{
const {userId:author}=await auth();
const supabase =  createSupabaseClient();

const {data,error} = await supabase
    .from("companions")
     .insert({...formData,author})
         .select()
     if(error || !data) throw new Error(error?.message || " Failed to create a Campanion.")
     return data[0]
 }

export const getAllCompanions = async ({ limit = 10, page = 1, subject, topic }: GetAllCompanions) => {
    const supabase = createSupabaseClient();

    let query = supabase.from("companions").select();
    if (subject) {
        query = query.ilike("subject", `%${subject}%`);
    }

    if (topic) {
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
    }

    const { data: companions, error } = await query.range((page - 1) * limit, page * limit - 1);

    if (error || !companions) {
        throw new Error(error?.message || "Failed to get all Companions.");
    }

    return companions;
};
