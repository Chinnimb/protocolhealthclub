import { Activity, Droplet, Flame, Heart, Shield, Sparkles, Sun, TrendingUp, Zap } from 'lucide-react'

export const performancePanel = {
  title: 'Performance Panel',
  price: '$299',
  checkoutUrl: 'https://intake.protocolhealthclub.com/general-health-page',
  description:
    'Key hormones, energy, body composition, strength, and recovery. Excellent plan for performance and general stats.',
  mobileSummary: {
    label: 'KEY TESTED AREAS:',
    count: '60+ Biomarkers Total',
    items: ['Hormones & Sex Health', 'Lipids & Heart Health', 'Liver & Kidney Health', 'Metabolic Markers'],
  },
  biomarkerGroups: {
    title: '60+ Biomarkers Total',
    subtitle: 'A deeper look at the signals behind energy, metabolism, recovery, and overall health.',
    groups: [
      { icon: Sparkles, name: 'Hormones', items: 'DHEA, Testosterone, Estradiol, Cortisol, Thyroid panel & more.' },
      { icon: Heart, name: 'Lipids & Cholesterol', items: 'LDL, HDL, Triglycerides, Total Cholesterol, ApoB & more.' },
      { icon: Shield, name: 'Liver & Kidney Function', items: 'ALT, AST, GGT, Bilirubin, Creatinine, BUN & more.' },
      { icon: Activity, name: 'Metabolic Health', items: 'Glucose, HbA1c, Insulin, HOMA-IR, Uric Acid & more.' },
      { icon: Sun, name: 'Nutrient Status', items: 'Vitamin D, B12, Folate, Iron, Ferritin, Magnesium & more.' },
      { icon: Flame, name: 'Inflammation', items: 'CRP, ESR, Homocysteine, IL-6, TNF-alpha & more.' },
    ],
  },
  categories: [
    {
      name: 'Inflammation',
      items: [
        'Neutrophils',
        'Monocytes (Absolute)',
        'Eos (Absolute)',
        'Lymphs (Absolute)',
        'Baso (Absolute)',
        'NRBCs',
        'Promyelocytes (Absolute)',
        'Monocytes',
        'Bands',
        'Metamyelocytes',
        'Myelocytes',
        'Megakaryocytes',
      ],
    },
    {
      name: 'Blood Markers',
      items: ['RBC', 'Hemoglobin', 'Hematocrit', 'Platelet', 'Basops', 'WBC', 'MCH', 'MCV', 'MCHC'],
    },
    {
      name: 'Kidney Function and Health',
      items: ['BUN', 'eGFR', 'Creatinine', 'Bilirubin Total', 'BUN/Creatinine Ratio', 'Protein Total'],
    },
    {
      name: 'Liver Function and Health',
      items: ['AST (SGOT)', 'ALT (SGPT)', 'Albumin', 'Alkaline Phosphatase', 'A/G Ratio', 'Globulin Total'],
    },
    {
      name: 'Metabolic Health',
      items: ['Glucose', 'A1c', 'Mean Plasma Glucose'],
    },
    {
      name: 'Thyroid Function',
      items: ['TSH', 'T3 (Free)', 'T4 (Free)'],
    },
    {
      name: 'Electrolyte & Fluid Balance',
      items: ['Carbon Dioxide Total', 'Potassium', 'Sodium'],
    },
    {
      name: 'General Health',
      items: [
        'Prostate-specific antigen (PSA) % Free (male)',
        'Prostate-specific antigen (PSA) Free (male)',
        'Prostate-specific antigen (PSA) Total (male)',
      ],
    },
    {
      name: 'Sex Hormones',
      items: ['Estradiol', 'Progesterone (Female)', 'Testosterone (Free)', 'Testosterone (Total)', 'SHBG'],
    },
  ],
}

export const pinnaclePanel = {
  title: 'Pinnacle Panel',
  price: '$499',
  badge: 'MOST POPULAR',
  checkoutUrl: 'https://intake.protocolhealthclub.com/pinnacle',
  description:
    'Everything in Performance plus comprehensive longevity and metabolic markers for those who want the full picture.',
  biomarkerGroups: {
    title: '100+ Biomarkers Total',
    subtitle:
      'The most comprehensive panel for hormones, metabolism, longevity, inflammation, nutrient status, and long-term health risk.',
    groups: [
      { icon: Activity, name: 'Performance Foundations', items: 'Hormones, Lipids & Cholesterol, Liver & Kidney Function, Metabolic Health' },
      { icon: Shield, name: 'Thyroid & Antibodies', items: 'TSH, Free T3, Free T4, Thyroid Antibodies (TPO, TG)' },
      { icon: Droplet, name: 'Electrolytes & Fluid Balance', items: 'Sodium, Potassium, Chloride, Bicarbonate, Calcium, Magnesium' },
      { icon: Zap, name: 'Longevity & Disease Risk', items: 'ApoB, Lp(a), hsCRP, HbA1c, Insulin, Homocysteine, Uric Acid' },
      { icon: Sun, name: 'Nutrients & Recovery', items: 'Vitamin D, B12, Folate, Iron, Ferritin, Zinc, Omega-3 Index' },
      { icon: TrendingUp, name: 'Full Longevity Panel', items: 'All biomarkers included — comprehensive longevity & wellness panel' },
    ],
  },
  mobileSummary: {
    label: 'COMPREHENSIVE TESTING INCLUDES:',
    count: '100+ Biomarkers Total',
    items: ['Thyroid & Thyroid Antibodies', 'Electrolytes & Fluid Balance', 'Full Longevity Panel'],
  },
  categories: [
    {
      name: 'Inflammation',
      items: [
        'Neutrophils',
        'Monocytes (Absolute)',
        'Eos (Absolute)',
        'Lymphs (Absolute)',
        'Baso (Absolute)',
        'NRBCs',
        'Promyelocytes (Absolute)',
        'Monocytes',
        'Bands',
        'Metamyelocytes',
        'Myelocytes',
        'Megakaryocytes',
      ],
    },
    {
      name: 'Blood Markers',
      items: ['RBC', 'Hemoglobin', 'Hematocrit', 'Platelet', 'Basops', 'WBC', 'MCH', 'MCV', 'MCHC'],
    },
    {
      name: 'Electrolyte & Fluid Balance',
      items: ['Carbon Dioxide Total', 'Calcium', 'Potassium', 'Sodium'],
    },
    {
      name: 'Heart Health',
      items: [
        'Triglycerides',
        'Total Cholesterol',
        'HDL Cholesterol',
        'Non-HDL Cholesterol',
        'Total Cholesterol/HDL Ratio',
        'LDL Cholesterol',
        'LDL/HDL Ratio',
      ],
    },
    {
      name: 'Urinalysis',
      items: [
        'Specific Gravity',
        'Turbidity',
        'pH',
        'Heme/Urine',
        'Occult Blood',
        'Protein',
        'Leukocyte Esterase',
        'Squamous Epithelial Cells',
        'Transitional Epithelial Cells',
        'Renal Epithelial Cells',
        'Bacteria',
        'Mucous',
        'Triple Phosphate Crystals',
        'Amorphous Sediment',
        'Hyaline Casts',
        'Creatinine',
        'Appearance',
        'Glucose Urine',
      ],
    },
    {
      name: 'Kidney Function and Health',
      items: ['BUN', 'eGFR', 'Creatinine', 'Bilirubin Total', 'BUN/Creatinine Ratio', 'Protein Total', 'RBAC Urine'],
    },
    {
      name: 'Liver Function and Health',
      items: ['AST (SGOT)', 'ALT (SGPT)', 'Albumin', 'Alkaline Phosphatase', 'A/G Ratio', 'Globulin Total'],
    },
    {
      name: 'Metabolic Health',
      items: ['Glucose', 'A1c', 'Mean Plasma Glucose', 'Hemoglobin A1c'],
    },
    {
      name: 'Thyroid Function',
      items: ['TSH', 'T3 (Free)', 'T4 (Free)', 'Thyroglobulin'],
    },
    {
      name: 'Muscle Growth and Recovery',
      items: ['Creatine Kinase', 'CRP'],
    },
    {
      name: 'General Health',
      items: [
        'Prostate-specific antigen (PSA) % Free (male)',
        'Prostate-specific antigen (PSA) Free (male)',
        'Prostate-specific antigen (PSA) Total (male)',
      ],
    },
    {
      name: 'Sex Hormones',
      items: [
        'Estradiol',
        'Progesterone (Female)',
        'Testosterone (Free)',
        'Testosterone (Total)',
        'SHBG',
        'HDL Cholesterol',
        'LDL Cholesterol',
      ],
    },
  ],
}
