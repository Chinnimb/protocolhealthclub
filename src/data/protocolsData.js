import fatlossSemaglutide from '../assets/figma/products/fatloss-semaglutide.jpg'
import fatlossTirzepatide from '../assets/figma/products/fatloss-tirzepatide.jpg'
import fatlossCarnitine from '../assets/figma/products/fatloss-carnitine.jpg'
import fatlossTesofensine from '../assets/figma/products/fatloss-tesofensine.jpg'

import muscleTesamorelin from '../assets/figma/products/muscle-tesamorelin.jpg'
import muscleSermorelin from '../assets/figma/products/muscle-sermorelin.jpg'
import muscleCjcIpamorelin from '../assets/figma/products/muscle-cjc-ipamorelin.jpg'
import muscleIgf1Lr3 from '../assets/figma/products/muscle-igf1lr3.jpg'

import energyNad from '../assets/figma/products/energy-nad.jpg'
import energyGlutathione from '../assets/figma/products/energy-glutathione.jpg'
import energySs31 from '../assets/figma/products/energy-ss31.jpg'
import energyThyroid from '../assets/figma/products/energy-thyroid.jpg'

import sexualTestosterone from '../assets/figma/products/sexual-testosterone.jpg'
import sexualEstrogen from '../assets/figma/products/sexual-estrogen.jpg'
import sexualTadalafil from '../assets/figma/products/sexual-tadalafil.jpg'
import sexualSildenafil from '../assets/figma/products/sexual-sildenafil.jpg'

import fertilityHcg from '../assets/figma/products/fertility-hcg.jpg'
import fertilityEnclomiphene from '../assets/figma/products/fertility-enclomiphene.jpg'
import fertilityRfsh from '../assets/figma/products/fertility-rfsh.jpg'
import fertilityGlutathione from '../assets/figma/products/fertility-glutathione.jpg'

import skincareGhkCu from '../assets/figma/products/skincare-ghkcu.jpg'
import skincareEstradiol from '../assets/figma/products/skincare-estradiol.jpg'
import skincareTretinoin from '../assets/figma/products/skincare-tretinoin.jpg'

import injuryBpc157 from '../assets/figma/products/injury-bpc157.jpg'
import injuryTb500 from '../assets/figma/products/injury-tb500.jpg'
import injuryKpv from '../assets/figma/products/injury-kpv.jpg'

import antiagingNad from '../assets/figma/products/energy-nad.jpg'
import antiagingGlutathione from '../assets/figma/products/energy-glutathione.jpg'
import antiagingOxytocin from '../assets/figma/products/antiaging-oxytocin.jpg'
import antiagingMethyleneBlue from '../assets/figma/products/antiaging-methyleneblue.jpg'

import gutGiMaps from '../assets/figma/products/gut-gimaps.jpg'
import gutBarrierTesting from '../assets/figma/products/gut-barriertesting.jpg'
import gutFoodSensitivity from '../assets/figma/products/gut-foodsensitivity.jpg'

import hairMinoxidil from '../assets/figma/products/hair-minoxidil.jpg'
import hairDutasteride from '../assets/figma/products/hair-dutasteride.jpg'
import hairFinasteride from '../assets/figma/products/hair-finasteride.jpg'
import hairGhkCu from '../assets/figma/products/hair-ghkcu.jpg'

import stressProgesterone from '../assets/figma/products/stress-progesterone.jpg'
import stressSelank from '../assets/figma/products/stress-selank.jpg'

import cognitiveSemax from '../assets/figma/products/cognitive-semax.jpg'
import cognitiveDihexa from '../assets/figma/products/cognitive-dihexa.jpg'
import cognitiveTesofensine from '../assets/figma/products/cognitive-tesofensine.jpg'

import cardFatLoss from '../assets/figma/card-fat-loss.png'
import cardMuscleGrowth from '../assets/figma/card-muscle-growth.png'
import cardEnergyBoosting from '../assets/figma/card-energy-boosting.png'
import cardSexualHealth from '../assets/figma/card-sexual-health.png'
import cardFertility from '../assets/figma/card-fertility.png'
import cardSkinCare from '../assets/figma/card-skin-care.png'
import cardInjuryRepair from '../assets/figma/card-injury-repair.png'
import cardAntiAging from '../assets/figma/card-anti-aging.png'
import cardGutHealth from '../assets/figma/card-gut-health.png'
import cardHairGrowth from '../assets/figma/card-hair-growth.jpg'
import cardStressReduction from '../assets/figma/card-stress-reduction.jpg'
import cardCognitiveFocus from '../assets/figma/card-cognitive-focus.png'

// Lifestyle cover photo per category, reused as a second gallery image on product pages
// until dedicated per-product photography exists.
const categoryCoverImage = {
  'Fat Loss': cardFatLoss,
  'Muscle Growth': cardMuscleGrowth,
  'Energy': cardEnergyBoosting,
  'Sexual Health': cardSexualHealth,
  Fertility: cardFertility,
  Skincare: cardSkinCare,
  'Injury Repair': cardInjuryRepair,
  'Longevity': cardAntiAging,
  'Gut Health': cardGutHealth,
  'Hair Growth': cardHairGrowth,
  'Stress Reduction': cardStressReduction,
  'Cognitive Focus': cardCognitiveFocus,
  // No dedicated Detox/Sleep photography yet — render a placeholder instead of a real photo.
  Detox: null,
  Sleep: null,
}

import heroFatLoss from '../assets/figma/categories/v2-fat-loss.jpg'
import heroMuscleGrowth from '../assets/figma/categories/v2-muscle-growth.jpg'
import heroEnergyBoosting from '../assets/figma/categories/v2-energy-boosting.jpg'
import heroSexualHealth from '../assets/figma/categories/v2-sexual-health.jpg'
import heroFertility from '../assets/figma/categories/v4-fertility.jpg'
import heroSkincare from '../assets/figma/categories/v2-skincare.jpg'
import heroInjuryRepair from '../assets/figma/categories/v2-injury-repair.jpg'
import heroAntiAging from '../assets/figma/categories/v2-anti-aging.jpg'
import heroGutHealth from '../assets/figma/categories/v2-gut-health.jpg'
import heroHairGrowth from '../assets/figma/categories/v2-hair-growth.jpg'
import heroStressReduction from '../assets/figma/categories/v2-stress-reduction.jpg'
import heroCognitiveFocus from '../assets/figma/categories/v2-cognitive-focus.jpg'

// Cinematic AI-generated hero photo per category — a concept image representing
// what the category treats (not a product shot), in Protocol's orange/white
// brand lighting. Used as the full-bleed image on the All Protocols overview cards.
const categoryHeroImage = {
  'Fat Loss': heroFatLoss,
  'Muscle Growth': heroMuscleGrowth,
  'Energy': heroEnergyBoosting,
  'Sexual Health': heroSexualHealth,
  Fertility: heroFertility,
  Skincare: heroSkincare,
  'Injury Repair': heroInjuryRepair,
  'Longevity': heroAntiAging,
  'Gut Health': heroGutHealth,
  'Hair Growth': heroHairGrowth,
  'Stress Reduction': heroStressReduction,
  'Cognitive Focus': heroCognitiveFocus,
  // No dedicated Detox/Sleep photography yet — render a placeholder instead of a real photo.
  Detox: null,
  Sleep: null,
}

import iconFlame from '../assets/figma/icon-flame.svg'
import iconDumbbell from '../assets/figma/icon-dumbbell.svg'
import iconZap from '../assets/figma/icon-zap.svg'
import iconHeart from '../assets/figma/icon-heart.svg'
import iconSprout from '../assets/figma/icon-sprout.svg'
import iconStar from '../assets/figma/icon-star.svg'
import iconBandage from '../assets/figma/icon-bandage.svg'
import iconClock from '../assets/figma/icon-clock.svg'
import iconLeaf from '../assets/figma/icon-leaf.svg'
import iconCombine from '../assets/figma/icon-combine.svg'
import iconCircleX from '../assets/figma/icon-circle-x.svg'
import iconBrain from '../assets/figma/icon-brain.svg'

// Icon representing what each category treats, used on the overview cards and
// as the lead benefit icon on product pages.
const categoryIcon = {
  'Fat Loss': iconFlame,
  'Muscle Growth': iconDumbbell,
  'Energy': iconZap,
  'Sexual Health': iconHeart,
  Fertility: iconSprout,
  Skincare: iconStar,
  'Injury Repair': iconBandage,
  'Longevity': iconClock,
  'Gut Health': iconLeaf,
  'Hair Growth': iconCombine,
  'Stress Reduction': iconCircleX,
  'Cognitive Focus': iconBrain,
  // No dedicated Detox icon yet — reuse the Gut Health leaf as a placeholder.
  Detox: iconLeaf,
  // No dedicated Sleep icon yet — reuse the Stress Reduction icon as a placeholder.
  Sleep: iconCircleX,
}

// Generic, category-level copy — safe placeholder content (no specific dosing, mechanism,
// or efficacy claims, no pricing). Swap in real per-product copy once the client provides it.
const categoryContent = {
  'Fat Loss': {
    blurb: 'Designed to support fat metabolism and sustainable weight management.',
    description:
      'This protocol is designed to support your body’s fat metabolism and weight management goals as part of a plan built around your bloodwork.',
    benefits: ['Supports healthy metabolism', 'Complements lifestyle changes', 'Monitored by your care team'],
  },
  'Muscle Growth': {
    blurb: 'Designed to support lean muscle growth and recovery.',
    description:
      'This protocol is designed to support lean muscle development and recovery as part of a plan built around your bloodwork.',
    benefits: ['Supports muscle recovery', 'Complements strength training', 'Monitored by your care team'],
  },
  'Energy': {
    blurb: 'Designed to support cellular energy production and consistent stamina.',
    description:
      'This protocol is designed to support cellular energy production and daily vitality as part of a plan built around your bloodwork.',
    benefits: ['Supports sustained energy', 'Complements an active lifestyle', 'Monitored by your care team'],
  },
  'Sexual Health': {
    blurb: 'Designed to support sexual wellness, performance, and intimacy.',
    description:
      'This protocol is designed to support sexual wellness as part of a plan built around your bloodwork and goals.',
    benefits: ['Supports sexual wellness', 'Personalized to your goals', 'Monitored by your care team'],
  },
  Fertility: {
    blurb: 'Designed to support reproductive health.',
    description:
      'This protocol is designed to support reproductive health as part of a personalized fertility plan built around your bloodwork.',
    benefits: ['Supports reproductive health', 'Personalized to your goals', 'Monitored by your care team'],
  },
  Skincare: {
    blurb: 'Designed to support healthy skin and radiance.',
    description:
      'This protocol is designed to support skin health as part of a personalized skincare plan built around your goals.',
    benefits: ['Supports skin renewal', 'Complements your skincare routine', 'Monitored by your care team'],
  },
  'Injury Repair': {
    blurb: "Designed to amplify the body's natural healing and regenerative properties.",
    description:
      'This protocol is designed to support the body’s natural recovery and repair process as part of a plan built around your goals.',
    benefits: ['Supports tissue recovery', 'Complements rehabilitation', 'Monitored by your care team'],
  },
  'Longevity': {
    blurb: 'Designed to address aging at the cellular level for sustainable energy and resilience.',
    description:
      'This protocol is designed to support long-term cellular health as part of a personalized longevity plan built around your bloodwork.',
    benefits: ['Supports cellular health', 'Complements a longevity-focused lifestyle', 'Monitored by your care team'],
  },
  'Gut Health': {
    blurb: 'Designed to support digestive health and gut function.',
    description:
      'This protocol is designed to support digestive health as part of a plan built around your labs and symptoms.',
    benefits: ['Supports digestive health', 'Personalized to your labs', 'Monitored by your care team'],
  },
  'Hair Growth': {
    blurb: 'Designed to support longer, thicker, stronger hair growth.',
    description:
      'This protocol is designed to support healthy hair growth as part of a plan built around your goals.',
    benefits: ['Supports hair growth', 'Complements your routine', 'Monitored by your care team'],
  },
  'Stress Reduction': {
    blurb: 'Designed to protect your sense of peace from the inside for healthy stress resilience.',
    description:
      'This protocol is designed to support the body’s stress response as part of a plan built around your goals.',
    benefits: ['Supports stress resilience', 'Complements lifestyle changes', 'Monitored by your care team'],
  },
  'Cognitive Focus': {
    blurb: 'Designed to support cognition, clarity, and focus.',
    description:
      'This protocol is designed to support mental clarity and focus as part of a plan built around your goals.',
    benefits: ['Supports mental clarity', 'Complements daily routines', 'Monitored by your care team'],
  },
  Detox: {
    blurb: 'Designed to support the body’s natural detoxification and clearance.',
    description:
      'This protocol is designed to support the body’s natural detoxification pathways as part of a plan built around your labs.',
    benefits: ['Supports detox pathways', 'Personalized to your labs', 'Monitored by your care team'],
  },
  Sleep: {
    blurb: 'Designed to support deeper, more restorative sleep.',
    description:
      'This protocol is designed to support healthy sleep as part of a plan built around your goals.',
    benefits: ['Supports restorative sleep', 'Complements your routine', 'Monitored by your care team'],
  },
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const categories = [
  {
    name: 'Fat Loss',
    products: [
      { name: 'Semaglutide', image: fatlossSemaglutide, form: 'Injection' },
      { name: 'Tirzepatide', image: fatlossTirzepatide, form: 'Injection', featured: true },
      { name: 'Carnitine', image: fatlossCarnitine, form: 'Injection' },
      { name: 'Tesofensine', image: fatlossTesofensine, form: 'Injection' },
    ],
  },
  {
    name: 'Muscle Growth',
    products: [
      {
        name: 'Tesamorelin',
        image: muscleTesamorelin,
        form: 'Injection',
        description:
          'Deep abdominal fat sits around your organs and resists diet and training. Tesamorelin raises your own growth hormone and targets that layer.',
        benefits: [
          'Targets deep belly fat',
          'Backed by clinical research',
          'Works on harmful visceral fat',
          'Smaller waist size before weight loss',
        ],
      },
      {
        name: 'Sermorelin',
        image: muscleSermorelin,
        form: 'Injection',
        featured: true,
        description:
          'Growth hormone output falls every decade, and recovery slows with it. Sermorelin prompts your body to release its own growth hormone, on its own rhythm.',
        benefits: [
          'Deeper, more restorative sleep',
          'Faster recovery between sessions',
          'Leaner body composition',
          'Stronger bone & connective tissue',
        ],
      },
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'CJC-1295 / Mod GRF 1-29',
        form: 'Injection',
        description:
          "One nightly injection keeps the growth hormone signal open for hours instead of minutes. A longer recovery window, on your body's schedule.",
        benefits: [
          'Stronger overnight recovery',
          'Healthier body composition',
          'Deeper, more consistent sleep',
          'Firmer skin, stronger hair',
        ],
      },
      {
        name: 'Ipamorelin',
        image: muscleCjcIpamorelin,
        form: 'Injection',
        description:
          'Releases your own growth hormone without raising appetite or stress hormones. Built for people already eating in a deficit.',
        benefits: [
          'Recovery without the hunger',
          'Deeper sleep, steadier energy',
          'Flexible dosing on your schedule',
          'Less bloating, leaner look',
        ],
      },
      { name: 'IGF-1 LR3', image: muscleIgf1Lr3, form: 'Injection' },
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'GHRP-2 (Pralmorelin)',
        form: 'Injection',
        description:
          'A powerful growth hormone release with an appetite stimulus to match. For building phases where eating enough has been the hard part.',
        benefits: [
          'Strong growth hormone release',
          'Appetite works in your favor',
          'Built for gaining phases',
          'Deeper sleep and faster recovery between sessions',
        ],
      },
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'Hexarelin',
        form: 'Injection',
        description:
          'A powerful growth hormone release, run in short defined blocks. Timed around a training phase where you want maximum output.',
        benefits: [
          'Built for peak training',
          'Short cycles, defined results',
          'Supports lean mass and strength',
          'Deeper sleep, faster recovery',
        ],
      },
    ],
  },
  {
    name: 'Energy',
    products: [
      { name: 'NAD+', image: energyNad, form: 'Injection' },
      { name: 'Glutathione', image: energyGlutathione, form: 'Injection', featured: true },
      { name: 'SS-31', image: energySs31, form: 'Injection' },
      { name: 'Thyroid Supplementation', image: energyThyroid, form: 'Injection' },
    ],
  },
  {
    name: 'Longevity',
    products: [
      { name: 'NAD+', image: antiagingNad, form: 'Injection' },
      { name: 'Glutathione', image: antiagingGlutathione, form: 'Injection', featured: true },
      { name: 'Oxytocin', image: antiagingOxytocin, form: 'Injection' },
      { name: 'Methylene Blue', image: antiagingMethyleneBlue, form: 'Injection' },
    ],
  },
  {
    name: 'Skincare',
    products: [
      { name: 'GHK-Cu', image: skincareGhkCu, form: 'Injection' },
      { name: 'Estradiol', image: skincareEstradiol, form: 'Injection', featured: true },
      { name: 'Tretinoin', image: skincareTretinoin, form: 'Injection' },
    ],
  },
  {
    name: 'Gut Health',
    products: [
      { name: 'GI Maps', image: gutGiMaps, form: 'Lab Test' },
      { name: 'Gut Barrier Testing', image: gutBarrierTesting, form: 'Lab Test', featured: true },
      { name: 'Food Sensitivity Testing', image: gutFoodSensitivity, form: 'Lab Test' },
    ],
  },
  {
    name: 'Injury Repair',
    products: [
      { name: 'BPC-157', image: injuryBpc157, form: 'Injection' },
      { name: 'TB-500', image: injuryTb500, form: 'Injection', featured: true },
      { name: 'KPV', image: injuryKpv, form: 'Injection' },
    ],
  },
  {
    name: 'Stress Reduction',
    products: [
      { name: 'Progesterone', image: stressProgesterone, form: 'Injection' },
      { name: 'Selank', image: stressSelank, form: 'Injection', featured: true },
    ],
  },
  {
    name: 'Cognitive Focus',
    products: [
      { name: 'Semax', image: cognitiveSemax, form: 'Injection' },
      { name: 'Dihexa', image: cognitiveDihexa, form: 'Injection', featured: true },
      { name: 'Tesofensine', image: cognitiveTesofensine, form: 'Injection' },
    ],
  },
  {
    name: 'Sexual Health',
    products: [
      { name: 'Testosterone', image: sexualTestosterone, form: 'Injection' },
      { name: 'Estrogen', image: sexualEstrogen, form: 'Injection', featured: true },
      { name: 'Tadalafil (Cialis)', image: sexualTadalafil, form: 'Injection' },
      { name: 'Sildenafil (Viagra)', image: sexualSildenafil, form: 'Injection' },
    ],
  },
  {
    name: 'Fertility',
    products: [
      { name: 'hCG', image: fertilityHcg, form: 'Injection' },
      { name: 'Enclomiphene', image: fertilityEnclomiphene, form: 'Injection', featured: true },
      { name: 'rFSH', image: fertilityRfsh, form: 'Injection' },
      { name: 'Glutathione', image: fertilityGlutathione, form: 'Injection' },
    ],
  },
  {
    name: 'Hair Growth',
    products: [
      { name: 'Minoxidil', image: hairMinoxidil, form: 'Injection' },
      { name: 'Dutasteride', image: hairDutasteride, form: 'Injection', featured: true },
      { name: 'Finasteride', image: hairFinasteride, form: 'Injection' },
      { name: 'GHK-Cu', image: hairGhkCu, form: 'Injection' },
    ],
  },
  {
    name: 'Detox',
    products: [
      // No dedicated photo yet — will render a placeholder until real photography exists.
      { name: 'Mycotox Mold Testing', form: 'Lab Test', featured: true },
      { name: 'Glutathione', image: energyGlutathione, form: 'Injection' },
    ],
  },
  {
    // Products pending — waiting to confirm with the client what goes under Sleep.
    name: 'Sleep',
    products: [],
  },
].map((cat) => ({
  ...cat,
  slug: slugify(cat.name),
  ...categoryContent[cat.name],
  icon: categoryIcon[cat.name],
  coverImage: categoryCoverImage[cat.name],
  heroImage: categoryHeroImage[cat.name],
  products: cat.products.map((p) => ({
    ...p,
    slug: slugify(p.name),
  })),
}))

export function getCategory(categorySlug) {
  return categories.find((c) => c.slug === categorySlug)
}

export function getProduct(categorySlug, productSlug) {
  const category = getCategory(categorySlug)
  if (!category) return null
  const product = category.products.find((p) => p.slug === productSlug)
  if (!product) return null
  return { category, product }
}
