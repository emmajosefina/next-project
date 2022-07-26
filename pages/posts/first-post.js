import Link from "next/link"
import Image from "next/image"

export default function FirstPost() {
  return (
    <>
      <h1>First post right here</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/profile.jpg"
        height={400}
        width={400}
        alt="Picture of Emma"
      />
    </>
  )
}
