import React from 'react';
import { Plane, Compass, Clock, Utensils, HelpCircle, CheckCircle2 } from 'lucide-react';

export const TravelGuide: React.FC = () => {
  return (
    <section id="travel-guide" className="py-12 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
            제주시내 정식 완벽 정복
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            여행 동선별 맞춤 추천 & 웨이팅 전략
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            제주공항 출도착 시간, 브레이크타임, 캐치테이블 원격 줄서기 타이밍을 결합한 실전 가이드입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Airport Arrival Course */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-2">
                <Plane className="w-4 h-4" />
                <span>공항 도착 직후 / 아침 식사 (08:00~10:30)</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                비행기 착륙 후 바로 든든하게 제주식 아침 백반을 드시고 일정을 시작하세요.
              </p>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>현옥식당 (오전 7시 오픈)</strong>: 제주시외버스터미널 앞, 브레이크타임 없이 9,000원에 두루치기/정식 즉시 식사 가능.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>넉둥베기 (오전 9시 오픈)</strong>: 용담동 접짝뼈국 명가. 아침 8시 30분부터 캐치테이블 현장 등록 필수.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>도라지식당 (오전 9시 오픈)</strong>: 연삼로 위치, 성게미역국·옥돔구이로 자극 없는 고급 아침 정식.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Midday / No-Break Time Strategy */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                <Clock className="w-4 h-4" />
                <span>애매한 오후 2~5시 (브레이크타임 프리)</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                대부분의 정식집이 15:00~17:00 브레이크 타임을 갖지만, 아래 식당은 상시 영업합니다.
              </p>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>제주예찬 공항본점</strong>: 노형동 1100로 대로변, 브레이크타임 없이 통은갈치조림 12첩 한상 풀코스 상시 제공.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>도라지식당</strong>: 오라동 위치, 오후 3~4시에도 여유롭고 조용하게 정식 주문 가능.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>현옥식당</strong>: 하루종일 브레이크타임 없이 상시 운영, 늦은 점심에도 밥 무제한.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: CatchTable & Evening Dinner */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-800 font-bold text-sm mb-2">
                <Compass className="w-4 h-4" />
                <span>캐치테이블 원격 줄서기 실전 팁</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                긴 줄을 서지 않고 시간에 맞춰 착석하는 스마트한 예약 방법입니다.
              </p>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>곤밥2</strong>: 점심 11시 전후 캐치테이블 앱으로 원격 웨이팅을 걸어두고 산지천이나 칠성로를 산책하세요.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>화목원</strong>: 캐치테이블에서 날짜와 정원 룸을 사전 예약할 수 있어 단체나 부모님 동반에 필수입니다.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>순옥이네명가</strong>: 도두봉 무지개해안도로 구경 전 원격 등록 후 1~2팀 남았을 때 매장 앞에 도착하세요.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
