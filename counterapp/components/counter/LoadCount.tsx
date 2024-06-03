import {createClient} from "@/utils/supabase/server";

export async function load() {
    const {data: counters} = await createClient().from("counters").select('*');
    return counters ? counters[0].count : 0;
}