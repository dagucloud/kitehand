// Six jobs short-handed small businesses often hand over, read the way
// Kitehand reads one: as a job description, a manual, or one line. They fill the
// examples a visitor can try without writing their own and the pages search
// engines find. Hours are the whole job's, in a month.
import type { Diagnosis, Lang } from "../lib/diagnosis";

// How the job was handed over, the three ways Kitehand takes one.
export type Kind = "posting" | "manual" | "line";

export type Sample = { slug: string; kind: Kind; posting: Record<Lang, string>; diagnosis: Record<Lang, Diagnosis> };

export const SAMPLES: Sample[] = [
  {
    slug: "order-entry",
    kind: "posting",
    posting: {
      en: "Order entry. Key orders that arrive by fax, email and web into our order system. Check stock and confirm delivery dates. Send shipping instructions to the warehouse. Close the month's sales. Answer customers' calls about their orders.",
      ja: "【受注事務】FAX・メール・Web で届く注文を販売管理システムに入力。在庫を確かめて納期を回答し、倉庫に出荷を指示。月末の売上締め。注文についてのお客さまからの電話対応。",
    },
    diagnosis: {
      en: {
        title: "Order entry",
        summary: "Orders from fax, email and the web keyed in, confirmed and sent to the warehouse.",
        hours_per_month: 150,
        duties: [
          { name: "Key in orders", share: "kitehand", hours: 56, how: "Reads each purchase order from fax PDFs, email and the web, checks item codes, quantities, prices and dates, and enters it in your order system.", apps: ["Email", "Fax (PDF)", "Order system"] },
          { name: "Check stock and confirm dates", share: "kitehand", hours: 24, how: "Checks the stock sheet and replies with the delivery date in your usual words.", apps: ["Stock sheet", "Email"] },
          { name: "Shipping instructions", share: "kitehand", hours: 14, how: "Makes the shipping instruction and sends it to the warehouse.", apps: ["Order system", "Email"] },
          { name: "Orders out of the ordinary", share: "approve", hours: 10, how: "A first order from a customer, an unusually large one, or one over the credit limit waits for your OK.", apps: ["Order system"] },
          { name: "Month-end sales close", share: "kitehand", hours: 14, how: "Matches orders against shipments and prepares the list your invoices are made from.", apps: ["Order system", "Excel"] },
          { name: "Customers' calls", share: "human", hours: 32, how: "Talking stays with your team. Kitehand keeps every order's status ready for them to answer from.", apps: [] },
        ],
        schedule: "As orders arrive, nights and weekends included; the sales close on the last day of the month",
        asks_before: ["A customer's first order", "An order over the credit limit", "A quantity or amount far from the usual"],
        first_week: ["Day 1: connect the order inboxes, the order system and the stock sheet", "Day 2: key in a few tricky orders together once", "Days 3–5: it works through last week's orders, entering nothing until you've checked"],
      },
      ja: {
        title: "受注事務",
        summary: "FAX・メール・Web の注文を入力し、納期を返して、倉庫に回す仕事。",
        hours_per_month: 150,
        duties: [
          { name: "注文の入力", share: "kitehand", hours: 56, how: "FAX（PDF）・メール・Web の注文書を読み、品番・数量・単価・納期を確かめて販売管理に入力します。", apps: ["メール", "FAX（PDF）", "販売管理"] },
          { name: "在庫の確認と納期の回答", share: "kitehand", hours: 24, how: "在庫表を確かめ、いつもの文面で納期を返信します。", apps: ["在庫表", "メール"] },
          { name: "出荷の指示", share: "kitehand", hours: 14, how: "出荷指示書を作り、倉庫に送ります。", apps: ["販売管理", "メール"] },
          { name: "いつもと違う注文", share: "approve", hours: 10, how: "初めての取引先、大口、与信枠を超える注文は、進める前にあなたに確かめます。", apps: ["販売管理"] },
          { name: "月末の売上締め", share: "kitehand", hours: 14, how: "受注と出荷を突き合わせ、請求のもとになる一覧を作ります。", apps: ["販売管理", "Excel"] },
          { name: "お客さまからの電話", share: "human", hours: 32, how: "声でのやり取りは人に残します。担当者は、どの注文の状況もすぐ答えられるようにまとめておきます。", apps: [] },
        ],
        schedule: "注文が届きしだい（夜間・休日も）、月末は売上締めも",
        asks_before: ["初めての取引先の注文", "与信枠を超える注文", "数量や金額がいつもと大きく違う注文"],
        first_week: ["1日目：注文の届く受信箱・販売管理・在庫表をつなぐ", "2日目：迷いやすい注文を一緒に一度入力する", "3〜5日目：先週分の注文で試し、確かめるまで販売管理には入力しない"],
      },
    },
  },
  {
    slug: "bookkeeping",
    kind: "manual",
    posting: {
      en: "The person who did our books alone leaves next month. Their handover notes: every morning, enter bank and card transactions and attach receipts. At month end, send invoices, match the payments that come in, and prepare supplier payments. Ask the accountant about anything unclear.",
      ja: "経理を一人で見てくれていた人が来月で辞める。引き継ぎメモより：毎朝、銀行とカードの明細を入力して領収書を添付。月末は請求書の発行、入金の消し込み、支払いの準備。わからないものは税理士に確認。",
    },
    diagnosis: {
      en: {
        title: "Bookkeeping",
        summary: "Transactions in the books with their receipts, invoices out, payments matched and prepared.",
        hours_per_month: 100,
        duties: [
          { name: "Enter bank and card transactions", share: "kitehand", hours: 26, how: "Reads the bank and card statements each morning and enters them in your accounting software under your usual categories.", apps: ["Bank", "Card statements", "QuickBooks"] },
          { name: "Collect and attach receipts", share: "kitehand", hours: 16, how: "Finds each receipt and bill in email and shared folders and attaches it. Lists any it can't find.", apps: ["Email", "Shared folder", "QuickBooks"] },
          { name: "Send invoices", share: "kitehand", hours: 12, how: "Makes each customer's invoice from the month's sales and sends it with your usual message.", apps: ["QuickBooks", "Email"] },
          { name: "Match incoming payments", share: "kitehand", hours: 14, how: "Matches each payment to its invoice. Anything that doesn't match goes to you.", apps: ["Bank", "QuickBooks"] },
          { name: "Prepare supplier payments", share: "approve", hours: 10, how: "Prepares each payment from the bills due, and sets it up in the bank only after you approve.", apps: ["Bank", "QuickBooks"] },
          { name: "Entries it can't categorize", share: "approve", hours: 6, how: "A new vendor or an unusual charge goes to you with a suggested category.", apps: ["QuickBooks"] },
          { name: "Month-end review with your accountant", share: "human", hours: 16, how: "It takes judgment, so it stays with you. Kitehand gathers what to send.", apps: [] },
        ],
        schedule: "Every morning at 7:00; invoices on the 25th; payments prepared before each due date",
        asks_before: ["Any payment, before it's set up in the bank", "A vendor whose bank details changed", "An entry it can't categorize"],
        first_week: ["Day 1: connect the bank, the cards, the accounting software and email", "Day 2: go through the handover notes and a few tricky entries together", "Days 3–5: it works through last month, writing nothing to the books until you've checked"],
      },
      ja: {
        title: "経理事務",
        summary: "明細を領収書つきで帳簿に入れ、請求書を送り、入金と支払いを整える仕事。",
        hours_per_month: 100,
        duties: [
          { name: "銀行・カード明細の入力", share: "kitehand", hours: 26, how: "毎朝、銀行とカードの明細を読み、いつもの勘定科目で会計ソフトに入力します。", apps: ["銀行", "カード明細", "freee"] },
          { name: "領収書・請求書の回収と添付", share: "kitehand", hours: 16, how: "メールや共有フォルダに届いた証憑を探して取引に添付し、見つからないものは一覧にして知らせます。", apps: ["メール", "共有フォルダ", "freee"] },
          { name: "請求書の発行と送付", share: "kitehand", hours: 12, how: "その月の売上から取引先ごとの請求書を作り、いつもの文面で送ります。", apps: ["freee", "メール"] },
          { name: "入金の消し込み", share: "kitehand", hours: 14, how: "入金を請求と突き合わせて消し込み、合わないものはあなたに回します。", apps: ["銀行", "freee"] },
          { name: "支払いの準備", share: "approve", hours: 10, how: "支払予定から振込データを作り、あなたが承認してから銀行に登録します。", apps: ["銀行", "freee"] },
          { name: "勘定科目に迷う取引", share: "approve", hours: 6, how: "初めての取引先やいつもと違う取引は、科目の案を添えてあなたに確かめます。", apps: ["freee"] },
          { name: "月次の確認と税理士とのやり取り", share: "human", hours: 16, how: "判断が要るので人に残します。送る資料は担当者がまとめます。", apps: [] },
        ],
        schedule: "毎朝 7:00、請求書は毎月25日、支払いは期日の前に準備",
        asks_before: ["銀行に振込を登録する前（すべての支払い）", "振込先の口座が変わった取引先", "科目を決められない取引"],
        first_week: ["1日目：銀行・カード・会計ソフト・メールをつなぐ", "2日目：引き継ぎメモと迷いやすい取引を一緒に確かめる", "3〜5日目：先月分で試し、確かめるまで帳簿には書き込まない"],
      },
    },
  },
  {
    slug: "online-store",
    kind: "line",
    posting: {
      en: "Run the back office of our three online stores: process orders, keep stock and prices in sync, answer the usual customer questions, and send me the sales every morning.",
      ja: "楽天・Amazon・自社ストアの受注処理と、在庫と価格の更新、よくある問い合わせへの返信、毎朝の売上報告をお願いしたい。",
    },
    diagnosis: {
      en: {
        title: "Online store operations",
        summary: "Orders from three stores processed, stock and prices kept in sync, the usual questions answered.",
        hours_per_month: 120,
        duties: [
          { name: "Process orders from three stores", share: "kitehand", hours: 36, how: "Confirms each order, sends the thank-you note and passes it to shipping, in each store's admin.", apps: ["Shopify", "Amazon", "eBay"] },
          { name: "Keep stock and prices in sync", share: "kitehand", hours: 16, how: "Updates stock and prices in every store from your stock sheet, so nothing sells twice.", apps: ["Stock sheet", "Shopify", "Amazon"] },
          { name: "Answer the usual questions", share: "kitehand", hours: 20, how: "Delivery status, stock, receipts: questions with a set answer get your usual reply.", apps: ["Email", "Store messages"] },
          { name: "Returns and complaints", share: "approve", hours: 10, how: "Drafts the reply and the refund, and sends them after you've looked.", apps: ["Email", "Shopify"] },
          { name: "The morning sales report", share: "kitehand", hours: 8, how: "Adds up yesterday's sales across the stores and sends them to your phone.", apps: ["Shopify", "Amazon", "eBay"] },
          { name: "Product pages and photos", share: "human", hours: 30, how: "Deciding what to sell and how to show it stays with you.", apps: [] },
        ],
        schedule: "Orders every 30 minutes around the clock; the sales report at 8:00",
        asks_before: ["A refund", "A reply to a complaint", "A price change of more than 10%"],
        first_week: ["Day 1: connect the three stores, the stock sheet and the inbox", "Day 2: process a day of orders together once", "Days 3–5: it drafts replies and updates for you to check, sending nothing"],
      },
      ja: {
        title: "EC 運営",
        summary: "3つのストアの受注を処理し、在庫と価格をそろえ、よくある問い合わせに返す仕事。",
        hours_per_month: 120,
        duties: [
          { name: "3つのストアの受注処理", share: "kitehand", hours: 36, how: "各ストアの管理画面で注文を確かめ、お礼のメールを送り、出荷に回します。", apps: ["楽天市場", "Amazon", "Shopify"] },
          { name: "在庫と価格の更新", share: "kitehand", hours: 16, how: "在庫表をもとに、すべてのストアの在庫と価格をそろえ、売り越しを防ぎます。", apps: ["在庫表", "楽天市場", "Amazon"] },
          { name: "よくある問い合わせへの返信", share: "kitehand", hours: 20, how: "配送状況、在庫、領収書の発行など、答えの決まった問い合わせに、いつもの文面で返します。", apps: ["メール", "ストアのメッセージ"] },
          { name: "返品・クレームへの返信", share: "approve", hours: 10, how: "返信と返金の案を作り、あなたが確かめてから送ります。", apps: ["メール", "楽天市場"] },
          { name: "毎朝の売上報告", share: "kitehand", hours: 8, how: "前日の売上をストアごとに集計し、スマホに届けます。", apps: ["楽天市場", "Amazon", "Shopify"] },
          { name: "商品ページの企画と撮影", share: "human", hours: 30, how: "何をどう見せて売るかは、人に残します。", apps: [] },
        ],
        schedule: "受注は24時間・30分ごと、売上報告は毎朝 8:00",
        asks_before: ["返金するとき", "クレームに返信するとき", "価格を1割以上変えるとき"],
        first_week: ["1日目：3つのストア・在庫表・受信箱をつなぐ", "2日目：1日分の受注を一緒に一度処理する", "3〜5日目：返信と更新の案を作り、確かめるまで送らない"],
      },
    },
  },
  {
    slug: "shipping",
    kind: "manual",
    posting: {
      en: "Shipping, every day: print the labels from the order list, book the pickup, email each customer the tracking number, and update the stock sheet. Deal with late or damaged deliveries. Packing is done in the warehouse.",
      ja: "毎日の出荷の手順：注文一覧から送り状を発行し、集荷を予約。追跡番号をお客さまにメールし、在庫表を更新する。配送の遅れや破損の連絡にも対応。梱包は倉庫で行う。",
    },
    diagnosis: {
      en: {
        title: "Shipping desk",
        summary: "Labels printed, pickups booked, tracking sent and stock kept current, every day.",
        hours_per_month: 100,
        duties: [
          { name: "Make the shipping labels", share: "kitehand", hours: 22, how: "Reads each address and item from the order list and makes the label on the carrier's site.", apps: ["Order list", "UPS", "FedEx"] },
          { name: "Book the pickup", share: "kitehand", hours: 4, how: "Books the day's pickup with each carrier.", apps: ["UPS", "FedEx"] },
          { name: "Send tracking numbers", share: "kitehand", hours: 12, how: "Emails each customer their tracking number in your usual words.", apps: ["Email"] },
          { name: "Update the stock sheet", share: "kitehand", hours: 12, how: "Takes what shipped off the stock sheet, and tells you what is running low.", apps: ["Stock sheet"] },
          { name: "Late or damaged deliveries", share: "approve", hours: 8, how: "Drafts the claim to the carrier and the apology to the customer, and sends them after you've looked.", apps: ["Email", "UPS", "FedEx"] },
          { name: "Packing and checking the goods", share: "human", hours: 42, how: "Work done by hand stays with your team.", apps: [] },
        ],
        schedule: "Labels at 9:00 and 14:00, pickups booked by 15:00, stock updated at the end of the day",
        asks_before: ["A claim to a carrier", "An apology that offers a refund or credit", "An address that looks incomplete"],
        first_week: ["Day 1: connect the order list, the carriers' sites and the stock sheet", "Day 2: ship one day's orders together once", "Days 3–5: it prepares labels and emails for you to check before anything is booked"],
      },
      ja: {
        title: "出荷・配送の事務",
        summary: "送り状を発行し、集荷を予約し、追跡番号を知らせて、在庫を合わせる毎日の仕事。",
        hours_per_month: 100,
        duties: [
          { name: "送り状の発行", share: "kitehand", hours: 22, how: "注文一覧から宛先と品物を読み、運送会社のサイトで送り状を作ります。", apps: ["注文一覧", "ヤマト運輸", "佐川急便"] },
          { name: "集荷の予約", share: "kitehand", hours: 4, how: "その日の集荷を運送会社ごとに予約します。", apps: ["ヤマト運輸", "佐川急便"] },
          { name: "追跡番号のご連絡", share: "kitehand", hours: 12, how: "いつもの文面で、お客さまごとに追跡番号をメールします。", apps: ["メール"] },
          { name: "在庫表の更新", share: "kitehand", hours: 12, how: "出荷したぶんを在庫表から引き、少なくなった品物を知らせます。", apps: ["在庫表"] },
          { name: "配送の遅れ・破損への対応", share: "approve", hours: 8, how: "運送会社への問い合わせと、お客さまへのお詫びの文面を作り、あなたが確かめてから送ります。", apps: ["メール", "ヤマト運輸", "佐川急便"] },
          { name: "梱包と現物の確認", share: "human", hours: 42, how: "手を動かす仕事は人に残します。", apps: [] },
        ],
        schedule: "送り状は 9:00 と 14:00、集荷は 15:00 までに予約、在庫は終業時に更新",
        asks_before: ["運送会社に補償を求めるとき", "返金や値引きを含むお詫びを送るとき", "住所が足りないように見える注文"],
        first_week: ["1日目：注文一覧・運送会社のサイト・在庫表をつなぐ", "2日目：1日分の出荷を一緒に一度やる", "3〜5日目：送り状とメールの案を作り、確かめるまで予約しない"],
      },
    },
  },
  {
    slug: "sales-admin",
    kind: "posting",
    posting: {
      en: "Sales admin for a team of four. Make quotes from the price list, enter orders and purchase orders, send invoices, keep the customer list current, and put together the weekly sales report. Greet visitors and take calls.",
      ja: "【営業事務】営業4名のサポート。価格表からの見積書作成、受発注の入力、請求書の発行、顧客リストの更新、週次の売上報告の作成。来客・電話の取り次ぎ。",
    },
    diagnosis: {
      en: {
        title: "Sales admin",
        summary: "Quotes, orders, invoices and the weekly report, behind a team of four.",
        hours_per_month: 110,
        duties: [
          { name: "Make quotes", share: "kitehand", hours: 20, how: "Builds each quote from the price list and past quotes, and returns it to the salesperson.", apps: ["Price list", "Excel", "Email"] },
          { name: "Quotes with a discount or special terms", share: "approve", hours: 8, how: "A quote off the price list waits for your OK before it goes out.", apps: ["Excel"] },
          { name: "Enter orders and purchase orders", share: "kitehand", hours: 22, how: "Enters each order the team wins, and the purchase order it needs, in your order system.", apps: ["Order system"] },
          { name: "Send invoices", share: "kitehand", hours: 12, how: "Makes and sends each invoice when the order ships.", apps: ["Order system", "Email"] },
          { name: "Keep the customer list current", share: "kitehand", hours: 10, how: "Adds new contacts and changes from email to the customer list.", apps: ["CRM", "Email"] },
          { name: "The weekly sales report", share: "kitehand", hours: 8, how: "Puts together the week's sales by person and customer, and sends it on Monday morning.", apps: ["Order system", "Excel"] },
          { name: "Visitors and calls", share: "human", hours: 30, how: "Meeting people stays with your team.", apps: [] },
        ],
        schedule: "Quotes within the hour, orders as they're won, the report every Monday at 8:00",
        asks_before: ["A quote below the price list", "A customer's first order", "An invoice far from the order amount"],
        first_week: ["Day 1: connect the price list, the order system, the customer list and email", "Day 2: make a few quotes and orders together once", "Days 3–5: it prepares last week's quotes and orders for you to check, sending nothing"],
      },
      ja: {
        title: "営業事務",
        summary: "営業4名のうしろで、見積・受発注・請求・週次報告を回す仕事。",
        hours_per_month: 110,
        duties: [
          { name: "見積書の作成", share: "kitehand", hours: 20, how: "価格表と過去の見積から作り、営業に返します。", apps: ["価格表", "Excel", "メール"] },
          { name: "値引きや特別条件のある見積", share: "approve", hours: 8, how: "価格表から外れる見積は、出す前にあなたに確かめます。", apps: ["Excel"] },
          { name: "受発注の入力", share: "kitehand", hours: 22, how: "決まった注文と、そのための発注を販売管理に入力します。", apps: ["販売管理"] },
          { name: "請求書の発行", share: "kitehand", hours: 12, how: "出荷に合わせて請求書を作り、送ります。", apps: ["販売管理", "メール"] },
          { name: "顧客リストの更新", share: "kitehand", hours: 10, how: "新しい連絡先や変更を、メールから顧客リストに反映します。", apps: ["顧客管理", "メール"] },
          { name: "週次の売上報告", share: "kitehand", hours: 8, how: "1週間の売上を担当者別・取引先別にまとめ、月曜の朝に送ります。", apps: ["販売管理", "Excel"] },
          { name: "来客・電話の取り次ぎ", share: "human", hours: 30, how: "人と会う仕事は人に残します。", apps: [] },
        ],
        schedule: "見積は1時間以内、受注は決まりしだい、報告は毎週月曜 8:00",
        asks_before: ["価格表より安い見積", "初めての取引先の注文", "注文額と大きく違う請求書"],
        first_week: ["1日目：価格表・販売管理・顧客リスト・メールをつなぐ", "2日目：見積と受注を一緒に何件かやる", "3〜5日目：先週分の見積と受注で試し、確かめるまで送らない"],
      },
    },
  },
  {
    slug: "property-listings",
    kind: "line",
    posting: {
      en: "Post every new property we take on to Zillow, Apartments.com, Realtor.com and our own site, keep photos and prices current, take sold or let properties down, and sort the inquiries every morning.",
      ja: "預かった物件を SUUMO・HOME'S・at home と自社サイトに載せて、写真や賃料の更新、成約した物件の取り下げ、毎朝の反響メールの振り分けまでお願いしたい。",
    },
    diagnosis: {
      en: {
        title: "Property listings",
        summary: "New properties posted to four sites, kept current, taken down when gone, inquiries sorted.",
        hours_per_month: 110,
        duties: [
          { name: "Post new properties to four sites", share: "kitehand", hours: 36, how: "Reads the floor plan, rent and features from the property sheet and fills in each site's listing form.", apps: ["Property sheet (PDF)", "Zillow", "Apartments.com", "Realtor.com"] },
          { name: "Update photos and details", share: "kitehand", hours: 12, how: "Swaps photos and changes prices on every site at once.", apps: ["Zillow", "Apartments.com", "Your site"] },
          { name: "Take down sold or let properties", share: "kitehand", hours: 6, how: "Takes the listing off every site the day it's gone.", apps: ["Zillow", "Apartments.com", "Realtor.com"] },
          { name: "Sort and answer inquiries", share: "kitehand", hours: 16, how: "Sorts each morning's inquiries by property and sends the first reply with viewing times.", apps: ["Email", "Calendar"] },
          { name: "Check listing wording", share: "approve", hours: 6, how: "Claims such as \"best\" or \"cheapest\", which advertising rules restrict, wait for your OK before they go up.", apps: ["Zillow"] },
          { name: "Viewings and negotiation", share: "human", hours: 34, how: "Showing homes and dealing with clients stays with your team.", apps: [] },
        ],
        schedule: "New properties the same day; inquiries sorted at 8:00; listings checked every evening",
        asks_before: ["Wording advertising rules restrict", "A price change", "Taking down a listing someone is viewing"],
        first_week: ["Day 1: connect the four sites, the property sheets and the inbox", "Day 2: post one property to every site together once", "Days 3–5: it prepares listings for you to check, posting nothing"],
      },
      ja: {
        title: "物件情報の登録",
        summary: "預かった物件を4つのサイトに載せ、更新し、成約したら取り下げ、反響を振り分ける仕事。",
        hours_per_month: 110,
        duties: [
          { name: "4つのサイトへの物件登録", share: "kitehand", hours: 36, how: "物件資料から間取り・賃料・設備を読み、各サイトの入力画面に登録します。", apps: ["物件資料（PDF）", "SUUMO", "LIFULL HOME'S", "at home"] },
          { name: "写真と掲載情報の更新", share: "kitehand", hours: 12, how: "写真の差し替えや賃料の変更を、すべてのサイトにまとめて反映します。", apps: ["SUUMO", "LIFULL HOME'S", "自社サイト"] },
          { name: "成約物件の取り下げ", share: "kitehand", hours: 6, how: "成約したその日に、すべてのサイトから掲載を下ろします。", apps: ["SUUMO", "LIFULL HOME'S", "at home"] },
          { name: "反響メールの振り分けと一次返信", share: "kitehand", hours: 16, how: "毎朝、問い合わせを物件ごとに振り分け、内見の候補日を添えて最初の返信をします。", apps: ["メール", "カレンダー"] },
          { name: "広告表現の確認", share: "approve", hours: 6, how: "「最高」「格安」など、表示のルールで気をつける言葉は、載せる前にあなたに確かめます。", apps: ["SUUMO"] },
          { name: "内見の案内と商談", share: "human", hours: 34, how: "お客さまと会う仕事は人に残します。", apps: [] },
        ],
        schedule: "新しい物件はその日のうちに、反響は毎朝 8:00、掲載内容は毎晩確認",
        asks_before: ["表示のルールで気をつける言葉", "賃料・価格を変えるとき", "内見の予定がある物件の取り下げ"],
        first_week: ["1日目：4つのサイト・物件資料・受信箱をつなぐ", "2日目：1件の物件を一緒にすべてのサイトに載せる", "3〜5日目：登録の案を作り、確かめるまで掲載しない"],
      },
    },
  },
];
