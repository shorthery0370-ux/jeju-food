import React from 'react';
import { Search, SlidersHorizontal, MapPin, Clock, Star, Sparkles } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedArea: string;
  onSelectArea: (area: string) => void;
  catchTableOnly: boolean;
  onToggleCatchTable: () => void;
  noBreakOnly: boolean;
  onToggleNoBreak: () => void;
  totalCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  selectedArea,
  onSelectArea,
  catchTableOnly,
  onToggleCatchTable,
  noBreakOnly,
  onToggleNoBreak,
  totalCount,
}) => {
  return (
    <section className="relative bg-stone-900 text-stone-100 overflow-hidden">
      {/* Background Hero Image with measured scrim */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/src/assets/images/jeju_jeongshik_hero_1790925293258.jpg"
          alt="제주도 전통 정식 상차림"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-90 contrast-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-900/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          {/* Subtle editorial kicker (Clean unboxed text, no pills) */}
          <div className="flex items-center gap-2 text-xs font-medium text-amber-300/90 tracking-wider mb-3">
            <span>제주 로컬 미식 가이드</span>
            <span aria-hidden="true">·</span>
            <span>도민 단골 10선</span>
            <span aria-hidden="true">·</span>
            <span>2026 최신 검증</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight sm:leading-tight mb-4 text-balance">
            제주시내 정식·백반 맛집 10선
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-6 font-normal">
            옥돔구이와 흑돼지 두루치기 한상부터 전복돌솥밥, 각재기국 쌈밥, 통은갈치 12첩 반상까지 — 
            제주시내(구제주·신제주)에서 실패 없는 알짜 정식 식당의 <strong className="text-white font-semibold">대표메뉴·주소·영업시간·캐치테이블·평점·브레이크타임</strong>을 실시간 기준으로 완벽 정리했습니다.
          </p>

          {/* Editorial Rigor / Verified Stats (Tabular Numerals, Unboxed Text) */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-stone-300/80 pt-2 border-t border-stone-800/80 mb-8">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-white font-mono tabular-nums">10</span>곳 엄선
            </div>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>평균 평점</span>
              <span className="font-semibold text-white font-mono tabular-nums">4.47</span> / 5.0
            </div>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>브레이크타임 없음</span>
              <span className="font-semibold text-white font-mono tabular-nums">4</span>곳
            </div>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>캐치테이블 원격/예약</span>
              <span className="font-semibold text-white font-mono tabular-nums">7</span>곳
            </div>
          </div>
        </div>

        {/* Search & Filter Bar Container */}
        <div className="bg-stone-900/90 backdrop-blur-md border border-stone-800 rounded-xl p-3 sm:p-4 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="식당 이름, 대표 메뉴(옥돔, 갈치, 전복, 두루치기), 동네명 검색..."
                className="w-full pl-10 pr-4 py-2.5 bg-stone-950/70 border border-stone-700/80 rounded-lg text-sm text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-200"
                >
                  지우기
                </button>
              )}
            </div>

            {/* Filter Buttons (Functional Interactive Controls) */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {/* Area Segmented Controls */}
              <div className="flex items-center p-1 bg-stone-950/80 rounded-lg border border-stone-800">
                <button
                  onClick={() => onSelectArea('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedArea === 'all'
                      ? 'bg-amber-700 text-white shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  전체 지역 ({totalCount})
                </button>
                <button
                  onClick={() => onSelectArea('구제주')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedArea === '구제주'
                      ? 'bg-amber-700 text-white shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  구제주 (원도심)
                </button>
                <button
                  onClick={() => onSelectArea('신제주')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedArea === '신제주'
                      ? 'bg-amber-700 text-white shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  신제주 (연동·노형)
                </button>
              </div>

              {/* CatchTable Filter */}
              <button
                onClick={onToggleCatchTable}
                className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  catchTableOnly
                    ? 'bg-rose-950/80 border-rose-600 text-rose-200'
                    : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                <span>캐치테이블 지원</span>
              </button>

              {/* No Break Time Filter */}
              <button
                onClick={onToggleNoBreak}
                className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  noBreakOnly
                    ? 'bg-emerald-950/80 border-emerald-600 text-emerald-200'
                    : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                <span>브레이크 없음</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
