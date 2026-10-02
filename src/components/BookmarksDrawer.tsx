import React from 'react';
import { Restaurant } from '../data/jejuRestaurants';
import { X, Bookmark, Trash2, ExternalLink, ArrowRight, Share2, Copy } from 'lucide-react';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedRestaurants: Restaurant[];
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
  onOpenDetail: (restaurant: Restaurant) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedRestaurants,
  onRemoveBookmark,
  onClearAll,
  onOpenDetail,
}) => {
  if (!isOpen) return null;

  const copyMyList = () => {
    if (bookmarkedRestaurants.length === 0) return;
    const text = bookmarkedRestaurants
      .map(
        (r, i) =>
          `${i + 1}. ${r.name} (${r.area})\n- 대표메뉴: ${r.menus[0]?.name} (${r.menus[0]?.price})\n- 주소: ${r.address.road}\n- 영업시간: ${r.hours.open}~${r.hours.close} (브레이크: ${r.breakTime.time})\n- 캐치테이블: ${r.catchTable.badgeText}\n- 평점: ${r.rating.overall.toFixed(2)}`
      )
      .join('\n\n');
    navigator.clipboard.writeText(`[내가 저장한 제주시내 정식 맛집 리스트]\n\n${text}`);
    alert('내 저장 목록이 클립보드에 복사되었습니다! 카카오톡이나 메모장에 붙여넣으세요.');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-700 fill-amber-700" />
            <h3 className="font-bold text-stone-900 text-base">
              내가 찜한 맛집 ({bookmarkedRestaurants.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {bookmarkedRestaurants.length === 0 ? (
            <div className="text-center py-16 text-stone-500">
              <Bookmark className="w-10 h-10 text-stone-300 mx-auto mb-3" />
              <p className="text-sm font-medium text-stone-700">
                아직 저장된 식당이 없습니다.
              </p>
              <p className="text-xs text-stone-400 mt-1">
                식당 카드의 북마크 아이콘을 눌러 나만의 미식 동선을 만들어보세요!
              </p>
            </div>
          ) : (
            bookmarkedRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="p-3.5 bg-stone-50 hover:bg-amber-50/50 rounded-xl border border-stone-200 transition-colors flex items-start justify-between gap-3 group"
              >
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => {
                    onOpenDetail(restaurant);
                    onClose();
                  }}
                >
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-stone-900 group-hover:text-amber-800 transition-colors text-sm">
                      {restaurant.name}
                    </h4>
                    <span className="text-[11px] text-stone-500 font-mono">
                      {restaurant.area}
                    </span>
                  </div>
                  <div className="text-xs text-amber-800 font-medium mt-0.5">
                    {restaurant.menus[0]?.name} · {restaurant.menus[0]?.price}
                  </div>
                  <div className="text-[11px] text-stone-500 truncate mt-1">
                    {restaurant.address.road}
                  </div>
                  <div className="text-[11px] text-stone-400 mt-0.5">
                    브레이크: {restaurant.breakTime.time}
                  </div>
                </div>

                <button
                  onClick={() => onRemoveBookmark(restaurant.id)}
                  className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors rounded hover:bg-rose-50"
                  title="삭제"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer Actions */}
        {bookmarkedRestaurants.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-2">
            <button
              onClick={copyMyList}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-700 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-95"
            >
              <Copy className="w-4 h-4" />
              <span>내 찜 목록 텍스트 복사</span>
            </button>
            <button
              onClick={onClearAll}
              className="w-full py-1.5 text-xs font-medium text-stone-500 hover:text-rose-600 transition-colors"
            >
              목록 전체 비우기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
