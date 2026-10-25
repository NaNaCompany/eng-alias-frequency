export const tool={
  "id": "E144",
  "slug": "eng-alias-frequency",
  "title": "샘플링 앨리어스 주파수 계산기",
  "title_en": "Sampling Alias Frequency Calculator",
  "category": "신호·샘플링",
  "category_en": "Signals and sampling",
  "fields": [
    {
      "key": "f",
      "label": "연속 입력 주파수 f",
      "label_en": "Continuous input frequency f",
      "dimension": "frequency",
      "example": 1700,
      "constraint": "nonnegative",
      "display_unit": "Hz",
      "display_value": "1700"
    },
    {
      "key": "fs",
      "label": "샘플링 주파수 f_s",
      "label_en": "Sampling frequency f_s",
      "dimension": "frequency",
      "example": 1000,
      "constraint": "positive",
      "display_unit": "Hz",
      "display_value": "1000"
    }
  ],
  "result_label": "첫 나이퀴스트 구간의 주파수 f_alias",
  "result_label_en": "Frequency in the first Nyquist zone f_alias",
  "result_dimension": "frequency",
  "formula": "r = f mod f_s; f_alias = min(r, f_s−r)",
  "purpose": "등간격으로 샘플링한 단일 실수 정현파가 0~f_s/2 구간에 나타나는 접힘 주파수 계산.",
  "purpose_en": "Fold a uniformly sampled real sinusoid into the frequency interval from zero to half the sampling rate.",
  "assumptions": "이상적인 등간격 실수 샘플링과 단일 정현파를 가정합니다. 출력은 부호 없는 접힘 주파수이며 위상·진폭·신호 복원 가능성은 계산하지 않습니다. 정확히 DC나 나이퀴스트 경계인 신호의 관측 진폭은 위상에도 의존합니다. 수치 정밀도를 위해 f/f_s ≤ 2³²로 제한합니다. 실제 아날로그 대역폭과 필터는 별도로 확인하세요.",
  "assumptions_en": "Required: ideal uniform sampling of a single real sinusoid. The result is its unsigned folded frequency; phase, amplitude and recoverability are outside this model. At DC or the Nyquist boundary, observed amplitude also depends on phase. This tool limits f/f_s to 2³² to protect numerical precision. The actual analog input bandwidth and filters require separate checks.",
  "sources": [
    {
      "label": "Analog Devices — AC and DC Data Acquisition Signal Chains Made Easy, sampling",
      "url": "https://www.analog.com/en/resources/analog-dialogue/articles/ac-and-dc-data-acquisition-signal-chains-made-easy.html"
    }
  ],
  "condition": "실수 정현파의 등간격 샘플링 조건을 확인했습니다.",
  "condition_en": "I have checked the uniformly sampled real-sinusoid model.",
  "site": "https://nanalab.kr/eng-alias-frequency/",
  "repository": "https://github.com/NaNaCompany/eng-alias-frequency",
  "groups": [],
  "output_unit": "Hz"
};
