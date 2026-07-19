import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">

<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/hero.mp4" type="video/mp4" />
</video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">

          <p className="mb-4 text-sm uppercase tracking-[8px]">
            ULLEUNG ISLAND
          </p>

<h1 className="text-4xl font-bold leading-tight md:text-7xl">
  <span className="block">람지'S</span>
  <span className="block">울릉도 프리다이빙</span>
</h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-5 text-white/80">
            국내 최고의 시야를 자랑하는 울릉도의 바다에서
            <br />
            AIDA 프리다이빙을 경험해보세요!
          </p>

<a
  href="https://open.kakao.com/o/sRdsPtxi"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-12 inline-block rounded-full bg-[#FEE500] px-8 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:bg-[#FDDC3F]"
>
  카톡 문의하기
</a>

        </div>

      </section>

      {/* ================= 소개 ================= */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid items-center gap-16 md:grid-cols-2">

          <div>

            <p className="mb-3 text-sky-600">
              ABOUT
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              울릉도의 깊고
              <br />
              푸른 바다를
              <br />
              가장 안전하게.
            </h2>

            <p className="mt-8 leading-8 text-slate-600">
              울릉도 상주 강사가 직접 진행하는
                <br />
                소수정예 프리다이빙!
              <br />
              처음 시작하는 분부터 자격증 취득까지 
                <br />
                안전하게 함께합니다.
            </p>

          </div>

 <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
  <Image
    src="/image/freediving_1.jpg"
    alt="프리다이빙"
    fill
    className="object-cover"
  />
</div>
        </div>


</section>
      {/* ================= 교육 ================= */}

<section className="bg-slate-50 py-20">

  <div className="mx-auto max-w-2xl px-6">

    <p className="text-center text-sky-600">
      FREEDIVING COURSE
    </p>

    <h2 className="mt-3 text-center text-4xl font-bold">
      프리다이빙 코스
    </h2>

    <p className="mt-4 text-center text-slate-500">
      모든 항목 장비렌탈 포함 · 1인도 가능 · 문의주세요
    </p>

   <div className="mt-8 flex flex-col gap-6">
{/* 비치 펀다이빙 */}
<div className="rounded-3xl bg-white px-8 py-6 shadow-sm text-center">

  <div className="text-2xl font-bold text-sky-600">
    비치 펀다이빙
  </div>

  <h3 className="mt-4 text-lg font-semibold">
    2시간 기준,
    <span className="ml-1 text-red-500">8만원</span>
  </h3>

  <p className="mt-4 leading-7 text-slate-600">
    울릉도 곳곳의 다이빙 포인트에서 진행
  </p>

</div>

{/* 보트 펀다이빙 */}
<div className="rounded-3xl bg-white px-8 py-6 shadow-sm text-center">

  <div className="text-2xl font-bold text-sky-600">
    보트 펀다이빙
  </div>

  <h3 className="mt-4 text-lg font-semibold">
    2시간 기준,
    <span className="ml-1 text-red-500">12만원</span>
  </h3>

  <p className="mt-4 leading-7 text-slate-600">
    보트를 타고 다이빙 포인트를 이동하여 진행
  </p>

</div>

{/* 체험 다이빙 */}
<div className="rounded-3xl bg-white px-8 py-6 shadow-sm text-center">

  <div className="text-2xl font-bold text-sky-600">
    체험 다이빙
  </div>

  <h3 className="mt-4 text-lg font-semibold">
    3시간 기준,
    <br />
    <span className="text-gray-400 line-through">
      12만원
    </span>
    {" → "}
    <span className="font-bold text-red-500">
      10만원 (7,8월 특가)
    </span>
  </h3>

  <p className="mt-4 leading-7 text-slate-600">
    자격증이 없는 분들을 위한
    <br />
    프리다이빙 체험 코스
  </p>

</div>

{/* AIDA 자격증 */}
<div className="rounded-3xl bg-white px-8 py-6 shadow-sm">

  <div className="text-center text-2xl font-bold text-sky-600">
    AIDA 자격증
  </div>

  <div className="mt-4 text-center leading-8">

    <p className="font-semibold">
      레벨 1+2 (입문코스)
    </p>

    <p className="text-slate-600">
      이론수업 1회 + 해양교육 3회
    </p>

    <p className="font-bold">
      <span className="text-gray-400 line-through">
        50만원
      </span>
      {" → "}
      <span className="text-red-500">
        45만원
      </span>
      <span className="ml-1 text-sm text-red-500">
        (7,8월 특가)
      </span>
    </p>

<div className="my-4 mx-auto w-2/3 border-t border-slate-300"></div>

    <p className="font-semibold">
      레벨 3 (중급코스)
    </p>

    <p className="text-slate-600">
      이론수업 1회 + 해양교육 4회
    </p>

    <p className="font-bold">
      <span className="text-gray-400 line-through">
        65만원
      </span>
      {" → "}
      <span className="text-red-500">
        60만원
      </span>
      <span className="ml-1 text-sm text-red-500">
        (7,8월 특가)
      </span>
    </p>

  </div>

<div className="my-4 mx-auto w-2/3 border-t border-slate-300"></div>

  <p className="text-center text-sm leading-6 text-slate-600">
    ✔️동반 신청 시 <span className="font-bold text-red-500">5만원 할인</span>
    <br />
    ✔️보팅비 및 자격증 발급비 포함
    <br />
    ✔️울릉도에서 미수료하는 경우,
        <br />
    <span className="font-bold">
      {" "}10월 이후 서울/경기/충청권에서 
          <br />
          교육을 이어서 진행
    </span>
    할 수 있습니다.
  </p>




      </div>

    </div>

  </div>

  </section>
      {/* ================= 교육 ================= */}

<section className="bg-slate-50 py-20">

  <div className="mx-auto max-w-2xl px-6">

    <p className="text-center text-sky-600">
      AIDA CERTIFICATION
    
    </p>

    <h2 className="mt-3 text-center text-4xl font-bold">
      AIDA 자격증 코스
    </h2>

    <p className="mt-4 text-center text-slate-500">
      모든 항목 장비렌탈 포함 · 1인도 가능 · 문의주세요
    </p>

   <div className="mt-8 flex flex-col gap-6">
{/* 비치 펀다이빙 */}
<div className="rounded-3xl bg-white px-8 py-6 shadow-sm text-center">

  <div className="text-2xl font-bold text-sky-600">
    01. 이론교육
  </div>

  <h3 className="mt-4 text-lg font-semibold">
    내용 준비중
  </h3>

  <p className="mt-4 leading-7 text-slate-600">
    내용 준비중
  </p>

</div>

{/* 보트 펀다이빙 */}
<div className="rounded-3xl bg-white px-8 py-6 shadow-sm text-center">

  <div className="text-2xl font-bold text-sky-600">
    02. 해양교육 (3회)
  </div>

  <h3 className="mt-4 text-lg font-semibold">
   내용 준비중
  
  </h3>

  <p className="mt-4 leading-7 text-slate-600">
    내용 준비중
  </p>

</div>

{/* 체험 다이빙 */}
<div className="rounded-3xl bg-white px-8 py-6 shadow-sm text-center">

  <div className="text-2xl font-bold text-sky-600">
    03. 이론시험
  </div>

  <h3 className="mt-4 text-lg font-semibold">
   내용 준비중
    <br />
  </h3>

  <p className="mt-4 leading-7 text-slate-600">
    내용 준비중
  </p>

</div>

{/* AIDA 자격증 */}
<div className="rounded-3xl bg-white px-8 py-6 shadow-sm">

  <div className="text-center text-2xl font-bold text-sky-600">
   04. 자격증 발급
  </div>

  <div className="mt-4 text-center leading-8">

    <p className="font-semibold">
    내용 준비중
    </p>

    <p className="text-slate-600">
    내용 준비중
    </p>

  </div>

<div className="my-4 mx-auto w-2/3 border-t border-slate-300"></div>

  <p className="text-center text-sm leading-6 text-slate-600">
    ✔️내용 준비중
  </p>




      </div>

    </div>

  </div>


      </section>

      {/* ================= 문의 ================= */}

      <section className="py-20">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-sky-600">
            CONTACT
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            문의하기
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-slate-600">
            교육 일정 및 예약은
            카카오톡 또는 인스타그램으로
            언제든 문의해주세요.
          </p>

          <div className="mt-16 space-y-6">

            <div className="rounded-2xl border p-6">
              📱 카카오톡
            </div>

            <div className="rounded-2xl border p-6">
              📷 Instagram
            </div>

            <div className="rounded-2xl border p-6">
              📞 Phone
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

