const kanjiData = [
    {
        kanji: "日",
        readings: {
            onyomi: ["ニチ", "ジツ"],
            kunyomi: ["ひ", "び", "か"]
        },
        en: "day, sun"
    },
    {
        kanji: "一",
        readings: {
            onyomi: ["イチ"],
            kunyomi: ["ひと"]
        },
        en: "one"
    },
    {
        kanji: "国",
        readings: {
            onyomi: ["コク"],
            kunyomi: ["くに"]
        },
        en: "country, nation"
    },
    {
        kanji: "人",
        readings: {
            onyomi: ["ジン", "ニン"],
            kunyomi: ["ひと"]
        },
        en: "person, people"
    },
    {
        kanji: "年",
        readings: {
            onyomi: ["ネン"],
            kunyomi: ["とし"]
        },
        en: "year"
    },
    {
        kanji: "月",
        readings: {
            onyomi: ["ゲツ", "ガツ"],
            kunyomi: ["つき"]
        },
        en: "month, moon"
    },
    {
        kanji: "時",
        readings: {
            onyomi: ["ジ"],
            kunyomi: ["とき"]
        },
        en: "time, hour"
    },
    {
        kanji: "間",
        readings: {
            onyomi: ["カン"],
            kunyomi: ["あいだ", "ま"]
        },
        en: "interval, space"
    },
    {
        kanji: "行",
        readings: {
            onyomi: ["コウ", "ギョウ", "アン"],
            kunyomi: ["いく", "おこなう"]
        },
        en: "go, conduct"
    },
    {
        kanji: "分",
        readings: {
            onyomi: ["ブン", "フン"],
            kunyomi: ["わける", "ふん", "ぶん"]
        },
        en: "divide, part, minute"
    },
    {
        kanji: "見",
        readings: {
            onyomi: ["ケン"],
            kunyomi: ["みる", "みせる"]
        },
        en: "see, look"
    },
    {
        kanji: "山",
        readings: {
            onyomi: ["サン"],
            kunyomi: ["やま"]
        },
        en: "mountain"
    },
    {
        kanji: "川",
        readings: {
            onyomi: ["セン"],
            kunyomi: ["かわ"]
        },
        en: "river"
    },
    {
        kanji: "水",
        readings: {
            onyomi: ["スイ"],
            kunyomi: ["みず", "み"]
        },
        en: "water"
    },
    {
        kanji: "火",
        readings: {
            onyomi: ["カ"],
            kunyomi: ["ひ"]
        },
        en: "fire"
    },
    {
        kanji: "木",
        readings: {
            onyomi: ["モク"],
            kunyomi: ["き"]
        },
        en: "tree, wood"
    },
    {
        kanji: "田",
        readings: {
            onyomi: ["デン"],
            kunyomi: ["た"]
        },
        en: "rice field"
    },
    {
        kanji: "雨",
        readings: {
            onyomi: ["ウ"],
            kunyomi: ["あめ", "あま"]
        },
        en: "rain"
    },
    {
        kanji: "子",
        readings: {
            onyomi: ["シ"],
            kunyomi: ["こ"]
        },
        en: "child"
    },
    {
        kanji: "女",
        readings: {
            onyomi: ["ジョ", "ニョ"],
            kunyomi: ["おんな", "め"]
        },
        en: "woman"
    },
    {
        kanji: "男",
        readings: {
            onyomi: ["ナン", "ダン"],
            kunyomi: ["おとこ"]
        },
        en: "man"
    },
    {
        kanji: "父",
        readings: {
            onyomi: ["フ"],
            kunyomi: ["ちち"]
        },
        en: "father"
    },
    {
        kanji: "母",
        readings: {
            onyomi: ["ボ"],
            kunyomi: ["はは"]
        },
        en: "mother"
    },
    {
        kanji: "友",
        readings: {
            onyomi: ["ユウ"],
            kunyomi: ["とも"]
        },
        en: "friend"
    },
    {
        kanji: "手",
        readings: {
            onyomi: ["シュ"],
            kunyomi: ["て", "た"]
        },
        en: "hand"
    },
    {
        kanji: "口",
        readings: {
            onyomi: ["コウ"],
            kunyomi: ["くち"]
        },
        en: "mouth"
    },
    {
        kanji: "目",
        readings: {
            onyomi: ["モク"],
            kunyomi: ["め"]
        },
        en: "eye"
    },
    {
        kanji: "耳",
        readings: {
            onyomi: ["ジ"],
            kunyomi: ["みみ"]
        },
        en: "ear"
    },
    {
        kanji: "足",
        readings: {
            onyomi: ["ソク"],
            kunyomi: ["あし"]
        },
        en: "foot, leg"
    },
    {
        kanji: "馬",
        readings: {
            onyomi: ["バ"],
            kunyomi: ["うま"]
        },
        en: "horse"
    },
    {
        kanji: "魚",
        readings: {
            onyomi: ["ギョ"],
            kunyomi: ["さかな"]
        },
        en: "fish"
    },
    {
        kanji: "鳥",
        readings: {
            onyomi: ["チョウ"],
            kunyomi: ["とり"]
        },
        en: "bird"
    },
    {
        kanji: "虫",
        readings: {
            onyomi: ["チュウ"],
            kunyomi: ["むし"]
        },
        en: "insect"
    },
    {
        kanji: "大",
        readings: {
            onyomi: ["ダイ", "タイ"],
            kunyomi: ["おおきい", "おおい"]
        },
        en: "big, large"
    },
    {
        kanji: "小",
        readings: {
            onyomi: ["ショウ"],
            kunyomi: ["ちいさい"]
        },
        en: "small"
    },
    {
        kanji: "中",
        readings: {
            onyomi: ["チュウ"],
            kunyomi: ["なか"]
        },
        en: "middle, center"
    },
    {
        kanji: "上",
        readings: {
            onyomi: ["ジョウ", "シャン"],
            kunyomi: ["うえ", "あがる", "あげる"]
        },
        en: "up, above"
    },
    {
        kanji: "下",
        readings: {
            onyomi: ["カ", "ゲ"],
            kunyomi: ["した", "さがる", "くだる"]
        },
        en: "down, below"
    },
    {
        kanji: "前",
        readings: {
            onyomi: ["ゼン"],
            kunyomi: ["まえ"]
        },
        en: "front, before"
    },
    {
        kanji: "後",
        readings: {
            onyomi: ["ゴ"],
            kunyomi: ["うしろ", "あと"]
        },
        en: "behind, after"
    },
    {
        kanji: "左",
        readings: {
            onyomi: ["サ"],
            kunyomi: ["ひだり"]
        },
        en: "left"
    },
    {
        kanji: "右",
        readings: {
            onyomi: ["ウ"],
            kunyomi: ["みぎ"]
        },
        en: "right"
    },
    {
        kanji: "長",
        readings: {
            onyomi: ["チョウ"],
            kunyomi: ["ながい", "おさ"]
        },
        en: "long, chief"
    },
    {
        kanji: "円",
        readings: {
            onyomi: ["エン"],
            kunyomi: ["まるい", "まる"]
        },
        en: "circle, yen"
    },
    {
        kanji: "本",
        readings: {
            onyomi: ["ホン"],
            kunyomi: ["もと"]
        },
        en: "book, main"
    },
    {
        kanji: "今",
        readings: {
            onyomi: ["コン"],
            kunyomi: ["いま"]
        },
        en: "now"
    },
    {
        kanji: "新",
        readings: {
            onyomi: ["シン"],
            kunyomi: ["あたらし"]
        },
        en: "new"
    },
    {
        kanji: "高",
        readings: {
            onyomi: ["コウ"],
            kunyomi: ["たかい"]
        },
        en: "high, tall"
    },
    {
        kanji: "低",
        readings: {
            onyomi: ["テイ"],
            kunyomi: ["ひくい"]
        },
        en: "low"
    },
    {
        kanji: "早",
        readings: {
            onyomi: ["ソウ"],
            kunyomi: ["はやい"]
        },
        en: "early, fast"
    },
    {
        kanji: "遅",
        readings: {
            onyomi: ["チ"],
            kunyomi: ["おそい"]
        },
        en: "late, slow"
    },
    {
        kanji: "明",
        readings: {
            onyomi: ["メイ", "ミョウ"],
            kunyomi: ["あかるい", "あける", "あきらか"]
        },
        en: "bright, clear"
    },
    {
        kanji: "暗",
        readings: {
            onyomi: ["アン"],
            kunyomi: ["くらい"]
        },
        en: "dark"
    },
    {
        kanji: "白",
        readings: {
            onyomi: ["ハク", "ビャク"],
            kunyomi: ["しろい", "しろ"]
        },
        en: "white"
    },
    {
        kanji: "黒",
        readings: {
            onyomi: ["コク"],
            kunyomi: ["くろい", "くろ"]
        },
        en: "black"
    },
    {
        kanji: "赤",
        readings: {
            onyomi: ["セキ", "シャク"],
            kunyomi: ["あかい", "あか"]
        },
        en: "red"
    },
    {
        kanji: "青",
        readings: {
            onyomi: ["セイ", "ショウ"],
            kunyomi: ["あおい", "あお"]
        },
        en: "blue, green"
    },
    {
        kanji: "黄",
        readings: {
            onyomi: ["オウ"],
            kunyomi: ["き"]
        },
        en: "yellow"
    },
    {
        kanji: "緑",
        readings: {
            onyomi: ["リョク"],
            kunyomi: ["みどり"]
        },
        en: "green"
    },
    {
        kanji: "紫",
        readings: {
            onyomi: ["シ"],
            kunyomi: ["むらさき"]
        },
        en: "purple"
    },
    {
        kanji: "金",
        readings: {
            onyomi: ["キン"],
            kunyomi: ["かね", "きん"]
        },
        en: "gold, money"
    },
    {
        kanji: "銀",
        readings: {
            onyomi: ["ギン"],
            kunyomi: ["しろがね"]
        },
        en: "silver"
    },
    {
        kanji: "玉",
        readings: {
            onyomi: ["ギョク", "ダマ"],
            kunyomi: ["たま", "たまご"]
        },
        en: "ball, jewel"
    },
    {
        kanji: "石",
        readings: {
            onyomi: ["セキ", "シャク"],
            kunyomi: ["いし"]
        },
        en: "stone"
    },
    {
        kanji: "土",
        readings: {
            onyomi: ["ド"],
            kunyomi: ["つち"]
        },
        en: "earth, soil"
    },
    {
        kanji: "地",
        readings: {
            onyomi: ["チ"],
            kunyomi: ["じ"]
        },
        en: "ground, earth"
    },
    {
        kanji: "空",
        readings: {
            onyomi: ["クウ"],
            kunyomi: ["そら"]
        },
        en: "sky, empty"
    },
    {
        kanji: "風",
        readings: {
            onyomi: ["フウ", "フ"],
            kunyomi: ["かぜ"]
        },
        en: "wind"
    },
    {
        kanji: "雲",
        readings: {
            onyomi: ["ウン"],
            kunyomi: ["くも"]
        },
        en: "cloud"
    },
    {
        kanji: "雪",
        readings: {
            onyomi: ["セツ"],
            kunyomi: ["ゆき"]
        },
        en: "snow"
    },
    {
        kanji: "電",
        readings: {
            onyomi: ["デン"],
            kunyomi: ["いかずち"]
        },
        en: "electricity"
    },
    {
        kanji: "気",
        readings: {
            onyomi: ["キ"],
            kunyomi: ["き"]
        },
        en: "spirit, energy"
    },
    {
        kanji: "花",
        readings: {
            onyomi: ["カ"],
            kunyomi: ["はな"]
        },
        en: "flower"
    },
    {
        kanji: "草",
        readings: {
            onyomi: ["ソウ"],
            kunyomi: ["くさ"]
        },
        en: "grass"
    },
    {
        kanji: "林",
        readings: {
            onyomi: ["リン"],
            kunyomi: ["はやし"]
        },
        en: "forest"
    },
    {
        kanji: "森",
        readings: {
            onyomi: ["シン"],
            kunyomi: ["もり"]
        },
        en: "forest"
    },
    {
        kanji: "竹",
        readings: {
            onyomi: ["チク"],
            kunyomi: ["たけ"]
        },
        en: "bamboo"
    },
    {
        kanji: "茶",
        readings: {
            onyomi: ["チャ"],
            kunyomi: ["ちゃ", "さ"]
        },
        en: "tea"
    },
    {
        kanji: "米",
        readings: {
            onyomi: ["ベイ", "マイ"],
            kunyomi: ["こめ"]
        },
        en: "rice"
    },
    {
        kanji: "食",
        readings: {
            onyomi: ["ショク"],
            kunyomi: ["たべる", "く"]
        },
        en: "eat, food"
    },
    {
        kanji: "飲",
        readings: {
            onyomi: ["イン"],
            kunyomi: ["のむ"]
        },
        en: "drink"
    },
    {
        kanji: "話",
        readings: {
            onyomi: ["ワ"],
            kunyomi: ["はなす"]
        },
        en: "talk, speak"
    },
    {
        kanji: "読",
        readings: {
            onyomi: ["ドク"],
            kunyomi: ["よ"]
        },
        en: "read"
    },
    {
        kanji: "書",
        readings: {
            onyomi: ["ショ"],
            kunyomi: ["か"]
        },
        en: "write"
    },
    {
        kanji: "学",
        readings: {
            onyomi: ["ガク"],
            kunyomi: ["まな"]
        },
        en: "study, learn"
    },
    {
        kanji: "習",
        readings: {
            onyomi: ["シュウ"],
            kunyomi: ["なら"]
        },
        en: "practice, study"
    },
    {
        kanji: "会",
        readings: {
            onyomi: ["カイ"],
            kunyomi: ["あ"]
        },
        en: "meet, association"
    },
    {
        kanji: "社",
        readings: {
            onyomi: ["シャ"],
            kunyomi: ["やしろ"]
        },
        en: "company, shrine"
    },
    {
        kanji: "校",
        readings: {
            onyomi: ["コウ"],
            kunyomi: ["こう"]
        },
        en: "school"
    },
    {
        kanji: "病",
        readings: {
            onyomi: ["ビョウ"],
            kunyomi: ["やまい"]
        },
        en: "illness, disease"
    },
    {
        kanji: "医",
        readings: {
            onyomi: ["イ"],
            kunyomi: ["いや"]
        },
        en: "medicine, doctor"
    },
    {
        kanji: "車",
        readings: {
            onyomi: ["シャ"],
            kunyomi: ["くるま"]
        },
        en: "car, vehicle"
    },
    {
        kanji: "飛",
        readings: {
            onyomi: ["ヒ"],
            kunyomi: ["とぶ"]
        },
        en: "fly"
    },
    {
        kanji: "走",
        readings: {
            onyomi: ["ソウ"],
            kunyomi: ["はし"]
        },
        en: "run"
    },
    {
        kanji: "道",
        readings: {
            onyomi: ["ドウ"],
            kunyomi: ["みち"]
        },
        en: "road, path"
    },
    {
        kanji: "家",
        readings: {
            onyomi: ["カ", "ケ"],
            kunyomi: ["いえ", "や"]
        },
        en: "house, home"
    },
    {
        kanji: "店",
        readings: {
            onyomi: ["テン"],
            kunyomi: ["みせ"]
        },
        en: "store, shop"
    },
    {
        kanji: "工",
        readings: {
            onyomi: ["コウ"],
            kunyomi: ["たくみ"]
        },
        en: "construction, work"
    },
    {
        kanji: "作",
        readings: {
            onyomi: ["サク"],
            kunyomi: ["つく"]
        },
        en: "make, create"
    },
    {
        kanji: "休",
        readings: {
            onyomi: ["キュウ"],
            kunyomi: ["やす"]
        },
        en: "rest, break"
    },
    {
        kanji: "楽",
        readings: {
            onyomi: ["ラク"],
            kunyomi: ["たの"]
        },
        en: "music, pleasure"
    },
    {
        kanji: "音",
        readings: {
            onyomi: ["オン"],
            kunyomi: ["おと", "ね"]
        },
        en: "sound, noise"
    },
    {
        kanji: "声",
        readings: {
            onyomi: ["セイ"],
            kunyomi: ["こえ"]
        },
        en: "voice"
    },
    {
        kanji: "光",
        readings: {
            onyomi: ["コウ"],
            kunyomi: ["ひかり"]
        },
        en: "light"
    },
    {
        kanji: "紙",
        readings: {
            onyomi: ["シ"],
            kunyomi: ["かみ"]
        },
        en: "paper"
    },
    {
        kanji: "字",
        readings: {
            onyomi: ["ジ"],
            kunyomi: ["あざな", "あざ"]
        },
        en: "character, letter"
    },
    {
        kanji: "数",
        readings: {
            onyomi: ["スウ", "サク", "ソク", "シュ"],
            kunyomi: ["かず", "かぞ"]
        },
        en: "number, count"
    },
    {
        kanji: "元",
        readings: {
            onyomi: ["ゲン"],
            kunyomi: ["もと"]
        },
        en: "origin, source"
    },
    {
        kanji: "先",
        readings: {
            onyomi: ["セン"],
            kunyomi: ["さき", "ま"]
        },
        en: "before, ahead"
    },
    {
        kanji: "何",
        readings: {
            onyomi: ["カ"],
            kunyomi: ["なに", "なん"]
        },
        en: "what"
    },
    {
        kanji: "私",
        readings: {
            onyomi: ["シ"],
            kunyomi: ["わたし", "わたくし"]
        },
        en: "I, private"
    },
    {
        kanji: "他",
        readings: {
            onyomi: ["タ"],
            kunyomi: ["ほか"]
        },
        en: "other"
    },
    {
        kanji: "君",
        readings: {
            onyomi: ["クン"],
            kunyomi: ["きみ"]
        },
        en: "you (familiar)"
    },
    {
        kanji: "名",
        readings: {
            onyomi: ["メイ", "ミョウ"],
            kunyomi: ["な"]
        },
        en: "name"
    },
    {
        kanji: "言",
        readings: {
            onyomi: ["ゲン"],
            kunyomi: ["い"]
        },
        en: "word, say"
    },
    {
        kanji: "語",
        readings: {
            onyomi: ["ゴ"],
            kunyomi: ["ことば"]
        },
        en: "language, word"
    }
];