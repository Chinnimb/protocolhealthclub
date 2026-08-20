#!/bin/bash
set -e
DIR="$(dirname "$0")/../src/assets/figma"
mkdir -p "$DIR"

declare -A ASSETS=(
  [hero-photo.png]="https://www.figma.com/api/mcp/asset/98f9a070-3b0f-4674-880a-84c4b407b66b.png"
  [hero-arrow-icon.svg]="https://www.figma.com/api/mcp/asset/b79213c4-2087-4010-b628-8421bd862d43.svg"
  [hero-check-icon.svg]="https://www.figma.com/api/mcp/asset/1c32b9ba-24c0-45d9-8134-9c346a19588b.svg"
  [logo-part1.svg]="https://www.figma.com/api/mcp/asset/aab09507-ec74-4cfd-8d7a-15b254f63476.svg"
  [logo-part2.svg]="https://www.figma.com/api/mcp/asset/0e8ef587-169d-42bb-83be-716a0b26064f.svg"
  [logo-part3.svg]="https://www.figma.com/api/mcp/asset/de5fc4df-2fec-43d4-b4f2-05d04f2eb95f.svg"

  [range-arrow.png]="https://www.figma.com/api/mcp/asset/febd945f-ebd9-4b94-b8ca-cb121964d1b3.png"
  [range-bar.svg]="https://www.figma.com/api/mcp/asset/b852bf13-2385-4aa3-8fc6-fe4776ea5ffb.svg"
  [range-normal-line.svg]="https://www.figma.com/api/mcp/asset/70145652-bdd8-4562-803b-acea017e70ef.svg"
  [range-optimal-line.svg]="https://www.figma.com/api/mcp/asset/c818904e-174f-4c49-8aef-5f2c35df65f2.svg"

  [venn-glow.svg]="https://www.figma.com/api/mcp/asset/6647ac35-1f4e-42b2-b488-b0a91bf554c5.svg"
  [venn-left-circle.svg]="https://www.figma.com/api/mcp/asset/180b64cf-d69f-42b1-a7a1-9a983bbc1818.svg"
  [venn-right-circle.svg]="https://www.figma.com/api/mcp/asset/b2999339-6c52-4646-a998-8b8ee7f2c2ae.svg"
  [venn-activity-icon.svg]="https://www.figma.com/api/mcp/asset/df2d0943-80f5-4dce-a768-819585e91f54.svg"
  [venn-infinity-icon.svg]="https://www.figma.com/api/mcp/asset/a0ab799b-7012-425c-a6d5-426c0bb00bf0.svg"

  [step2-photo.png]="https://www.figma.com/api/mcp/asset/7a642fcd-0c8a-4b36-b66b-80e5f49ca11a.png"
  [step1-activity-icon.svg]="https://www.figma.com/api/mcp/asset/2b197879-b33a-44e3-a74d-bb9f7a7f709e.svg"
  [step2-eye-icon.svg]="https://www.figma.com/api/mcp/asset/09c0a964-3f9b-40fc-87d9-4ee78408e932.svg"
  [step3-listchecks-icon.svg]="https://www.figma.com/api/mcp/asset/2d2c989d-334c-4097-bdf5-4017365e1057.svg"
  [step4-trendingup-icon.svg]="https://www.figma.com/api/mcp/asset/dd29d34f-e234-4146-9168-d611b62d75b1.svg"

  [optimized-living-photo.png]="https://www.figma.com/api/mcp/asset/534c60e0-0aa2-46df-be8c-c3bb90c0769d.png"
  [optimized-living-glow.svg]="https://www.figma.com/api/mcp/asset/31a159f7-2b22-487e-8d96-c4bf79db611f.svg"
  [optimized-living-ellipse.svg]="https://www.figma.com/api/mcp/asset/f7fc4026-f2e9-485d-bf2d-b44ea0d6cbe4.svg"

  [card-fat-loss.png]="https://www.figma.com/api/mcp/asset/340d099e-7aa6-41d0-bae1-17a0ad50a800.png"
  [card-muscle-growth.png]="https://www.figma.com/api/mcp/asset/e8eb9d9b-cfeb-4ddc-ad0b-379eed02db3d.png"
  [card-energy-boosting.png]="https://www.figma.com/api/mcp/asset/0d565f96-9f90-45af-b577-d3d48e5d069d.png"
  [card-sexual-health.png]="https://www.figma.com/api/mcp/asset/61cb97b0-066f-420d-a93d-a813826bbb3c.png"
  [card-fertility.png]="https://www.figma.com/api/mcp/asset/a470c94a-7596-43e5-9f1b-e11d3f25c0d5.png"
  [card-skin-care.png]="https://www.figma.com/api/mcp/asset/f2bcd8cf-bdc9-4bb2-ad80-69588aeac8e4.png"
  [card-injury-repair.png]="https://www.figma.com/api/mcp/asset/0cd2c115-5a51-44dc-91d8-a7e14e97db23.png"
  [card-anti-aging.png]="https://www.figma.com/api/mcp/asset/ef7a3a5a-3035-48cf-b1f4-cc848ea3ae4b.png"
  [card-gut-health.png]="https://www.figma.com/api/mcp/asset/cada1ec8-2716-40f1-b749-d146761722ab.png"
  [card-hair-growth.png]="https://www.figma.com/api/mcp/asset/f3b24a26-48f0-478f-bc88-e6cb7ccdf441.png"
  [card-stress-reduction.png]="https://www.figma.com/api/mcp/asset/fff32292-adbb-45ee-befd-51d4f6b469aa.png"
  [card-cognitive-focus.png]="https://www.figma.com/api/mcp/asset/e39ac511-a755-4386-9568-65854ca08f87.png"
  [benefits-glow-left.svg]="https://www.figma.com/api/mcp/asset/b5e68c63-a3ed-4780-bb68-fbcff5d78325.svg"
  [benefits-glow-right.svg]="https://www.figma.com/api/mcp/asset/89cf7b9b-7851-4c9e-a6a0-d27e43f243b0.svg"
  [icon-flame.svg]="https://www.figma.com/api/mcp/asset/ae25f2d9-8ef5-4523-8a9e-ad6999373662.svg"
  [icon-dumbbell.svg]="https://www.figma.com/api/mcp/asset/a89f8ae1-cf01-40e1-9a33-afe9b3ba0c68.svg"
  [icon-zap.svg]="https://www.figma.com/api/mcp/asset/8ebb5166-9885-4c9f-aaff-2753be3b446b.svg"
  [icon-heart.svg]="https://www.figma.com/api/mcp/asset/34d55451-60a6-4e49-bb2b-5e587c54465e.svg"
  [icon-sprout.svg]="https://www.figma.com/api/mcp/asset/8357b722-f13f-4d76-903a-d985d7e4f88f.svg"
  [icon-star.svg]="https://www.figma.com/api/mcp/asset/dd1f675a-d6ff-4676-a5c2-3e758fd07404.svg"
  [icon-bandage.svg]="https://www.figma.com/api/mcp/asset/2e05faff-838c-4a5b-9527-ab4b99338f6a.svg"
  [icon-clock.svg]="https://www.figma.com/api/mcp/asset/c37a3895-680b-4569-8b6d-a39edfef54a5.svg"
  [icon-leaf.svg]="https://www.figma.com/api/mcp/asset/0a14bbfe-40b7-436b-b73f-4647d33e0f33.svg"
  [icon-combine.svg]="https://www.figma.com/api/mcp/asset/295e4e0e-3f21-4c4a-82ea-b8e6c9575258.svg"
  [icon-circle-x.svg]="https://www.figma.com/api/mcp/asset/32d369c6-a76e-4d66-822f-4f7c4cc5379d.svg"
  [icon-brain.svg]="https://www.figma.com/api/mcp/asset/82f25cbf-1aca-4716-849a-951da56fcc7e.svg"

  [product-vial.png]="https://www.figma.com/api/mcp/asset/34394d9e-c0f7-4d80-bc84-6e4468b82fad.png"
  [pagination-dots.svg]="https://www.figma.com/api/mcp/asset/91d457d0-3e89-4844-9ca3-e7ed4062b121.svg"
  [chevron-left.svg]="https://www.figma.com/api/mcp/asset/9874ce2b-0852-45b6-8463-af00e9667817.svg"
  [chevron-right.svg]="https://www.figma.com/api/mcp/asset/d947e18b-729f-4856-b50e-d0a8829e7493.svg"

  [testimonial-photo.png]="https://www.figma.com/api/mcp/asset/fdb2686a-fdab-4a37-b7a7-a54e02be1e02.png"
  [faq-chevron-icon.svg]="https://www.figma.com/api/mcp/asset/88f4304a-3572-4c58-9885-1cbf7c878686.svg"
  [final-cta-photo.png]="https://www.figma.com/api/mcp/asset/7ededd5c-5da8-478f-9c53-1e434e92872c.png"

  [footer-logo-part1.svg]="https://www.figma.com/api/mcp/asset/bc166650-6d10-455e-89b3-7b48811eb71d.svg"
  [footer-logo-part2.svg]="https://www.figma.com/api/mcp/asset/7a597329-36f7-42f3-b79b-96d0f749662f.svg"
  [footer-logo-part3.svg]="https://www.figma.com/api/mcp/asset/69ca46c6-f494-49b0-90e2-c0c70bccde60.svg"
)

for name in "${!ASSETS[@]}"; do
  url="${ASSETS[$name]}"
  echo "Downloading $name"
  curl -sL -o "$DIR/$name" "$url"
done

echo "Done. Files:"
ls "$DIR" | wc -l
