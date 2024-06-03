'use server'
import {createClient} from "@/utils/supabase/server";

export async function increment() {await createClient().rpc('increment')}