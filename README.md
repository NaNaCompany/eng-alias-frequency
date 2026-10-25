# 샘플링 앨리어스 주파수 계산기

등간격으로 샘플링한 단일 실수 정현파가 0~f_s/2 구간에 나타나는 접힘 주파수 계산.

- ID: E144
- App: https://nanalab.kr/eng-alias-frequency/
- Repository: https://github.com/NaNaCompany/eng-alias-frequency
- Formula: r = f mod f_s; f_alias = min(r, f_s−r)

## Model and data

이상적인 등간격 실수 샘플링과 단일 정현파를 가정합니다. 출력은 부호 없는 접힘 주파수이며 위상·진폭·신호 복원 가능성은 계산하지 않습니다. 정확히 DC나 나이퀴스트 경계인 신호의 관측 진폭은 위상에도 의존합니다. 수치 정밀도를 위해 f/f_s ≤ 2³²로 제한합니다. 실제 아날로그 대역폭과 필터는 별도로 확인하세요.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
