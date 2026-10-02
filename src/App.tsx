import React, { useState, useEffect, useMemo } from 'react';
import { JEJU_RESTAURANTS, Restaurant } from './data/jejuRestaurants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RestaurantCard } from './components/RestaurantCard';
import { ComparisonTable } from './components/ComparisonTable';
import { DetailModal } from './components/DetailModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { TravelGuide } from './components/TravelGuide';
import {
  LayoutGrid,
  Table as TableIcon,
  FilterX,
  Compass,
  ArrowUp,
  MapPin,
  UtensilsCrossed,
  Check,
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [catchTableOnly, setCatchTableOnly] = useState(false);
  const [noBreakOnly, setNoBreakOnly] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isBookmarkDrawerOpen, setIsBookmarkDrawerOpen] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Bookmarks with local storage persistence
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jeju_jeongshik_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('jeju_jeongshik_bookmarks', JSON.stringify(bookmarkedIds));
    } catch {
      // ignore
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClearBookmarks = () => {
    if (confirm('저장된 맛집 목록을 모두 비우시겠습니까?')) {
      setBookmarkedIds([]);
    }
  };

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'all') {
      setSelectedArea('all');
      setNoBreakOnly(false);
      setViewMode('grid');
    } else if (tab === 'old_city') {
      setSelectedArea('구제주');
      setNoBreakOnly(false);
      setViewMode('grid');
    } else if (tab === 'new_city') {
      setSelectedArea('신제주');
      setNoBreakOnly(false);
      setViewMode('grid');
    } else if (tab === 'no_break') {
      setSelectedArea('all');
      setNoBreakOnly(true);
      setViewMode('grid');
    } else if (tab === 'table') {
      setViewMode('table');
    }
  };

  // Filter Logic
  const filteredRestaurants = useMemo(() => {
    return JEJU_RESTAURANTS.filter((r) => {
      // Area match
      if (selectedArea !== 'all' && r.area !== selectedArea) {
        return false;
      }
      // CatchTable match
      if (catchTableOnly && !r.catchTable.supported) {
        return false;
      }
      // No Break match
      if (noBreakOnly && r.breakTime.hasBreak) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inName = r.name.toLowerCase().includes(q) || r.nameEn.toLowerCase().includes(q);
        const inCategory = r.category.toLowerCase().includes(q);
        const inDistrict = r.district.toLowerCase().includes(q);
        const inAddress = r.address.road.toLowerCase().includes(q);
        const inMenu = r.menus.some(
          (m) => m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q)
        );
        return inName || inCategory || inDistrict || inAddress || inMenu;
      }
      return true;
    });
  }, [selectedArea, catchTableOnly, noBreakOnly, searchQuery]);

  const bookmarkedRestaurants = useMemo(() => {
    return JEJU_RESTAURANTS.filter((r) => bookmarkedIds.includes(r.id));
  }, [bookmarkedIds]);

  // Copy All 10 Restaurants Summary formatted text
  const handleCopyAllSummary = () => {
    const header = `[제주시내 정식·백반 맛집 10선 총정리]\n* 2026 최신 검증 기준 (대표메뉴, 주소, 영업시간, 캐치테이블, 평점, 브레이크타임)\n`;
    const body = JEJU_RESTAURANTS.map((r, i) => {
      const sig = r.menus[0];
      return `\n${i + 1}. ${r.name} (${r.area} / ${r.district})
- 분류: ${r.category}
- 대표메뉴: ${sig?.name} (${sig?.price}) - ${sig?.description}
- 주소: ${r.address.road} (${r.address.jibun})
- 영업시간: ${r.hours.open} ~ ${r.hours.close} (라스트오더: ${r.hours.lastOrder}) / ${r.hours.closedDays}
- 브레이크타임: ${r.breakTime.time} (${r.breakTime.notes || '상시 운영'})
- 캐치테이블: ${r.catchTable.badgeText} (${r.catchTable.reservationTip})
- 평점: ${r.rating.overall.toFixed(2)} / 5.0 (네이버 ${r.rating.naver}, 카카오 ${r.rating.kakao})
- 전화번호: ${r.phone} / 주차: ${r.parking}`;
    }).join('\n');

    navigator.clipboard.writeText(header + body);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedArea('all');
    setCatchTableOnly(false);
    setNoBreakOnly(false);
    setActiveTab('all');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900" id="top">
      {/* Header (Top Bar Contract: 3 Zones) */}
      <Header
        bookmarkedCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarkDrawerOpen(true)}
        onCopyAllSummary={handleCopyAllSummary}
        copied={copiedAll}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* Hero Section */}
      <Hero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedArea={selectedArea}
        onSelectArea={setSelectedArea}
        catchTableOnly={catchTableOnly}
        onToggleCatchTable={() => setCatchTableOnly(!catchTableOnly)}
        noBreakOnly={noBreakOnly}
        onToggleNoBreak={() => setNoBreakOnly(!noBreakOnly)}
        totalCount={JEJU_RESTAURANTS.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Results Toolbar: Counts & View Mode Switch */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-stone-900">
                제주시내 정식 식당 목록
              </h2>
              <span className="text-xs font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-full font-mono tabular-nums">
                {filteredRestaurants.length}곳
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              각 식당 카드를 누르시면 상세 메뉴 구성, 주소 복사, 예약 팁을 확인하실 수 있습니다.
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {(selectedArea !== 'all' || catchTableOnly || noBreakOnly || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 bg-stone-200/70 hover:bg-stone-200 rounded-lg transition-colors"
              >
                <FilterX className="w-3.5 h-3.5" />
                <span>필터 초기화</span>
              </button>
            )}

            {/* View Mode Toggle: Grid vs Table */}
            <div className="flex items-center p-1 bg-stone-200/80 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="카드 그리드 뷰"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">카드</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-colors ${
                  viewMode === 'table'
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="한눈에 비교 표 뷰"
              >
                <TableIcon className="w-4 h-4" />
                <span className="hidden sm:inline">비교표</span>
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200">
            <UtensilsCrossed className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-stone-800">
              조건에 맞는 식당을 찾을 수 없습니다
            </h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              검색어나 필터 조건을 변경하거나 필터 초기화 버튼을 눌러보세요.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-700 rounded-lg transition-colors"
            >
              전체 식당 다시 보기
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Card Grid View (3 Columns on Desktop) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant, idx) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                index={idx}
                isBookmarked={bookmarkedIds.includes(restaurant.id)}
                onToggleBookmark={handleToggleBookmark}
                onOpenDetail={(r) => setSelectedRestaurant(r)}
              />
            ))}
          </div>
        ) : (
          /* Table Comparison View */
          <ComparisonTable
            restaurants={filteredRestaurants}
            onOpenDetail={(r) => setSelectedRestaurant(r)}
          />
        )}
      </main>

      {/* Practical Travel Guide & Strategy Section */}
      <TravelGuide />

      {/* Detail Modal */}
      <DetailModal
        restaurant={selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
        isBookmarked={selectedRestaurant ? bookmarkedIds.includes(selectedRestaurant.id) : false}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Bookmarks Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarkDrawerOpen}
        onClose={() => setIsBookmarkDrawerOpen(false)}
        bookmarkedRestaurants={bookmarkedRestaurants}
        onRemoveBookmark={handleToggleBookmark}
        onClearAll={handleClearBookmarks}
        onOpenDetail={(r) => setSelectedRestaurant(r)}
      />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-stone-900 text-white shadow-xl hover:bg-stone-800 transition-all active:scale-90 z-30"
          title="맨 위로 이동"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Toast Notice when All Copied */}
      {copiedAll && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white text-xs px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 border border-stone-700 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>10개 식당의 전체 정보(메뉴/주소/시간/캐치테이블/평점/브레이크)가 클립보드에 복사되었습니다!</span>
        </div>
      )}

      {/* Quiet Editorial Footer */}
      <footer className="bg-stone-900 text-stone-400 text-xs py-10 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-stone-200 text-sm flex items-center gap-1.5">
              <span>제주시내 정식 맛집 10선 가이드</span>
              <span className="text-[11px] font-normal text-stone-400 font-mono">2026 EDITION</span>
            </div>
            <p className="text-[11px] text-stone-500 mt-1">
              제주특별자치도 제주시 원도심(구제주) 및 신제주(연동·노형·도두) 향토 정식·백반 전문 식당 엄선
            </p>
          </div>

          <div className="text-right text-[11px] text-stone-400 space-y-1">
            <div>제주관광 종합 콜센터: 064-740-6000</div>
            <div className="text-stone-400">
              * 재료 소진 또는 현장 사정으로 조기 마감될 수 있으니 방문 전 유선 확인을 권장합니다.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
