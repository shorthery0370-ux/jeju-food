import React, { useState } from 'react';
import { Restaurant } from '../data/jejuRestaurants';
import { Star, Copy, Check, ExternalLink, ArrowUpDown } from 'lucide-react';

interface ComparisonTableProps {
  restaurants: Restaurant[];
  onOpenDetail: (restaurant: Restaurant) => void;
}

type SortField = 'rating' | 'name' | 'price' | 'area';

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  restaurants,
  onOpenDetail,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>('rating');
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(field === 'name');
    }
  };

  const sortedList = [...restaurants].sort((a, b) => {
    if (sortField === 'rating') {
      return sortAsc
        ? a.rating.overall - b.rating.overall
        : b.rating.overall - a.rating.overall;
    }
    if (sortField === 'name') {
      return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    }
    if (sortField === 'area') {
      return sortAsc ? a.area.localeCompare(b.area) : b.area.localeCompare(a.area);
    }
    if (sortField === 'price') {
      const priceA = parseInt(a.menus[0]?.price.replace(/[^0-9]/g, '') || '0', 10);
      const priceB = parseInt(b.menus[0]?.price.replace(/[^0-9]/g, '') || '0', 10);
      return sortAsc ? priceA - priceB : priceB - priceA;
    }
    return 0;
  });

  return (
    <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-stone-900">
            제주시내 10개 정식 식당 비교표
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            메뉴, 주소, 영업시간, 브레이크타임, 캐치테이블, 평점을 항목별로 한눈에 비교하세요.
          </p>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-1.5 text-xs text-stone-600">
          <span className="text-stone-400">정렬:</span>
          <button
            onClick={() => handleSort('rating')}
            className={`px-2.5 py-1 rounded-md border text-xs font-medium transition-colors ${
              sortField === 'rating'
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            평점순 {sortField === 'rating' && (sortAsc ? '▲' : '▼')}
          </button>
          <button
            onClick={() => handleSort('price')}
            className={`px-2.5 py-1 rounded-md border text-xs font-medium transition-colors ${
              sortField === 'price'
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            가격순 {sortField === 'price' && (sortAsc ? '▲' : '▼')}
          </button>
          <button
            onClick={() => handleSort('name')}
            className={`px-2.5 py-1 rounded-md border text-xs font-medium transition-colors ${
              sortField === 'name'
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            이름순 {sortField === 'name' && (sortAsc ? '▲' : '▼')}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-100/75 border-b border-stone-200 text-stone-600 font-semibold uppercase tracking-wider">
              <th className="py-3 px-3.5 whitespace-nowrap">식당명 / 권역</th>
              <th className="py-3 px-3.5 whitespace-nowrap">대표 메뉴 & 가격</th>
              <th className="py-3 px-3.5 min-w-[200px]">도로명 주소</th>
              <th className="py-3 px-3.5 whitespace-nowrap">영업시간 (휴무일)</th>
              <th className="py-3 px-3.5 whitespace-nowrap">브레이크 타임</th>
              <th className="py-3 px-3.5 whitespace-nowrap">캐치테이블 지원</th>
              <th className="py-3 px-3.5 whitespace-nowrap text-right">평점 (별점)</th>
              <th className="py-3 px-3.5 whitespace-nowrap text-center">상세보기</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200/80">
            {sortedList.map((item, idx) => (
              <tr
                key={item.id}
                className="hover:bg-amber-50/40 transition-colors group cursor-pointer"
                onClick={() => onOpenDetail(item)}
              >
                {/* 1. Name & Area */}
                <td className="py-3 px-3.5 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-stone-400 tabular-nums">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="font-bold text-stone-900 group-hover:text-amber-800 transition-colors text-sm">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-stone-500">
                        {item.area} · {item.district.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                </td>

                {/* 2. Menu */}
                <td className="py-3 px-3.5 min-w-[190px]">
                  <div className="font-semibold text-stone-900">
                    {item.menus[0]?.name}
                  </div>
                  <div className="text-amber-800 font-mono font-medium tabular-nums">
                    {item.menus[0]?.price}
                  </div>
                  <div className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                    {item.category}
                  </div>
                </td>

                {/* 3. Address with Copy */}
                <td className="py-3 px-3.5">
                  <div className="flex items-center justify-between gap-1 text-stone-700">
                    <span className="truncate max-w-[220px]" title={item.address.road}>
                      {item.address.road}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(item.id, item.address.road);
                      }}
                      className="p-1 rounded hover:bg-stone-200 text-stone-500 shrink-0"
                      title="주소 복사"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </td>

                {/* 4. Hours */}
                <td className="py-3 px-3.5 whitespace-nowrap">
                  <div className="font-mono tabular-nums text-stone-800 font-medium">
                    {item.hours.open} ~ {item.hours.close}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {item.hours.closedDays}
                  </div>
                </td>

                {/* 5. Break Time */}
                <td className="py-3 px-3.5 whitespace-nowrap">
                  <div
                    className={`font-semibold ${
                      item.breakTime.hasBreak ? 'text-amber-800' : 'text-emerald-700'
                    }`}
                  >
                    {item.breakTime.time}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {item.breakTime.notes || '상시 식사 가능'}
                  </div>
                </td>

                {/* 6. CatchTable */}
                <td className="py-3 px-3.5 whitespace-nowrap">
                  <span
                    className={`inline-block font-medium ${
                      item.catchTable.supported ? 'text-rose-700 font-semibold' : 'text-stone-500'
                    }`}
                  >
                    {item.catchTable.badgeText}
                  </span>
                  <div className="text-[11px] text-stone-400">
                    {item.catchTable.type}
                  </div>
                </td>

                {/* 7. Rating */}
                <td className="py-3 px-3.5 whitespace-nowrap text-right">
                  <div className="inline-flex items-center gap-1 font-bold text-stone-900 font-mono tabular-nums text-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{item.rating.overall.toFixed(2)}</span>
                  </div>
                  <div className="text-[11px] text-stone-400 font-mono">
                    N {item.rating.naver} / K {item.rating.kakao}
                  </div>
                </td>

                {/* 8. Action */}
                <td className="py-3 px-3.5 whitespace-nowrap text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenDetail(item);
                    }}
                    className="px-2.5 py-1 text-xs font-medium text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded transition"
                  >
                    상세보기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
