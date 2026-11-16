import logo from '../assets/logo.webp';
import product1 from '../assets/1.webp';
import product2 from '../assets/2.webp';
import product3 from '../assets/3.webp';
import product4 from '../assets/4.webp';
import product5 from '../assets/5.webp';
import product6 from '../assets/prestiege.webp';
import product7 from '../assets/coconut.webp';
import product8 from '../assets/beanut_butter_high_protien.webp';
import product9 from '../assets/beanut_butter.webp';
import chocoDarkHazel  from '../assets/choco-dark-hazel.jpeg';
import chocoDarkAlmond from '../assets/choco-dark-almond.jpeg';
import chocoDarkPlain  from '../assets/choco-dark-plain.jpeg';
import chocoMilkHazel  from '../assets/choco-milk-hazel.jpeg';
import chocoMilkAlmond from '../assets/choco-milk-almond.jpeg';
import chocoMilkPlain  from '../assets/choco-milk-plain.jpeg';
import barDarkAlmond from '../assets/bar-dark-almond.webp';
import barDarkHazel from '../assets/bar-dark-hazel.webp';
import barDarkPlain from '../assets/bar-dark-plain.webp';
import barMilkAlmond from '../assets/bar-milk-almond.webp';
import barMilkHazel from '../assets/bar-milk-hazel.webp';
import barMilkPlain from '../assets/bar-milk-plain.webp';

export const productImages = [product4, product1, product2, product3, product6, product7, product5, product8, product9];

// Hero carousel: choco bar flavors
export const heroImages = [
  barMilkHazel, barDarkHazel, barMilkAlmond, barDarkAlmond, barMilkPlain, barDarkPlain,
];

export const heroImageLabels = [
  'ميلك بالبندق', 'دارك بالبندق', 'ميلك باللوز', 'دارك باللوز', 'ميلك سادة', 'دارك سادة',
];

export const spreadFlavors = [
  { id: 'kids',    label: 'سبريد شيكولاتة أطفال 375 جرام',   shortLabel: 'أطفال',          emoji: '🧒', weight: '375 جرام', image: product4 },
  { id: 'original',label: 'سبريد شيكولاتة أوجينال 375 جرام',  shortLabel: 'أوجينال',        emoji: '🍫', weight: '375 جرام', image: product1 },
  { id: 'protein', label: 'سبريد شيكولاتة بروتين 375 جرام',   shortLabel: 'بروتين',         emoji: '💪', weight: '375 جرام', image: product2 },
  { id: 'vegan',   label: 'سبريد شيكولاتة فيجن 375 جرام',     shortLabel: 'فيجن',           emoji: '🌱', weight: '375 جرام', image: product3 },
  { id: 'prestige', label: 'سبريد شيكولاتة بريستيج 375 جرام', shortLabel: 'بريستيج', emoji: '👑', weight: '375 جرام', badge: '(بندق أكتر)', featured: true, image: product6 },
  { id: 'coconut', label: 'سبريد جوز هند 375 جرام',            shortLabel: 'جوز هند',        emoji: '🥥', weight: '375 جرام', hidden: true, image: product7 },
  { id: 'peanut',  label: 'زبدة فول سوداني 375 جرام',         shortLabel: 'زبدة فول سوداني', emoji: '🥜', weight: '375 جرام', hidden: true, image: product5 },
  { id: 'highProtein', label: 'زبدة فول سوداني عالي البروتين 375 جرام', shortLabel: 'زبدة فول سوداني عالي البروتين', emoji: '💪', weight: '375 جرام', hidden: true, image: product8 },
  { id: 'chocolatePeanut', label: 'زبدة فول سوداني شيكولاتة 375 جرام', shortLabel: 'زبدة فول سوداني شيكولاتة', emoji: '🍫', weight: '375 جرام', hidden: true, image: product9 },
];

export const chocoBarFlavors = [
  { id: 'darkHazel',  label: 'شيكولاتة بار دارك بالبندق 40 جرام',  shortLabel: 'دارك بالبندق',  emoji: '🍫', weight: '40 جرام', image: chocoDarkHazel },
  { id: 'darkAlmond', label: 'شيكولاتة بار دارك باللوز 40 جرام',   shortLabel: 'دارك باللوز',   emoji: '🍫', weight: '40 جرام', image: chocoDarkAlmond },
  { id: 'darkPlain',  label: 'شيكولاتة بار دارك سادة 40 جرام',     shortLabel: 'دارك سادة',     emoji: '🍫', weight: '40 جرام', image: chocoDarkPlain },
  { id: 'milkHazel',  label: 'شيكولاتة بار ميلك بالبندق 40 جرام',  shortLabel: 'ميلك بالبندق',  emoji: '🍫', weight: '40 جرام', image: chocoMilkHazel },
  { id: 'milkAlmond', label: 'شيكولاتة بار ميلك باللوز 40 جرام',   shortLabel: 'ميلك باللوز',   emoji: '🍫', weight: '40 جرام', image: chocoMilkAlmond },
  { id: 'milkPlain',  label: 'شيكولاتة بار ميلك سادة 40 جرام',     shortLabel: 'ميلك سادة',     emoji: '🍫', weight: '40 جرام', image: chocoMilkPlain },
];

export const colaFlavors = [
  { id: 'cola',  label: 'كولا 350 مل',        shortLabel: 'كولا',        emoji: '🥤', volume: '350 مل' },
  { id: 'lemon', label: 'ليمون نعناع 350 مل', shortLabel: 'ليمون نعناع', emoji: '🍋', volume: '350 مل' },
];

export const egyptGovs = ['القاهرة', 'الجيزة', 'الإسكندرية', 'طنطا', 'المنصورة', 'السويس', 'دمياط'];

export const landingData = {
  brand: {
    logo,
    name: 'Healthy & Tasty',
    tagline: 'Healthy food for all people',
  },
  nav: [
    { label: 'المميزات', href: '#benefits' },
    { label: 'العروض',   href: '#offers'   },
    { label: 'اطلب الآن', href: '#offers'  },
  ],
  hero: {
    eyebrow: 'Healthy Choco Bar 🍫',
    title: 'شيكولاتة بار اللي بتحبها... من غير سكر مضاف',
    subtitle:
      'شيكولاتة بار 40 جرام دارك وميلك بالبندق واللوز، مناسبة للدايت والكيتو ومرضى السكر من غير ما تحرم نفسك.',
    primaryCta: 'اطلب دلوقتي',
    secondaryCta: 'شوف العروض',
    images: heroImages,
    labels: heroImageLabels,
    stats: [
      { value: '0%', label: 'سكر مضاف' },
      { value: '40g', label: 'للقطعة' },
      { value: 'Stevia', label: 'محلى بالاستيفيا' },
    ],
  },
  benefits: [
    'مناسبة للدايت والكيتو',
    'مناسبة لمرضى السكر',
    'محلاة بالاستيفيا',
    'بدون سكر مضاف',
    'دارك وميلك بنكهات مختلفة',
    'سناك سهل تاخده معاك',
  ],
  audience: {
    title: 'مناسبة لمين؟',
    description: 'Healthy Choco Bar سناك شيكولاتة لأي روتين صحي، من غير حرمان.',
    items: [
      { label: 'الرياضيين',                  icon: '🏋️' },
      { label: 'مرضى السكر',                 icon: '🩺' },
      { label: 'متبعي الكيتو دايت',           icon: '🥑' },
      { label: 'محبي الشيكولاتة',             icon: '🍫' },
    ],
  },
  product: {
    title: 'طعم شيكولاتة حقيقي من غير إحساس بالذنب',
    description: 'شيكولاتة بار 40 جرام بطعم غني، دارك أو ميلك، سادة أو بالبندق أو باللوز.',
    gallery: [
      { title: 'دارك', note: 'طعم كاكاو غني' },
      { title: 'ميلك', note: 'طعم كريمي ناعم' },
      { title: 'بالبندق', note: 'قطع بندق مقرمشة' },
      { title: 'باللوز', note: 'قطع لوز محمص' },
    ],
  },
  offersIntro: {
    eyebrow: 'اختار العرض المناسب ليك 👇',
    title: 'الحق العروض قبل ما تخلص',
    description: 'كل العروض شاملة الدفع عند الاستلام 💳',
  },
  // Fallback only: the live offers come from the «الشوكولاتة بار» tab in the dashboard.
  offers: [
    { id: 'five-bars', title: 'عرض 5 شيكولاتة بار', amount: 'اشتري 4 شيكولاتة بار 40 جرام واحصل على الخامسة هدية', description: '', price: 220, originalPrice: 275, saving: 55, badge: '🎁 الخامسة هدية', accent: '#B11730', note: '', configuration: { type: 'chocoBar', total: 5 } },
    { id: 'ten-bars', title: 'عرض 10 شيكولاتة بار', amount: '10 قطع شيكولاتة بار 40 جرام — دارك وميلك بالنكهات اللي تحبها', description: '', price: 420, originalPrice: 550, saving: 130, badge: '🔥 الأكثر طلبًا', accent: '#7C2D12', note: '', configuration: { type: 'chocoBar', total: 10 } },
    { id: 'twenty-bars', title: 'عرض 20 شيكولاتة بار', amount: '20 قطعة شيكولاتة بار 40 جرام — أوفر عرض', description: '', price: 799, originalPrice: 1100, saving: 301, badge: '⭐ أكبر توفير', accent: '#5F2D91', note: '', configuration: { type: 'chocoBar', total: 20 } },
  ],
  loveReasons: {
    eyebrow: 'ليه العملاء بيحبوا Healthy Choco Bar؟',
    title: 'لأنها بتديك طعم الشيكولاتة اللي بتحبه بشكل أخف',
    items: [
      { label: 'طعم حلو من غير إحساس بالذنب', icon: '😍' },
      { label: 'سناك سهل في الشنطة',          icon: '🎒' },
      { label: 'نكهات كتير تختار منها',       icon: '🍫' },
      { label: 'بدون سكر مضاف',               icon: '✅' },
    ],
  },
  form: {
    title: 'بياناتك',
    subtitle: 'أدخل بياناتك وهنكلمك لتأكيد الطلب',
    submitLabel: 'تأكيد الطلب',
    successMessage: 'تم تسجيل طلبك! سيتم التواصل معاك في أقرب وقت لتأكيد الطلب.',
    validationMessage: 'من فضلك املأ كل الحقول المطلوبة بشكل صحيح.',
  },
  footer: {
    note: 'Healthy Choco Bar — شيكولاتة صحية بطعم غني من غير سكر مضاف.',
  },
};

export const SHIPPING_FEE = 0;

export const formatPrice = (amount) => `${amount} جنيه`;
