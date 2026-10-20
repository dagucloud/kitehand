// Every word on kitehand.ai, in English and Japanese. Pages pick the copy for
// their language; the shape is the same so nothing is missing in either.
import type { Lang, Share } from "../lib/diagnosis";

export type Copy = {
  lang: Lang;
  other: { lang: Lang; label: string; home: string };
  meta: { title: string; description: string; og: string };
  nav: { how: string; morning: string; contrast: string; faq: string; cta: string };
  hero: { badge: string; kicker: string; title: [string, string]; lede: string; actions: [string, string] };
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
    of: string;
    hire: string;
    taken: (taken: number | string, total: number | string) => string;
    shares: Record<Share, string>;
    columns: [string, string, string];
    hours: string;
    run: string;
    schedule: string;
    asks: string;
    week: string;
    estimate: string;
    cta: string;
    share: string;
    shareText: (title: string, hires: string) => string;
    copied: string;
    save: string;
    again: string;
    stamp: string;
  };
  morning: {
    eyebrow: string;
    title: string;
    lede: string;
    seat: string;
    empty: string;
    working: string;
    // The hands at work, in the order the work flows; a step names its hand
    // by index.
    hands: string[];
    steps: { time: string; who?: number; title: string; body: string; mark?: "ask" | "stamp" }[];
    approved: string;
    film?: string;
  };
  how: { eyebrow: string; title: string; steps: { title: string; body: string }[] };
  contrast: { eyebrow: string; title: string; left: string; right: string; rows: [string, string][] };
  trust: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  handover: {
    eyebrow: string;
    title: string;
    lede: string;
    email: string;
    company: string;
    job: string;
    jobHint: string;
    submit: string;
    sending: string;
    done: string;
    error: string;
  };
  jobs: { eyebrow: string; title: (role: string) => string; lede: (role: string) => string; posting: string; yours: string; more: string };
  // made is the sentence around the company's name, which links to its site.
  footer: { made: [string, string]; company: string; companyUrl: string; kitewell: string; privacy: string };
  privacy: { title: string; body: string[] };
  notFound: { title: string; body: string; home: string };
};

const en: Copy = {
  lang: "en",
  other: { lang: "ja", label: "日本語", home: "/ja/" },
  meta: {
    title: "Kitehand — AI staff for back-office work",
    description: "AI staff for back-office work. It learns a job from a posting, a manual, or one line, and works it in the cloud around the clock.",
    og: "/og-en.png",
  },
  nav: { how: "How it works", morning: "A day", contrast: "Not an agent", faq: "FAQ", cta: "Apply" },
  hero: {
    badge: "Early access · Taking design partners",
    kicker: "Before you post that job",
    title: ["Skip the hire.", "Hand it to AI staff."],
    lede: "Kitehand is AI staff for back-office work such as order entry, shipping and accounting. It works your email, accounting software, bank and spreadsheets on screen, as a person would, around the clock in the cloud.",
    actions: ["Apply for early access", "Watch the film (77 s)"],
  },
  read: {
    eyebrow: "Early access · Design partners",
    title: "Paste the job as you have it.",
    lede: "A job posting, a manual, or one line. Send it with your contact details to apply, and we'll email you how much of it Kitehand can take.",
  },
  tool: {
    label: "The job",
    modes: ["A job posting", "A manual", "One line"],
    placeholders: [
      "Paste the job posting you were about to publish…",
      "Paste the manual or handover notes the last person left…",
      "Say what needs doing, e.g. “Enter the invoices that come in by email every morning.”",
    ],
    submit: "Apply with this job",
    working: ["Reading the job", "Splitting it into duties", "Marking what needs you", "Adding up the hours"],
    samples: "See how Kitehand reads a job:",
    privacy: "Only the Kitehand team reads what you send.",
    errors: {
      too_short: "Give it a little more: a posting, a manual, or a sentence about the work.",
      too_long: "That's longer than a job needs. Paste the duties part.",
      contact: "Add your work email and company, so we can reply.",
      send: "That didn't go through. Try again in a moment.",
    },
    example: "Example",
  },
  result: {
    of: "of a hire",
    hire: "Kitehand can take",
    taken: (taken, total) => `${taken} of the ${total} hours this job needs each month.`,
    shares: { kitehand: "Kitehand does it", approve: "Asks you first", human: "Stays with your team" },
    columns: ["Duty", "Who", "Hours / month"],
    hours: "h",
    run: "How it would run",
    schedule: "When",
    asks: "Asks you before",
    week: "First week",
    estimate: "An estimate from what you pasted. After a week of real work, Kitehand replaces it with the hours it measured.",
    cta: "Hand this job over",
    share: "Share",
    shareText: (title, hires) => `Kitehand can take ${hires} of a hire from our “${title}” job. Paste yours:`,
    copied: "Link copied",
    save: "Save card",
    again: "Read another job",
    stamp: "Handed over",
  },
  morning: {
    eyebrow: "A day",
    title: "Three empty seats, one day of orders.",
    lede: "Order entry, shipping and accounting, run by three Kitehand hands that pass each order along. The manager approved one order, from a phone.",
    seat: "Order entry, shipping, accounting",
    empty: "3 empty seats",
    working: "Kitehand at work",
    hands: ["Order entry", "Shipping", "Accounting"],
    steps: [
      { time: "8:02", who: 0, title: "An order arrives, and is keyed in", body: "Reads the customer's purchase order, enters it in the order desk, sends the confirmation, and hands the order to shipping." },
      { time: "8:15", who: 1, title: "Pickup booked", body: "Books the pickup on the carrier's site, takes the tracking number, and hands the order to accounting." },
      { time: "8:21", who: 2, title: "Invoice sent", body: "Builds the invoice, emails it, and books the payment it expects. The first order of the day is done." },
      { time: "11:45", who: 0, title: "An order over its credit limit", body: "One customer's order runs $6,400 over its credit limit. Order entry stops there and asks before anything ships.", mark: "ask" },
      { time: "11:52", title: "Approved from a phone", body: "The manager taps approve. Only then does the order go on to shipping.", mark: "stamp" },
      { time: "5:00 PM", title: "42 orders, all invoiced", body: "The board shows where every order is. Stuck: none." },
    ],
    approved: "Approved",
    film: "Watch the film (77 s)",
  },
  how: {
    eyebrow: "How it works",
    title: "Teach it once.",
    steps: [
      { title: "Hand over the job", body: "A posting, a manual, or one line. Kitehand splits it into duties, says which it can take, and writes the process flow it will follow." },
      { title: "Show it once", body: "Give it the sign-ins and do the tricky part while it watches. After that it repeats the same steps." },
      { title: "Approve", body: "Steps you mark, such as payments, wait for your approval. So do changes to the process flow." },
    ],
  },
  contrast: {
    eyebrow: "Not an AI agent",
    title: "It repeats what it learned instead of improvising.",
    left: "A typical AI agent",
    right: "Kitehand",
    rows: [
      ["Works each run out from scratch, so results drift.", "Repeats the steps it learned, the same way each time."],
      ["Leaves you guessing what got done across jobs.", "The board shows every order and whose desk it's on."],
      ["Changes how it works when a screen changes, without telling you.", "Reports a step it relearned before using it."],
      ["Calls a model on every action.", "Replays learned steps without a model; uses one to read documents and to relearn."],
    ],
  },
  trust: {
    eyebrow: "Data and records",
    title: "What it keeps, and where.",
    items: [
      { title: "Sign-ins", body: "Encrypted and kept apart for each company. Work that must stay in-house runs on a PC in your office." },
      { title: "Records", body: "What it did, when, with which data, and who approved it." },
      { title: "Desktop apps", body: "Browser, email and Excel work runs in the cloud. Installed Windows apps run on a PC in your office." },
      { title: "Engine", body: "Kitehand runs on Kitewell and Dagu, an open-source workflow engine." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Before you apply.",
    items: [
      { q: "Which jobs fit?", a: "Routine back-office work such as accounting, order entry, admin, recruiting coordination and support. When you apply, we tell you which duties fit." },
      { q: "What won't it do?", a: "Phone calls, visitors, negotiation and judgment calls. These stay with your team from the start." },
      { q: "What if it gets something wrong?", a: "Every action is recorded. Send the work back with a note, and it corrects the step." },
      { q: "Does it stop when our computers are off?", a: "No. It works in the cloud, nights and weekends included. Only work you put on an office PC needs that PC on." },
      { q: "Do we have to draw the process?", a: "No. Kitehand writes the process flow from the job you handed over, and the work follows it once you approve. To change it, say what should change." },
      { q: "What goes to an AI model?", a: "Screens and documents, when it learns or relearns a step and when it reads a document. Learned steps replay without one." },
      { q: "Is it available now?", a: "We're taking design partners. Apply with the form near the top of this page." },
      { q: "How is it priced?", a: "Per staff member, not per seat or per action. Pricing is set with our design partners." },
    ],
  },
  handover: {
    eyebrow: "Early access",
    title: "Before you post the next job, hand it over.",
    lede: "Tell us where to reach you. We'll set up its first week with you.",
    email: "Work email",
    company: "Company",
    job: "The job",
    jobHint: "A posting, a manual, or a line about the work",
    submit: "Apply",
    sending: "Sending…",
    done: "Got it. We'll email you how much of the job Kitehand can take.",
    error: "That didn't go through. Check your email and company, and try again.",
  },
  jobs: {
    eyebrow: "Read by Kitehand",
    title: (role) => `${role}: what Kitehand can take`,
    lede: (role) => `A typical ${role.toLowerCase()} job, split into duties: what Kitehand does, what it asks you about first, and what stays with your team.`,
    posting: "The posting it read",
    yours: "Read your own job",
    more: "Other jobs",
  },
  footer: { made: ["Kitehand is made by ", ", the team behind Kitewell."], company: "Descarty", companyUrl: "https://descarty.com/en/", kitewell: "Kitewell", privacy: "Privacy" },
  privacy: {
    title: "Privacy",
    body: [
      "When you hand a job over, your email, your company and the job you gave us reach us through the form service Web3Forms. We use them to contact you about the job and its setup. Ask us to delete them at any time.",
      "We use PostHog to count visits. It records the pages viewed, the referring site, and the type of device and browser, and keeps an identifier for this in your browser. It does not record the screen or keystrokes. We don't sell data.",
    ],
  },
  notFound: { title: "Nothing here.", body: "That page doesn't exist.", home: "Back to Kitehand" },
};

const ja: Copy = {
  lang: "ja",
  other: { lang: "en", label: "English", home: "/" },
  meta: {
    title: "Kitehand — 事務の仕事を引き受ける AI の担当者",
    description: "受注・出荷・経理などの事務を引き受ける AI の担当者。求人票・手順書・ひとことから仕事を覚え、クラウドで24時間働きます。",
    og: "/og-ja.png",
  },
  nav: { how: "しくみ", morning: "ある一日", contrast: "エージェントとの違い", faq: "よくある質問", cta: "申し込む" },
  hero: {
    badge: "先行受付中 · デザインパートナー募集",
    kicker: "求人を出す前に",
    title: ["その仕事、", "AI の担当者に。"],
    lede: "Kitehand は、受注・出荷・経理などの事務を引き受ける AI の担当者です。メール・会計ソフト・銀行・Excel を人と同じように画面で操作し、クラウドで24時間働きます。",
    actions: ["先行受付に申し込む", "映像で見る（77秒）"],
  },
  read: {
    eyebrow: "先行受付・デザインパートナー募集",
    title: "あなたの仕事を、貼ってください。",
    lede: "求人票・手順書・ひとことのどれでも構いません。連絡先と一緒に送ると申し込みになり、どこまで任せられるかをメールでお返事します。",
  },
  tool: {
    label: "仕事",
    modes: ["求人票", "手順書", "ひとこと"],
    placeholders: [
      "出そうとしていた求人票を貼ってください…",
      "前任者が残した手順書や引き継ぎ書を貼ってください…",
      "やってほしいことを一文で。例：「毎朝メールで届く請求書を会計ソフトに入れて」",
    ],
    submit: "この仕事で申し込む",
    working: ["仕事を読んでいます", "業務に分けています", "あなたの確認が要るものを分けています", "時間を合計しています"],
    samples: "Kitehand が仕事をどう読むか、例で見られます：",
    privacy: "送っていただいた内容は、Kitehand のチームだけが読みます。",
    errors: {
      too_short: "もう少し詳しく。求人票、手順書、または仕事の一文を。",
      too_long: "仕事の説明としては長すぎます。業務内容の部分だけ貼ってください。",
      contact: "お返事のために、会社のメールアドレスと会社名を入れてください。",
      send: "送信できませんでした。少し待ってから、もう一度お試しください。",
    },
    example: "例",
  },
  result: {
    of: "人分",
    hire: "Kitehand が引き受けられるのは",
    taken: (taken, total) => `この仕事の月 ${total} 時間のうち、${taken} 時間。`,
    shares: { kitehand: "Kitehand がやる", approve: "あなたの承認つき", human: "チームに残す" },
    columns: ["業務", "担当", "時間／月"],
    hours: "時間",
    run: "仕事の回し方",
    schedule: "いつ",
    asks: "先にあなたに聞くこと",
    week: "最初の1週間",
    estimate: "貼られた内容からの見込みです。1週間働いたあと、実際に測った時間に置き換えます。",
    cta: "この仕事を渡す",
    share: "共有",
    shareText: (title, hires) => `うちの「${title}」の仕事、Kitehand なら ${hires} 人分を引き受けられるらしい。あなたの仕事も貼ってみて：`,
    copied: "リンクをコピーしました",
    save: "カードを保存",
    again: "別の仕事を読む",
    stamp: "引受済",
  },
  morning: {
    eyebrow: "ある一日",
    title: "3つの空席で、1日分の注文が終わる。",
    lede: "受注・出荷・経理の3人分を、Kitehand の担当者3人が注文を引き継ぎながら回した1日です。上長の仕事は、スマホでの承認1回でした。",
    seat: "受注・出荷・経理の席",
    empty: "空席 3",
    working: "Kitehand が勤務中",
    hands: ["受注担当", "出荷担当", "経理アシスタント"],
    steps: [
      { time: "8:02", who: 0, title: "注文が届き、入力する", body: "取引先の注文書を読んで販売管理に登録し、注文請書を返して、出荷担当に引き継ぎます。" },
      { time: "8:15", who: 1, title: "集荷を手配する", body: "運送会社のサイトで集荷を依頼し、送り状番号を取って、経理アシスタントに引き継ぎます。" },
      { time: "8:21", who: 2, title: "請求書を送る", body: "請求書を作ってメールで送り、入金予定を登録します。今日最初の注文は、ここで完了です。" },
      { time: "11:45", who: 0, title: "与信枠を超える注文", body: "ある取引先の注文が、与信枠を64万円超えます。受注担当はそこで止まり、出荷の前にあなたに聞きます。", mark: "ask" },
      { time: "11:52", title: "スマホで承認", body: "上長が承認を押してから、はじめて出荷担当に渡ります。", mark: "stamp" },
      { time: "17:00", title: "今日の注文42件、すべて請求まで", body: "業務の状況の画面で、どの注文がどこにあるかがわかります。止まっている注文は0件です。" },
    ],
    approved: "承認",
    film: "映像で見る（77秒）",
  },
  how: {
    eyebrow: "しくみ",
    title: "教えるのは一度だけ。",
    steps: [
      { title: "仕事を渡す", body: "求人票・手順書・ひとことを渡すと、Kitehand が業務に分け、引き受ける範囲と、そのとおりに動く業務フローを示します。" },
      { title: "一度やって見せる", body: "アカウントを渡し、難しいところを一度操作して見せます。以降は同じ手順を繰り返します。" },
      { title: "承認する", body: "支払いなど、指定した手順はあなたの承認を待ちます。業務フローの変更も同じです。" },
    ],
  },
  contrast: {
    eyebrow: "AI エージェントとの違い",
    title: "その場で考えず、覚えた手順を繰り返す。",
    left: "よくある AI エージェント",
    right: "Kitehand",
    rows: [
      ["毎回ゼロから考えるので、結果がぶれる。", "覚えた手順を、毎回同じように繰り返す。"],
      ["仕事が複数にまたがると、どこまで進んだか見えない。", "業務の状況の画面で、どの注文が誰のところにあるかがわかる。"],
      ["画面が変わると、黙ってやり方を変える。", "覚え直した手順は、使う前に報告する。"],
      ["操作のたびに AI モデルを呼ぶ。", "覚えた操作はモデルなしで繰り返す。モデルを使うのは、書類を読む時と覚え直す時。"],
    ],
  },
  trust: {
    eyebrow: "データと記録",
    title: "何を、どこに置くか。",
    items: [
      { title: "アカウント情報", body: "暗号化し、会社ごとに分けて保管します。社内に置くべき仕事は、オフィスのパソコンで動かせます。" },
      { title: "記録", body: "何を、いつ、どのデータで行い、誰が承認したかを記録します。" },
      { title: "デスクトップアプリ", body: "ブラウザ・メール・Excel の仕事はクラウドで動きます。インストール型の Windows アプリは、オフィスのパソコンで動かします。" },
      { title: "基盤", body: "Kitehand は、Kitewell とオープンソースのワークフローエンジン Dagu の上で動きます。" },
    ],
  },
  faq: {
    eyebrow: "よくある質問",
    title: "申し込みの前に。",
    items: [
      { q: "どんな仕事に向いていますか？", a: "経理、受注、総務、採用の調整、サポートなど、決まった流れのある事務です。申し込みのあと、どの業務が向いているかをお伝えします。" },
      { q: "やらないことは？", a: "電話、来客、交渉、判断の要る仕事です。最初からチームの担当として分けます。" },
      { q: "間違えたらどうなりますか？", a: "すべての操作が記録に残ります。コメントを付けて差し戻すと、その手順を直します。" },
      { q: "パソコンの電源を切ると止まりますか？", a: "止まりません。クラウドで動くので、夜も休日も進みます。オフィスのパソコンで動かす仕事だけ、そのパソコンの電源が必要です。" },
      { q: "業務フローを描く必要はありますか？", a: "ありません。渡された仕事から Kitehand が業務フローを書き、承認すると、そのとおりに仕事が進みます。変えたいときは、変えたいことを伝えるだけです。" },
      { q: "AI モデルには何が送られますか？", a: "手順を覚える時と覚え直す時の画面、読み取る書類です。覚えた操作を繰り返す時は送りません。" },
      { q: "いま使えますか？", a: "デザインパートナーを募集しています。このページ上部の欄から申し込めます。" },
      { q: "料金は？", a: "席数や操作回数ではなく、担当者1人ごとの料金です。デザインパートナーと一緒に決めています。" },
    ],
  },
  handover: {
    eyebrow: "先行受付",
    title: "次の求人を出す前に、仕事を渡してください。",
    lede: "連絡先を教えてください。最初の1週間を一緒に立ち上げます。",
    email: "会社のメールアドレス",
    company: "会社名",
    job: "仕事",
    jobHint: "求人票、手順書、または仕事のひとこと",
    submit: "申し込む",
    sending: "送信中…",
    done: "受け付けました。どこまで任せられるかを、メールでお返事します。",
    error: "送信できませんでした。メールアドレスと会社名を確かめて、もう一度お試しください。",
  },
  jobs: {
    eyebrow: "Kitehand が読んだ仕事",
    title: (role) => `${role}：Kitehand が引き受けられる仕事`,
    lede: (role) => `よくある${role}の仕事を業務に分けました。Kitehand がやること、先にあなたに聞くこと、チームに残すことがわかります。`,
    posting: "読んだ求人票",
    yours: "自分の仕事を読む",
    more: "ほかの仕事",
  },
  footer: { made: ["Kitehand は、Kitewell をつくる ", " が開発しています。"], company: "Descarty", companyUrl: "https://descarty.com/", kitewell: "Kitewell", privacy: "プライバシー" },
  privacy: {
    title: "プライバシー",
    body: [
      "仕事を渡した場合は、メールアドレス・会社名・渡された仕事を、フォームサービス Web3Forms を通じて受け取り、仕事と立ち上げのご連絡に使います。いつでも削除をご依頼いただけます。",
      "訪問数を把握するため、PostHog を利用しています。PostHog は、閲覧したページ、参照元のサイト、端末とブラウザの種類を記録し、そのための識別子をブラウザに保存します。画面の録画やキー入力の記録は行いません。データを販売することはありません。",
    ],
  },
  notFound: { title: "ここには何もありません。", body: "このページは存在しません。", home: "Kitehand に戻る" },
};

export const COPY: Record<Lang, Copy> = { en, ja };
