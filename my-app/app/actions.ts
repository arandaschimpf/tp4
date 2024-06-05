'use server'
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";


export async function getValor() {
    const cookieStore = cookies();
    const supabase = await createClient(cookieStore);
    const { data, error } = await supabase.from('counter').select('*');
    if (data) {
        return data[0] 
    } else {
        console.error("Error getting Category: ", error);
        return null;
    }
}

export async function incrementCounterValue(newValue: number | null) {
    const counterId = 1;
    const cookieStore = cookies();
    const supabase = await createClient(cookieStore);
    const { data, error } = await supabase.from('counter').update({value: newValue}).eq('id',counterId);
    if (data) {
        console.log(data[0])
        return data[0] 
    } else {
        console.error("Error getting Category: ", error);
        return null;
    }
}