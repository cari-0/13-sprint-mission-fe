import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <li>
        <Link href={"/l"}>로그인 페이지가기</Link>
      </li>
      <li>
        <Link href={"/p"}>상품 페이지가기</Link>
      </li>
    </div>
  );
}
