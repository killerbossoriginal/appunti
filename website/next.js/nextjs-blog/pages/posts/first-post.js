import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <h1>Sono arrivato <a href='https://nextjs.org/learn/basics/assets-metadata-css'> qui </a></h1>
    </>
  );
}