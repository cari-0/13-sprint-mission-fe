import Image from "next/image";
import Link from "next/link";
import pandaFace from "@/app/asset/pandaface.svg";

export default function Loginpage() {
  return (
    <div className="flex max-w-[640px] flex-col items-center gap-[40px] shrink-0 mx-auto my-auto">
      <div className="flex">
        <Image src={pandaFace} alt="Logoimage" width={100} height={100} />
        <p className="text-[66px] font-bold text-[#3692FF]">판다마켓</p>
      </div>
      <div className="flex flex-col items-center gap-[24px] self-stretch">
        <div className="flex flex-col items-start gap-[24px]">
          <div className="flex flex-col items-start gap-[24px]">
            <div className="flex flex-col items-start gap-[16px]">
              <p className="text-[18px] text-[#1F2937] font-medium">이메일</p>
              <input
                className="bg-[#F3F4F6] w-[640px] h-[56px] flex px-[16px] py-[24px] items-center gap-[10px] rounded-[12px]"
                placeholder="이메일을 입력해주세요"
              ></input>
            </div>
            <div className="flex flex-col items-start gap-[16px]">
              <p className="text-[18px] text-[#1F2937] font-medium">비밀번호</p>
              <input
                className="bg-[#F3F4F6] flex w-[640px] h-[56px] px-[16px] py-[24px] items-center gap-[10px] rounded-[12px]"
                placeholder="비밀번호를 입력해주세요"
              ></input>
            </div>
          </div>
          <button className="bg-[#9CA3AF] flex w-[640px] h-[56px] justify-center items-center gap-[10px] rounded-[40px]">
            <p className="text-[20px] text-[#F3F4F6] font-medium ">로그인</p>
          </button>
        </div>
        <div className="flex flex-col w-[640px] h-[74px] px-[16px] py-[23px] gap-[10px] bg-[#E6F2FF]">
          <div className="flex w-[594px] items-center justify-between ">
            <p className="text-[16px] text-[#1F2937] font-medium">
              간편 로그인하기
            </p>
            <div className="flex items-start gap-[16px]">ㅁ ㅁ</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[4px]">
          <p className="text[14px] text-[#1F2937] font-medium">
            판다마켓이 처음이신가요?
          </p>
          <Link
            href={"/signin"}
            className="text-[14px] text-[#3692FF] font-medium underline"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
