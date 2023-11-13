import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

const Layout = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "OpenForumz",
    description: `OpenForumz - Our mission is to break down barriers, allowing users to actively shape and contribute to the evolution of their online space. Embrace the power of open source and be a catalyst for positive change in the digital realm.`,
    image: "/images/hero/hero.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div className="min-w-[350px] overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
          <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>

      <main id="skip" className="bg-white dark:bg-neutral-900">
        <Navbar />
        {children}
        
        <div style={{ height: '7vh', width: '100%', display: 'flex', justifyContent: 'end' }}>
          <div style={{ marginBottom: '2vh', display: 'flex', flexDirection: 'row' }}>
            <Link target="blank" href="https://www.sergiu-nistor.com">
            <Image
                src="/images/logos/dev.png"
                alt="Dev Icon"
                width={48}
                height={48}
                quality={100}
                priority
                style={{ marginRight: '1rem' }}
              />
              </Link>

              <Link target="blank" href="https://twitter.com/SergiuNistor6">
              <Image
                src="/images/logos/twitter.png"
                alt="Twitter Icon"
                width={48}
                height={48}
                quality={100}
                priority
                style={{ marginRight: '1rem' }}
              />
              </Link>

              <Link target="blank" href="https://github.com/SergiuDeveloper/OpenForumzFrontEnd">
              <Image
                src="/images/logos/github.png"
                alt="Github Icon"
                width={48}
                height={48}
                quality={100}
                priority
                style={{ marginRight: '1rem' }}
              />
              </Link>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
