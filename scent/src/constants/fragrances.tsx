type MBTIResult =
  | "ESFP"
  | "ESFJ"
  | "ESTP"
  | "ESTJ"
  | "ENFP"
  | "ENFJ"
  | "ENTP"
  | "ENTJ"
  | "ISFP"
  | "ISFJ"
  | "ISTP"
  | "ISTJ"
  | "INFP"
  | "INFJ"
  | "INTP"
  | "INTJ";

interface FragranceRecommendation {
  type: string;
  description: string;
  male: {
    name: string;
    reason: string;
    notes: string;
    image: string;
  };
  female: {
    name: string;
    reason: string;
    notes: string;
    image: string;
  };
}

export const fragranceRecommendations: Record<
  MBTIResult,
  FragranceRecommendation
> = {
  ESFP: {
    type: "똥꼬발랄한 강아지",
    description:
      "활발하고 자유분방한 ESFP에게는 사교적인 성격을 잘 살리는 향수를 추천합니다.",
    male: {
      name: "Versace Eros",
      reason: "강렬한 향이 ESFP의 에너제틱하고 즐거운 성격과 잘 어울립니다.",
      notes: "민트, 사과, 바닐라",
      image: "/image/VersaceEros.png",
    },
    female: {
      name: "Marc Jacobs Daisy",
      reason: "밝고 경쾌한 플로럴 향이 ESFP의 명랑한 성격을 돋보이게 합니다.",
      notes: "딸기, 자몽, 바닐라",
      image: "/image/MarcJacobsDaisy.png",
    },
  },
  ESFJ: {
    type: "친절한 스케줄러",
    description:
      "주변 사람을 잘 챙기는 ESFJ에게는 따뜻하고 다정한 향수를 추천합니다.",
    male: {
      name: "Dior Sauvage",
      reason: "신뢰감을 주는 상쾌한 향이 ESFJ의 사교적인 성격을 반영합니다.",
      notes: "베르가못, 라벤더, 앰버",
      image: "/image/DiorSauvage.png",
    },
    female: {
      name: "Chanel Chance Eau Tendre",
      reason:
        "부드럽고 우아한 플로럴 향이 ESFJ의 배려심 많고 섬세한 면을 잘 표현해줍니다.",
      notes: "자몽, 재스민, 화이트 머스크",
      image: "/image/ChanelChanceEauTendre.png",
    },
  },
  ESTP: {
    type: "시끄러운 자유인",
    description:
      "리더십이 강하고 모험을 즐기는 ESTP에게는 강렬하고 대담한 향수를 추천합니다.",
    male: {
      name: "Paco Rabanne 1 Million",
      reason: "강렬하고 관능적인 향이 ESTP의 대담한 성격을 잘 드러냅니다.",
      notes: "계피, 만다린, 가죽",
      image: "/image/PacoRabanneInvictus.png",
    },
    female: {
      name: "Yves Saint Laurent Black Opium",
      reason:
        "대담하고 섹시한 향이 ESTP의 열정적이고 외향적인 성격과 잘 어울립니다.",
      notes: "커피, 바닐라, 자스민",
      image: "/image/YSLBlackOpium.png",
    },
  },
  ESTJ: {
    type: "책임지는 리더",
    description:
      "체계적이고 현실적인 ESTJ에게는 클래식하면서도 믿음직한 향수를 추천합니다.",
    male: {
      name: "Bleu de Chanel",
      reason:
        "카리스마 있고 안정적인 향이 ESTJ의 리더십과 성실한 면모를 잘 반영합니다.",
      notes: "레몬, 시더우드, 샌달우드",
      image: "/image/BleuDeChanel.png",
    },
    female: {
      name: "Tom Ford White Patchouli",
      reason:
        "우아하고 고급스러운 향이 ESTJ의 깔끔하고 자신감 있는 성격에 어울립니다.",
      notes: "패출리, 자스민, 장미",
      image: "/image/TomFordWhitePatchouli.png",
    },
  },
  ENFP: {
    type: "호기심 많은 꿈쟁이",
    description:
      "창의적이고 활발한 ENFP에게는 기분을 고조시키는 독특한 향수를 추천합니다.",
    male: {
      name: "Jean Paul Gaultier Le Male",
      reason:
        "달콤하면서도 신선한 향이 ENFP의 자유롭고 창의적인 성격과 잘 어울립니다.",
      notes: "라벤더, 바닐라, 민트",
      image: "/image/JeanPaulGaultierLeMale.png",
    },
    female: {
      name: "Dolce & Gabbana Light Blue",
      reason: "상쾌하고 활기찬 향이 ENFP의 밝고 긍정적인 성격을 잘 표현합니다.",
      notes: "시트러스, 백합, 머스크",
      image: "/image/DolceAndGabbanaLightBlue.png",
    },
  },
  ENFJ: {
    type: "핵인싸 리더",
    description:
      "친화력이 뛰어난 ENFJ에게는 부드럽고 따뜻한 향수를 추천합니다.",
    male: {
      name: "Giorgio Armani Acqua di Giò",
      reason: "따뜻하고 신선한 향이 ENFJ의 친절하고 다정한 성격과 잘 맞습니다.",
      notes: "바다 향, 레몬, 로즈마리",
      image: "/image/GiorgioArmaniAcquaDiGio.png",
    },
    female: {
      name: "Lancome La Vie Est Belle",
      reason:
        "달콤하면서도 우아한 향이 ENFJ의 따뜻하고 사교적인 성격을 돋보이게 합니다.",
      notes: "바닐라, 자스민, 오렌지 블라썸",
      image: "/image/LancomeLaVieEstBelle.png",
    },
  },
  ENTP: {
    type: "모 아니면 도",
    description:
      "독립적이고 논리적인 ENTP에게는 독특하고 창의적인 향수를 추천합니다.",
    male: {
      name: "Comme des Garçons Blackpepper",
      reason:
        "강렬하고 독특한 향이 ENTP의 혁신적이고 도전적인 성격을 반영합니다.",
      notes: "블랙페퍼, 머스크, 시더우드",
      image: "/image/CommedesGarconsWonderwood.png",
    },
    female: {
      name: "Byredo Gypsy Water",
      reason: "자유롭고 독창적인 향이 ENTP의 독립적인 성향을 잘 표현합니다.",
      notes: "베르가못, 주니퍼, 샌달우드",
      image: "/image/ByredoGypsyWater.png",
    },
  },
  ENTJ: {
    type: "자기주장 강한 리더",
    description: "결단력 있고 자신감 넘치는 ENTJ에게는 강렬한 향을 추천합니다.",
    male: {
      name: "Tom Ford Oud Wood",
      reason:
        "우디하고 대담한 향이 ENTJ의 카리스마 넘치는 성격과 잘 어울립니다.",
      notes: "오드, 바닐라, 앰버",
      image: "/image/TomFordOudWood.png",
    },
    female: {
      name: "Chanel Coco Mademoiselle",
      reason: "강렬하고 세련된 향이 ENTJ의 주도적인 성향을 돋보이게 합니다.",
      notes: "오렌지, 장미, 바닐라",
      image: "/image/ChanelCocoMademoiselle.png",
    },
  },
  ISFP: {
    type: "자유로운 예술가",
    description:
      "감성적이고 자유로운 ISFP에게는 자연을 연상시키는 향수를 추천합니다.",
    male: {
      name: "Creed Green Irish Tweed",
      reason: "신선하고 자연적인 향이 ISFP의 예술적인 감성을 잘 표현합니다.",
      notes: "레몬, 베르가못, 우디",
      image: "/image/CreedGreenIrishTweed.png",
    },
    female: {
      name: "Jo Malone Wood Sage & Sea Salt",
      reason: "자연스럽고 시원한 향이 ISFP의 자유로운 성격과 잘 맞습니다.",
      notes: "바다 소금, 세이지, 머스크",
      image: "/image/JoMaloneWoodSageSeaSalt.png",
    },
  },
  ISFJ: {
    type: "따뜻한 수호자",
    description:
      "세심하고 따뜻한 ISFJ에게는 부드럽고 안정감 있는 향수를 추천합니다.",
    male: {
      name: "Hugo Boss Bottled",
      reason: "따뜻하고 편안한 향이 ISFJ의 배려심 깊은 성격을 돋보이게 합니다.",
      notes: "사과, 계피, 바닐라",
      image: "/image/HugoBossBottled.png",
    },
    female: {
      name: "Gucci Bloom",
      reason: "부드럽고 풍성한 플로럴 향이 ISFJ의 따뜻한 성향을 잘 표현합니다.",
      notes: "자스민, 튜베로즈, 아이리스",
      image: "/image/GucciBloom.png",
    },
  },
  ISTP: {
    type: "논리적인 모험가",
    description:
      "효율적이고 실용적인 ISTP에게는 상쾌하고 깔끔한 향수를 추천합니다.",
    male: {
      name: "Montblanc Explorer",
      reason: "모험적인 향이 ISTP의 활동적이고 실용적인 성격과 잘 맞습니다.",
      notes: "베르가못, 베티버, 파촐리",
      image: "/image/MontblancExplorer.png",
    },
    female: {
      name: "Hermès Terre d'Hermès Eau Très Fraîche",
      reason: "깔끔하고 상쾌한 향이 ISTP의 효율적인 성향을 잘 반영합니다.",
      notes: "자몽, 오렌지, 우디",
      image: "/image/HermesTerred'HermesEaudeToilette.png",
    },
  },
  ISTJ: {
    type: "책임감 있는 현실주의자",
    description:
      "실용적이고 성실한 ISTJ에게는 클래식하고 신뢰감을 주는 향수를 추천합니다.",
    male: {
      name: "Dolce & Gabbana The One for Men",
      reason:
        "클래식하고 남성적인 향이 ISTJ의 책임감 있는 성향을 잘 반영합니다.",
      notes: "담배, 우디, 스파이시",
      image: "/image/DolceAndGabbanaTheOneForMen.png",
    },
    female: {
      name: "Elizabeth Arden White Tea",
      reason:
        "깨끗하고 상쾌한 향이 ISTJ의 실용적이고 단정한 성격을 잘 표현합니다.",
      notes: "화이트 티, 머스크, 시트러스",
      image: "/image/ElizabethArdenWhiteTea.png",
    },
  },
  INFP: {
    type: "이상적인 몽상가",
    description:
      "감성적이고 상상력이 풍부한 INFP에게는 독창적이고 감미로운 향수를 추천합니다.",
    male: {
      name: "Loewe 001 Man",
      reason: "부드럽고 몽환적인 향이 INFP의 예술적인 성향과 잘 어울립니다.",
      notes: "베르가못, 샌달우드, 앰버",
      image: "/image/Loewe001Man.png",
    },
    female: {
      name: "Maison Margiela Replica Lazy Sunday Morning",
      reason: "포근하고 부드러운 향이 INFP의 내면적인 성향을 잘 반영합니다.",
      notes: "백합, 머스크, 페어",
      image: "/image/SundayMorning.png",
    },
  },
  INFJ: {
    type: "선견지명이 있는 조언자",
    description:
      "직관적이고 깊은 INFJ에게는 신비롭고 따뜻한 향수를 추천합니다.",
    male: {
      name: "Byredo Bal d'Afrique",
      reason: "따뜻하고 신비로운 향이 INFJ의 깊이 있는 성향과 잘 어울립니다.",
      notes: "레몬, 베티버, 머스크",
      image: "/image/ByredoBald'Afrique.png",
    },
    female: {
      name: "Le Labo Santal 33",
      reason: "우디하고 따뜻한 향이 INFJ의 내면적인 깊이를 잘 반영합니다.",
      notes: "샌달우드, 시더우드, 바이올렛",
      image: "/image/LeLaboSantal33.png",
    },
  },
  INTP: {
    type: "호기심 많은 철학자",
    description:
      "논리적이고 지적인 INTP에게는 신선하고 독창적인 향수를 추천합니다.",
    male: {
      name: "Prada L'Homme",
      reason:
        "깔끔하고 신선한 향이 INTP의 논리적이고 지적인 성향을 잘 표현합니다.",
      notes: "아이리스, 앰버, 네롤리",
      image: "/image/PradaL'Homme.png",
    },
    female: {
      name: "Diptyque Philosykos",
      reason:
        "독창적이고 자연스러운 향이 INTP의 개성적이고 창의적인 성향과 잘 맞습니다.",
      notes: "무화과, 우디, 그린",
      image: "/image/DiptyquePhilosykos.png",
    },
  },
  INTJ: {
    type: "고독한 설계자",
    description:
      "논리적이고 계획적인 INTJ에게는 복잡하고 세련된 향수를 추천합니다.",
    male: {
      name: "Amouage Interlude Man",
      reason:
        "복잡하고 세련된 향이 INTJ의 전략적이고 주도적인 성향을 반영합니다.",
      notes: "우디, 스파이시",
      image: "/image/AmouageInterludeMan.png",
    },
    female: {
      name: "Tom Ford Black Orchid",
      reason:
        "강렬하고 고급스러운 향이 INTJ의 계획적이고 내향적인 성향에 어울립니다.",
      notes: "오리엔탈, 초콜릿, 파출리",
      image: "/image/TomFordBlackOrchid.png",
    },
  },
};
