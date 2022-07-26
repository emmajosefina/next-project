import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Layout from "../../components/layout"

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      <Image
        src="/profile.jpg"
        height={300}
        width={300}
        alt="Picture of Emma"
      />
    </Layout>
  )
}
