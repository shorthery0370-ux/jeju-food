import React, { useState } from 'react';
import { Restaurant } from '../data/jejuRestaurants';
import {
  X,
  MapPin,
  Clock,
  Star,
  Copy,
  Check,
  Bookmark,
  ExternalLink,
  Phone,
  Car,
  AlertCircle,
  Sparkles,
  Utensils,
  Calendar,
} from 'lucide-react';

interface DetailModalProps {
  restaurant: Restaurant | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  restaurant,
  onClose,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [copiedRoad, setCopiedRoad] = useState(false);

  if (!restaurant) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedRoad(true);
    setTimeout(() => setCopiedRoad(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-stone-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Visual Banner */}
        <div className="relative h-48 sm:h-56 w-full bg-stone-900 overflow-hidden shrink-0">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover object-center filter brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />

          {/* Close & Bookmark Buttons */}
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(restaurant.id)}
              className="p-2 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md transition-colors"
              title={isBookmarked ? '찜 취소' : '찜하기'}
            >
              <Bookmark
                className={`w-4 h-4 ${
                  isBookmarked ? 'fill-amber-400 text-amber-400' : 'text-white'
                }`}
              />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md transition-colors"
              title="닫기"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Title Area */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="text-xs text-amber-300 font-semibold mb-1 flex items-center gap-1.5">
              <span>{restaurant.area}</span>
              <span aria-hidden="true">·</span>
              <span>{restaurant.district}</span>
            </div>
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {restaurant.name}
              </h2>
              <span className="text-xs text-stone-300 font-mono">
                {restaurant.nameEn}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-200 mt-1">
              {restaurant.category}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-stone-800 text-sm">
          {/* Key Summary Rating & CatchTable Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
            <div>
              <div className="text-[11px] text-stone-500 font-medium">종합 평점</div>
              <div className="text-base font-bold text-stone-900 font-mono flex items-center justify-center gap-1 mt-0.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{restaurant.rating.overall.toFixed(2)}</span>
              </div>
              <div className="text-[10px] text-stone-400">리뷰 {restaurant.rating.reviewsCount}</div>
            </div>

            <div>
              <div className="text-[11px] text-stone-500 font-medium">네이버 / 카카오</div>
              <div className="text-sm font-semibold text-stone-900 font-mono mt-0.5">
                {restaurant.rating.naver} / {restaurant.rating.kakao}
              </div>
              <div className="text-[10px] text-stone-400">포털 검증 평점</div>
            </div>

            <div>
              <div className="text-[11px] text-stone-500 font-medium">브레이크 타임</div>
              <div
                className={`text-sm font-semibold mt-0.5 ${
                  restaurant.breakTime.hasBreak ? 'text-amber-800' : 'text-emerald-700'
                }`}
              >
                {restaurant.breakTime.time}
              </div>
              <div className="text-[10px] text-stone-400">
                {restaurant.breakTime.notes || '상시 운영'}
              </div>
            </div>

            <div>
              <div className="text-[11px] text-stone-500 font-medium">캐치테이블</div>
              <div
                className={`text-sm font-semibold mt-0.5 ${
                  restaurant.catchTable.supported ? 'text-rose-700' : 'text-stone-600'
                }`}
              >
                {restaurant.catchTable.type}
              </div>
              <div className="text-[10px] text-stone-400">
                {restaurant.catchTable.supported ? '대기 가능' : '현장 입장'}
              </div>
            </div>
          </div>

          {/* Section 1: Detailed Menus & Pricing */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
              <Utensils className="w-4 h-4 text-amber-700" />
              <span>정식 및 대표 메뉴 구성</span>
            </div>
            <div className="divide-y divide-stone-100 border border-stone-200 rounded-xl overflow-hidden bg-white">
              {restaurant.menus.map((menu, idx) => (
                <div key={idx} className="p-3.5 hover:bg-stone-50/60 transition-colors">
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-stone-900 text-sm">
                        {menu.name}
                      </span>
                      {menu.isSignature && (
                        <span className="text-[10px] font-medium text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                          대표추천
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-amber-800 font-mono tabular-nums text-sm">
                      {menu.price}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {menu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Address & Parking */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
              <MapPin className="w-4 h-4 text-amber-700" />
              <span>주소 및 찾아오는 길</span>
            </div>
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-semibold text-stone-900 text-sm">
                    {restaurant.address.road}
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    (지번) {restaurant.address.jibun}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(restaurant.address.road)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded-md transition-colors shadow-2xs"
                >
                  {copiedRoad ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>도로명 복사</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-stone-600 flex items-start gap-1.5 pt-2 border-t border-stone-200/80">
                <Car className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span>주차: {restaurant.parking}</span>
              </div>
            </div>
          </div>

          {/* Section 3: Hours & Holidays */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>영업시간 및 휴무일</span>
            </div>
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 grid sm:grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-stone-500 font-medium">영업시간 (라스트오더)</div>
                <div className="text-stone-900 font-semibold font-mono text-sm mt-0.5">
                  {restaurant.hours.open} ~ {restaurant.hours.close} (라스트오더 {restaurant.hours.lastOrder})
                </div>
                {restaurant.hours.holidayNotice && (
                  <div className="text-amber-700 text-[11px] mt-0.5 font-medium">
                    * {restaurant.hours.holidayNotice}
                  </div>
                )}
              </div>

              <div>
                <div className="text-stone-500 font-medium">정기 휴무일</div>
                <div className="text-stone-900 font-semibold text-sm mt-0.5">
                  {restaurant.hours.closedDays}
                </div>
                <div className="text-stone-500 text-[11px] mt-0.5">
                  브레이크: {restaurant.breakTime.time}
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: CatchTable Booking Strategy */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>캐치테이블 예약 및 대기 공략</span>
            </div>
            <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/80 text-xs space-y-1.5">
              <div className="font-semibold text-stone-900">
                {restaurant.catchTable.notice}
              </div>
              <p className="text-stone-700 leading-relaxed">
                💡 <strong className="font-medium text-amber-900">실시간 꿀팁:</strong> {restaurant.catchTable.reservationTip}
              </p>
            </div>
          </div>

          {/* Section 5: Local Food Secret Tip */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>현지인 단골이 전하는 맛팁</span>
            </div>
            <div className="p-3.5 bg-stone-100 rounded-xl text-xs text-stone-700 leading-relaxed">
              {restaurant.localTip}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <a
              href={`tel:${restaurant.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-stone-500" />
              <span>전화걸기 ({restaurant.phone})</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://map.naver.com/v5/search/${encodeURIComponent(restaurant.address.road)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
            >
              <span>네이버지도 길찾기</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={`https://map.kakao.com/link/search/${encodeURIComponent(restaurant.address.road)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-lg transition-colors"
            >
              <span>카카오맵</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
