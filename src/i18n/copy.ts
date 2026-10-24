// Every word on kitehand.ai, in English and Japanese. Pages pick the copy for
// their language; the shape is the same so nothing is missing in either.
import type { Lang, Share } from "../lib/diagnosis";

export type Copy = {
  lang: Lang;
  other: { lang: Lang; label: string; home: string };
  meta: { title: string; description: string; og: string };
  nav: { day: string; how: string; pricing: string; faq: string; cta: string };
  hero: {
    badge: string;
    kicker: string;
    title: [string, string];
    lede: string;
    actions: [string, string];
    // The owner's phone beside the promise: what their assistant told them
    // this morning, and the one thing it asked.
    phone: { app: string; date: string; items: { time: string; text: string; ask?: boolean }[]; approve: string; hold: string };
  };
  read: { eyebrow: string; title: string; lede: string };
  tool: {
    label: string;
    modes: [string, string, string];
    placeholders: [string, string, string];
    submit: string;
    working: string[];
    samples: string;
    privacy: string;
    errors: Record<"too_short" | "too_long" | "contact" | "send", string>;
    example: string;
  };
  result: {
    back: string;
    unit: string;
    taken: (taken: number | string, total: number | string) => string;
    shares: Record<Share, string>;
    columns: [string, string, string];
    hours: string;
    schedule: string;
    asks: string;
    week: string;
    estimate: string;
    cta: string;
    share: string;
    shareText: (title: string, hours: string) => string;
    copied: string;
    save: string;
    stamp: string;
  };
  day: {
    eyebrow: string;
    title: string;
    lede: string;
    desk: string;
    handed: string;
    working: string;
    // The work the assistant holds; a moment of the day names its work by
    // index.
    work: string[];
    moments: { time: string; who?: number; title: string; body: string; mark?: "ask" | "stamp" }[];
    approved: string;
  };
  how: { eyebrow: string; title: string; parts: { title: string; body: string }[] };
  contrast: { eyebrow: string; title: string; left: string; right: string; rows: [string, string][] };
  trust: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  pricing: {
    eyebrow: string;
    title: string;
    plan: string;
    regular: string;
    price: string;
    per: string;
    founding: { label: string; price: string; note: string };
    yearly: string;
    includes: string[];
    intake: string;
    cta: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  apply: {
    eyebrow: string;
    title: string;
    lede: string;
    email: string;
    company: string;
    name: string;
    size: string;
    sizes: [string, string, string];
    job: string;
    jobHint: string;
    submit: string;
    sending: string;
    done: string;
    error: string;
  };
  jobs: { eyebrow: string; title: (work: string) => string; lede: (work: string) => string; posting: string; yours: string; more: string };
  // made is the sentence around the company's name, which links to its site.
  footer: { made: [string, string]; company: string; companyUrl: string; privacy: string };
  privacy: { title: string; body: string[] };
  notFound: { title: string; body: string; home: string };
};

const en: Copy = {
  lang: "en",
  other: { lang: "ja", label: "日本語", home: "/ja/" },
  meta: {
    title: "Kitehand — your own AI executive assistant",
    description: "Bookkeeping entries, invoices, orders, the daily report. Kitehand takes on the office work small-business owners do after hours, the same way every day. By application, 15 owners a month.",
    og: "/og-en.png",
  },
  nav: { day: "Your day", how: "How it works", pricing: "Pricing", faq: "FAQ", cta: "Apply" },
  hero: {
    badge: "Founding members · 15 owners a month",
    kicker: "For owners of small businesses",
    title: ["Your own", "AI executive assistant."],
    lede: "Bookkeeping entries, invoices, orders, the daily report. Kitehand takes on the office work you do after hours, and does it the same way every day.",
    actions: ["Apply for membership", "See pricing"],
    phone: {
      app: "Kitehand",
      date: "Tuesday 7:01",
      items: [
        { time: "7:00", text: "Good morning. Yesterday's 38 bank and card transactions are in your books, receipts attached." },
        { time: "7:01", text: "One to check: $1,280 to Hill & Co. Their bank account changed since last month.", ask: true },
        { time: "Yesterday 18:00", text: "Today's 12 invoices are sent, and the payments they expect are booked." },
      ],
      approve: "Approve",
      hold: "Hold",
    },
  },
  read: {
    eyebrow: "See what it can take",
    title: "Paste the work as you do it now.",
    lede: "One line, a manual, or how you do it today. Send it with your details to apply, and we'll email you how much of it your assistant can take.",
  },
  tool: {
    label: "The work",
    modes: ["One line", "A manual", "How you do it"],
    placeholders: [
      "e.g. “Every morning, enter the bank and card transactions in our books and attach the receipts.”",
      "Paste the manual or the handover notes you once gave someone…",
      "Write down how you do it today, as it comes to mind…",
    ],
    submit: "Apply with this work",
    working: ["Reading the work", "Splitting it into tasks", "Marking what needs you", "Adding up your hours"],
    samples: "See it on work owners often do themselves:",
    privacy: "Only the Kitehand team reads what you send.",
    errors: {
      too_short: "Give it a little more: a line about the work, a manual, or how you do it.",
      too_long: "That's longer than the work needs. Paste the part you want to hand over.",
      contact: "Add your email and company, so we can reply.",
      send: "That didn't go through. Try again in a moment.",
    },
    example: "Example",
  },
  result: {
    back: "Time back to you",
    unit: "h / month",
    taken: (taken, total) => `Of the ${total} hours a month you spend on it, your assistant takes ${taken}.`,
    shares: { kitehand: "Your assistant", approve: "With your OK", human: "Stays with you" },
    columns: ["Task", "Who", "Hours / month"],
    hours: "h",
    schedule: "When",
    asks: "Asks you before",
    week: "First week",
    estimate: "An estimate from a typical case. After a week of real work, your assistant replaces it with the hours it measured.",
    cta: "Hand this over",
    share: "Share",
    shareText: (title, hours) => `Handing “${title}” to a Kitehand assistant gives me back ${hours} hours a month. See yours:`,
    copied: "Link copied",
    save: "Save card",
    stamp: "Handed over",
  },
  day: {
    eyebrow: "Your day",
    title: "Your only part: one tap on your phone.",
    lede: "Books, invoices, orders, the evening report. Your assistant keeps them moving, nights included, the same way every day.",
    desk: "Your desk",
    handed: "Office work handed over",
    working: "Your assistant at work",
    work: ["Bookkeeping", "Invoices", "Orders"],
    moments: [
      { time: "7:00", who: 0, title: "The morning report reaches your phone", body: "Yesterday's 38 bank and card transactions are in the books, each with its receipt. Nothing is stuck." },
      { time: "9:30", who: 2, title: "An order comes in, and is entered", body: "It reads the purchase order from email, enters it in the order sheet, and replies to confirm the delivery date." },
      { time: "11:40", who: 1, title: "A bank account that changed", body: "A supplier's bank account differs from last month. Your assistant stops there and asks you.", mark: "ask" },
      { time: "11:42", title: "Checked between meetings", body: "You confirm it with the supplier by phone and tap approve. Only then does the payment get prepared.", mark: "stamp" },
      { time: "18:00", who: 1, title: "Invoices sent", body: "It makes and sends today's 12 invoices, and books the payments they expect." },
      { time: "23:00", title: "The day, done", body: "Everything handed over is finished. Waiting for you: nothing." },
    ],
    approved: "Approved",
  },
  how: {
    eyebrow: "How it works",
    title: "Teach it once.",
    parts: [
      { title: "Hand over the work", body: "One line, a manual, or how you do it today. Your assistant splits it into tasks, says which it can take, and shows how it will do them each time." },
      { title: "Show it once", body: "Give it the sign-ins for your accounting software or bank, and do the tricky part once while it watches. After that it does it the same way." },
      { title: "Check from your phone", body: "Work you mark, such as payments, waits for your approval. So does any change to how it does the work." },
    ],
  },
  contrast: {
    eyebrow: "Not a chat AI",
    title: "It doesn't advise. It gets the work done.",
    left: "A typical AI assistant",
    right: "Kitehand",
    rows: [
      ["Drafts and suggests; the doing is still yours.", "Works your accounting software and bank on screen, and finishes the work."],
      ["Works it out anew each time, so results drift.", "Does the work the way it learned, the same way every day."],
      ["Works only while you have it open.", "Works in the cloud, nights and weekends included."],
      ["Changes how it works when a screen changes, without telling you.", "Tells you when it relearns how to do something, before it does it that way."],
    ],
  },
  trust: {
    eyebrow: "Confidential",
    title: "Your company's business stays with your company.",
    items: [
      { title: "An environment of your own", body: "Your assistant works in an environment kept apart for your company, and shares nothing with anyone else's." },
      { title: "Sign-ins", body: "Sign-ins for your accounting software and bank are kept encrypted, and used only for your assistant's work." },
      { title: "Not used for training", body: "Nothing you hand over is used to train an AI model." },
      { title: "A record", body: "What it did, when, with which data, and who approved it." },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "One membership.",
    plan: "Kitehand Membership",
    regular: "Regular price",
    price: "$349",
    per: "/ month",
    founding: { label: "Founding member price", price: "$199", note: "For the first 50 members, held for as long as you stay." },
    yearly: "Pay yearly and get two months free.",
    includes: [
      "An AI executive assistant of your own",
      "Up to 5 pieces of work handed over (talk to us for more)",
      "Questions and approvals on your phone",
      "A person who sets it up with you over the first 30 days",
      "A full refund within 30 days",
    ],
    intake: "By application, 15 owners a month. Each owner gets an environment of their own, so we take only as many as we can set up well.",
    cta: "Apply for membership",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Before you apply.",
    items: [
      { q: "What work can it take on?", a: "Office work with a set way of doing it: bookkeeping entries, invoices and payments, order entry, expenses and receipts, first replies to inquiries, the daily sales report. When you apply, we tell you how much of yours it can take." },
      { q: "What won't it do?", a: "Phone calls, visitors, negotiation and judgment calls. These stay with you from the start." },
      { q: "What does it do when it's unsure?", a: "Anything off its usual way, such as a new vendor or an unusual amount, it asks you on your phone before going ahead." },
      { q: "What if it gets something wrong?", a: "Everything it does is recorded. Send the work back with a note, and it corrects how it does it." },
      { q: "Does it stop when my computer is off?", a: "No. Your assistant works in the cloud, nights and weekends included." },
      { q: "How is my data handled?", a: "In an environment kept apart for your company, with sign-ins kept encrypted. Nothing you hand over trains an AI model. We sign an NDA on request." },
      { q: "Can I hand over more than 5 pieces of work?", a: "Talk to us. We'll add to your assistant's work or set up another, as the work needs." },
      { q: "Can I cancel?", a: "Any time; you're not charged again. Within the first 30 days you get a full refund." },
      { q: "Why only 15 owners a month?", a: "Each owner gets an environment of their own, and over the first 30 days a person sets it up with you. We take as many as we can do that for." },
    ],
  },
  apply: {
    eyebrow: "Apply",
    title: "Hand your assistant its first piece of work.",
    lede: "Once we accept your application, the person who sets it up with you writes to fix a date. Over the first 30 days you hand the work over together.",
    email: "Email",
    company: "Company",
    name: "Your name",
    size: "People in your company",
    sizes: ["5 or fewer", "6–20", "21 or more"],
    job: "The work to hand over",
    jobHint: "One line, a manual, or how you do it today",
    submit: "Apply",
    sending: "Sending…",
    done: "Got it. We'll write to set a date for your setup.",
    error: "That didn't go through. Check your email and company, and try again.",
  },
  jobs: {
    eyebrow: "Read by Kitehand",
    title: (work) => `${work}: what your assistant can take`,
    lede: (work) => `${work}, as owners often do it themselves, split into tasks: what your assistant does, what it asks you first, and what stays with you.`,
    posting: "The owner's note",
    yours: "See it on your own work",
    more: "Other work",
  },
  footer: { made: ["Kitehand is made by ", "."], company: "Descarty", companyUrl: "https://descarty.com/en/", privacy: "Privacy" },
  privacy: {
    title: "Privacy",
    body: [
      "When you apply, your email, company, name, company size and the work you describe reach us through the form service Web3Forms. We use them to reply about your membership and its setup. Ask us to delete them at any time.",
      "We use PostHog to count visits. It records the pages viewed, the referring site, and the type of device and browser, and keeps an identifier for this in your browser. It does not record the screen or keystrokes. We don't sell data.",
    ],
  },
  notFound: { title: "Nothing here.", body: "That page doesn't exist.", home: "Back to Kitehand" },
};

const ja: Copy = {
  lang: "ja",
  other: { lang: "en", label: "English", home: "/" },
  meta: {
    title: "Kitehand — 社長専属の AI 秘書",
    description: "経理の入力、請求書、受注、毎日の報告。小さな会社の社長が自分で片づけている事務を、Kitehand の秘書が毎日同じやり方で引き受けます。申込制・毎月15名まで。",
    og: "/og-ja.png",
  },
  nav: { day: "社長の一日", how: "しくみ", pricing: "料金", faq: "よくある質問", cta: "申し込む" },
  hero: {
    badge: "創業メンバー受付中 · 毎月15名まで",
    kicker: "小さな会社の社長へ",
    title: ["社長専属の、", "AI 秘書。"],
    lede: "経理の入力、請求書、受注、毎日の報告。社長が夜に片づけている事務を、Kitehand の秘書が引き受けます。決まったやり方で、毎日同じように。",
    actions: ["メンバーに申し込む", "料金を見る"],
    phone: {
      app: "Kitehand",
      date: "火曜日 7:01",
      items: [
        { time: "7:00", text: "おはようございます。昨日の入出金38件を freee に入力し、領収書も添付しました。" },
        { time: "7:01", text: "1件だけ確認させてください。山田商事への振込 128,000円。先月と振込先の口座が変わっています。", ask: true },
        { time: "昨日 18:00", text: "今日の請求書12件を送り、入金予定を登録しました。" },
      ],
      approve: "承認する",
      hold: "保留",
    },
  },
  read: {
    eyebrow: "任せられる範囲を見る",
    title: "いまの仕事を、貼ってください。",
    lede: "ひとこと、手順書、いまのやり方。どれでも構いません。連絡先と一緒に送ると申し込みになり、秘書がどこまで引き受けられるかをメールでお返事します。",
  },
  tool: {
    label: "任せたい仕事",
    modes: ["ひとこと", "手順書", "いまのやり方"],
    placeholders: [
      "例：「毎朝、銀行とカードの明細を freee に入れて、領収書を添付してほしい」",
      "前に人に頼んだときの手順書や、引き継ぎのメモを貼ってください…",
      "いま社長が自分でやっている流れを、思いつくまま書いてください…",
    ],
    submit: "この仕事で申し込む",
    working: ["仕事を読んでいます", "仕事に分けています", "社長の確認が要るものを分けています", "戻る時間を数えています"],
    samples: "社長がよく自分でやっている仕事で、例を見られます：",
    privacy: "送っていただいた内容は、Kitehand のチームだけが読みます。",
    errors: {
      too_short: "もう少し詳しく。仕事のひとこと、手順書、いまのやり方のどれかを。",
      too_long: "長すぎます。任せたい仕事の部分だけ貼ってください。",
      contact: "お返事のために、メールアドレスと会社名を入れてください。",
      send: "送信できませんでした。少し待ってから、もう一度お試しください。",
    },
    example: "例",
  },
  result: {
    back: "社長に戻る時間",
    unit: "時間／月",
    taken: (taken, total) => `社長が月 ${total} 時間かけている仕事のうち、${taken} 時間を秘書が引き受けます。`,
    shares: { kitehand: "秘書がやる", approve: "社長の承認つき", human: "社長に残す" },
    columns: ["仕事", "担当", "時間／月"],
    hours: "時間",
    schedule: "いつ",
    asks: "先に社長に聞くこと",
    week: "最初の1週間",
    estimate: "よくある例からの見込みです。1週間働いたあと、実際に測った時間に置き換えます。",
    cta: "この仕事を任せる",
    share: "共有",
    shareText: (title, hours) => `「${title}」を Kitehand の秘書に任せると、月 ${hours} 時間が戻るらしい。あなたの仕事も見てみて：`,
    copied: "リンクをコピーしました",
    save: "カードを保存",
    stamp: "引受済",
  },
  day: {
    eyebrow: "社長の一日",
    title: "社長がやるのは、スマホで確認を1回だけ。",
    lede: "経理の入力、請求書、受注、夜の報告。社長が商談や現場にいるあいだも、夜のあいだも、秘書が同じやり方で進めます。",
    desk: "社長の机",
    handed: "事務は秘書に",
    working: "秘書が対応中",
    work: ["経理の入力", "請求書", "受注"],
    moments: [
      { time: "7:00", who: 0, title: "朝の報告がスマホに届く", body: "昨日の入出金38件を freee に入力し、領収書も添付しました。止まっているものはありません。" },
      { time: "9:30", who: 2, title: "注文が届き、入力する", body: "メールで届いた注文書を読んで受注表に入れ、納期を添えて取引先に返信します。" },
      { time: "11:40", who: 1, title: "いつもと違う振込先", body: "仕入先の振込先の口座が、先月と違います。秘書はそこで止まり、社長に聞きます。", mark: "ask" },
      { time: "11:42", title: "移動の合間に、スマホで確認", body: "社長が仕入先に電話で確かめて承認。そこで初めて、振込の準備に進みます。", mark: "stamp" },
      { time: "18:00", who: 1, title: "請求書を送る", body: "今日の請求書12件を作って送り、入金予定を登録しました。" },
      { time: "23:00", title: "今日の事務、すべて完了", body: "渡した仕事はすべて終わりました。社長の確認待ちは0件です。" },
    ],
    approved: "承認",
  },
  how: {
    eyebrow: "しくみ",
    title: "教えるのは、一度だけ。",
    parts: [
      { title: "仕事を渡す", body: "ひとこと、手順書、いまのやり方を渡すと、秘書が仕事に分け、引き受ける範囲と、毎回のやり方を示します。" },
      { title: "一度やって見せる", body: "会計ソフトや銀行のアカウントを渡し、難しいところを一度だけ操作して見せます。以降は同じやり方を繰り返します。" },
      { title: "スマホで確認するだけ", body: "支払いなど、社長が指定した仕事は、承認してから進みます。やり方を変えるときも、先に社長に確かめます。" },
    ],
  },
  contrast: {
    eyebrow: "チャット AI との違い",
    title: "相談に乗るのではなく、仕事を終わらせる。",
    left: "よくある AI アシスタント",
    right: "Kitehand",
    rows: [
      ["文章の下書きや提案までで、作業は社長がする。", "会計ソフトや銀行の画面を自分で操作し、仕事を最後まで終わらせる。"],
      ["毎回その場で考えるので、やり方がぶれる。", "覚えたやり方を、毎日同じように繰り返す。"],
      ["開いているあいだしか動かない。", "クラウドで、夜も休日も動く。"],
      ["画面が変わると、黙ってやり方を変える。", "やり方を覚え直したら、そのやり方で進める前に知らせる。"],
    ],
  },
  trust: {
    eyebrow: "秘密を守る",
    title: "会社のことは、会社の中に。",
    items: [
      { title: "専用の環境", body: "秘書は会社ごとに分かれた環境で働き、ほかの会社の秘書とは何も共有しません。" },
      { title: "アカウント情報", body: "会計ソフトや銀行のサインイン情報は暗号化して保管し、秘書の仕事のときだけ使います。" },
      { title: "学習に使わない", body: "預かった書類やデータで、AI モデルを学習させることはありません。" },
      { title: "記録", body: "何を、いつ、どのデータで行い、誰が承認したかが残ります。" },
    ],
  },
  pricing: {
    eyebrow: "料金",
    title: "メンバーシップは、ひとつだけ。",
    plan: "Kitehand メンバーシップ",
    regular: "通常価格",
    price: "49,800円",
    per: "／月（税別）",
    founding: { label: "創業メンバー価格", price: "29,800円", note: "先着50名。メンバーでいるあいだは、ずっとこの価格です。" },
    yearly: "年払いなら10か月分。2か月分お得です。",
    includes: [
      "社長専属の AI 秘書",
      "任せる仕事は5件まで（6件目からはご相談）",
      "確認と承認はスマホで",
      "最初の30日は、立ち上げ担当が一緒に仕事を渡します",
      "30日以内なら全額返金",
    ],
    intake: "申込制・毎月15名まで。社長ごとに専用の環境を用意し、立ち上げまで一緒に進めるため、受け入れる人数を絞っています。",
    cta: "メンバーに申し込む",
  },
  faq: {
    eyebrow: "よくある質問",
    title: "申し込む前に。",
    items: [
      { q: "どんな仕事を任せられますか？", a: "経理の入力、請求書と入金の確認、受注の入力、経費と領収書、問い合わせの一次対応、毎日の売上報告など、決まった流れのある事務です。申し込みのあと、どこまで任せられるかをお伝えします。" },
      { q: "任せられない仕事は？", a: "電話、来客、交渉、判断の要る仕事です。最初から社長の仕事として分けておきます。" },
      { q: "迷ったときはどうしますか？", a: "初めての取引先、いつもと違う金額など、決まったやり方から外れるものは、進める前にスマホで社長に聞きます。" },
      { q: "間違えたらどうなりますか？", a: "すべての作業が記録に残ります。ひとこと添えて差し戻すと、そのやり方を直します。" },
      { q: "パソコンを閉じたら止まりますか？", a: "止まりません。秘書はクラウドで働くので、夜も休日も進みます。" },
      { q: "データはどう扱われますか？", a: "会社ごとに分かれた環境で扱い、サインイン情報は暗号化して保管します。預かったデータで AI モデルを学習させることはありません。ご希望があれば秘密保持契約（NDA）を結びます。" },
      { q: "6件目の仕事を任せたいときは？", a: "ご相談ください。仕事の量に合わせて、秘書の仕事を増やすか、もう一人用意します。" },
      { q: "解約はできますか？", a: "いつでも解約でき、次の請求からはかかりません。最初の30日以内なら、全額を返金します。" },
      { q: "なぜ毎月15名までなのですか？", a: "社長ごとに専用の環境を用意し、最初の30日は立ち上げ担当が一緒に仕事を渡すためです。それができる人数だけ、毎月お受けしています。" },
    ],
  },
  apply: {
    eyebrow: "申し込み",
    title: "最初の仕事を、秘書に。",
    lede: "申し込みをお受けすると、立ち上げ担当から日程のご連絡をします。最初の30日で、一緒に仕事を渡していきます。",
    email: "メールアドレス",
    company: "会社名",
    name: "お名前",
    size: "会社の人数",
    sizes: ["5人以下", "6〜20人", "21人以上"],
    job: "任せたい仕事",
    jobHint: "ひとこと、手順書、いまのやり方のどれでも",
    submit: "申し込む",
    sending: "送信中…",
    done: "受け付けました。立ち上げ担当から、日程のご連絡をします。",
    error: "送信できませんでした。メールアドレスと会社名を確かめて、もう一度お試しください。",
  },
  jobs: {
    eyebrow: "秘書が読んだ仕事",
    title: (work) => `${work}：秘書に任せられること`,
    lede: (work) => `社長がよく自分でやっている「${work}」を仕事に分けました。秘書がやること、先に社長に聞くこと、社長に残すことがわかります。`,
    posting: "社長のメモ",
    yours: "自分の仕事で見る",
    more: "ほかの仕事",
  },
  footer: { made: ["Kitehand は ", " が開発しています。"], company: "Descarty", companyUrl: "https://descarty.com/", privacy: "プライバシー" },
  privacy: {
    title: "プライバシー",
    body: [
      "申し込みの際は、メールアドレス・会社名・お名前・会社の人数・任せたい仕事を、フォームサービス Web3Forms を通じて受け取り、メンバーシップと立ち上げのご連絡に使います。いつでも削除をご依頼いただけます。",
      "訪問数を把握するため、PostHog を利用しています。PostHog は、閲覧したページ、参照元のサイト、端末とブラウザの種類を記録し、そのための識別子をブラウザに保存します。画面の録画やキー入力の記録は行いません。データを販売することはありません。",
    ],
  },
  notFound: { title: "ここには何もありません。", body: "このページは存在しません。", home: "Kitehand に戻る" },
};

export const COPY: Record<Lang, Copy> = { en, ja };
