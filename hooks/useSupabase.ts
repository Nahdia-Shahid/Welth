import { createClerkSupabaseClient } from "@/lib/supabase";
import { useAuth } from "@clerk/expo";
import { useMemo, useEffect, useRef } from "react";

export function useSupabase() {
  const { getToken } = useAuth();

  const getTokenRef = useRef(getToken);
  useEffect(() => {
    getTokenRef.current = getToken;
  }, [getToken]);

  const client = useMemo(
    () => createClerkSupabaseClient(() => getToken()),
    [] // empty deps — create the client once, getToken is captured in the closure
  );

  return client;
}