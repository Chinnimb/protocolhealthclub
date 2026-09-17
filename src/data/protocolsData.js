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
      {
        name: 'Semaglutide',
        image: fatlossSemaglutide,
        form: 'Injection',
        description:
          'Copies the hormone your gut releases after eating to tell your brain you have had enough. Appetite quiets at the level of signaling.',
        benefits: [
          'Dramatically quiets food noise',
          'Steady, sustained weight loss',
          'Improves blood sugar control',
          'Supports healthy metabolic markers',
        ],
      },
      { name: 'Tirzepatide', image: fatlossTirzepatide, form: 'Injection', featured: true },
      { name: 'Carnitine', image: fatlossCarnitine, form: 'Injection' },
      { name: 'Tesofensine', image: fatlossTesofensine, form: 'Injection' },
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'GLP-3',
        form: 'Injection',
        description:
          'Three signals rather than two: it lowers what you eat and raises what you burn at rest. Currently in Phase 3 trials.',
        benefits: [
          'Raises energy expenditure',
          'Works both sides of the weight loss equation',
          'Combines 3 approaches',
          'Where the science is heading',
        ],
      },
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'Protocol C',
        form: 'Injection',
        description:
          'A second fullness hormone on a separate pathway from the incretins. For protocols that have stalled and need a different angle, not a higher dose.',
        benefits: [
          'Works through a different hunger signal',
          'Slows gastric emptying for longer fullness',
          'Breaks stalls from other protocols',
          'Matches insulin signaling',
        ],
      },
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'AOD-9604',
        form: 'Injection',
        description:
          'The segment of growth hormone responsible for fat breakdown, isolated from the effects on tissue growth and blood sugar.',
        benefits: [
          'Supports fat metabolism',
          'No effect on blood sugar',
          'Can combine with other protocols',
          'Maintains insulin sensitivity',
        ],
      },
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
      {
        name: 'IGF-1 LR3',
        image: muscleIgf1Lr3,
        form: 'Injection',
        description:
          'Growth hormone builds muscle by prompting your liver to make IGF-1. This delivers that messenger directly, on a timeline of weeks.',
        benefits: [
          'Direct signal to muscle',
          'Visible change in weeks',
          'Fullness and pump from the first sessions',
          'Triggers muscle cell formation',
        ],
      },
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
      {
        name: 'Glutathione',
        image: energyGlutathione,
        form: 'Injection',
        featured: true,
        description:
          "Your body's primary antioxidant, built from three amino acids. Levels fall with age, alcohol, and sustained stress.",
        benefits: [
          "Your body's primary antioxidant",
          'Bypasses digestion for bioavailability',
          "Supports the liver's clearance pathways",
          'Replaces what age and stress deplete',
        ],
      },
      {
        name: 'SS-31 (Elamipretide)',
        image: energySs31,
        form: 'Injection',
        description:
          'Energy is produced on a membrane inside your cells that has to hold a precise shape. That structure degrades with age. SS-31 stabilizes it.',
        benefits: [
          'Greater exercise tolerance',
          'Drives ATP energy production',
          'Works directly in mitochondria',
          'Recover from persistent fatigue',
        ],
      },
      { name: 'Thyroid Supplementation', image: energyThyroid, form: 'Injection' },
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'MOTS-c',
        form: 'Injection',
        description:
          'Made by your own mitochondria, and produced less every year. MOTS-c restores how easily your cells switch between burning fat and burning sugar.',
        benefits: [
          'Steadier energy all day',
          'Same metabolic pathway as exercise',
          'Amplifies training signal',
          'Promotes long-term mitochondrial health',
        ],
      },
    ],
  },
  {
    name: 'Longevity',
    products: [
      { name: 'NAD+', image: antiagingNad, form: 'Injection' },
      {
        name: 'Glutathione',
        image: antiagingGlutathione,
        form: 'Injection',
        featured: true,
        description:
          "Your body's primary antioxidant, built from three amino acids. Levels fall with age, alcohol, and sustained stress.",
        benefits: [
          "Your body's primary antioxidant",
          'Bypasses digestion for bioavailability',
          "Supports the liver's clearance pathways",
          'Replaces what age and stress deplete',
        ],
      },
      {
        name: 'Oxytocin',
        image: antiagingOxytocin,
        form: 'Troche / Nasal',
        description:
          'The hormone your body releases during closeness and physical connection. Used to support intimacy and the feeling of bonding.',
        benefits: [
          'Supports feelings of closeness',
          'Taken before intimacy',
          'Deepens feelings of connection',
          'Softens stress and anxiety',
        ],
      },
      { name: 'Methylene Blue', image: antiagingMethyleneBlue, form: 'Injection' },
      {
        // No dedicated photo yet — client will generate one and share it.
        // Immune-focused product with no clear category fit yet — placed here
        // for its aging angle, pending confirmation with the client.
        name: 'Thymosin Alpha-1',
        form: 'Injection',
        description:
          'Your thymus trains the immune cells that recognize threats, and it shrinks from adolescence onward. Thymosin alpha-1 is a copy of what it produces.',
        benefits: [
          'Tunes the immune response',
          'Built for cold & flu season',
          'Restores immune signals lost through aging',
          'Lose fewer days to sickness',
        ],
      },
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'Epitalon',
        form: 'Injection',
        description:
          'Based on a peptide from the pineal gland, the part of the brain that sets your body clock. Run for ten days, twice a year.',
        benefits: [
          'Protects against age related decline',
          'Powerful antioxidant activity',
          'Deeper, more restorative sleep',
          'Supports cognitive resilience',
        ],
      },
    ],
  },
  {
    name: 'Skincare',
    products: [
      {
        name: 'GHK-Cu (Copper Peptide)',
        image: skincareGhkCu,
        form: 'Injection',
        description:
          "Aging decreases your body's natural collagen signal. GHK-Cu tells cells to build collagen and delivers the copper they need.",
        benefits: [
          'Firmer skin, better texture',
          'A healing signal, not a surface treatment',
          'Promotes wound and tissue repair',
          'Antioxidant and anti-inflammatory',
        ],
      },
      { name: 'Estradiol', image: skincareEstradiol, form: 'Injection', featured: true },
      { name: 'Tretinoin', image: skincareTretinoin, form: 'Injection' },
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'Melanotan II',
        form: 'Injection',
        description:
          'Acts on two receptors that control unrelated things: skin pigment and sexual desire. One compound, both effects.',
        benefits: [
          'Deeper skin tone without the sun',
          'Effects build gradually over time',
          "Works with skin's pigment pathway",
          'Promotes intimate desire',
        ],
      },
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
      {
        name: 'BPC-157',
        image: injuryBpc157,
        form: 'Injection',
        description:
          'Tendon and ligament heal slowly because blood barely reaches them. BPC-157 promotes new blood vessel growth into the tissue that needs it.',
        benefits: [
          'For slow-healing injuries',
          'Supports gut lining repair',
          'Addresses the healing bottleneck',
          'Works on many tissues and injuries',
        ],
      },
      {
        name: 'TB-500 (Thymosin Beta-4)',
        image: injuryTb500,
        form: 'Injection',
        featured: true,
        description:
          'Repair depends on resources reaching damaged tissue. TB-500 works on the machinery that moves them, across your whole body at once.',
        benefits: [
          'Full-body repair support',
          'For accumulated and old injuries',
          'Smoother range of motion',
          'Naturally present in healing tissue',
        ],
      },
      {
        name: 'KPV',
        image: injuryKpv,
        form: 'Injection',
        description:
          "Your body's own anti-inflammatory signal, isolated from a larger form of the molecule. For gut or skin that is inflamed rather than injured.",
        benefits: [
          'Calms gut inflammation',
          'Soothes inflamed skin',
          'Targeted, not systemic',
          'Covers what repair misses',
        ],
      },
    ],
  },
  {
    name: 'Stress Reduction',
    products: [
      { name: 'Progesterone', image: stressProgesterone, form: 'Injection' },
      {
        name: 'Selank',
        image: stressSelank,
        form: 'Injection',
        featured: true,
        description:
          'Acts on GABA, the system your brain uses to settle itself, without the sedation. A steadier baseline while staying sharp enough to work.',
        benefits: [
          'Calm without feeling foggy',
          'Feel steadier in less than an hour',
          'Can be used as needed',
          'Supports focus by quieting mental noise',
        ],
      },
    ],
  },
  {
    name: 'Cognitive Focus',
    products: [
      {
        name: 'Semax',
        image: cognitiveSemax,
        form: 'Injection',
        description:
          'Raises BDNF, the protein that builds neural connections, and lifts dopamine. Focus and drive without a stimulant.',
        benefits: [
          'Motivation, not just alertness',
          'Not a stimulant, no crash',
          'All-day focus',
          'Supports making new connections in the brain',
        ],
      },
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
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'PT-141 (Bremelanotide)',
        form: 'Injection',
        description:
          "Blood flow medications work on the body's response once desire is there. PT-141 works in the brain, on desire itself.",
        benefits: [
          'Works on desire, not just performance',
          'For women and men',
          'Promotes arousal in the brain',
          'Does not rely on bloodflow',
        ],
      },
    ],
  },
  {
    name: 'Fertility',
    products: [
      {
        name: 'hCG (Human Chorionic Gonadotropin)',
        image: fertilityHcg,
        form: 'Injection',
        description:
          'Mimics the pituitary signal that tells the body to produce its own testosterone, rather than replacing it from outside.',
        benefits: [
          'Triggers natural testosterone production',
          'Restores testicular size and function',
          'Used alongside or in place of TRT',
          'Focus on fertility & reproduction',
        ],
      },
      { name: 'Enclomiphene', image: fertilityEnclomiphene, form: 'Injection', featured: true },
      {
        name: 'FSH (Follicle Stimulating Hormone)',
        image: fertilityRfsh,
        form: 'Injection',
        description:
          'One half of the hormone pair that drives sperm and egg development. Used when the goal is fertility rather than hormone levels.',
        benefits: [
          'Supports sperm and egg development',
          'Works on the fertility directly',
          'Pairs with other fertility support',
          'Used under close monitoring',
        ],
      },
      {
        name: 'Glutathione',
        image: fertilityGlutathione,
        form: 'Injection',
        description:
          "Your body's primary antioxidant, built from three amino acids. Levels fall with age, alcohol, and sustained stress.",
        benefits: [
          "Your body's primary antioxidant",
          'Bypasses digestion for bioavailability',
          "Supports the liver's clearance pathways",
          'Replaces what age and stress deplete',
        ],
      },
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'Gonadorelin',
        form: 'Injection',
        description:
          'A short signal your brain uses to tell the pituitary to keep the reproductive hormone axis running. Used to keep your own production active.',
        benefits: [
          'Supports natural hormone production',
          'Protects testicular function',
          'Focus on fertility & reproduction',
          "Works with your body's own hormone pulses",
        ],
      },
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'hMG (Human Menopausal Gonadotropin)',
        form: 'Injection',
        description:
          'Carries both fertility signals in a single injection, the pair that drives cell maturation and natural testosterone production.',
        benefits: [
          'Both fertility signals in one',
          'Supports sperm production',
          'Supports natural testosterone',
          'Restores fertility after hormone treatments',
        ],
      },
    ],
  },
  {
    name: 'Hair Growth',
    products: [
      { name: 'Minoxidil', image: hairMinoxidil, form: 'Injection' },
      { name: 'Dutasteride', image: hairDutasteride, form: 'Injection', featured: true },
      { name: 'Finasteride', image: hairFinasteride, form: 'Injection' },
      { name: 'GHK-Cu', image: hairGhkCu, form: 'Injection' },
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'PTD-DBM',
        form: 'Topical',
        description:
          'A peptide applied directly to the scalp that works on a signaling pathway involved in the hair growth cycle.',
        benefits: [
          'Targets the hair growth cycle',
          'Applied directly to the scalp',
          'Layers with existing hair protocols',
          'Reactivates dormant follicles',
        ],
      },
    ],
  },
  {
    name: 'Detox',
    products: [
      // No dedicated photo yet — will render a placeholder until real photography exists.
      { name: 'Mycotox Mold Testing', form: 'Lab Test', featured: true },
      {
        name: 'Glutathione',
        image: energyGlutathione,
        form: 'Injection',
        description:
          "Your body's primary antioxidant, built from three amino acids. Levels fall with age, alcohol, and sustained stress.",
        benefits: [
          "Your body's primary antioxidant",
          'Bypasses digestion for bioavailability',
          "Supports the liver's clearance pathways",
          'Replaces what age and stress deplete',
        ],
      },
    ],
  },
  {
    // Products pending — waiting to confirm with the client what goes under Sleep.
    name: 'Sleep',
    products: [
      {
        // No dedicated photo yet — client will generate one and share it.
        name: 'DSIP (Delta Sleep-Inducing Peptide)',
        form: 'Injection',
        description:
          'There is a difference between hours asleep and hours of real sleep. DSIP works on the deep stage where your body repairs itself.',
        benefits: [
          'Wake up feeling rested',
          'Better sleep without sleeping longer',
          'Supports overnight recovery',
          'Works specifically on deep sleep',
        ],
      },
    ],
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
