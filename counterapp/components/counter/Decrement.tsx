'use server'
import {createClient} from "@/utils/supabase/server";

export async function decrement() { await createClient().rpc('decrement')}