// data/popularStores.js
export const popularStores = [
  {
    id: '1',
    name: '이런 메뉴',
    address: '30,000원',
    image: require('../../image/olive.jpeg'),
  },
  {
    id: '2',
    name: '저런 메뉴',
    address: '40,000원',
    image: require('../../image/olive.jpeg'),
  },
  {
    id: '3',
    name: '다른 메뉴',
    address: '5,000원',
    image: require('../../image/olive.jpeg'),
  },
  {
    id: '4',
    name: '커피 메뉴',
    address: '7,800원',
    image: require('../../image/olive.jpeg'),
  },
];

// data/popularStores.js

// 랜덤 상품 생성을 위한 상품 이름과 가격 목록
const productNames = [
  '이런 메뉴',
  '저런 메뉴',
  '다른 메뉴',
  '커피 메뉴',
  '새로운 메뉴',
  '특별 메뉴',
  '시그니처 메뉴',
  '베스트 메뉴',
  '추천 메뉴',
  '프리미엄 메뉴',
];

const productPrices = [
  '3,000원',
  '5,000원',
  '7,800원',
  '10,000원',
  '12,500원',
  '15,000원',
  '20,000원',
  '25,000원',
  '30,000원',
  '40,000원',
];

// 총 상점 수와 각 상점당 상품 수 설정
const TOTAL_STORES = 30;
const PRODUCTS_PER_STORE = 4;

// 인기 상점 배열 생성
export const StoreList = Array.from({length: TOTAL_STORES}, (_, storeIndex) => {
  // 각 상점의 상품 목록 생성
  const products = Array.from(
    {length: PRODUCTS_PER_STORE},
    (_, productIndex) => ({
      id: `${storeIndex + 1}-${productIndex + 1}`, // 고유한 상품 ID 생성 (예: '1-1', '1-2', ...)
      name: productNames[Math.floor(Math.random() * productNames.length)], // 랜덤 상품 이름 선택
      price: productPrices[Math.floor(Math.random() * productPrices.length)], // 랜덤 상품 가격 선택
      image: require('../../image/olive.jpeg'), // 동일한 이미지 사용
    }),
  );
  return {title: `가게 ${storeIndex}`, products};
});
