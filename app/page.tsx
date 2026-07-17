export default function Home() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">

        {/* 배경 영상 (나중에 hero.mp4 넣기) */}
        {/*
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        */}

        {/* 배경 이미지 임시 */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 to-slate-900"></div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">

          <p className="mb-4 text-sm uppercase tracking-[8px]">
            ULLEUNG ISLAND
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            람지'S 울릉도 프리다이빙
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
            국내 최고의 시야를 자랑하는 울릉도의 바다에서
            <br />
            AIDA 프리다이빙 교육을 경험해보세요.
          </p>

          <button className="mt-12 rounded-full bg-white px-10 py-4 font-semibold text-slate-900 transition hover:scale-105">
            카카오톡 문의
          </button>

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
              소수정예 프리다이빙
              <br /><br />
              처음 시작하는 분부터
              자격증 취득까지
              안전하게 함께합니다.
            </p>

          </div>

          <div className="aspect-[4/5] rounded-3xl bg-slate-200"></div>

        </div>


</section>
      {/* ================= 교육 ================= */}

      <section className="bg-slate-50 py20">

        <div className="mx-auto max-w-6xl px-6">

          <p className="text-center text-sky-600">
            AIDA COURSE
          </p>

          <h2 className="mt-3 text-center text-4xl font-bold">
            AIDA 자격증 교육
          </h2>

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-10 shadow-sm">

              <div className="text-5xl font-bold text-sky-600">
                01
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                온라인 이론
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                울릉도 입도 전
                Zoom으로 이론수업을 진행합니다.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-10 shadow-sm">

              <div className="text-5xl font-bold text-sky-600">
                02
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                해양 교육
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                울릉도의 깨끗한 바다에서
                실전 교육을 진행합니다.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-10 shadow-sm">

              <div className="text-5xl font-bold text-sky-600">
                03
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                자격증 발급
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                교육을 마치면
                AIDA 국제 자격증을 발급합니다.
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

