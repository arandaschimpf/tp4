import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
    const supabase = createClient();
    const { data: counters } = await supabase.from("counter").select();

    return <pre>{JSON.stringify(counters, null, 2)}</pre>
}