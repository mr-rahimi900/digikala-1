export const productsData = [
  {
    id: 1,
    name: `گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو ...`,
    price: 6264000,
    image: `images/products/21.jpg`,
    qty: 1,
  },
  {
    id: 2,
    name: `گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو ...`,
    price: 6249000,
    image: `images/products/22.jpg`,
    qty: 1,
  },
  {
    id: 3,
    name: `کیف هندزفری جانتا مدل 141مجموعه 3 عددی`,
    price: 89000,
    image: `images/products/17.jpg`,
    qty: 1,
  },
  {
    id: 4,
    name: `گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌...`,
    price: 59000,
    image: `images/products/19.jpg`,
    qty: 1,
  },
  {
    id: 5,
    name: `گوشی موبایل سامسونگ مدل Galaxy A21S SM-A217F/DS دو...`,
    price: 39000,
    image: `images/products/20.jpg`,
    qty: 1,
  },
  {
    id: 6,
    name: `کیف رودوشی چرم جانتا مدل D078`,
    price: 39000,
    image: `images/products/18.jpg`,
    qty: 1,
  },
  {
    id: 7,
    name: `گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو ...`,
    price: 39000,
    image: `images/products/16.jpg`,
    qty: 1,
  },
  {
    id: 8,
    name: `گوشی موبایل شیائومی مدل POCO M3 PRO 5G M2103K19PG ...`,
    price: 39000,
    image: `images/products/14.jpg`,
    qty: 1,
  },
  {
    id: 9,
    name: `مجموعه کتاب من پیش از تو، پس از تو، باز هم من`,
    price: 39000,
    image: `images/products/10.jpg`,
    qty: 1,
  },
  {
    id: 10,
    name: `کتاب سلخ اثر غزاله شکوهی`,
    price: 39000,
    image: `images/products/11.jpg`,
    qty: 1,
  },
  {
    id: 11,
    name: `کتاب تختخوابت را مرتب کن اثر ژنرال ویلیام مک ریون`,
    price: 39000,
    image: `images/products/13.jpg`,
    qty: 1,
  },
  {
    id: 12,
    name: `دستگاه آبمیوه گیری دنویر با کد 1016`,
    price: 16000,
    image: `images/products/2.jpg`,
    qty: 1,
  },
  {
    id: 13,
    name: `کتاب اٍر مرکب اثر دارن هاردی با کد 87`,
    price: 10000,
    image: `images/products/1.jpg`,
    qty: 1,
  },
  {
    id: 14,
    name: `پکیج آموزش خطاطی و خوشنویسی با کد 624`,
    price: 89000,
    image: `images/products/3.jpg`,
    qty: 1,
  },
  {
    id: 15,
    name: `مجموعه داستان های هزار و یک شب`,
    price: 54000,
    image: `images/products/4.jpg`,
    qty: 1,
  },
  {
    id: 16,
    name: `کتاب اطلاعات عمومی انتشارات فارابی با کد 3087`,
    price: 123000,
    image: `images/products/5.jpg`,
    qty: 1,
  },
  {
    id: 17,
    name: `کتاب شیوه گرگ اثر جردن بلفورت`,
    price: 45000,
    image: `images/products/6.jpg`,
    qty: 1,
  },
  {
    id: 18,
    name: `مجموعه داستان های قصه های مشهور جهان`,
    price: 59000,
    image: `images/products/7.jpg`,
    qty: 1,
  },
  {
    id: 19,
    name: `کتاب برای سفر خودآموز مکالمات انگلیسی`,
    price: 39000,
    image: `images/products/8.jpg`,
    qty: 1,
  },
  {
    id: 20,
    name: `کتاب آدم های سمی اثر لیلیان گلاس`,
    price: 39000,
    image: `images/products/9.jpg`,
    qty: 1,
  },
  {
    id: 21,
    name: `مجموعه کتاب من پیش از تو، پس از تو، باز هم من`,
    price: 39000,
    image: `images/products/10.jpg`,
    qty: 1,
  },
  {
    id: 22,
    name: `کتاب سلخ اثر غزاله شکوهی`,
    price: 39000,
    image: `images/products/11.jpg`,
    qty: 1,
  },
  {
    id: 23,
    name: `کتاب بیشعوری اثر جردن بلفورت`,
    price: 39000,
    image: `images/products/12.jpg`,
    qty: 1,
  },
  {
    id: 24,
    name: `کتاب تختخوابت را مرتب کن اثر ژنرال ویلیام مک ریون`,
    price: 39000,
    image: `images/products/13.jpg`,
    qty: 1,
  },
];

export const getMostVisitedProducts = () => {
  return productsData.slice(0, 12);
};
export const getSuggestedProducts = () => {
  return productsData.slice(12, productsData.length);
}
export const productsId = (id) => {
  return productsData.find((product) => product.id === id);
};
