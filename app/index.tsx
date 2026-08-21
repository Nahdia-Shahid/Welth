import { Redirect } from "expo-router";
import {useAuth} from "@clerk/expo";

export default function Index() {
  const { isSignedIn, isLoaded} = useAuth()

  if (!isLoaded){
    return null
  }

  if (isSignedIn) {
    return <Redirect href= "/" />
  }

  return <Redirect href= "/sign-in" />;
}
