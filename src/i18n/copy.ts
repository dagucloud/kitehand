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
    description: "Hand over a job posting, a manual, or one line. We'll tell you how much of the job Kitehand can take; then it works it in the cloud around the clock, following the process flow you approved, and asks you before money moves.",
    og: "/og-en.png",
  },
  nav: { how: "How it works", morning: "A day", contrast: "Not an agent", faq: "FAQ", cta: "Apply" },
  hero: {
    badge: "Early access · Taking design partners",
    kicker: "Before you post that job",
    title: ["Skip the hire.", "Hand it to AI staff."],
    lede: "Kitehand is AI staff for back-office work: order entry, shipping, accounting. It works your email, accounting software, bank and spreadsheets on screen, the way a person would, around the clock in the cloud, and asks you before money moves.",
    actions: ["Apply for early access", "Watch the film (77 s)"],
  },
  read: {
    eyebrow: "Early access · Design partners",
    title: "Paste the job as you have it.",
    lede: "Send a job posting, a manual, or one line with where to reach you, and you've applied. We'll email you how much of it Kitehand can take, and set up its first week with you as a design partner.",
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
    eyebrow: "A day, start to finish",
    title: "Three empty seats. The work gets done.",
    lede: "Order entry, shipping and accounting, worked by three Kitehand hands that pass each order along the process flow Kitehand wrote and you approved. Nobody sits at the desks. The manager approves one thing, from a phone.",
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
      { time: "5:00 PM", title: "42 orders, all invoiced", body: "Where every order is, and whose desk it's on, is on one board. Stuck: none." },
    ],
    approved: "Approved",
    film: "Watch the film (77 s)",
  },
  how: {
    eyebrow: "How it works",
    title: "Onboard it like a new hire. Once.",
    steps: [
      { title: "Hand over the job", body: "A job posting, the manual the last person left, or one line. Kitehand turns it into duties, tells you which it can take, and writes the process flow it will follow." },
      { title: "Show it once", body: "Give it the sign-ins and do the tricky part while it watches. From then on it repeats the steps exactly, with no improvising." },
      { title: "Keep the decisions", body: "It asks before money moves or anything leaves the company. The process flow and the steps change only after you approve them." },
    ],
  },
  contrast: {
    eyebrow: "Not another AI agent",
    title: "Agents improvise. Kitehand does the job.",
    left: "A typical AI agent",
    right: "Kitehand",
    rows: [
      ["Thinks from scratch on every run, so results drift.", "Learns the job once, then repeats the same steps every day."],
      ["Stops when the laptop it runs on sleeps.", "Works in the cloud around the clock. Systems only your office can reach, it works through one office PC."],
      ["Leaves you guessing what got done across jobs.", "One board shows every order on the process flow, and whose desk it's on."],
      ["Acts first and tells you later.", "Asks before money moves, and keeps every approval on record."],
      ["Quietly changes how it works when a screen changes.", "Tells you what it relearned and waits for your OK."],
      ["Charges for AI on every action.", "Uses AI to learn and relearn; the daily work runs without it."],
    ],
  },
  trust: {
    eyebrow: "Why you can trust it",
    title: "Your desk, your rules, your records.",
    items: [
      { title: "Sign-ins encrypted", body: "Passwords and sign-ins are encrypted, kept apart for each company, and used only for the work you handed over. Rather keep them in-house? Run that work on a PC in your office." },
      { title: "Every action on record", body: "What it did, when, with which data, and who approved it, ready for your auditor." },
      { title: "Desktop apps too", body: "Browsers, email and Excel in the cloud, and the old Windows app nobody can replace, through a PC in your office." },
      { title: "Built on proven engines", body: "Kitehand runs on Kitewell and Dagu, the open-source workflow engine teams run in production." },
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "What managers ask first.",
    items: [
      { q: "Which jobs fit?", a: "Back-office work that follows a routine: accounting, order entry, admin, recruiting coordination, support. Paste the job and Kitehand says what fits and what should stay with people." },
      { q: "What won't it do?", a: "Phone calls, visitors, negotiation and judgment calls stay with your team. Kitehand marks them as yours from the start." },
      { q: "What if it gets something wrong?", a: "Anything that moves money or leaves the company waits for your approval. Everything else is on record, and you can send work back with a note; it learns from the correction." },
      { q: "Does it stop when our computers are off?", a: "No. It works in the cloud, nights and weekends included. Only work you choose to keep on an office PC needs that PC switched on." },
      { q: "Do we have to draw the process?", a: "No. Kitehand writes the process flow from the job you handed over. You approve it, and the work follows it. To change it, say what should change; nobody edits diagrams." },
      { q: "Where does my data go?", a: "The work runs in our cloud. Sign-ins are encrypted and kept apart for each company. Screens go to an AI model only while it learns or relearns a step. Anything that must stay in-house can run on a PC in your office instead." },
      { q: "Is it available now?", a: "We're taking design partners. To apply, send a job and where to reach you from the form near the top of this page, and we'll set up its first week with you." },
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
    done: "Got it. We'll be in touch with how much of the job Kitehand can take, and to set up its first week.",
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
  notFound: { title: "Nothing here.", body: "That page doesn't exist. The job you came for might.", home: "Back to Kitehand" },
};

const ja: Copy = {
  lang: "ja",
  other: { lang: "en", label: "English", home: "/" },
  meta: {
    title: "Kitehand — 事務の仕事を引き受ける AI の担当者",
    description: "求人票、手順書、ひとこと。渡していただければ、何人分の仕事を任せられるかをお知らせします。あとはあなたが承認した業務フローのとおりに、クラウドで24時間仕事を進め、お金が動く前には必ずあなたに聞きます。",
    og: "/og-ja.png",
  },
  nav: { how: "しくみ", morning: "ある一日", contrast: "エージェントとの違い", faq: "よくある質問", cta: "申し込む" },
  hero: {
    badge: "先行受付中 · デザインパートナー募集",
    kicker: "求人を出す前に",
    title: ["その仕事、", "AI の担当者に。"],
    lede: "Kitehand は、受注・出荷・経理などの事務を引き受ける AI の担当者です。人と同じように、メール・会計ソフト・銀行・Excel の画面を操作して、クラウドで24時間仕事を進め、お金が動く前だけあなたに聞きます。",
    actions: ["先行受付に申し込む", "映像で見る（77秒）"],
  },
  read: {
    eyebrow: "先行受付・デザインパートナー募集",
    title: "あなたの仕事を、貼ってください。",
    lede: "求人票でも、手順書でも、ひとことでも。仕事と連絡先を送れば、申し込みは完了です。どこまで任せられるかをメールでお知らせし、デザインパートナーとして最初の1週間を一緒に立ち上げます。",
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
    eyebrow: "ある一日の、最初から最後まで",
    title: "3つの席は空いたまま。仕事は終わる。",
    lede: "受注・出荷・経理の3人分を、Kitehand の担当者が回すとこうなります。注文は Kitehand が書き、あなたが承認した業務フローのとおりに、担当者から担当者へ引き継がれます。上長はスマホで1回、承認するだけです。",
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
      { time: "17:00", title: "今日の注文42件、すべて請求まで", body: "どの注文がいま誰のところにあるかは、業務の状況で一目でわかります。止まっている注文は0件。" },
    ],
    approved: "承認",
    film: "映像で見る（77秒）",
  },
  how: {
    eyebrow: "しくみ",
    title: "新しい人と同じように、一度だけ教える。",
    steps: [
      { title: "仕事を渡す", body: "求人票、前任者の手順書、ひとこと。Kitehand が業務に分け、どれを引き受けられるかを示し、そのとおりに動く業務フローを書きます。" },
      { title: "一度やって見せる", body: "アカウントを渡し、難しいところを一度やって見せる。あとは同じ手順を、毎日そのまま繰り返します。" },
      { title: "決めるのは、あなた", body: "お金が動く前や社外に出す前には必ず聞きます。業務フローや手順を変えるときは、使う前にあなたの承認を取ります。" },
    ],
  },
  contrast: {
    eyebrow: "よくある AI エージェントとの違い",
    title: "エージェントは毎回考える。Kitehand は仕事をこなす。",
    left: "よくある AI エージェント",
    right: "Kitehand",
    rows: [
      ["毎回ゼロから考えるので、結果がぶれる。", "一度覚えた仕事を、毎日同じ手順で繰り返す。"],
      ["動かしているパソコンが閉じると止まる。", "クラウドで24時間動く。社内からしか使えないシステムには、オフィスのパソコン1台を通して届く。"],
      ["仕事が複数にまたがると、何がどこまで進んだか見えない。", "業務フローの上で、どの注文がいま誰のところにあるかが一目でわかる。"],
      ["先にやってから、あとで知らせる。", "お金が動く前に聞き、承認はすべて記録に残す。"],
      ["画面が変わると、黙ってやり方を変える。", "覚え直したことを報告し、OK を待つ。"],
      ["操作のたびに AI の利用料がかかる。", "AI を使うのは覚える時と覚え直す時だけ。毎日の仕事は AI なしで回る。"],
    ],
  },
  trust: {
    eyebrow: "任せられる理由",
    title: "あなたの席、あなたのルール、あなたの記録。",
    items: [
      { title: "アカウント情報は暗号化", body: "パスワードやログイン情報は暗号化し、会社ごとに分けて保管し、渡された仕事にだけ使います。社内に置きたい場合は、その仕事だけオフィスのパソコンで動かせます。" },
      { title: "すべての操作が記録に残る", body: "何を、いつ、どのデータで行い、誰が承認したか。監査にそのまま出せます。" },
      { title: "デスクトップアプリも", body: "ブラウザ、メール、Excel はクラウドで。替えのきかない古い Windows アプリは、オフィスのパソコンを通して。" },
      { title: "実績のある基盤の上に", body: "Kitehand は Kitewell と、本番で使われているオープンソースのワークフローエンジン Dagu の上で動きます。" },
    ],
  },
  faq: {
    eyebrow: "よくある質問",
    title: "管理職が最初に聞くこと。",
    items: [
      { q: "どんな仕事に向いていますか？", a: "決まった流れのある事務の仕事です。経理、受注、総務、採用の調整、サポートなど。仕事を貼れば、何が向いていて何を人に残すべきかを示します。" },
      { q: "やらないことは？", a: "電話、来客、交渉、判断の要る仕事はチームに残します。Kitehand は最初からそれをあなたの担当として分けます。" },
      { q: "間違えたらどうなりますか？", a: "お金が動くことや社外に出ることは、承認されるまで実行しません。それ以外もすべて記録に残り、コメントを付けて差し戻せば、その指摘から覚え直します。" },
      { q: "パソコンの電源を切ると止まりますか？", a: "止まりません。仕事はクラウドで、夜も休日も進みます。オフィスのパソコンで動かすと決めた仕事だけ、そのパソコンの電源が要ります。" },
      { q: "業務フローを描く必要はありますか？", a: "ありません。渡された仕事から Kitehand が業務フローを書き、あなたが承認すると、仕事はそのとおりに進みます。変えたいときは、変えたいことを伝えるだけです。図を編集する必要はありません。" },
      { q: "データはどこに行きますか？", a: "仕事はクラウドで動きます。アカウント情報は暗号化し、会社ごとに分けて保管します。画面が AI モデルに送られるのは、手順を覚える時と覚え直す時だけです。社内に置くべきものは、オフィスのパソコンで動かせます。" },
      { q: "いま使えますか？", a: "デザインパートナーを募集しています。このページ上部の欄から、仕事と連絡先を送れば申し込みです。最初の1週間を一緒に立ち上げます。" },
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
    done: "受け付けました。どこまで任せられるかと、最初の1週間の立ち上げについて、ご連絡します。",
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
  notFound: { title: "ここには何もありません。", body: "このページは存在しません。お探しの仕事は、あるかもしれません。", home: "Kitehand に戻る" },
};

export const COPY: Record<Lang, Copy> = { en, ja };
