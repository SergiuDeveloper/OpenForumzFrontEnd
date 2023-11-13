import { useEffect } from "react";
import Layout from "./Layout";
import { getFirebaseAuth, setLoginCookie } from "@/auth/auth";
import { useRouter } from "next/router";

const MainLayout = (props: any) => {
    const { children, ...customMeta } = props;

    const router = useRouter();

    useEffect(
        () => {
          getFirebaseAuth().onAuthStateChanged(async function(user) {
            if (user) {
              await setLoginCookie();
            } else {
              router.replace('/login');
            }
          });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      );

    return (
        <Layout children={children} />
    )
}

export default MainLayout;
