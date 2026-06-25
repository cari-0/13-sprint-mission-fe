import Link from "next/link";

export default function Home() {
  return (
    <div>
      <li>
        <Link href={"/l"}>회원가입 가는곳</Link>
      </li>
      <li>
        <Link href={"/p"}>상품 리스트 페이지 가는곳</Link>
      </li>
    </div>
  );
}
