// Every word on kitehand.ai, in English and Japanese. Pages pick the copy for
// their language; the shape is the same so nothing is missing in either.
import type { Lang, Share } from "../lib/diagnosis";

export type Copy = {
  lang: Lang;
  other: { lang: Lang; label: string; home: string };
  meta: { title: string; description: string; og: string };
  nav: { how: string; morning: string; contrast: string; faq: string; cta: string };
  hero: { badge: string; kicker: string; title: [string, string]; lede: string };
  tool: {
    label: string;
    modes: [string, string, string];
    placeholders: [string, string, string];
    submit: string;
    working: string[];
    samples: string;
    privacy: string;
    errors: Record<"too_short" | "too_long" | "not_job" | "rate_limited" | "busy" | "unavailable" | "generic", string>;
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
    yours: string;
  };
  morning: {
    eyebrow: string;
    title: string;
    lede: string;
    seat: string;
    empty: string;
    working: string;
    steps: { time: string; title: string; body: string; mark?: "ask" | "stamp" }[];
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
  footer: { made: string; kitewell: string; privacy: string };
  privacy: { title: string; body: string[] };
  notFound: { title: string; body: string; home: string };
};

const en: Copy = {
  lang: "en",
  other: { lang: "ja", label: "日本語", home: "/ja/" },
  meta: {
    title: "Kitehand — Hand it the job. Skip the hire.",
    description: "Paste a job posting, a manual, or one line. Kitehand shows how much of the job it can take, then does it every day on your own computer, and asks you before money moves.",
    og: "/og-en.png",
  },
  nav: { how: "How it works", morning: "A morning", contrast: "Not an agent", faq: "FAQ", cta: "Hand over a job" },
  hero: {
    badge: "Early access · Taking design partners",
    kicker: "Before you post that job",
    title: ["Hand it the job.", "Skip the hire."],
    lede: "Paste a job posting, a manual, or one line. Kitehand shows how much of the job it can take, then does it every day on your own computer, and asks you before money moves.",
  },
  tool: {
    label: "The job",
    modes: ["A job posting", "A manual", "One line"],
    placeholders: [
      "Paste the job posting you were about to publish…",
      "Paste the manual or handover notes the last person left…",
      "Say what needs doing, e.g. “Enter the invoices that come in by email every morning.”",
    ],
    submit: "See what Kitehand takes",
    working: ["Reading the job", "Splitting it into duties", "Marking what needs you", "Adding up the hours"],
    samples: "No posting at hand? Try one:",
    privacy: "What you paste is read once and not kept, unless you hand the job over.",
    errors: {
      too_short: "Give it a little more: a posting, a manual, or a sentence about the work.",
      too_long: "That's longer than a job needs. Paste the duties part.",
      not_job: "That doesn't read like work yet. Paste a posting or a manual, or describe the job in a line.",
      rate_limited: "That's a lot of jobs in a minute. Try again shortly.",
      busy: "Kitehand is reading a lot of jobs right now. Try a sample, or come back in a moment.",
      unavailable: "Live reading isn't switched on yet. Try one of the samples below.",
      generic: "Kitehand couldn't read that just now. Try again, or try a sample.",
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
    yours: "Your job",
  },
  morning: {
    eyebrow: "A morning, start to finish",
    title: "The seat is empty. The work gets done.",
    lede: "One accounting clerk's morning, as Kitehand runs it. Nobody sits at the desk. The manager approves one thing, from a phone.",
    seat: "Accounting clerk's seat",
    empty: "Empty",
    working: "Kitehand at work",
    steps: [
      { time: "8:00", title: "12 invoices in the inbox", body: "Reads each one, though every vendor lays theirs out differently, and enters it in the accounting software." },
      { time: "8:20", title: "32 deposits matched", body: "Clears each against an open invoice. One payer it can't place, it sets aside to ask about." },
      { time: "8:33", title: "14 expense claims checked", body: "Passes the ones within policy and sends one back to its owner with the rule it broke." },
      { time: "8:47", title: "9 vendor payments built", body: "Prepares the transfer and signs it as preparer. Then it stops and asks.", mark: "ask" },
      { time: "8:52", title: "Approved from a phone", body: "The manager taps approve. Only then does Kitehand book the transfer with the bank.", mark: "stamp" },
      { time: "9:00", title: "Morning reported", body: "A summary in the team chat, one question answered, the day's books closed." },
    ],
    approved: "Approved",
  },
  how: {
    eyebrow: "How it works",
    title: "Onboard it like a new hire. Once.",
    steps: [
      { title: "Hand over the job", body: "A job posting, the manual the last person left, or one line. Kitehand turns it into duties and tells you which it can take." },
      { title: "Show it once", body: "Give it the sign-ins and do the tricky part while it watches. From then on it repeats the steps exactly, with no improvising." },
      { title: "Keep the decisions", body: "It asks before money moves or anything leaves the company, and it reports any step it relearned before using it." },
    ],
  },
  contrast: {
    eyebrow: "Not another AI agent",
    title: "Agents improvise. Kitehand does the job.",
    left: "A typical AI agent",
    right: "Kitehand",
    rows: [
      ["Thinks from scratch on every run, so results drift.", "Learns the job once, then repeats the same steps every day."],
      ["Runs in a vendor's cloud browser that can't reach your systems.", "Runs on your own computer, with your sign-ins, apps and network."],
      ["Acts first and tells you later.", "Asks before money moves, and keeps every approval on record."],
      ["Quietly changes how it works when a screen changes.", "Tells you what it relearned and waits for your OK."],
      ["Charges for AI on every action.", "Uses AI to learn and relearn; the daily work runs without it."],
    ],
  },
  trust: {
    eyebrow: "Why you can trust it",
    title: "Your desk, your rules, your records.",
    items: [
      { title: "Passwords stay on your computer", body: "Sign-ins are kept on the machine that does the work. They never reach us." },
      { title: "Every action on record", body: "What it did, when, with which data, and who approved it, ready for your auditor." },
      { title: "Desktop apps too", body: "Browsers, email and Excel, and also the old Windows app nobody can replace." },
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
      { q: "Where does my data go?", a: "Kitehand works on your own computer. Screens go to an AI model only while it learns or relearns a step, and you choose the model, including one on your own network." },
      { q: "Is it available now?", a: "We're taking design partners. Hand over a job and we'll set up its first week with you." },
      { q: "How is it priced?", a: "Per staff member, not per seat or per action. Pricing is set with our design partners." },
    ],
  },
  handover: {
    eyebrow: "Early access",
    title: "Before you post the next job, hand it over.",
    lede: "Tell us where to reach you. We'll set up its first week with you, on your own computer.",
    email: "Work email",
    company: "Company",
    job: "The job",
    jobHint: "A posting, a manual, or a line about the work",
    submit: "Hand over a job",
    sending: "Sending…",
    done: "Got it. We'll be in touch to set up its first week.",
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
  footer: { made: "Kitehand is made by Descarty, the team behind Kitewell.", kitewell: "Kitewell", privacy: "Privacy" },
  privacy: {
    title: "Privacy",
    body: [
      "When you paste a job into Kitehand's reader, the text is sent to Anthropic's Claude to be read and the result is shown to you. We don't store what you paste.",
      "When you hand a job over, we keep your email, your company, the job you gave us and the reading you saw, to contact you about setting it up. Ask us to delete it at any time.",
      "We count page visits and clicks to learn what works on this site. We don't sell data.",
    ],
  },
  notFound: { title: "Nothing here.", body: "That page doesn't exist. The job you came for might.", home: "Back to Kitehand" },
};

const ja: Copy = {
  lang: "ja",
  other: { lang: "en", label: "English", home: "/" },
  meta: {
    title: "Kitehand — その仕事、Kitehand に。",
    description: "求人票、手順書、ひとこと。貼るだけで、何人分の仕事を任せられるかがわかります。あとは毎日あなたのパソコンで仕事をこなし、お金が動く前には必ずあなたに聞きます。",
    og: "/og-ja.png",
  },
  nav: { how: "しくみ", morning: "ある朝", contrast: "エージェントとの違い", faq: "よくある質問", cta: "仕事を渡す" },
  hero: {
    badge: "先行受付中 · デザインパートナー募集",
    kicker: "求人を出す前に",
    title: ["その仕事、", "Kitehand に。"],
    lede: "求人票、手順書、ひとこと。貼るだけで、何人分の仕事を任せられるかがわかります。あとは毎日あなたのパソコンで仕事をこなし、お金が動く前には必ずあなたに聞きます。",
  },
  tool: {
    label: "仕事",
    modes: ["求人票", "手順書", "ひとこと"],
    placeholders: [
      "出そうとしていた求人票を貼ってください…",
      "前任者が残した手順書や引き継ぎ書を貼ってください…",
      "やってほしいことを一文で。例：「毎朝メールで届く請求書を会計ソフトに入れて」",
    ],
    submit: "任せられる仕事を見る",
    working: ["仕事を読んでいます", "業務に分けています", "あなたの確認が要るものを分けています", "時間を合計しています"],
    samples: "手元に求人票がなければ、例で試せます：",
    privacy: "貼った内容は読むためだけに使い、保存しません（仕事を渡した場合を除く）。",
    errors: {
      too_short: "もう少し詳しく。求人票、手順書、または仕事の一文を。",
      too_long: "仕事の説明としては長すぎます。業務内容の部分だけ貼ってください。",
      not_job: "仕事の説明として読めませんでした。求人票か手順書を貼るか、仕事を一文で書いてください。",
      rate_limited: "短い時間に多くの仕事を読みました。少し待ってから試してください。",
      busy: "ただいま多くの仕事を読んでいます。例を試すか、少し待ってからどうぞ。",
      unavailable: "読み取りはまだ公開前です。下の例で試してください。",
      generic: "いまは読み取れませんでした。もう一度試すか、例を試してください。",
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
    yours: "あなたの仕事",
  },
  morning: {
    eyebrow: "ある朝の、最初から最後まで",
    title: "席には誰もいない。仕事は終わる。",
    lede: "経理担当1人分の朝を、Kitehand が回すとこうなります。席には誰も座っていません。上長はスマホで1回、承認するだけです。",
    seat: "経理担当の席",
    empty: "空席",
    working: "Kitehand が勤務中",
    steps: [
      { time: "8:00", title: "受信トレイに請求書が12件", body: "取引先ごとに書式の違う請求書を読み、会計ソフトに入力します。" },
      { time: "8:20", title: "入金32件を消し込み", body: "売掛と突き合わせて消し込み、取引先がわからない1件は確認に回します。" },
      { time: "8:33", title: "経費14件をチェック", body: "規程どおりのものは通し、1件は違反の理由を添えて本人に差し戻します。" },
      { time: "8:47", title: "支払い9件の振込を作成", body: "振込を作り、作成者として印を押して、そこで止まって聞きます。", mark: "ask" },
      { time: "8:52", title: "スマホで承認", body: "上長が承認を押してから、はじめて銀行に振込を予約します。", mark: "stamp" },
      { time: "9:00", title: "朝の報告", body: "チームのチャットに報告し、確認1件の答えをもらって、今日の分を締めます。" },
    ],
    approved: "承認",
    film: "映像で見る（77秒）",
  },
  how: {
    eyebrow: "しくみ",
    title: "新しい人と同じように、一度だけ教える。",
    steps: [
      { title: "仕事を渡す", body: "求人票、前任者の手順書、ひとこと。Kitehand が業務に分け、どれを引き受けられるかを示します。" },
      { title: "一度やって見せる", body: "アカウントを渡し、難しいところを一度やって見せる。あとは同じ手順を、毎日そのまま繰り返します。" },
      { title: "決めるのは、あなた", body: "お金が動く前や社外に出す前には必ず聞き、覚え直した手順は使う前に報告します。" },
    ],
  },
  contrast: {
    eyebrow: "よくある AI エージェントとの違い",
    title: "エージェントは毎回考える。Kitehand は仕事をこなす。",
    left: "よくある AI エージェント",
    right: "Kitehand",
    rows: [
      ["毎回ゼロから考えるので、結果がぶれる。", "一度覚えた仕事を、毎日同じ手順で繰り返す。"],
      ["提供元のクラウドのブラウザで動き、社内のシステムに届かない。", "あなたのパソコンで、あなたのアカウント・アプリ・ネットワークを使って動く。"],
      ["先にやってから、あとで知らせる。", "お金が動く前に聞き、承認はすべて記録に残す。"],
      ["画面が変わると、黙ってやり方を変える。", "覚え直したことを報告し、OK を待つ。"],
      ["操作のたびに AI の利用料がかかる。", "AI を使うのは覚える時と覚え直す時だけ。毎日の仕事は AI なしで回る。"],
    ],
  },
  trust: {
    eyebrow: "任せられる理由",
    title: "あなたの席、あなたのルール、あなたの記録。",
    items: [
      { title: "パスワードはパソコンの中だけ", body: "アカウント情報は仕事をするパソコンに保存され、私たちには届きません。" },
      { title: "すべての操作が記録に残る", body: "何を、いつ、どのデータで行い、誰が承認したか。監査にそのまま出せます。" },
      { title: "デスクトップアプリも", body: "ブラウザ、メール、Excel、そして替えのきかない古い Windows アプリまで。" },
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
      { q: "データはどこに行きますか？", a: "Kitehand はあなたのパソコンで動きます。画面が AI モデルに送られるのは手順を覚える時と覚え直す時だけで、モデルは社内のものも含めて選べます。" },
      { q: "いま使えますか？", a: "デザインパートナーを募集しています。仕事を渡していただければ、最初の1週間を一緒に立ち上げます。" },
      { q: "料金は？", a: "席数や操作回数ではなく、担当者1人ごとの料金です。デザインパートナーと一緒に決めています。" },
    ],
  },
  handover: {
    eyebrow: "先行受付",
    title: "次の求人を出す前に、仕事を渡してください。",
    lede: "連絡先を教えてください。あなたのパソコンで、最初の1週間を一緒に立ち上げます。",
    email: "会社のメールアドレス",
    company: "会社名",
    job: "仕事",
    jobHint: "求人票、手順書、または仕事のひとこと",
    submit: "仕事を渡す",
    sending: "送信中…",
    done: "受け付けました。最初の1週間の立ち上げについて、ご連絡します。",
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
  footer: { made: "Kitehand は、Kitewell をつくる Descarty が開発しています。", kitewell: "Kitewell", privacy: "プライバシー" },
  privacy: {
    title: "プライバシー",
    body: [
      "Kitehand の読み取りに仕事を貼ると、その文章は読み取りのために Anthropic の Claude に送られ、結果があなたに表示されます。貼った内容は保存しません。",
      "仕事を渡した場合は、立ち上げのご連絡のために、メールアドレス・会社名・渡された仕事・表示された読み取り結果を保存します。いつでも削除をご依頼いただけます。",
      "サイトの改善のために、ページの閲覧とクリックを計測しています。データを販売することはありません。",
    ],
  },
  notFound: { title: "ここには何もありません。", body: "このページは存在しません。お探しの仕事は、あるかもしれません。", home: "Kitehand に戻る" },
};

export const COPY: Record<Lang, Copy> = { en, ja };
