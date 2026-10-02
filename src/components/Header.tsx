import React from 'react';
import { Bookmark, Copy, Check, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  bookmarkedCount: number;
  onOpenBookmarks: () => void;
  onCopyAllSummary: () => void;
  copied: boolean;
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  bookmarkedCount,
  onOpenBookmarks,
  onCopyAllSummary,
  copied,
  activeTab,
  onSelectTab,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-stone-900 flex items-center gap-2 hover:opacity-85 transition-opacity"
        >
          <UtensilsCrossed className="w-5 h-5 text-amber-700" />
          <span>제주 정식 10선</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <button
            onClick={() => onSelectTab('all')}
            className={`transition-colors hover:text-stone-900 ${
              activeTab === 'all' ? 'text-amber-800 font-semibold underline underline-offset-8 decoration-amber-700 decoration-2' : ''
            }`}
          >
            전체 10선
          </button>
          <button
            onClick={() => onSelectTab('old_city')}
            className={`transition-colors hover:text-stone-900 ${
              activeTab === 'old_city' ? 'text-amber-800 font-semibold underline underline-offset-8 decoration-amber-700 decoration-2' : ''
            }`}
          >
            구제주 (원도심)
          </button>
          <button
            onClick={() => onSelectTab('new_city')}
            className={`transition-colors hover:text-stone-900 ${
              activeTab === 'new_city' ? 'text-amber-800 font-semibold underline underline-offset-8 decoration-amber-700 decoration-2' : ''
            }`}
          >
            신제주 (연동·노형)
          </button>
          <button
            onClick={() => onSelectTab('no_break')}
            className={`transition-colors hover:text-stone-900 ${
              activeTab === 'no_break' ? 'text-amber-800 font-semibold underline underline-offset-8 decoration-amber-700 decoration-2' : ''
            }`}
          >
            브레이크타임 없음
          </button>
          <button
            onClick={() => onSelectTab('table')}
            className={`transition-colors hover:text-stone-900 ${
              activeTab === 'table' ? 'text-amber-800 font-semibold underline underline-offset-8 decoration-amber-700 decoration-2' : ''
            }`}
          >
            한눈에 비교표
          </button>
          <a
            href="#travel-guide"
            className="hover:text-stone-900 transition-colors"
          >
            추천 동선
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onCopyAllSummary}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap active:scale-95"
            title="10곳 전체 정보 텍스트 복사"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">복사 완료</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-stone-500" />
                <span className="hidden sm:inline">전체 정보 </span>복사
              </>
            )}
          </button>

          <button
            onClick={onOpenBookmarks}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shadow-sm active:scale-95"
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            <span>찜 목록</span>
            <span className="ml-0.5 px-1.5 py-0.2 bg-stone-700 text-stone-200 text-[11px] rounded font-mono tabular-nums">
              {bookmarkedCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
