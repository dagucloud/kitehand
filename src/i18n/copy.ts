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
    anchor: string;
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
    sizes: [string, string, string, string];
    job: string;
    jobHint: string;
    submit: string;
    sending: string;
    done: string;
    error: string;
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
  footer: { made: [string, string]; company: string; companyUrl: string; privacy: string };
  privacy: { title: string; body: string[] };
  notFound: { title: string; body: string; home: string };
};

const en: Copy = {
  lang: "en",
  other: { lang: "ja", label: "日本語", home: "/ja/" },
  meta: {
    title: "Kitehand — for the office work you're short-handed on",
    description: "Order entry, bookkeeping, shipping, online stores. Hand Kitehand the job as a posting, a manual or one line, and it does the work the same way every day, nights and weekends included. By application, 15 companies a month.",
    og: "/og-en.png",
  },
  nav: { read: "How much", how: "How it works", compare: "Compare", pricing: "Pricing", faq: "FAQ", cta: "Apply" },
  hero: {
    badge: "Founding members · 15 companies a month",
    kicker: "Hand over a posting, a manual or a line",
    title: ["Short-handed?", "Hand it to Kitehand."],
    lede: "The order entry, bookkeeping and shipping your team squeezes in around everything else: Kitehand learns the job once, then does it the same way every day, nights and weekends included.",
    actions: ["Apply", "See how much it can take"],
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
      { title: "Hand over the job", body: "A job posting, a manual or one line, as you have it; there's nothing to break down first. Kitehand makes a hand for it, splits the job into tasks, says which it can take, and shows how it will do each one every time." },
      { title: "Show it once", body: "Give it the sign-ins for the systems you use, and do the tricky part once while it watches. After that, it does it the same way." },
      { title: "Check from your phone", body: "Work you mark, such as payments or shipments, waits for your approval. So does any change to how it does the work." },
    ],
    note: "For the first 30 days, a person from Kitehand hands the work over with you.",
  },
  compare: {
    eyebrow: "Compare",
    title: "Other ways to cover the work, compared.",
    lede: "There's more than one way to cover work you're short-handed on. For office work, here's how they compare.",
    pick: "Compare with",
    rows: ["Up and running", "Cost per month", "Works", "How the work gets done", "Something unusual", "A screen or process changes", "When people change"],
    kitehand: ["In days", "$349 per hand", "Around the clock, weekends too", "The way it learned, every time", "Asks you on your phone", "Relearns it, and tells you first", "The way it works stays"],
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
  trust: {
    eyebrow: "Confidential",
    title: "Your company's business stays with your company.",
    items: [
      { title: "An environment of your own", body: "Kitehand works in an environment kept apart for your company, and shares nothing with anyone else's." },
      { title: "Sign-ins", body: "Sign-ins for the systems you use are kept encrypted, and used only for Kitehand's work." },
      { title: "Not used for training", body: "Nothing you hand over is used to train an AI model." },
      { title: "A record", body: "What it did, when, with which data, and who approved it." },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Priced per hand.",
    plan: "Kitehand",
    regular: "Regular price",
    price: "$349",
    per: "/ month",
    founding: { label: "Founding member price", price: "$199", note: "For the first 50 companies, held for as long as you stay." },
    yearly: "Pay yearly and get two months free.",
    anchor: "About a tenth of a full-time office clerk's median wage.",
    includes: [
      "One hand, taking up to 5 jobs",
      "No setup fee, and AI usage included",
      "Questions and approvals on your phone",
      "A person who hands the work over with you over the first 30 days",
      "A full refund within 30 days",
    ],
    intake: "By application, 15 companies a month. Each company gets an environment of its own, so we take only as many as we can set up well.",
    cta: "Apply",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Before you apply.",
    items: [
      { q: "What work can it take?", a: "Office work done on a screen with a set way of doing it: order entry, bookkeeping, invoices and payments, shipping, online store operations, property listings. When you apply, we tell you how much of yours it can take." },
      { q: "What won't it do?", a: "Phone calls, visitors, negotiation, judgment calls and work done by hand. These stay with your team from the start." },
      { q: "How does it learn the job?", a: "It splits the posting, manual or line you hand over into tasks and writes down how it will do each one. You do the tricky parts once while it watches, and it uses the way it learned only after you've checked it." },
      { q: "What does it do when it's unsure?", a: "Anything off its usual way, such as a new customer, an unusual amount or changed bank details, it asks you on your phone before going ahead." },
      { q: "What if a screen changes?", a: "It relearns that part, and tells you before it does the work the new way." },
      { q: "What if it gets something wrong?", a: "Everything it does is recorded. Send the work back with a note, and it corrects how it does it." },
      { q: "Does it stop when our computers are off?", a: "No. Kitehand works in the cloud, nights and weekends included." },
      { q: "How is our data handled?", a: "In an environment kept apart for your company, with sign-ins kept encrypted. Nothing you hand over trains an AI model. We sign an NDA on request." },
      { q: "Can one hand take more than 5 jobs?", a: "Talk to us. We'll add a hand, or work out with you how to split the work." },
      { q: "Can we cancel?", a: "Any time; you're not charged again. Within the first 30 days you get a full refund." },
      { q: "Why only 15 companies a month?", a: "Each company gets an environment of its own, and over the first 30 days a person hands the work over with you. We take as many as we can do that for." },
    ],
  },
  apply: {
    eyebrow: "Apply",
    title: "Start with one job.",
    lede: "Write the job you'd hand over, and apply. We'll email you how much of it Kitehand can take, and a date to set it up. Over the first 30 days, you hand it over together.",
    email: "Work email",
    company: "Company",
    name: "Your name",
    size: "People in your company",
    sizes: ["10 or fewer", "11–50", "51–300", "301 or more"],
    job: "The job to hand over",
    jobHint: "A job posting, a manual or one line. Paste it as you have it.",
    submit: "Apply",
    sending: "Sending…",
    done: "Got it. We'll email you how much it can take, and a date to set it up.",
    error: "That didn't go through. Check your email and company, and try again.",
  },
  jobs: {
    eyebrow: "Read by Kitehand",
    title: (work) => `${work}: what Kitehand can take`,
    lede: (work) => `A typical ${work.toLowerCase()} job, split into what Kitehand does, what it asks you first and what stays with your team, with how much of a full-time job it takes.`,
    posting: "The job as handed over",
    kinds: { posting: "A job posting", manual: "A manual", line: "One line" },
    yours: "Hand over your own job",
    others: "See other examples",
    more: "Other jobs",
    index: "Jobs short-handed companies hand over",
  },
  footer: { made: ["Kitehand is made by ", "."], company: "Descarty", companyUrl: "https://descarty.com/en/", privacy: "Privacy" },
  privacy: {
    title: "Privacy",
    body: [
      "When you apply, your email, company, name, company size and the job you describe reach us through the form service Web3Forms. We use them to reply about your application and its setup. Ask us to delete them at any time.",
      "We use PostHog to count visits. It records the pages viewed, the referring site, and the type of device and browser, and keeps an identifier for this in your browser. It does not record the screen or keystrokes. We don't sell data.",
    ],
  },
  notFound: { title: "Nothing here.", body: "That page doesn't exist.", home: "Back to Kitehand" },
};

const ja: Copy = {
  lang: "ja",
  other: { lang: "en", label: "English", home: "/" },
  meta: {
    title: "Kitehand — 人手が足りない仕事を引き受ける AI の担当者",
    description: "受注の入力、経理、出荷の手配、EC の運営。求人票・手順書・ひとことで仕事を渡せば、Kitehand の担当者が覚えて、夜も休日も毎日同じやり方でこなします。申込制・毎月15社まで。",
    og: "/og-ja.png",
  },
  nav: { read: "何人分か", how: "しくみ", compare: "比べる", pricing: "料金", faq: "よくある質問", cta: "申し込む" },
  hero: {
    badge: "創業メンバー受付中 · 毎月15社まで",
    kicker: "求人票・手順書・ひとことで渡せる",
    title: ["人手が足りない仕事は、", "AI の担当者に。"],
    lede: "社長や現場が抱え込んでいる受注・経理・出荷の事務を、Kitehand の担当者が引き受けます。覚えたやり方で、夜も休日も、毎日同じように。",
    actions: ["申し込む", "何人分を任せられるか見る"],
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
      { title: "仕事を渡す", body: "求人票、手順書、ひとこと。仕事を切り分けてから渡す必要はありません。担当者が仕事に分け、引き受ける範囲と、毎回のやり方を示します。" },
      { title: "一度やって見せる", body: "使っているシステムのアカウントを渡し、難しいところを一度だけ操作して見せます。以降は、同じやり方を繰り返します。" },
      { title: "スマホで確かめる", body: "支払いや出荷など、あなたが決めた仕事は承認してから進みます。やり方を変えるときも、先に確かめます。" },
    ],
    note: "最初の30日は、Kitehand の立ち上げ担当が一緒に仕事を渡します。",
  },
  compare: {
    eyebrow: "比べる",
    title: "人手を足す、ほかの方法と比べて。",
    lede: "足りない人手を埋める方法は、ひとつではありません。事務の仕事で比べると、こうなります。",
    pick: "比べる相手",
    rows: ["始めるまで", "月の費用（税抜）", "動く時間", "仕事のやり方", "いつもと違うとき", "画面や手順が変わったとき", "人が替わるとき"],
    kitehand: ["数日", "49,800円（担当者1人）", "24時間、休日も", "覚えたやり方を、毎回同じに", "スマホであなたに聞く", "覚え直し、使う前に知らせる", "やり方が残る"],
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
  trust: {
    eyebrow: "秘密を守る",
    title: "会社のことは、会社の中に。",
    items: [
      { title: "専用の環境", body: "担当者は会社ごとに分かれた環境で働き、ほかの会社とは何も共有しません。" },
      { title: "アカウント情報", body: "使っているシステムのサインイン情報は暗号化して保管し、担当者の仕事のときだけ使います。" },
      { title: "学習に使わない", body: "預かった書類やデータで、AI モデルを学習させることはありません。" },
      { title: "記録", body: "何を、いつ、どのデータで行い、誰が承認したかが残ります。" },
    ],
  },
  pricing: {
    eyebrow: "料金",
    title: "料金は、担当者1人ごと。",
    plan: "Kitehand の担当者",
    regular: "通常価格",
    price: "49,800円",
    per: "／月（税別）",
    founding: { label: "創業メンバー価格", price: "29,800円", note: "先着50社。続けているあいだは、ずっとこの価格です。" },
    yearly: "年払いなら10か月分。2か月分お得です。",
    anchor: "フルタイムの事務の派遣料金（月約33万円）の、約7分の1です。",
    includes: [
      "AI の担当者1人（任せる仕事は5件まで）",
      "初期費用なし。AI の利用料も込み",
      "確認と承認はスマホで",
      "最初の30日は、立ち上げ担当が一緒に仕事を渡します",
      "30日以内なら全額返金",
    ],
    intake: "申込制・毎月15社まで。会社ごとに専用の環境を用意し、立ち上げまで一緒に進めるため、受け入れる数を絞っています。",
    cta: "申し込む",
  },
  faq: {
    eyebrow: "よくある質問",
    title: "申し込む前に。",
    items: [
      { q: "どんな仕事を任せられますか？", a: "受注の入力、経理、請求と入金の確認、出荷の手配、EC の運営、物件情報の登録など、パソコンの画面で決まった流れのある事務です。申し込みのあと、どこまで任せられるかをお伝えします。" },
      { q: "任せられない仕事は？", a: "電話、来客、交渉、判断の要る仕事、手を動かす仕事です。最初から人の仕事として分けておきます。" },
      { q: "どうやって仕事を覚えますか？", a: "渡された求人票や手順書を仕事に分け、毎回のやり方を書き出します。難しいところは、あなたが一度操作して見せます。覚えたやり方は、あなたが確かめてから使います。" },
      { q: "迷ったときはどうしますか？", a: "初めての取引先、いつもと違う金額、変わった振込先など、決まったやり方から外れるものは、進める前にスマホであなたに聞きます。" },
      { q: "システムの画面が変わったら？", a: "そこのやり方を覚え直し、新しいやり方で進める前に、あなたに知らせます。" },
      { q: "間違えたらどうなりますか？", a: "すべての作業が記録に残ります。ひとこと添えて差し戻すと、そのやり方を直します。" },
      { q: "パソコンを閉じたら止まりますか？", a: "止まりません。担当者はクラウドで働くので、夜も休日も進みます。" },
      { q: "データはどう扱われますか？", a: "会社ごとに分かれた環境で扱い、サインイン情報は暗号化して保管します。預かったデータで AI モデルを学習させることはありません。ご希望があれば秘密保持契約（NDA）を結びます。" },
      { q: "6件目の仕事を任せたいときは？", a: "ご相談ください。担当者を増やすか、仕事の分け方を一緒に考えます。" },
      { q: "解約はできますか？", a: "いつでも解約でき、次の請求からはかかりません。最初の30日以内なら、全額を返金します。" },
      { q: "なぜ毎月15社までなのですか？", a: "会社ごとに専用の環境を用意し、最初の30日は立ち上げ担当が一緒に仕事を渡すためです。それができる数だけ、毎月お受けしています。" },
    ],
  },
  apply: {
    eyebrow: "申し込み",
    title: "まず、仕事をひとつ。",
    lede: "任せたい仕事を書いて申し込むと、何人分を任せられるかと、立ち上げの日程をメールでお返事します。最初の30日で、一緒に仕事を渡していきます。",
    email: "メールアドレス",
    company: "会社名",
    name: "お名前",
    size: "会社の人数",
    sizes: ["10人以下", "11〜50人", "51〜300人", "301人以上"],
    job: "任せたい仕事",
    jobHint: "求人票・手順書・ひとこと、どれでも。いまある形のまま貼り付けてください。",
    submit: "申し込む",
    sending: "送信中…",
    done: "受け付けました。何人分を任せられるかと、立ち上げの日程をメールでお返事します。",
    error: "送信できませんでした。メールアドレスと会社名を確かめて、もう一度お試しください。",
  },
  jobs: {
    eyebrow: "Kitehand が読んだ仕事",
    title: (work) => `${work}：Kitehand に任せられること`,
    lede: (work) => `よくある「${work}」の仕事を、担当者がやること、先に聞くこと、人に残すことに分けました。引き受けるのが何人分かもわかります。`,
    posting: "渡した仕事",
    kinds: { posting: "求人票", manual: "手順書", line: "ひとこと" },
    yours: "自分の会社の仕事を任せる",
    others: "ほかの例を見る",
    more: "ほかの仕事",
    index: "人手が足りない会社が任せる仕事",
  },
  footer: { made: ["Kitehand は ", " が開発しています。"], company: "Descarty", companyUrl: "https://descarty.com/", privacy: "プライバシー" },
  privacy: {
    title: "プライバシー",
    body: [
      "申し込みの際は、メールアドレス・会社名・お名前・会社の人数・任せたい仕事を、フォームサービス Web3Forms を通じて受け取り、申し込みと立ち上げのご連絡に使います。いつでも削除をご依頼いただけます。",
      "訪問数を把握するため、PostHog を利用しています。PostHog は、閲覧したページ、参照元のサイト、端末とブラウザの種類を記録し、そのための識別子をブラウザに保存します。画面の録画やキー入力の記録は行いません。データを販売することはありません。",
    ],
  },
  notFound: { title: "ここには何もありません。", body: "このページは存在しません。", home: "Kitehand に戻る" },
};

export const COPY: Record<Lang, Copy> = { en, ja };
