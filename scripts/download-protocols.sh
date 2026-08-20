#!/bin/bash
set -e
DIR="$(dirname "$0")/../src/assets/figma/protocols"
mkdir -p "$DIR"

declare -A ASSETS=(
  [fatloss-semaglutide.png]="https://www.figma.com/api/mcp/asset/d8f01887-219e-471a-a2c7-ccf2db7a95ca.png"
  [fatloss-tirzepatide.png]="https://www.figma.com/api/mcp/asset/27e6295e-9161-4b27-bc1d-f364d19cb2ec.png"
  [fatloss-carnitine.png]="https://www.figma.com/api/mcp/asset/8854b26a-0e95-462e-9b4d-e84d3205c3b6.png"
  [fatloss-tesofensine.png]="https://www.figma.com/api/mcp/asset/2af0cbe2-580a-4684-a3f5-5273224ef8e4.png"

  [muscle-tesamorelin.png]="https://www.figma.com/api/mcp/asset/97a0c4c8-f6d3-429c-ad52-d76885a6076a"
  [muscle-sermorelin.png]="https://www.figma.com/api/mcp/asset/2a62c2b4-7653-46c7-9094-b499f0113409.png"
  [muscle-cjc-ipamorelin.png]="https://www.figma.com/api/mcp/asset/d38944bf-e550-4835-9fb2-8bb9f910f520.png"
  [muscle-igf1lr3.png]="https://www.figma.com/api/mcp/asset/c9b33d23-9d31-4c47-be9d-4b1c2f8f478a.png"

  [energy-nad.png]="https://www.figma.com/api/mcp/asset/bf2586ba-a42f-49fb-87af-2a6d0a1ef0de.png"
  [energy-glutathione.png]="https://www.figma.com/api/mcp/asset/ce89bc90-5c71-4d7c-aa6f-22bc04b5e03d.png"
  [energy-ss31.png]="https://www.figma.com/api/mcp/asset/662273ef-e6b5-4748-9d6e-e0dfe7686519.png"
  [energy-thyroid.png]="https://www.figma.com/api/mcp/asset/d67fe2f4-6f37-4cf6-8c0f-293958f227fe.png"

  [sexual-testosterone.png]="https://www.figma.com/api/mcp/asset/f58723b4-2f87-42ef-a82d-4c50eaddc879.png"
  [sexual-estrogen.png]="https://www.figma.com/api/mcp/asset/ea9f6f23-9430-4f5f-88a7-771fbfa52d90.png"
  [sexual-tadalafil.png]="https://www.figma.com/api/mcp/asset/07289df6-8df4-44aa-ad84-87a3a82fc19c.png"
  [sexual-sildenafil.png]="https://www.figma.com/api/mcp/asset/e2de6fd4-7a53-4bd9-8886-f9ca9c0284bd.png"

  [fertility-hcg.png]="https://www.figma.com/api/mcp/asset/dd52357f-41ba-4ffa-a927-798914ee5eb5.png"
  [fertility-enclomiphene.png]="https://www.figma.com/api/mcp/asset/a277b07d-f720-4a02-b80d-99397b3b2f34.png"
  [fertility-rfsh.png]="https://www.figma.com/api/mcp/asset/8c0baec5-5c3a-4ed4-9963-2af4462f6708.png"
  [fertility-glutathione.png]="https://www.figma.com/api/mcp/asset/616476b8-b002-4848-9a8b-313cb6a142da.png"

  [skincare-ghkcu.png]="https://www.figma.com/api/mcp/asset/b8dff515-15ca-4663-92b9-988931ff464f.png"
  [skincare-estradiol.png]="https://www.figma.com/api/mcp/asset/fce3f1c5-34dc-4826-b0e1-0d42d573e725.png"
  [skincare-tretinoin.png]="https://www.figma.com/api/mcp/asset/d6da000b-2d09-45bd-af86-415432a79d07.png"

  [injury-bpc157.png]="https://www.figma.com/api/mcp/asset/f59ebdd2-3d9b-4cf0-8c06-9b002803ac09.png"
  [injury-tb500.png]="https://www.figma.com/api/mcp/asset/66438788-1629-485f-a985-d37b8f302ee7.png"
  [injury-kpv.png]="https://www.figma.com/api/mcp/asset/e72464ad-77da-4548-b25b-926924f49b03.png"

  [antiaging-nad.png]="https://www.figma.com/api/mcp/asset/843e8b06-4ab5-4425-a358-6dc80b031dcd.png"
  [antiaging-glutathione.png]="https://www.figma.com/api/mcp/asset/f48d2a4a-7c29-4600-beed-83f81a0c3b22.png"
  [antiaging-oxytocin.png]="https://www.figma.com/api/mcp/asset/b1868407-3f36-4ecb-acae-eff7bfa0d028.png"
  [antiaging-methyleneblue.png]="https://www.figma.com/api/mcp/asset/c6922069-017d-4d1a-8108-84bf7e530b8f.png"

  [gut-gimaps.png]="https://www.figma.com/api/mcp/asset/e70221be-f66e-4f5a-8277-62b6a9c75622.png"
  [gut-barriertesting.png]="https://www.figma.com/api/mcp/asset/bc6893e3-7a1d-40d8-a763-818a377e08e4.png"
  [gut-foodsensitivity.png]="https://www.figma.com/api/mcp/asset/e1d33f3f-0701-4708-8fff-111293bb37c2.png"

  [hair-minoxidil.png]="https://www.figma.com/api/mcp/asset/9370b2b9-088f-4d87-abaf-57022ceee6d2.png"
  [hair-dutasteride.png]="https://www.figma.com/api/mcp/asset/6022fca0-b973-4437-9d98-be0b7c9f9853.png"
  [hair-finasteride.png]="https://www.figma.com/api/mcp/asset/9a70b6bd-ce96-45ee-89de-d75958358af7.png"
  [hair-ghkcu.png]="https://www.figma.com/api/mcp/asset/5c7aebba-f400-4ac7-923e-82c10af6f6dd.png"

  [stress-progesterone.png]="https://www.figma.com/api/mcp/asset/c3543817-de8e-415f-9a61-2cd2f14633ab.png"
  [stress-selank.png]="https://www.figma.com/api/mcp/asset/43046eaa-4a78-4916-8671-062ce4b82907.png"

  [cognitive-semax.png]="https://www.figma.com/api/mcp/asset/86745a9b-524d-4a79-af31-49ff42b152e9.png"
  [cognitive-dihexa.png]="https://www.figma.com/api/mcp/asset/9e423583-0330-4c6e-8359-37eb761f5d6e.png"
  [cognitive-tesofensine.png]="https://www.figma.com/api/mcp/asset/464a337d-a513-4722-9d42-8289577a6e72.png"
)

for name in "${!ASSETS[@]}"; do
  url="${ASSETS[$name]}"
  echo "Downloading $name"
  curl -sL -o "$DIR/$name" "$url"
done

echo "Done. Files:"
ls "$DIR" | wc -l
