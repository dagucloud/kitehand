// Six pieces of office work owners of small businesses often do themselves,
// read the way Kitehand reads one handed over. They fill the samples a visitor
// can try without writing their own and the pages search engines find. Hours
// are the owner's own, in a month.
import type { Diagnosis, Lang } from "../lib/diagnosis";

export type Sample = { slug: string; posting: Record<Lang, string>; diagnosis: Record<Lang, Diagnosis> };

export const SAMPLES: Sample[] = [
  {
    slug: "bookkeeping",
    posting: {
      en: "Every morning I enter our bank and credit card transactions in the books. Receipts come by email or as photos, so I find them and attach them. When I'm unsure of a category I ask our accountant. At month end I check the numbers and send them over.",
      ja: "毎朝、銀行とクレジットカードの明細を freee に入力している。領収書はメールや写真で届くので、探して添付する。勘定科目に迷うものは税理士に聞く。月末に数字を確かめて、税理士に送っている。",
    },
    diagnosis: {
      en: {
        title: "Bookkeeping entries",
        summary: "Bank and card transactions into the books, each with its receipt.",
        hours_per_month: 24,
        duties: [
          { name: "Enter bank and card transactions", share: "kitehand", hours: 9, how: "Reads the bank and card statements each morning and enters them in your accounting software under your usual categories.", apps: ["Bank", "Card statements", "Accounting software"] },
          { name: "Find and attach receipts", share: "kitehand", hours: 6, how: "Finds the receipt for each entry in your email and photos and attaches it. Lists any it can't find.", apps: ["Email", "Accounting software"] },
          { name: "Entries it can't categorize", share: "approve", hours: 3, how: "A new vendor or an unusual charge goes to you with a suggested category.", apps: ["Accounting software"] },
          { name: "Month-end check", share: "kitehand", hours: 3, how: "Compares the month with the last one and sends you what looks different.", apps: ["Accounting software"] },
          { name: "Talking with your accountant", share: "human", hours: 3, how: "It needs your judgment, so it stays with you. Your assistant gathers what to send.", apps: [] },
        ],
        schedule: "Every morning at 7:00, with the month-end check on the last day",
        asks_before: ["An entry from a new vendor", "An amount far from the usual", "An entry it can't categorize"],
        first_week: ["Day 1: connect the bank, the cards, the accounting software and email", "Day 2: enter a few tricky transactions together once", "Days 3–5: it works through last month, writing nothing to the books until you've checked"],
      },
      ja: {
        title: "経理の入力",
        summary: "銀行とカードの明細を、領収書つきで帳簿に入れる仕事。",
        hours_per_month: 24,
        duties: [
          { name: "銀行・カード明細の入力", share: "kitehand", hours: 9, how: "毎朝、銀行とカードの明細を読み、いつもの勘定科目で freee に入力します。", apps: ["銀行", "カード明細", "freee"] },
          { name: "領収書を探して添付", share: "kitehand", hours: 6, how: "メールや写真で届いた領収書を探して明細に添付し、見つからないものは一覧にして知らせます。", apps: ["メール", "freee"] },
          { name: "勘定科目に迷う明細", share: "approve", hours: 3, how: "初めての取引先やいつもと違う明細は、科目の案を添えて社長に確かめます。", apps: ["freee"] },
          { name: "月末の数字の確認", share: "kitehand", hours: 3, how: "月の数字を先月と比べ、いつもと違う点をまとめて知らせます。", apps: ["freee"] },
          { name: "税理士とのやり取り", share: "human", hours: 3, how: "判断が要るので社長に残します。送る資料は秘書がまとめます。", apps: [] },
        ],
        schedule: "毎朝 7:00、月末は数字の確認も",
        asks_before: ["初めての取引先の明細", "いつもと金額が大きく違う明細", "科目を決められない明細"],
        first_week: ["1日目：銀行・カード・freee・メールをつなぐ", "2日目：迷いやすい明細を一度一緒に入力する", "3〜5日目：先月分で試し、社長が確かめるまで帳簿には書き込まない"],
      },
    },
  },
  {
    slug: "invoicing",
    posting: {
      en: "At month end I make an invoice for each customer and email it. When payments come in I match them against the bank, and I chase the ones that are late.",
      ja: "月末に取引先ごとの請求書を作ってメールで送る。入金があったら通帳と照らし合わせて消し込み、遅れているところには催促のメールを送っている。",
    },
    diagnosis: {
      en: {
        title: "Invoices and payments",
        summary: "Invoices out at month end, payments matched as they come in.",
        hours_per_month: 15,
        duties: [
          { name: "Make the invoices", share: "kitehand", hours: 5, how: "Builds each customer's invoice from the month's sales record.", apps: ["Invoicing software", "Excel"] },
          { name: "Send the invoices", share: "kitehand", hours: 2, how: "Sends each one with your usual message.", apps: ["Email"] },
          { name: "Match incoming payments", share: "kitehand", hours: 4, how: "Matches each payment to its invoice and closes it. Anything that doesn't match goes to you.", apps: ["Bank", "Accounting software"] },
          { name: "Chase late payments", share: "approve", hours: 2, how: "Drafts the reminder and sends it once you've looked.", apps: ["Email"] },
          { name: "Prices and terms", share: "human", hours: 2, how: "It touches the relationship, so it stays with you.", apps: [] },
        ],
        schedule: "On the 25th and the last day of the month; payments checked every morning",
        asks_before: ["Invoicing a customer for the first time", "Sending a payment reminder", "An invoice far from last month's"],
        first_week: ["Day 1: connect the sales record, invoicing software, bank and email", "Day 2: make one month's invoices together", "Days 3–5: it prepares last month's invoices for you to check, sending nothing"],
      },
      ja: {
        title: "請求書と入金の確認",
        summary: "月末に請求書を送り、入金を届いた順に消し込む仕事。",
        hours_per_month: 15,
        duties: [
          { name: "請求書の作成", share: "kitehand", hours: 5, how: "その月の売上の記録から、取引先ごとの請求書を作ります。", apps: ["請求書ソフト", "Excel"] },
          { name: "請求書の送付", share: "kitehand", hours: 2, how: "いつもの文面で、取引先ごとに送ります。", apps: ["メール"] },
          { name: "入金の消し込み", share: "kitehand", hours: 4, how: "入金を請求と突き合わせて消し込み、合わないものは社長に回します。", apps: ["銀行", "会計ソフト"] },
          { name: "入金が遅れている取引先への連絡", share: "approve", hours: 2, how: "催促の文面を用意し、社長が目を通してから送ります。", apps: ["メール"] },
          { name: "金額や条件の交渉", share: "human", hours: 2, how: "取引先との関係に関わるので、社長に残します。", apps: [] },
        ],
        schedule: "毎月25日と月末、入金は毎朝確認",
        asks_before: ["初めて請求する取引先", "催促のメールを送る前", "請求額が先月と大きく違うとき"],
        first_week: ["1日目：売上の記録・請求書ソフト・銀行・メールをつなぐ", "2日目：1か月分の請求書を一緒に作る", "3〜5日目：先月分の請求書を用意し、送らずに社長に確かめてもらう"],
      },
    },
  },
  {
    slug: "orders",
    posting: {
      en: "Orders come in by email as PDFs. I key them into our order sheet, check the delivery date and reply to confirm. I book the shipping myself too.",
      ja: "メールで届く注文書を受注表に入れて、納期を確かめて返信する。出荷の手配も自分でしている。",
    },
    diagnosis: {
      en: {
        title: "Order entry",
        summary: "Orders from the inbox into the order sheet, confirmed and shipped.",
        hours_per_month: 20,
        duties: [
          { name: "Enter the orders", share: "kitehand", hours: 8, how: "Reads each order from email or PDF, checks product codes and quantities, and enters it in the order sheet.", apps: ["Email", "Order sheet"] },
          { name: "Confirm orders", share: "kitehand", hours: 3, how: "Replies with the delivery date in your usual words.", apps: ["Email"] },
          { name: "Book shipping", share: "kitehand", hours: 3, how: "Books the pickup on the carrier's site and sends the tracking number.", apps: ["Carrier site"] },
          { name: "Unusual prices or dates", share: "approve", hours: 2, how: "A discount or a rush order goes to you before it goes ahead.", apps: ["Order sheet"] },
          { name: "Orders by phone", share: "human", hours: 4, how: "Calls stay with you. Your assistant enters what you tell it.", apps: [] },
        ],
        schedule: "Every 30 minutes through the working day",
        asks_before: ["A customer's first order", "A discount or a rush order", "An order with too little stock"],
        first_week: ["Day 1: connect the order inbox, order sheet and carrier", "Day 2: take one order from start to finish together", "Days 3–5: it enters last week's orders as a trial for you to check"],
      },
      ja: {
        title: "受注の入力",
        summary: "届いた注文を受注表に入れ、確認の返信と出荷までを流す仕事。",
        hours_per_month: 20,
        duties: [
          { name: "注文の入力", share: "kitehand", hours: 8, how: "メールや PDF の注文書を読み、品番と数量を確かめて受注表に入れます。", apps: ["メール", "受注表"] },
          { name: "注文確認の返信", share: "kitehand", hours: 3, how: "納期を添えて、いつもの文面で返信します。", apps: ["メール"] },
          { name: "出荷の手配", share: "kitehand", hours: 3, how: "運送会社のサイトで集荷を頼み、送り状番号を取引先に知らせます。", apps: ["運送会社サイト"] },
          { name: "価格や納期がいつもと違う注文", share: "approve", hours: 2, how: "値引きや特急など、いつもと違う注文は社長に確かめてから進めます。", apps: ["受注表"] },
          { name: "電話での注文・相談", share: "human", hours: 4, how: "電話は社長に残します。聞いた内容は秘書が受注表に入れます。", apps: [] },
        ],
        schedule: "営業時間中、30分ごと",
        asks_before: ["初めての取引先の注文", "値引き・特急の注文", "在庫が足りない注文"],
        first_week: ["1日目：注文の届くメール・受注表・運送会社をつなぐ", "2日目：注文を1件、最初から最後まで一緒にやる", "3〜5日目：先週の注文で試し、結果を社長に確かめてもらう"],
      },
    },
  },
  {
    slug: "receipts",
    posting: {
      en: "I check my team's expense claims and make sure each has its receipt. At month end I sort out the receipts for my own card too.",
      ja: "社員の経費精算をチェックして、領収書がそろっているか確かめる。自分のカードの領収書も、月末にまとめて整理している。",
    },
    diagnosis: {
      en: {
        title: "Expenses and receipts",
        summary: "Claims checked against the rules, every receipt where it belongs.",
        hours_per_month: 13,
        duties: [
          { name: "Check expense claims", share: "kitehand", hours: 4, how: "Passes claims within your rules and sends the rest back with the reason.", apps: ["Expense tool", "Email"] },
          { name: "Collect and file receipts", share: "kitehand", hours: 4, how: "Gathers receipts from email and photos and files them by month.", apps: ["Email", "Cloud storage"] },
          { name: "Claims outside the rules", share: "approve", hours: 1, how: "Anything over the limit or out of the ordinary waits for your OK.", apps: ["Expense tool"] },
          { name: "Your card against its receipts", share: "kitehand", hours: 3, how: "Matches your card statement with its receipts and lists what's missing.", apps: ["Card statements"] },
          { name: "Setting the rules", share: "human", hours: 1, how: "Yours to decide.", apps: [] },
        ],
        schedule: "Every Monday, and on the last day of the month",
        asks_before: ["A claim over the limit", "A claim without a receipt", "A kind of expense it hasn't seen"],
        first_week: ["Day 1: connect the expense tool, email and your card statements", "Day 2: go through a week of claims together", "Days 3–5: it checks last month's claims for you to look over"],
      },
      ja: {
        title: "経費と領収書",
        summary: "経費精算を規程どおりに確かめ、領収書をあるべき場所にそろえる仕事。",
        hours_per_month: 13,
        duties: [
          { name: "経費精算のチェック", share: "kitehand", hours: 4, how: "規程どおりのものは通し、足りないものは理由を添えて本人に返します。", apps: ["経費精算", "メール"] },
          { name: "領収書の回収と整理", share: "kitehand", hours: 4, how: "メールや写真で届く領収書を集め、月ごとに整理します。", apps: ["メール", "クラウドストレージ"] },
          { name: "規程から外れる経費", share: "approve", hours: 1, how: "上限を超えるものや例外は、社長の承認を待ちます。", apps: ["経費精算"] },
          { name: "社長のカード明細と領収書の突き合わせ", share: "kitehand", hours: 3, how: "カード明細と領収書を突き合わせ、足りないものを知らせます。", apps: ["カード明細"] },
          { name: "経費のルールを決める", share: "human", hours: 1, how: "社長が決めることなので、社長に残します。", apps: [] },
        ],
        schedule: "毎週月曜と月末",
        asks_before: ["上限を超える経費", "領収書のない経費", "初めての種類の経費"],
        first_week: ["1日目：経費精算・メール・カード明細をつなぐ", "2日目：1週間分の精算を一緒に確かめる", "3〜5日目：先月分の精算を確かめ、結果を社長に見てもらう"],
      },
    },
  },
  {
    slug: "inquiries",
    posting: {
      en: "I answer the questions that come in through our website form and by email. Most get the same answers. Requests for a quote I work out myself.",
      ja: "ホームページのフォームやメールで来る問い合わせに返信している。よくある質問には同じ答えを返すことが多い。見積もりの依頼は自分で考えている。",
    },
    diagnosis: {
      en: {
        title: "First replies to inquiries",
        summary: "Every question answered the same day, quotes drafted for you.",
        hours_per_month: 14,
        duties: [
          { name: "Sort the inquiries", share: "kitehand", hours: 3, how: "Reads the form and email inquiries and sorts them by kind.", apps: ["Email", "Website form"] },
          { name: "Answer common questions", share: "kitehand", hours: 5, how: "Replies with the answers you've given before.", apps: ["Email"] },
          { name: "Draft quotes", share: "approve", hours: 3, how: "Drafts the quote from the request and sends it once you've checked it.", apps: ["Excel", "Email"] },
          { name: "Complaints and complex cases", share: "human", hours: 3, how: "These stay with you. Your assistant writes up the history first.", apps: [] },
        ],
        schedule: "Every day at 9:00 and 15:00",
        asks_before: ["Sending a quote", "A request for a discount", "A kind of question it hasn't seen"],
        first_week: ["Day 1: connect the inbox and the website form", "Day 2: give it your past replies and a few quotes", "Days 3–5: it drafts replies to last week's inquiries for you to check"],
      },
      ja: {
        title: "問い合わせの一次対応",
        summary: "問い合わせにその日のうちに答え、見積もりの下書きまで用意する仕事。",
        hours_per_month: 14,
        duties: [
          { name: "問い合わせの振り分け", share: "kitehand", hours: 3, how: "フォームとメールの問い合わせを読み、種類ごとに分けます。", apps: ["メール", "問い合わせフォーム"] },
          { name: "よくある質問への返信", share: "kitehand", hours: 5, how: "これまでの返信をもとに、いつもの答えを返します。", apps: ["メール"] },
          { name: "見積もりの下書き", share: "approve", hours: 3, how: "依頼の内容から見積もりの下書きを作り、社長が確かめてから送ります。", apps: ["Excel", "メール"] },
          { name: "クレームや込み入った相談", share: "human", hours: 3, how: "社長に残します。それまでの経緯は秘書がまとめます。", apps: [] },
        ],
        schedule: "毎日 9:00 と 15:00",
        asks_before: ["見積もりを送る前", "値引きの相談", "初めて見る種類の問い合わせ"],
        first_week: ["1日目：問い合わせの届くメールとフォームをつなぐ", "2日目：これまでの返信と見積もりを渡す", "3〜5日目：先週の問い合わせへの返信を下書きし、社長に確かめてもらう"],
      },
    },
  },
  {
    slug: "daily-report",
    posting: {
      en: "Every night I pull the day's sales from the register and our online shop into a spreadsheet, compare them with last week, and note anything that looks off.",
      ja: "毎晩、レジと通販の管理画面から売上を集めて Excel にまとめている。前の週と比べて、気になる数字があればメモしておく。",
    },
    diagnosis: {
      en: {
        title: "The daily sales report",
        summary: "Last night's numbers on your phone each morning, with what changed.",
        hours_per_month: 12,
        duties: [
          { name: "Gather the sales", share: "kitehand", hours: 6, how: "Pulls the day's sales from the register and the shop's dashboard into your usual sheet.", apps: ["Register", "Online shop", "Excel"] },
          { name: "Compare with last week", share: "kitehand", hours: 2, how: "Compares with last week and last year and marks what moved most.", apps: ["Excel"] },
          { name: "The morning report", share: "kitehand", hours: 2, how: "Sends the numbers and what it noticed to your phone every morning.", apps: [] },
          { name: "Deciding what to do about it", share: "human", hours: 2, how: "Yours to decide.", apps: [] },
        ],
        schedule: "Gathered at 23:00, reported at 7:00",
        asks_before: ["A day whose numbers are far from the usual"],
        first_week: ["Day 1: connect the register, the shop and the sheet", "Day 2: build one day's report together", "Days 3–5: it reports the past week for you to check"],
      },
      ja: {
        title: "毎日の売上報告",
        summary: "前日の数字と変わったところが、毎朝スマホに届く仕事。",
        hours_per_month: 12,
        duties: [
          { name: "売上の集計", share: "kitehand", hours: 6, how: "レジと通販の管理画面から売上を集め、いつもの表にまとめます。", apps: ["レジ", "通販の管理画面", "Excel"] },
          { name: "前の週との比較", share: "kitehand", hours: 2, how: "前の週や前の年と比べ、大きく動いた数字に印をつけます。", apps: ["Excel"] },
          { name: "朝の報告", share: "kitehand", hours: 2, how: "まとめた数字と気づいた点を、毎朝スマホに届けます。", apps: [] },
          { name: "数字を見て次の手を決める", share: "human", hours: 2, how: "社長が決めることなので、社長に残します。", apps: [] },
        ],
        schedule: "毎晩 23:00 に集計、毎朝 7:00 に報告",
        asks_before: ["売上がいつもと大きく違う日"],
        first_week: ["1日目：レジ・通販の管理画面・表をつなぐ", "2日目：1日分の報告を一緒に作る", "3〜5日目：先週分を報告し、社長に確かめてもらう"],
      },
    },
  },
];
