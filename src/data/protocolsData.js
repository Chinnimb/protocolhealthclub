import fatlossSemaglutide from '../assets/figma/protocols/fatloss-semaglutide.png'
import fatlossTirzepatide from '../assets/figma/protocols/fatloss-tirzepatide.png'
import fatlossCarnitine from '../assets/figma/protocols/fatloss-carnitine.png'
import fatlossTesofensine from '../assets/figma/protocols/fatloss-tesofensine.png'

import muscleTesamorelin from '../assets/figma/protocols/muscle-tesamorelin.png'
import muscleSermorelin from '../assets/figma/protocols/muscle-sermorelin.png'
import muscleCjcIpamorelin from '../assets/figma/protocols/muscle-cjc-ipamorelin.png'
import muscleIgf1Lr3 from '../assets/figma/protocols/muscle-igf1lr3.png'

import energyNad from '../assets/figma/protocols/energy-nad.png'
import energyGlutathione from '../assets/figma/protocols/energy-glutathione.png'
import energySs31 from '../assets/figma/protocols/energy-ss31.png'
import energyThyroid from '../assets/figma/protocols/energy-thyroid.png'

import sexualTestosterone from '../assets/figma/protocols/sexual-testosterone.png'
import sexualEstrogen from '../assets/figma/protocols/sexual-estrogen.png'
import sexualTadalafil from '../assets/figma/protocols/sexual-tadalafil.png'
import sexualSildenafil from '../assets/figma/protocols/sexual-sildenafil.png'

import fertilityHcg from '../assets/figma/protocols/fertility-hcg.png'
import fertilityEnclomiphene from '../assets/figma/protocols/fertility-enclomiphene.png'
import fertilityRfsh from '../assets/figma/protocols/fertility-rfsh.png'
import fertilityGlutathione from '../assets/figma/protocols/fertility-glutathione.png'

import skincareGhkCu from '../assets/figma/protocols/skincare-ghkcu.png'
import skincareEstradiol from '../assets/figma/protocols/skincare-estradiol.png'
import skincareTretinoin from '../assets/figma/protocols/skincare-tretinoin.png'

import injuryBpc157 from '../assets/figma/protocols/injury-bpc157.png'
import injuryTb500 from '../assets/figma/protocols/injury-tb500.png'
import injuryKpv from '../assets/figma/protocols/injury-kpv.png'

import antiagingNad from '../assets/figma/protocols/antiaging-nad.png'
import antiagingGlutathione from '../assets/figma/protocols/antiaging-glutathione.png'
import antiagingOxytocin from '../assets/figma/protocols/antiaging-oxytocin.png'
import antiagingMethyleneBlue from '../assets/figma/protocols/antiaging-methyleneblue.png'

import gutGiMaps from '../assets/figma/protocols/gut-gimaps.png'
import gutBarrierTesting from '../assets/figma/protocols/gut-barriertesting.png'
import gutFoodSensitivity from '../assets/figma/protocols/gut-foodsensitivity.png'

import hairMinoxidil from '../assets/figma/protocols/hair-minoxidil.png'
import hairDutasteride from '../assets/figma/protocols/hair-dutasteride.png'
import hairFinasteride from '../assets/figma/protocols/hair-finasteride.png'
import hairGhkCu from '../assets/figma/protocols/hair-ghkcu.png'

import stressProgesterone from '../assets/figma/protocols/stress-progesterone.png'
import stressSelank from '../assets/figma/protocols/stress-selank.png'

import cognitiveSemax from '../assets/figma/protocols/cognitive-semax.png'
import cognitiveDihexa from '../assets/figma/protocols/cognitive-dihexa.png'
import cognitiveTesofensine from '../assets/figma/protocols/cognitive-tesofensine.png'

// Generic, category-level copy — safe placeholder content (no specific dosing, mechanism,
// or efficacy claims, no pricing). Swap in real per-product copy once the client provides it.
const categoryContent = {
  'Fat Loss': {
    blurb: 'Protocols designed to support fat metabolism and sustainable weight management.',
    description:
      'This protocol is designed to support your body’s fat metabolism and weight management goals as part of a plan built around your bloodwork.',
    benefits: ['Supports healthy metabolism', 'Complements lifestyle changes', 'Monitored by your care team'],
  },
  'Muscle Growth': {
    blurb: 'Protocols designed to support lean muscle development and recovery.',
    description:
      'This protocol is designed to support lean muscle development and recovery as part of a plan built around your bloodwork.',
    benefits: ['Supports muscle recovery', 'Complements strength training', 'Monitored by your care team'],
  },
  'Energy Boosting': {
    blurb: 'Protocols designed to support cellular energy production and daily vitality.',
    description:
      'This protocol is designed to support cellular energy production and daily vitality as part of a plan built around your bloodwork.',
    benefits: ['Supports sustained energy', 'Complements an active lifestyle', 'Monitored by your care team'],
  },
  'Sexual Health': {
    blurb: 'Protocols designed to support sexual wellness and intimate health.',
    description:
      'This protocol is designed to support sexual wellness as part of a plan built around your bloodwork and goals.',
    benefits: ['Supports sexual wellness', 'Personalized to your goals', 'Monitored by your care team'],
  },
  Fertility: {
    blurb: 'Protocols designed to support reproductive health.',
    description:
      'This protocol is designed to support reproductive health as part of a personalized fertility plan built around your bloodwork.',
    benefits: ['Supports reproductive health', 'Personalized to your goals', 'Monitored by your care team'],
  },
  Skincare: {
    blurb: 'Protocols designed to support skin health and appearance.',
    description:
      'This protocol is designed to support skin health as part of a personalized skincare plan built around your goals.',
    benefits: ['Supports skin renewal', 'Complements your skincare routine', 'Monitored by your care team'],
  },
  'Injury Repair': {
    blurb: 'Protocols designed to support the body’s natural recovery process.',
    description:
      'This protocol is designed to support the body’s natural recovery and repair process as part of a plan built around your goals.',
    benefits: ['Supports tissue recovery', 'Complements rehabilitation', 'Monitored by your care team'],
  },
  'Anti-Aging': {
    blurb: 'Protocols designed to support long-term cellular health and healthy aging.',
    description:
      'This protocol is designed to support long-term cellular health as part of a personalized longevity plan built around your bloodwork.',
    benefits: ['Supports cellular health', 'Complements a longevity-focused lifestyle', 'Monitored by your care team'],
  },
  'Gut Health': {
    blurb: 'Protocols designed to support digestive health and gut function.',
    description:
      'This protocol is designed to support digestive health as part of a plan built around your labs and symptoms.',
    benefits: ['Supports digestive health', 'Personalized to your labs', 'Monitored by your care team'],
  },
  'Hair Growth': {
    blurb: 'Protocols designed to support healthy hair growth.',
    description:
      'This protocol is designed to support healthy hair growth as part of a plan built around your goals.',
    benefits: ['Supports hair growth', 'Complements your routine', 'Monitored by your care team'],
  },
  'Stress Reduction': {
    blurb: 'Protocols designed to support the body’s stress response and overall calm.',
    description:
      'This protocol is designed to support the body’s stress response as part of a plan built around your goals.',
    benefits: ['Supports stress resilience', 'Complements lifestyle changes', 'Monitored by your care team'],
  },
  'Cognitive Focus': {
    blurb: 'Protocols designed to support mental clarity and focus.',
    description:
      'This protocol is designed to support mental clarity and focus as part of a plan built around your goals.',
    benefits: ['Supports mental clarity', 'Complements daily routines', 'Monitored by your care team'],
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
      { name: 'Tesofensine', image: fatlossTesofensine, form: 'Oral' },
    ],
  },
  {
    name: 'Muscle Growth',
    products: [
      { name: 'Tesamorelin', image: muscleTesamorelin, form: 'Injection' },
      { name: 'Sermorelin', image: muscleSermorelin, form: 'Injection', featured: true },
      { name: 'CJC, Ipamorelin', image: muscleCjcIpamorelin, form: 'Injection' },
      { name: 'IGF-1 LR3', image: muscleIgf1Lr3, form: 'Injection' },
    ],
  },
  {
    name: 'Energy Boosting',
    products: [
      { name: 'NAD+', image: energyNad, form: 'Injection' },
      { name: 'Glutathione', image: energyGlutathione, form: 'Injection', featured: true },
      { name: 'SS-31', image: energySs31, form: 'Injection' },
      { name: 'Thyroid Supplementation', image: energyThyroid, form: 'Oral' },
    ],
  },
  {
    name: 'Sexual Health',
    products: [
      { name: 'Testosterone', image: sexualTestosterone, form: 'Injection' },
      { name: 'Estrogen', image: sexualEstrogen, form: 'Topical', featured: true },
      { name: 'Tadalafil (Cialis)', image: sexualTadalafil, form: 'Oral' },
      { name: 'Sildenafil (Viagra)', image: sexualSildenafil, form: 'Oral' },
    ],
  },
  {
    name: 'Fertility',
    products: [
      { name: 'hCG', image: fertilityHcg, form: 'Injection' },
      { name: 'Enclomiphene', image: fertilityEnclomiphene, form: 'Oral', featured: true },
      { name: 'rFSH', image: fertilityRfsh, form: 'Injection' },
      { name: 'Glutathione', image: fertilityGlutathione, form: 'Injection' },
    ],
  },
  {
    name: 'Skincare',
    products: [
      { name: 'GHK-Cu', image: skincareGhkCu, form: 'Topical' },
      { name: 'Estradiol', image: skincareEstradiol, form: 'Topical', featured: true },
      { name: 'Tretinoin', image: skincareTretinoin, form: 'Topical' },
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
    name: 'Anti-Aging',
    products: [
      { name: 'NAD+', image: antiagingNad, form: 'Injection' },
      { name: 'Glutathione', image: antiagingGlutathione, form: 'Injection', featured: true },
      { name: 'Oxytocin', image: antiagingOxytocin, form: 'Injection' },
      { name: 'Methylene Blue', image: antiagingMethyleneBlue, form: 'Oral' },
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
    name: 'Hair Growth',
    products: [
      { name: 'Minoxidil', image: hairMinoxidil, form: 'Topical' },
      { name: 'Dutasteride', image: hairDutasteride, form: 'Oral', featured: true },
      { name: 'Finasteride', image: hairFinasteride, form: 'Oral' },
      { name: 'GHK-Cu', image: hairGhkCu, form: 'Topical' },
    ],
  },
  {
    name: 'Stress Reduction',
    products: [
      { name: 'Progesterone', image: stressProgesterone, form: 'Oral' },
      { name: 'Selank', image: stressSelank, form: 'Nasal', featured: true },
    ],
  },
  {
    name: 'Cognitive Focus',
    products: [
      { name: 'Semax', image: cognitiveSemax, form: 'Nasal' },
      { name: 'Dihexa', image: cognitiveDihexa, form: 'Oral', featured: true },
      { name: 'Tesofensine', image: cognitiveTesofensine, form: 'Oral' },
    ],
  },
].map((cat) => ({
  ...cat,
  slug: slugify(cat.name),
  ...categoryContent[cat.name],
  products: cat.products.map((p) => ({ ...p, slug: slugify(p.name) })),
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
