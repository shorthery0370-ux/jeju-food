import React, { useState } from 'react';
import { Restaurant } from '../data/jejuRestaurants';
import {
  MapPin,
  Clock,
  Star,
  Copy,
  Check,
  Bookmark,
  ExternalLink,
  ChevronRight,
  Phone,
  Car,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
  index: number;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onOpenDetail: (restaurant: Restaurant) => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  index,
  isBookmarked,
  onToggleBookmark,
  onOpenDetail,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(restaurant.address.road);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const primarySignature = restaurant.menus.find((m) => m.isSignature) || restaurant.menus[0];

  return (
    <article className="group bg-white rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden">
      {/* Top Media / Thumbnail Section */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
        <img
          src={restaurant.image}
          alt={`${restaurant.name} 대표 상차림`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            // Elegant CSS/SVG Fallback
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Index & Area Kicker (Unboxed text on top) */}
        <div className="absolute top-3 left-3 text-xs font-semibold text-white/95 drop-shadow-sm flex items-center gap-1.5">
          <span className="font-mono tabular-nums text-amber-300">
            {String(index + 1).padStart(2, '0')}.
          </span>
          <span>{restaurant.area}</span>
          <span aria-hidden="true" className="text-white/60">·</span>
          <span className="text-stone-200">{restaurant.district.split(' ')[0]}</span>
        </div>

        {/* Bookmark Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(restaurant.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-lg bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors active:scale-90"
          title={isBookmarked ? '찜 취소' : '찜하기'}
          aria-label={isBookmarked ? '찜 취소' : '찜하기'}
        >
          <Bookmark
            className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : 'text-white'}`}
          />
        </button>

        {/* Floating Bottom Card Strip: Rating & CatchTable Type */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-1.5 bg-black/55 backdrop-blur-sm px-2.5 py-1 rounded-md">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold font-mono tabular-nums">{restaurant.rating.overall.toFixed(2)}</span>
            <span className="text-stone-300 text-[11px]">
              (네이버 {restaurant.rating.naver} · 카카오 {restaurant.rating.kakao})
            </span>
          </div>

          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-black/55 backdrop-blur-sm text-amber-200">
            {restaurant.catchTable.badgeText}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header: Title and Category (No pill badges) */}
          <div className="mb-2">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                {restaurant.name}
              </h3>
              <span className="text-xs text-stone-500 font-mono tracking-tight shrink-0">
                {restaurant.nameEn}
              </span>
            </div>
            <p className="text-xs font-medium text-amber-700 mt-0.5">
              {restaurant.category}
            </p>
          </div>

          {/* Tagline / Brief Description */}
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
            {restaurant.tagline}
          </p>

          {/* Key Information Fields Grid */}
          <div className="space-y-2.5 text-xs text-stone-700 py-3 border-y border-stone-100">
            {/* 1. Menu & Price */}
            <div>
              <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-0.5">
                대표 메뉴 및 가격
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-semibold text-stone-900 text-sm">
                  {primarySignature.name}
                </span>
                <span className="font-bold text-amber-800 font-mono tabular-nums text-sm">
                  {primarySignature.price}
                </span>
              </div>
              <p className="text-[11px] text-stone-500 line-clamp-2 mt-0.5">
                {primarySignature.description}
              </p>
            </div>

            {/* 2. Business Hours & Break Time */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-0.5">
                  영업시간
                </div>
                <div className="font-medium text-stone-800 flex items-center gap-1 font-mono tabular-nums">
                  <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>{restaurant.hours.open} ~ {restaurant.hours.close}</span>
                </div>
                <span className="text-[11px] text-stone-500">
                  {restaurant.hours.closedDays}
                </span>
              </div>

              <div>
                <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-0.5">
                  브레이크 타임
                </div>
                <div className={`font-semibold ${restaurant.breakTime.hasBreak ? 'text-amber-800' : 'text-emerald-700'}`}>
                  {restaurant.breakTime.time}
                </div>
                <span className="text-[11px] text-stone-500">
                  {restaurant.breakTime.notes || '상시 운영'}
                </span>
              </div>
            </div>

            {/* 3. CatchTable Status & Wait Tips */}
            <div className="pt-1">
              <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-0.5 flex items-center justify-between">
                <span>캐치테이블 / 예약 정보</span>
                <span className={`text-[11px] font-medium ${restaurant.catchTable.supported ? 'text-rose-700' : 'text-stone-500'}`}>
                  {restaurant.catchTable.supported ? '● 앱 지원' : '○ 미지원(현장순)'}
                </span>
              </div>
              <p className="text-[11px] text-stone-600 leading-tight">
                {restaurant.catchTable.reservationTip}
              </p>
            </div>

            {/* 4. Address with Copy Button */}
            <div className="pt-1">
              <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-0.5">
                식당 주소
              </div>
              <div className="flex items-center justify-between gap-2 bg-stone-50 p-2 rounded-lg border border-stone-200/70">
                <div className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span className="truncate text-stone-800 font-medium">
                    {restaurant.address.road}
                  </span>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="shrink-0 p-1 rounded hover:bg-stone-200 text-stone-600 transition-colors flex items-center gap-1 text-[11px]"
                  title="주소 복사하기"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>복사</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer: Detail Modal Trigger and Quick Map Link */}
        <div className="mt-4 pt-3 flex items-center justify-between gap-2">
          <a
            href={`https://map.naver.com/v5/search/${encodeURIComponent(restaurant.address.road)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-stone-500 hover:text-amber-800 transition-colors flex items-center gap-1"
          >
            <ExternalLink className="w-3 h-3" />
            <span>네이버지도</span>
          </a>

          <button
            onClick={() => onOpenDetail(restaurant)}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 hover:text-stone-900 rounded-lg transition-colors active:scale-95"
          >
            <span>상세 메뉴 & 팁</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
