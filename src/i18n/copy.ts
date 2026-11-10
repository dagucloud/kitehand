// Every word on kitehand.ai, in English and Japanese. Pages pick the copy for
// their language; the shape is the same so nothing is missing in either.
import type { Kind } from "../data/samples";
import type { Lang, Share } from "../lib/diagnosis";

export type Copy = {
  lang: Lang;
  other: { lang: Lang; label: string; home: string };
  meta: { title: string; description: string; og: string };
  nav: { read: string; how: string; compare: string; pricing: string; faq: string; cta: string };
  hero: {
    badge: string;
    kicker: string;
    title: [string, string];
    lede: string;
    actions: [string, string];
    // The day's roster beside the promise: Kitehand on the work nobody is
    // free for, a person on theirs, and one exception waiting on the phone.
    roster: {
      title: string;
      date: string;
      columns: [string, string, string];
      rows: { work: string; who: string; now: string; cleared?: string; state: "kitehand" | "ask" | "person" }[];
      total: { label: string; value: string; unit: string };
    };
    phone: { from: string; time: string; text: string; approve: string; hold: string; approved: string };
  };
  // The shortage, in numbers a manager recognizes, each with its source.
  facts: { eyebrow: string; title: string; items: { value: string; unit: string; label: string; source: string; url: string }[] };
  read: { eyebrow: string; title: string; lede: string; pick: string; example: string };
  result: {
    takes: string;
    // How a share of a full-time job reads: up to one, and more than one.
    units: [string, string];
    taken: (taken: number | string, total: number | string) => string;
    basis: string;
    shares: Record<Share, string>;
    columns: [string, string, string];
    hours: string;
    schedule: string;
    asks: string;
    week: string;
    estimate: string;
    cta: string;
    share: string;
    shareText: (title: string, people: string) => string;
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
    // The hands at work, in the order the work flows; a moment of the day
    // names its hand by index.
    work: string[];
    moments: { time: string; who?: number; title: string; body: string; mark?: "ask" | "stamp" }[];
    approved: string;
  };
  how: { eyebrow: string; title: string; parts: { title: string; body: string }[]; note: string };
  // Kitehand beside the other ways a company covers work it is short-handed
  // on; a mark in a cell names its source in the notes.
  compare: {
    eyebrow: string;
    title: string;
    lede: string;
    pick: string;
    rows: string[];
    kitehand: string[];
    options: { name: string; cells: string[] }[];
    notes: string[];
  };
  hands: { eyebrow: string; title: string; lede: string };
  trust: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  // Free, then the paid plans priced per hand: Own Key, where the company
  // brings its own AI model, and Pro, which is featured.
  pricing: {
    eyebrow: string;
    title: string;
    lede: string;
    example: string;
    plans: { id: string; name: string; lede: string; price: string; per: string; includes: string[]; cta: string; buy?: "own_key" | "pro"; featured?: boolean }[];
    anchor: string;
    yearly: string;
    yearlyCta: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  // The foot of the page: the way to start, and beside it the way to ask the
  // team about a job first.
  start: {
    eyebrow: string;
    title: string;
    lede: string;
    start: string;
    ask: string;
    askLede: string;
    agree: [string, string, string];
  };
  jobs: {
    eyebrow: string;
    title: (work: string) => string;
    lede: (work: string) => string;
    posting: string;
    kinds: Record<Kind, string>;
    yours: string;
    others: string;
    more: string;
    index: string;
  };
  // made is the sentence around the company's name, which links to its site.
  footer: { made: [string, string]; company: string; companyUrl: string; privacy: string; terms: string; legal: string; legalUrl: string };
  notFound: { title: string; body: string; home: string };
};

const en: Copy = {
  lang: "en",
  other: { lang: "ja", label: "日本語", home: "/ja/" },
  meta: {
    title: "Kitehand — for the office work you're short-handed on",
    description: "Order entry, bookkeeping, shipping, online stores. Hand Kitehand the job as a job description, a manual or one line, and it does the work the same way every day, nights and weekends included. Try it free; paid plans from $49 a month per hand.",
    og: "/og-en.png",
  },
  nav: { read: "How much", how: "How it works", compare: "Compare", pricing: "Pricing", faq: "FAQ", cta: "Try free" },
  hero: {
    badge: "Free trial · start with one hand",
    kicker: "Hand over a job description, a manual or a line",
    title: ["Short-handed?", "Hand it to Kitehand."],
    lede: "The order entry, bookkeeping and shipping your team squeezes in around everything else: Kitehand learns the job once, then does it the same way every day, nights and weekends included.",
    actions: ["Try it free", "See how much it can take"],
    roster: {
      title: "Today's roster",
      date: "Mon, Oct 27",
      columns: ["Work", "Who", "Now"],
      rows: [
        { work: "Order entry", who: "Kitehand", now: "38 entered", state: "kitehand" },
        { work: "Invoices", who: "Kitehand", now: "12 sent", state: "kitehand" },
        { work: "Shipping", who: "Kitehand", now: "1 waiting for you", cleared: "Booking pickups", state: "ask" },
        { work: "Bookkeeping", who: "Kitehand", now: "54 entered", state: "kitehand" },
        { work: "Phones, visitors", who: "Maria", now: "On a call", state: "person" },
      ],
      total: { label: "Kitehand is covering", value: "1.6", unit: "full-time jobs" },
    },
    phone: {
      from: "Kitehand · Shipping",
      time: "now",
      text: "Hill & Co.'s order is $6,400 over their credit limit. Ship it anyway?",
      approve: "Approve",
      hold: "Hold",
      approved: "Approved",
    },
  },
  facts: {
    eyebrow: "Short-handed",
    title: "Being short-handed lands on whoever's left.",
    items: [
      { value: "32", unit: "%", label: "of small-business owners have openings they can't fill.", source: "NFIB Jobs Report, September 2026", url: "https://www.nfib.com/wp-content/uploads/2026/10/NFIB-September-2026-Jobs-Report.pdf" },
      { value: "45", unit: "%", label: "found few or no qualified applicants for the positions they were trying to fill.", source: "NFIB Jobs Report, September 2026", url: "https://www.nfib.com/wp-content/uploads/2026/10/NFIB-September-2026-Jobs-Report.pdf" },
      { value: "26", unit: "%", label: "name the quality or availability of labor as their single most important problem.", source: "NFIB Jobs Report, September 2026", url: "https://www.nfib.com/wp-content/uploads/2026/10/NFIB-September-2026-Jobs-Report.pdf" },
    ],
  },
  read: {
    eyebrow: "Examples",
    title: "How much it can take.",
    lede: "Pick a job short-handed companies often hand over to see what Kitehand does, what it asks you first, what stays with your team, and how much of a full-time job that is.",
    pick: "Pick an example",
    example: "Example",
  },
  result: {
    takes: "Kitehand takes",
    units: ["of a full-time job", "full-time jobs"],
    taken: (taken, total) => `Of the ${total} hours a month this job takes, Kitehand takes ${taken}.`,
    basis: "Counting 160 hours a month as one full-time job.",
    shares: { kitehand: "Kitehand", approve: "With your OK", human: "Your team" },
    columns: ["Task", "Who", "Hours / month"],
    hours: "h",
    schedule: "When",
    asks: "Asks you before",
    week: "First week",
    estimate: "An estimate from a typical case. After a week of real work, Kitehand replaces it with the hours it measured.",
    cta: "Hand this job over",
    share: "Share",
    shareText: (title, people) => `Kitehand can take ${people} of a full-time job from our “${title}” work. See how much of yours:`,
    copied: "Link copied",
    save: "Save card",
    stamp: "Handed over",
  },
  day: {
    eyebrow: "A day",
    title: "Three empty seats, one day of orders.",
    lede: "Order entry, shipping and accounting, run by three Kitehand hands that pass each order along. The manager approved one order, from a phone.",
    desk: "Order entry, shipping, accounting",
    handed: "3 empty seats",
    working: "Kitehand at work",
    work: ["Order entry", "Shipping", "Accounting"],
    moments: [
      { time: "8:02", who: 0, title: "An order arrives, and is keyed in", body: "Reads the customer's purchase order, enters it in the order system, sends the confirmation, and passes the order to shipping." },
      { time: "8:15", who: 1, title: "Pickup booked", body: "Books the pickup on the carrier's site, takes the tracking number, and passes the order to accounting." },
      { time: "8:21", who: 2, title: "Invoice sent", body: "Makes the invoice, emails it, and books the payment it expects. The day's first order is done." },
      { time: "11:45", who: 0, title: "An order over its credit limit", body: "One customer's order runs $6,400 over its credit limit. Order entry stops there and asks before anything ships.", mark: "ask" },
      { time: "11:52", title: "Approved from a phone", body: "The manager approves between meetings. Only then does the order go on to shipping.", mark: "stamp" },
      { time: "17:00", title: "42 orders, all invoiced", body: "The roster shows where every order is. Stuck: none." },
    ],
    approved: "Approved",
  },
  how: {
    eyebrow: "How it works",
    title: "Teach it once.",
    parts: [
      { title: "Hand over the job", body: "A job description, a manual or one line, as you have it; there's nothing to break down first. Kitehand makes a hand for it, splits the job into tasks, says which it can take, and shows how it will do each one every time." },
      { title: "Show it once", body: "Give it the sign-ins for the systems you use, and do the tricky part once while it watches. After that, it does it the same way." },
      { title: "Check from your phone", body: "Work you mark, such as payments or shipments, waits for your approval. When it changes how it does the work, it tells you what changed." },
    ],
    note: "On Pro, your first job is set up with us on a call.",
  },
  compare: {
    eyebrow: "Compare",
    title: "Other ways to cover the work, compared.",
    lede: "There's more than one way to cover work you're short-handed on. For office work, here's how they compare.",
    pick: "Compare with",
    rows: ["Up and running", "Cost per month", "Works", "How the work gets done", "Something unusual", "A screen or process changes", "When people change"],
    kitehand: ["Today", "$99 a month per hand before tax, AI included; free trial first", "Around the clock, weekends too", "The way it learned, every time", "Asks you on your phone", "Relearns it, and tells you", "The way it works stays"],
    options: [
      { name: "Temp or part-time help", cells: ["Weeks, once you find someone", "$3,460 full-time¹", "Their hours", "Depends on the person", "Asks on the spot", "Adapts", "Needs a handover"] },
      { name: "Virtual assistant", cells: ["One to two weeks", "$390 for 10 hours²", "The hours you buy", "Depends on who's assigned", "Asks by chat", "Adapts", "A new assistant needs a handover"] },
      { name: "RPA", cells: ["Months, with someone to build it", "Licenses, plus the builder", "Around the clock", "Exactly as built", "Stops", "Breaks until someone fixes it", "Only its builder can fix it"] },
      { name: "AI agents", cells: ["Right away", "$20–200, by usage", "When asked", "Works it out anew, so it drifts", "May go ahead on its own", "Works it out again", "Nothing to hand over"] },
    ],
    notes: [
      "¹ Median wage for general office clerks, $21.64 an hour, times 160 hours, before payroll costs. U.S. Bureau of Labor Statistics, May 2025.",
      "² Time Etc's smallest plan, October 2026.",
    ],
  },
  hands: {
    eyebrow: "Ready-made hands",
    title: "Start with a hand that already knows the job.",
    lede: "Each of these is a job we've already taught a hand. Open one to see how it does the work and what it did last time, then start your own from it, free.",
  },
  trust: {
    eyebrow: "Confidential",
    title: "Your company's business stays with your company.",
    items: [
      { title: "An environment of your own", body: "Kitehand works in an environment kept apart for your company, and shares nothing with anyone else's." },
      { title: "Sign-ins", body: "Sign-ins for the systems you use are kept encrypted, and used only for Kitehand's work." },
      { title: "Not used for training", body: "Nothing you hand over is used to train an AI model. The included AI runs only on US and EU hosts that keep nothing, never in China." },
      { title: "A record", body: "What it did, when, with which data, and who approved it." },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "You pay for each hand. That's all.",
    lede: "A hand is one worker you hand jobs to. Each costs a set amount a month, with no cap on how many jobs it takes or how often they run.",
    example: "Three hands on Pro come to $297 a month before tax.",
    plans: [
      {
        id: "free",
        name: "Free trial",
        lede: "Try one job first.",
        price: "$0",
        per: "",
        includes: ["One hand, taking one job", "Up to 30 runs over 14 days", "AI usage included", "No card needed"],
        cta: "Start the free trial",
      },
      {
        id: "pro",
        name: "Pro",
        lede: "AI usage included. If you're not sure, choose this.",
        price: "$99",
        per: "a month per hand, before tax",
        includes: ["No cap on jobs or runs", "AI usage included", "No setup fee", "Your first job set up with us on a call", "A full refund within 30 days"],
        cta: "Start Pro",
        buy: "pro",
        featured: true,
      },
      {
        id: "own-key",
        name: "Own Key",
        lede: "For companies that already pay for an AI model.",
        price: "$49",
        per: "a month per hand, before tax",
        includes: ["No cap on jobs or runs", "Uses your own API key: Anthropic, OpenAI, Google Gemini or OpenRouter", "AI usage billed separately by your provider", "Your model stays the same until you change it", "Set up by you", "A full refund within 30 days"],
        cta: "Start Own Key",
        buy: "own_key",
      },
    ],
    anchor: "About 1/35 of a full-time office clerk's median wage.",
    yearly: "Pay yearly and pay for ten months.",
    yearlyCta: "Pay yearly",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Before you start.",
    items: [
      { q: "What work can it take?", a: "Office work done on a screen with a set way of doing it: order entry, bookkeeping, invoices and payments, shipping, online store operations, property listings. Hand one job to a hand on the free trial to see, or ask us and we'll tell you how much of yours it can take." },
      { q: "What won't it do?", a: "Phone calls, visitors, negotiation, judgment calls and work done by hand. These stay with your team from the start." },
      { q: "How does it learn the job?", a: "It splits the job description, manual or line you hand over into tasks and writes down how it will do each one. You do the tricky parts once while it watches, and it uses the way it learned only after you've checked it." },
      { q: "What does it do when it's unsure?", a: "Anything off its usual way, such as a new customer, an unusual amount or changed bank details, it asks you on your phone before going ahead." },
      { q: "What if a screen changes?", a: "It relearns that part, and tells you before it does the work the new way." },
      { q: "What if it gets something wrong?", a: "Everything it does is recorded. Send the work back with a note, and it corrects how it does it." },
      { q: "Does it stop when our computers are off?", a: "No. Kitehand works in the cloud, nights and weekends included." },
      { q: "How is our data handled?", a: "In an environment kept apart for your company, in Google Cloud in the United States, with sign-ins kept encrypted. Nothing you hand over trains an AI model. We sign an NDA on request." },
      { q: "Which AI model does it use?", a: "The free trial and Pro use DeepSeek V4.1 Flash, and OpenAI's GPT-6.1 Terra to read screens. Both run only on hosts headquartered in the US or the EU that neither keep nor train on what they receive (GPT-6.1 Terra on Microsoft Azure in the EU), never on DeepSeek's own servers or in China. On any plan you can use your own Anthropic, OpenAI, Google Gemini or OpenRouter model instead." },
      { q: "What does the free trial include?", a: "One hand taking one job for up to 30 runs over 14 days, with questions and approvals on your phone and AI usage for the trial. Once its runs or its 14 days are used, its work waits until you move to a paid plan." },
      { q: "How are the paid plans billed?", a: "Per hand: Own Key is $49 a month or $490 a year, and Pro is $99 a month or $990 a year, so a year costs ten months' price. You buy in the app and pay by card through Stripe, and prices exclude tax. There's no cap on the jobs a hand takes or how often they run. You pay for each hand you have: a hand you add is charged for the rest of the period, and a hand you delete is credited to your next payment." },
      { q: "Can we use our own AI model?", a: "Yes, on any plan. From a hand's menu, choose a model from Anthropic, OpenAI, Google Gemini or OpenRouter and enter your API key. Kitehand checks the model can do the work before saving it, and it stays the same until you change it. Your provider bills you for usage, and what the hand reads goes to that provider under its terms." },
      { q: "How is Own Key different from Pro?", a: "Both have no cap on jobs or runs. Pro includes AI usage and sets up your first job with you on a call. Own Key is half the price: you bring your own model and key, pay your provider for usage, and set it up yourself." },
      { q: "Can we cancel?", a: "Any time, from the app. You keep the plan to the end of the period you've paid for and aren't charged again; then the hand goes back to the free trial with the runs and days it has left. Within the first 30 days of a paid plan you get a full refund." },
    ],
  },
  start: {
    eyebrow: "Start",
    title: "Start with one job.",
    lede: "Sign up, and hand your first job to a hand on the free trial: a job description, a manual or one line, as you have it.",
    start: "Start the free trial",
    ask: "Ask us first",
    askLede: "Not sure a job fits? Email us what it is, and we'll tell you how much of it Kitehand can take.",
    agree: ["Starting the free trial or paying for a plan means you agree to the ", "Terms of Service", "."],
  },
  jobs: {
    eyebrow: "Read by Kitehand",
    title: (work) => `${work}: what Kitehand can take`,
    lede: (work) => `A typical ${work.toLowerCase()} job, split into what Kitehand does, what it asks you first and what stays with your team, with how much of a full-time job it takes.`,
    posting: "The job as handed over",
    kinds: { posting: "A job description", manual: "A manual", line: "One line" },
    yours: "Hand over your own job",
    others: "See other examples",
    more: "Other jobs",
    index: "Jobs short-handed companies hand over",
  },
  footer: { made: ["Kitehand is made by ", "."], company: "Descarty", companyUrl: "https://descarty.com/en/", privacy: "Privacy", terms: "Terms", legal: "Commercial disclosure", legalUrl: "https://descarty.com/en/legal/tokushoho/" },
  notFound: { title: "Nothing here.", body: "That page doesn't exist.", home: "Back to Kitehand" },
};

const ja: Copy = {
  lang: "ja",
  other: { lang: "en", label: "English", home: "/" },
  meta: {
    title: "Kitehand — 人手が足りない仕事を引き受ける AI の担当者",
    description: "受注の入力、経理、出荷の手配、EC の運営。職務記述書・手順書・ひとことで仕事を渡せば、Kitehand の担当者が覚えて、夜も休日も毎日同じやり方でこなします。無料で試せて、有料は担当者1人 月7,400円（税別）から。",
    og: "/og-ja.png",
  },
  nav: { read: "何人分か", how: "しくみ", compare: "比べる", pricing: "料金", faq: "よくある質問", cta: "無料で試す" },
  hero: {
    badge: "無料で試せます · 担当者1人から",
    kicker: "職務記述書・手順書・ひとことで渡せる",
    title: ["人手が足りない仕事は、", "AI の担当者に。"],
    lede: "社長や現場が抱え込んでいる受注・経理・出荷の事務を、Kitehand の担当者が引き受けます。覚えたやり方で、夜も休日も、毎日同じように。",
    actions: ["無料で試す", "何人分を任せられるか見る"],
    roster: {
      title: "担当表",
      date: "10月27日（月）",
      columns: ["仕事", "担当", "いま"],
      rows: [
        { work: "受注の入力", who: "Kitehand", now: "38件 入力済", state: "kitehand" },
        { work: "請求書の発行", who: "Kitehand", now: "12件 送付済", state: "kitehand" },
        { work: "出荷の手配", who: "Kitehand", now: "確認待ち 1件", cleared: "集荷を予約中", state: "ask" },
        { work: "経理の入力", who: "Kitehand", now: "54件 記帳済", state: "kitehand" },
        { work: "電話・来客", who: "佐藤", now: "対応中", state: "person" },
      ],
      total: { label: "Kitehand が引き受けている仕事", value: "1.6", unit: "人分" },
    },
    phone: {
      from: "Kitehand · 出荷の手配",
      time: "いま",
      text: "山田商事さまの注文が、与信枠を64万円超えています。出荷を進めてよいですか？",
      approve: "承認する",
      hold: "保留",
      approved: "承認しました",
    },
  },
  facts: {
    eyebrow: "人手不足",
    title: "人手不足のしわ寄せは、残った人に来る。",
    items: [
      { value: "427", unit: "件", label: "人手不足による倒産。3年連続で過去最多を更新しました（2025年）。", source: "帝国データバンク「人手不足倒産の動向調査（2025年）」", url: "https://www.tdb.co.jp/report/economic/20260108-laborshortage-br2025/" },
      { value: "60.0", unit: "%", label: "人手が不足していると答えた企業（2,654社、2026年7〜8月）。", source: "日本商工会議所「多様な人材の活躍等に関する調査」", url: "https://www.jcci.or.jp/news/research/2026/0915140001.html" },
      { value: "1.5", unit: "倍", label: "従業員の退職がきっかけの人手不足倒産。前の年の1.5倍、110件に増えました（2025年）。", source: "東京商工リサーチ「2025年の人手不足倒産」", url: "https://www.tsr-net.co.jp/data/detail/1202275_1527.html" },
    ],
  },
  read: {
    eyebrow: "例で見る",
    title: "何人分を、任せられるか。",
    lede: "人が足りない仕事を選ぶと、担当者がやること、先にあなたに聞くこと、人に残すことと、引き受けるのが何人分かがわかります。",
    pick: "例を選ぶ",
    example: "例",
  },
  result: {
    takes: "担当者が引き受ける仕事",
    units: ["人分", "人分"],
    taken: (taken, total) => `この仕事にかかる月 ${total} 時間のうち、${taken} 時間を担当者が引き受けます。`,
    basis: "1人分＝月160時間で計算しています。",
    shares: { kitehand: "担当者がやる", approve: "承認してから", human: "人に残す" },
    columns: ["仕事", "担当", "時間／月"],
    hours: "時間",
    schedule: "いつ",
    asks: "先にあなたに聞くこと",
    week: "最初の1週間",
    estimate: "よくある例からの見込みです。1週間働いたあと、実際に測った時間に置き換えます。",
    cta: "この仕事を任せる",
    share: "共有",
    shareText: (title, people) => `「${title}」を Kitehand の担当者に任せると、${people}人分の仕事を引き受けてくれるらしい。あなたの会社の仕事も見てみて：`,
    copied: "リンクをコピーしました",
    save: "カードを保存",
    stamp: "引受済",
  },
  day: {
    eyebrow: "ある一日",
    title: "空いた3つの席で、1日の注文を回す。",
    lede: "受注・出荷・経理を、Kitehand の担当者3人が順に引き継いで回します。人がしたのは、スマホでの承認1回だけ。",
    desk: "受注・出荷・経理",
    handed: "空席 3",
    working: "Kitehand が対応中",
    work: ["受注", "出荷", "経理"],
    moments: [
      { time: "8:02", who: 0, title: "注文が届き、入力する", body: "取引先の注文書を読んで販売管理に入力し、注文請書を送って、出荷に回します。" },
      { time: "8:15", who: 1, title: "集荷を予約する", body: "運送会社のサイトで集荷を予約し、追跡番号を控えて、経理に回します。" },
      { time: "8:21", who: 2, title: "請求書を送る", body: "請求書を作ってメールで送り、入金予定を登録します。今日1件目の注文が、ここまで終わりました。" },
      { time: "11:45", who: 0, title: "与信枠を超える注文", body: "ある取引先の注文が、与信枠を64万円超えています。受注の担当者はそこで止まり、出荷の前に聞きます。", mark: "ask" },
      { time: "11:52", title: "移動の合間に、スマホで承認", body: "部長が承認。そこで初めて、注文は出荷に進みます。", mark: "stamp" },
      { time: "17:00", title: "42件、すべて請求まで", body: "どの注文がどこまで進んだか、担当表に残っています。止まっている注文は0件です。" },
    ],
    approved: "承認",
  },
  how: {
    eyebrow: "しくみ",
    title: "教えるのは、一度だけ。",
    parts: [
      { title: "仕事を渡す", body: "職務記述書、手順書、ひとこと。仕事を切り分けてから渡す必要はありません。担当者が仕事に分け、引き受ける範囲と、毎回のやり方を示します。" },
      { title: "一度やって見せる", body: "使っているシステムのアカウントを渡し、難しいところを一度だけ操作して見せます。以降は、同じやり方を繰り返します。" },
      { title: "スマホで確かめる", body: "支払いや出荷など、あなたが決めた仕事は承認してから進みます。やり方を変えたときは、何を変えたかを伝えます。" },
    ],
    note: "プロでは、最初の仕事をオンラインで一緒に設定します。",
  },
  compare: {
    eyebrow: "比べる",
    title: "人手を足す、ほかの方法と比べて。",
    lede: "足りない人手を埋める方法は、ひとつではありません。事務の仕事で比べると、こうなります。",
    pick: "比べる相手",
    rows: ["始めるまで", "月の費用（税抜）", "動く時間", "仕事のやり方", "いつもと違うとき", "画面や手順が変わったとき", "人が替わるとき"],
    kitehand: ["今日から", "担当者1人 月14,800円（AI 込み・税別）。無料体験あり", "24時間、休日も", "覚えたやり方を、毎回同じに", "スマホであなたに聞く", "覚え直して、知らせる", "やり方が残る"],
    options: [
      { name: "派遣・パート", cells: ["人が見つかってから数週間", "約33万円（フルタイム）¹", "勤務時間内", "人による", "その場で聞ける", "合わせられる", "引き継ぎが要る"] },
      { name: "オンラインアシスタント", cells: ["1〜2週間", "10〜13万円（月30時間）²", "契約した時間内", "担当する人による", "チャットで聞く", "合わせられる", "担当が替わると引き継ぎ"] },
      { name: "RPA", cells: ["作る人がいて数か月", "ツール代＋作る人", "24時間", "作ったとおりに", "止まる", "止まり、直す人が要る", "作った人がいないと直せない"] },
      { name: "AI エージェント", cells: ["すぐ", "数千円〜（使った分）", "頼んだときだけ", "その都度考えるので、ぶれる", "そのまま進めることがある", "その場で考え直す", "引き継ぐものがない"] },
    ],
    notes: [
      "¹ 一般事務の派遣料金（8時間あたり18,112円・税込）を税抜にし、20日分で計算。厚生労働省「令和6年度 労働者派遣事業報告書の集計結果」。",
      "² CASTER BIZ と HELP YOU の月30時間プラン（税抜、2026年10月時点）。",
    ],
  },
  hands: {
    eyebrow: "すぐ使える担当者",
    title: "仕事を覚えた担当者から、始められます。",
    lede: "どれも、仕事を覚えさせてある担当者です。開くと、仕事の進め方と前回やったことが見られます。そのまま自分の担当者として、無料で始められます。",
  },
  trust: {
    eyebrow: "秘密を守る",
    title: "会社のことは、会社の中に。",
    items: [
      { title: "専用の環境", body: "担当者は会社ごとに分かれた環境で働き、ほかの会社とは何も共有しません。" },
      { title: "アカウント情報", body: "使っているシステムのサインイン情報は暗号化して保管し、担当者の仕事のときだけ使います。" },
      { title: "学習に使わない", body: "預かった書類やデータで、AI モデルを学習させることはありません。付属の AI は、何も保存しない米国・EU の事業者だけで動き、中国には送りません。" },
      { title: "記録", body: "何を、いつ、どのデータで行い、誰が承認したかが残ります。" },
    ],
  },
  pricing: {
    eyebrow: "料金",
    title: "料金は、担当者の人数分だけ。",
    lede: "担当者は、仕事を任せる相手1人のことです。1人ごとに月額が決まっていて、任せる仕事の数にも、動かす回数にも上限はありません。",
    example: "たとえばプロで担当者を3人にすると、月44,400円（税別）です。",
    plans: [
      {
        id: "free",
        name: "無料体験",
        lede: "まず1つ、任せてみる。",
        price: "0円",
        per: "",
        includes: ["担当者1人に、仕事を1件", "14日間で30回まで", "AI の利用料込み", "カード登録は不要"],
        cta: "無料で試す",
      },
      {
        id: "pro",
        name: "プロ",
        lede: "AI の料金も込み。迷ったらこちら。",
        price: "14,800円",
        per: "／月・担当者1人（税別）",
        includes: ["仕事の数も回数も上限なし", "AI の利用料込み", "初期費用なし", "最初の仕事は、オンラインで一緒に設定", "30日以内なら全額返金"],
        cta: "プロを始める",
        buy: "pro",
        featured: true,
      },
      {
        id: "own-key",
        name: "自前キー",
        lede: "すでに AI の契約がある会社向け。",
        price: "7,400円",
        per: "／月・担当者1人（税別）",
        includes: ["仕事の数も回数も上限なし", "自社の API キーを使う（Anthropic・OpenAI・Google Gemini・OpenRouter）", "AI の利用料は別途、各社から直接請求", "モデルは、変えるまで同じまま", "設定はご自身で", "30日以内なら全額返金"],
        cta: "自前キーを始める",
        buy: "own_key",
      },
    ],
    anchor: "フルタイムの事務の派遣料金（月約33万円）の、約22分の1です。",
    yearly: "年払いなら10か月分の料金です。",
    yearlyCta: "年払いで始める",
  },
  faq: {
    eyebrow: "よくある質問",
    title: "始める前に。",
    items: [
      { q: "どんな仕事を任せられますか？", a: "受注の入力、経理、請求と入金の確認、出荷の手配、EC の運営、物件情報の登録など、パソコンの画面で決まった流れのある事務です。無料体験で1件任せて確かめるか、ご相談いただければ、どこまで任せられるかをお伝えします。" },
      { q: "任せられない仕事は？", a: "電話、来客、交渉、判断の要る仕事、手を動かす仕事です。最初から人の仕事として分けておきます。" },
      { q: "どうやって仕事を覚えますか？", a: "渡された職務記述書や手順書を仕事に分け、毎回のやり方を書き出します。難しいところは、あなたが一度操作して見せます。覚えたやり方は、あなたが確かめてから使います。" },
      { q: "迷ったときはどうしますか？", a: "初めての取引先、いつもと違う金額、変わった振込先など、決まったやり方から外れるものは、進める前にスマホであなたに聞きます。" },
      { q: "システムの画面が変わったら？", a: "そこのやり方を覚え直し、新しいやり方で進める前に、あなたに知らせます。" },
      { q: "間違えたらどうなりますか？", a: "すべての作業が記録に残ります。ひとこと添えて差し戻すと、そのやり方を直します。" },
      { q: "パソコンを閉じたら止まりますか？", a: "止まりません。担当者はクラウドで働くので、夜も休日も進みます。" },
      { q: "データはどう扱われますか？", a: "会社ごとに分かれた環境（米国の Google Cloud）で扱い、サインイン情報は暗号化して保管します。預かったデータで AI モデルを学習させることはありません。ご希望があれば秘密保持契約（NDA）を結びます。" },
      { q: "どの AI モデルを使いますか？", a: "無料トライアルとプロでは DeepSeek V4.1 Flash を使い、画面を読むときは OpenAI の GPT-6.1 Terra を使います。どちらも、送った内容を保存も学習もしない、本社が米国または EU にある事業者だけで動きます（GPT-6.1 Terra は EU の Microsoft Azure）。DeepSeek 社のサーバーや中国の事業者には送りません。どのプランでも、Anthropic・OpenAI・Google Gemini・OpenRouter のご自分のモデルに替えられます。" },
      { q: "無料体験では何ができますか？", a: "担当者1人に仕事を1件、14日間で30回まで任せられます。確認と承認はスマホで受けられ、AI の利用料も体験分は込みです。30回を使い切るか14日が過ぎると、有料プランに切り替えるまで仕事は止まって待ちます。" },
      { q: "有料プランの料金はどうかかりますか？", a: "担当者1人につき、自前キーは月7,400円か年74,000円、プロは月14,800円か年148,000円です（いずれも税別）。年払いは10か月分です。アプリから購入でき、お支払いは Stripe によるクレジットカード決済です。任せる仕事の数にも、動かす回数にも上限はありません。料金は担当者の人数分で、担当者を追加すると今の期間の残りの分を請求し、削除すると次回のお支払いから差し引きます。" },
      { q: "自分で選んだ AI モデルを使えますか？", a: "はい、どのプランでも使えます。担当者のメニューから、Anthropic・OpenAI・Google Gemini・OpenRouter のモデルを選び、API キーを入れてください。保存する前に、仕事ができるモデルかを確かめます。モデルは変えるまで同じままです。利用料はプロバイダから直接請求され、担当者が読む内容はそのプロバイダの規約のもとで送られます。" },
      { q: "自前キーとプロの違いは？", a: "どちらも、任せる仕事の数にも回数にも上限はありません。プロは AI の利用料込みで、最初の仕事をオンラインで一緒に設定します。自前キーは料金が半額で、ご自分のモデルとキーを使い、利用料をプロバイダに直接払い、設定もご自身で行います。" },
      { q: "解約はできますか？", a: "アプリからいつでも解約でき、お支払い済みの期間の終わりまで使えて、次の請求からはかかりません。その後、担当者は残りの回数と日数の無料体験に戻ります。有料プランの最初の30日以内なら、全額を返金します。" },
    ],
  },
  start: {
    eyebrow: "はじめる",
    title: "まず、仕事をひとつ。",
    lede: "登録して、無料体験の担当者に最初の仕事を渡してください。職務記述書・手順書・ひとこと、いまある形のままで。",
    start: "無料で試す",
    ask: "先に相談する",
    askLede: "任せられるか迷ったら、仕事の内容をメールでお送りください。どこまで任せられるかをお返事します。",
    agree: ["無料体験の開始と有料プランのお支払いには、", "利用規約", "が適用されます。"],
  },
  jobs: {
    eyebrow: "Kitehand が読んだ仕事",
    title: (work) => `${work}：Kitehand に任せられること`,
    lede: (work) => `よくある「${work}」の仕事を、担当者がやること、先に聞くこと、人に残すことに分けました。引き受けるのが何人分かもわかります。`,
    posting: "渡した仕事",
    kinds: { posting: "職務記述書", manual: "手順書", line: "ひとこと" },
    yours: "自分の会社の仕事を任せる",
    others: "ほかの例を見る",
    more: "ほかの仕事",
    index: "人手が足りない会社が任せる仕事",
  },
  footer: { made: ["Kitehand は ", " が開発しています。"], company: "Descarty", companyUrl: "https://descarty.com/", privacy: "プライバシー", terms: "利用規約", legal: "特定商取引法に基づく表記", legalUrl: "https://descarty.com/legal/tokushoho/" },
  notFound: { title: "ここには何もありません。", body: "このページは存在しません。", home: "Kitehand に戻る" },
};

export const COPY: Record<Lang, Copy> = { en, ja };
