const kanjiData = [
    {
        kanji: "日",
        readings: {
            onyomi: ["ニチ", "ジツ"],
            kunyomi: ["ひ", "び", "か"]
        }
    },
    {
        kanji: "一",
        readings: {
            onyomi: ["イチ"],
            kunyomi: ["ひと"]
        }
    },
    {
        kanji: "国",
        readings: {
            onyomi: ["コク"],
            kunyomi: ["くに"]
        }
    },
    {
        kanji: "人",
        readings: {
            onyomi: ["ジン", "ニン"],
            kunyomi: ["ひと"]
        }
    },
    {
        kanji: "年",
        readings: {
            onyomi: ["ネン"],
            kunyomi: ["とし"]
        }
    },
    {
        kanji: "月",
        readings: {
            onyomi: ["ゲツ", "ガツ"],
            kunyomi: ["つき"]
        }
    },
    {
        kanji: "時",
        readings: {
            onyomi: ["ジ"],
            kunyomi: ["とき"]
        }
    },
    {
        kanji: "間",
        readings: {
            onyomi: ["カン"],
            kunyomi: ["あいだ", "ま"]
        }
    },
    {
        kanji: "行",
        readings: {
            onyomi: ["コウ", "ギョウ", "アン"],
            kunyomi: ["いく", "おこなう"]
        }
    },
    {
        kanji: "分",
        readings: {
            onyomi: ["ブン", "フン"],
            kunyomi: ["わける", "ふん", "ぶん"]
        }
    },
    {
        kanji: "見",
        readings: {
            onyomi: ["ケン"],
            kunyomi: ["みる", "みせる"]
        }
    },
    {
        kanji: "山",
        readings: {
            onyomi: ["サン"],
            kunyomi: ["やま"]
        }
    },
    {
        kanji: "川",
        readings: {
            onyomi: ["セン"],
            kunyomi: ["かわ"]
        }
    },
    {
        kanji: "水",
        readings: {
            onyomi: ["スイ"],
            kunyomi: ["みず", "み"]
        }
    },
    {
        kanji: "火",
        readings: {
            onyomi: ["カ"],
            kunyomi: ["ひ"]
        }
    },
    {
        kanji: "木",
        readings: {
            onyomi: ["モク"],
            kunyomi: ["き"]
        }
    },
    {
        kanji: "田",
        readings: {
            onyomi: ["デン"],
            kunyomi: ["た"]
        }
    },
    {
        kanji: "雨",
        readings: {
            onyomi: ["ウ"],
            kunyomi: ["あめ", "あま"]
        }
    },
    {
        kanji: "子",
        readings: {
            onyomi: ["シ"],
            kunyomi: ["こ"]
        }
    },
    {
        kanji: "女",
        readings: {
            onyomi: ["ジョ", "ニョ"],
            kunyomi: ["おんな", "め"]
        }
    },
    {
        kanji: "男",
        readings: {
            onyomi: ["ナン", "ダン"],
            kunyomi: ["おとこ"]
        }
    },
    {
        kanji: "父",
        readings: {
            onyomi: ["フ"],
            kunyomi: ["ちち"]
        }
    },
    {
        kanji: "母",
        readings: {
            onyomi: ["ボ"],
            kunyomi: ["はは"]
        }
    },
    {
        kanji: "友",
        readings: {
            onyomi: ["ユウ"],
            kunyomi: ["とも"]
        }
    },
    {
        kanji: "手",
        readings: {
            onyomi: ["シュ"],
            kunyomi: ["て", "た"]
        }
    },
    {
        kanji: "口",
        readings: {
            onyomi: ["コウ"],
            kunyomi: ["くち"]
        }
    },
    {
        kanji: "目",
        readings: {
            onyomi: ["モク"],
            kunyomi: ["め"]
        }
    },
    {
        kanji: "耳",
        readings: {
            onyomi: ["ジ"],
            kunyomi: ["みみ"]
        }
    },
    {
        kanji: "足",
        readings: {
            onyomi: ["ソク"],
            kunyomi: ["あし"]
        }
    },
    {
        kanji: "馬",
        readings: {
            onyomi: ["バ"],
            kunyomi: ["うま"]
        }
    },
    {
        kanji: "魚",
        readings: {
            onyomi: ["ギョ"],
            kunyomi: ["さかな"]
        }
    },
    {
        kanji: "鳥",
        readings: {
            onyomi: ["チョウ"],
            kunyomi: ["とり"]
        }
    },
    {
        kanji: "虫",
        readings: {
            onyomi: ["チュウ"],
            kunyomi: ["むし"]
        }
    },
    {
        kanji: "大",
        readings: {
            onyomi: ["ダイ", "タイ"],
            kunyomi: ["おおきい", "おおい"]
        }
    },
    {
        kanji: "小",
        readings: {
            onyomi: ["ショウ"],
            kunyomi: ["ちいさい"]
        }
    },
    {
        kanji: "中",
        readings: {
            onyomi: ["チュウ"],
            kunyomi: ["なか"]
        }
    },
    {
        kanji: "上",
        readings: {
            onyomi: ["ジョウ", "シャン"],
            kunyomi: ["うえ", "あがる", "あげる"]
        }
    },
    {
        kanji: "下",
        readings: {
            onyomi: ["カ", "ゲ"],
            kunyomi: ["した", "さがる", "くだる"]
        }
    },
    {
        kanji: "前",
        readings: {
            onyomi: ["ゼン"],
            kunyomi: ["まえ"]
        }
    },
    {
        kanji: "後",
        readings: {
            onyomi: ["ゴ"],
            kunyomi: ["うしろ", "あと"]
        }
    },
    {
        kanji: "左",
        readings: {
            onyomi: ["サ"],
            kunyomi: ["ひだり"]
        }
    },
    {
        kanji: "右",
        readings: {
            onyomi: ["ウ"],
            kunyomi: ["みぎ"]
        }
    },
    {
        kanji: "長",
        readings: {
            onyomi: ["チョウ"],
            kunyomi: ["ながい", "おさ"]
        }
    },
    {
        kanji: "円",
        readings: {
            onyomi: ["エン"],
            kunyomi: ["まるい", "まる"]
        }
    },
    {
        kanji: "本",
        readings: {
            onyomi: ["ホン"],
            kunyomi: ["もと"]
        }
    },
    {
        kanji: "今",
        readings: {
            onyomi: ["コン"],
            kunyomi: ["いま"]
        }
    },
    {
        kanji: "新",
        readings: {
            onyomi: ["シン"],
            kunyomi: ["あたらし"]
        }
    },
    {
        kanji: "高",
        readings: {
            onyomi: ["コウ"],
            kunyomi: ["たかい"]
        }
    },
    {
        kanji: "低",
        readings: {
            onyomi: ["テイ"],
            kunyomi: ["ひくい"]
        }
    },
    {
        kanji: "早",
        readings: {
            onyomi: ["ソウ"],
            kunyomi: ["はやい"]
        }
    },
    {
        kanji: "遅",
        readings: {
            onyomi: ["チ"],
            kunyomi: ["おそい"]
        }
    },
    {
        kanji: "明",
        readings: {
            onyomi: ["メイ", "ミョウ"],
            kunyomi: ["あかるい", "あける", "あきらか"]
        }
    },
    {
        kanji: "暗",
        readings: {
            onyomi: ["アン"],
            kunyomi: ["くらい"]
        }
    },
    {
        kanji: "白",
        readings: {
            onyomi: ["ハク", "ビャク"],
            kunyomi: ["しろい", "しろ"]
        }
    },
    {
        kanji: "黒",
        readings: {
            onyomi: ["コク"],
            kunyomi: ["くろい", "くろ"]
        }
    },
    {
        kanji: "赤",
        readings: {
            onyomi: ["セキ", "シャク"],
            kunyomi: ["あかい", "あか"]
        }
    },
    {
        kanji: "青",
        readings: {
            onyomi: ["セイ", "ショウ"],
            kunyomi: ["あおい", "あお"]
        }
    },
    {
        kanji: "黄",
        readings: {
            onyomi: ["オウ"],
            kunyomi: ["き"]
        }
    },
    {
        kanji: "緑",
        readings: {
            onyomi: ["リョク"],
            kunyomi: ["みどり"]
        }
    },
    {
        kanji: "紫",
        readings: {
            onyomi: ["シ"],
            kunyomi: ["むらさき"]
        }
    },
    {
        kanji: "金",
        readings: {
            onyomi: ["キン"],
            kunyomi: ["かね", "きん"]
        }
    },
    {
        kanji: "銀",
        readings: {
            onyomi: ["ギン"],
            kunyomi: ["しろがね"]
        }
    },
    {
        kanji: "玉",
        readings: {
            onyomi: ["ギョク", "ダマ"],
            kunyomi: ["たま", "たまご"]
        }
    },
    {
        kanji: "石",
        readings: {
            onyomi: ["セキ", "シャク"],
            kunyomi: ["いし"]
        }
    },
    {
        kanji: "土",
        readings: {
            onyomi: ["ド"],
            kunyomi: ["つち"]
        }
    },
    {
        kanji: "地",
        readings: {
            onyomi: ["チ"],
            kunyomi: ["じ"]
        }
    },
    {
        kanji: "空",
        readings: {
            onyomi: ["クウ"],
            kunyomi: ["そら"]
        }
    },
    {
        kanji: "風",
        readings: {
            onyomi: ["フウ", "フ"],
            kunyomi: ["かぜ"]
        }
    },
    {
        kanji: "雲",
        readings: {
            onyomi: ["ウン"],
            kunyomi: ["くも"]
        }
    },
    {
        kanji: "雪",
        readings: {
            onyomi: ["セツ"],
            kunyomi: ["ゆき"]
        }
    },
    {
        kanji: "電",
        readings: {
            onyomi: ["デン"],
            kunyomi: ["いかずち"]
        }
    },
    {
        kanji: "気",
        readings: {
            onyomi: ["キ"],
            kunyomi: ["き"]
        }
    },
    {
        kanji: "花",
        readings: {
            onyomi: ["カ"],
            kunyomi: ["はな"]
        }
    },
    {
        kanji: "草",
        readings: {
            onyomi: ["ソウ"],
            kunyomi: ["くさ"]
        }
    },
    {
        kanji: "木",
        readings: {
            onyomi: ["モク"],
            kunyomi: ["き"]
        }
    },
    {
        kanji: "林",
        readings: {
            onyomi: ["リン"],
            kunyomi: ["はやし"]
        }
    },
    {
        kanji: "森",
        readings: {
            onyomi: ["シン"],
            kunyomi: ["もり"]
        }
    },
    {
        kanji: "竹",
        readings: {
            onyomi: ["チク"],
            kunyomi: ["たけ"]
        }
    },
    {
        kanji: "茶",
        readings: {
            onyomi: ["チャ"],
            kunyomi: ["ちゃ", "さ"]
        }
    },
    {
        kanji: "米",
        readings: {
            onyomi: ["ベイ", "マイ"],
            kunyomi: ["こめ"]
        }
    },
    {
        kanji: "食",
        readings: {
            onyomi: ["ショク"],
            kunyomi: ["たべる", "く"]
        }
    },
    {
        kanji: "飲",
        readings: {
            onyomi: ["イン"],
            kunyomi: ["のむ"]
        }
    },
    {
        kanji: "話",
        readings: {
            onyomi: ["ワ"],
            kunyomi: ["はなす"]
        }
    },
    {
        kanji: "読",
        readings: {
            onyomi: ["ドク"],
            kunyomi: ["よ"]
        }
    },
    {
        kanji: "書",
        readings: {
            onyomi: ["ショ"],
            kunyomi: ["か"]
        }
    },
    {
        kanji: "学",
        readings: {
            onyomi: ["ガク"],
            kunyomi: ["まな"]
        }
    },
    {
        kanji: "習",
        readings: {
            onyomi: ["シュウ"],
            kunyomi: ["なら"]
        }
    },
    {
        kanji: "会",
        readings: {
            onyomi: ["カイ"],
            kunyomi: ["あ"]
        }
    },
    {
        kanji: "社",
        readings: {
            onyomi: ["シャ"],
            kunyomi: ["やしろ"]
        }
    },
    {
        kanji: "校",
        readings: {
            onyomi: ["コウ"],
            kunyomi: ["こう"]
        }
    },
    {
        kanji: "病",
        readings: {
            onyomi: ["ビョウ"],
            kunyomi: ["やまい"]
        }
    },
    {
        kanji: "医",
        readings: {
            onyomi: ["イ"],
            kunyomi: ["いや"]
        }
    },
    {
        kanji: "車",
        readings: {
            onyomi: ["シャ"],
            kunyomi: ["くるま"]
        }
    },
    {
        kanji: "飛",
        readings: {
            onyomi: ["ヒ"],
            kunyomi: ["とぶ"]
        }
    },
    {
        kanji: "走",
        readings: {
            onyomi: ["ソウ"],
            kunyomi: ["はし"]
        }
    },
    {
        kanji: "道",
        readings: {
            onyomi: ["ドウ"],
            kunyomi: ["みち"]
        }
    },
    {
        kanji: "家",
        readings: {
            onyomi: ["カ", "ケ"],
            kunyomi: ["いえ", "や"]
        }
    },
    {
        kanji: "店",
        readings: {
            onyomi: ["テン"],
            kunyomi: ["みせ"]
        }
    },
    {
        kanji: "工",
        readings: {
            onyomi: ["コウ"],
            kunyomi: ["たくみ"]
        }
    },
    {
        kanji: "作",
        readings: {
            onyomi: ["サク"],
            kunyomi: ["つく"]
        }
    },
    {
        kanji: "休",
        readings: {
            onyomi: ["キュウ"],
            kunyomi: ["やす"]
        }
    },
    {
        kanji: "楽",
        readings: {
            onyomi: ["ラク"],
            kunyomi: ["たの"]
        }
    },
    {
        kanji: "音",
        readings: {
            onyomi: ["オン"],
            kunyomi: ["おと", "ね"]
        }
    },
    {
        kanji: "声",
        readings: {
            onyomi: ["セイ"],
            kunyomi: ["こえ"]
        }
    },
    {
        kanji: "光",
        readings: {
            onyomi: ["コウ"],
            kunyomi: ["ひかり"]
        }
    },
    {
        kanji: "紙",
        readings: {
            onyomi: ["シ"],
            kunyomi: ["かみ"]
        }
    },
    {
        kanji: "字",
        readings: {
            onyomi: ["ジ"],
            kunyomi: ["あざな", "あざ"]
        }
    },
    {
        kanji: "数",
        readings: {
            onyomi: ["スウ", "サク", "ソク", "シュ"],
            kunyomi: ["かず", "かぞ"]
        }
    },
    {
        kanji: "元",
        readings: {
            onyomi: ["ゲン"],
            kunyomi: ["もと"]
        }
    },
    {
        kanji: "先",
        readings: {
            onyomi: ["セン"],
            kunyomi: ["さき", "ま"]
        }
    },
    {
        kanji: "何",
        readings: {
            onyomi: ["カ"],
            kunyomi: ["なに", "なん"]
        }
    },
    {
        kanji: "私",
        readings: {
            onyomi: ["シ"],
            kunyomi: ["わたし", "わたくし"]
        }
    },
    {
        kanji: "他",
        readings: {
            onyomi: ["タ"],
            kunyomi: ["ほか"]
        }
    },
    {
        kanji: "君",
        readings: {
            onyomi: ["クン"],
            kunyomi: ["きみ"]
        }
    },
    {
        kanji: "名",
        readings: {
            onyomi: ["メイ", "ミョウ"],
            kunyomi: ["な"]
        }
    },
    {
        kanji: "言",
        readings: {
            onyomi: ["ゲン"],
            kunyomi: ["い"]
        }
    },
    {
        kanji: "語",
        readings: {
            onyomi: ["ゴ"],
            kunyomi: ["ことば"]
        }
    },
    // Add more kanji here...
];