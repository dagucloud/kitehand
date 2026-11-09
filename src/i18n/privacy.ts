// Kitehand's privacy policy, for both the site and the app. The Japanese text
// prevails over the English, so change both together. What it says about where
// data goes follows the app's security design
// (runstead-source3/docs/kitehand-security-design.md).
import type { LegalDoc } from "./terms";

const en: LegalDoc = {
  title: "Privacy Policy",
  updated: "Last updated: November 9, 2026",
  intro: [
    "Descarty, Inc. (“we”) provides Kitehand. This policy explains what the Kitehand app (app.kitehand.ai) and website (kitehand.ai) handle, where it goes, and where it is kept.",
    "In short: hands work in an environment we run on Google Cloud, and what they keep is kept in the United States. The talk with a hand and what it reads go to an AI model so that it can do the work. We do not use them to train an AI model, and we do not sell personal information.",
  ],
  sections: [
    {
      title: "1. The website",
      body: [
        "When you email us about a job, we use what you send to reply to you. Ask us to delete it at any time.",
        "We use PostHog to count visits. It records the pages viewed, the referring site, and the type of device and browser, and keeps an identifier for this in your browser. It does not record the screen or keystrokes.",
        "The site is served by Cloudflare, which may keep records of requests for security and operations.",
      ],
    },
    {
      title: "2. Your account",
      body: [
        "You sign in through Auth0, run by Okta, and we receive your email address and name. We keep your workspace's name, its members and their roles.",
      ],
    },
    {
      title: "3. What a hand keeps",
      body: [
        "A hand keeps what you hand over, its talk with you, how it does the work, the record of that work, the files it makes, your questions and approvals, and the sign-ins you give it. These may include personal information about your customers and others.",
        "Each hand works in its own environment, and what it keeps is encrypted under that hand's own key, which we hold. Passwords you give a hand are not sent to an AI model.",
        "When you publish a public page, anyone can see it and the name it is published under. Stars, and starting a hand from a page, are recorded against your account, and the page shows only how many.",
      ],
    },
    {
      title: "4. Mail, calendars and Google files",
      body: [
        "When you connect Gmail, Microsoft 365 or another mailbox, Google Calendar, Google Sheets or Google Drive, a hand uses it only for the work you give it. Calendars are read-only, and Google Drive reaches only the files you choose and those the hand makes.",
        "The sign-in tokens and app passwords are kept encrypted in the hand's environment. What the hand reads goes to the AI model it works with. Disconnecting removes the token, and you can also remove the access from your Google or Microsoft account at any time.",
        "We do not use this data for advertising, do not sell it, and do not use it to develop, improve or train AI or machine learning models.",
        "Kitehand's use and transfer of information received from Google APIs to any other app will adhere to the <a href=\"https://developers.google.com/terms/api-services-user-data-policy\">Google API Services User Data Policy</a>, including the Limited Use requirements.",
      ],
    },
    {
      title: "5. AI models",
      body: [
        "The talk with a hand, what you hand over, and the mail, pages and files it reads go to an AI model so that it can do the work.",
        "The AI models included in Kitehand are DeepSeek V4.1 Flash, and OpenAI GPT-6.1 Terra for reading screens. They are reached through OpenRouter, only on hosts that neither keep nor train on this data (OpenRouter's Zero Data Retention). DeepSeek V4.1 Flash runs only on hosts headquartered in the United States or the European Union, never DeepSeek itself or a host based in China; GPT-6.1 Terra runs only on Microsoft Azure in the EU. We keep no record of the text sent to them. If the models change, we update this section.",
        "A model you choose goes straight to the provider you chose, under that provider's terms. If you choose OpenRouter, OpenRouter's terms and your settings there decide which hosts serve it.",
      ],
    },
    {
      title: "6. Where it is kept, and companies abroad",
      body: [
        "Your account and everything a hand keeps are kept in the United States, in Google Cloud's Iowa region (us-central1). We use these companies to provide Kitehand:",
        [
          "Google LLC (Google Cloud: hosting and storage)",
          "Cloudflare, Inc. (serving the site and the app, and connecting you to a hand: the talk, the live browser and what you type into it pass through it)",
          "Okta, Inc. (Auth0: sign-in)",
          "OpenRouter, Inc. and the hosts it routes to (the included AI model)",
          "Stripe (payment)",
          "PostHog, Inc. (counting visits to the site)",
          "Apple, Google and Mozilla (push notifications, encrypted so that they cannot read them)",
        ],
        "Most of these companies are in the United States and process information on servers there. The hosts OpenRouter routes the included AI models to are headquartered in the United States or the European Union. For the United States' system for protecting personal information, see the information published by Japan's <a href=\"https://www.ppc.go.jp/\">Personal Information Protection Commission</a>.",
      ],
    },
    {
      title: "7. Who can reach it",
      body: [
        "Our people cannot enter a hand's environment through Kitehand's screens. Access by those of us who run Google Cloud is not yet technically restricted. We reach your data only as needed to investigate and fix faults, to keep the service secure, or as the law requires.",
      ],
    },
    {
      title: "8. Payment",
      body: [
        "Stripe handles payment for paid plans. Your card number goes to Stripe, and we do not keep it. We use your billing company name, email address, plan and payment status.",
      ],
    },
    {
      title: "9. How long it is kept",
      body: [
        "A hand's record of its work, its talk and the files it makes are kept for 30 days, and answered questions for 14 days. Deleting a hand deletes what it kept. When a plan ends, nothing is deleted. To delete your account or a whole workspace, contact us. Data may stay in backups for a time after it is deleted.",
      ],
    },
    {
      title: "10. What we use it for",
      body: [
        "We use this information to provide, run and improve Kitehand, to answer your enquiries, to bill you, to keep the service secure, and to tell you what you need to know about it. We do not sell personal information, and we do not provide it to third parties except with your consent, as the law requires, or to the companies above to provide Kitehand.",
      ],
    },
    {
      title: "11. Your requests",
      body: [
        "To ask us to disclose, correct, delete or stop using personal information we hold about you, contact us below. After confirming it is you, we respond without delay as the law requires.",
      ],
    },
    {
      title: "12. Changes to this policy",
      body: [
        "We post any change on this page and update the date above.",
      ],
    },
    {
      title: "13. Contact",
      body: [
        "Descarty, Inc., Shibuya Dogenzaka Tokyu Bldg. 2F-C, 1-10-8 Dogenzaka, Shibuya-ku, Tokyo 150-0043, Japan. <a href=\"mailto:company@descarty.com\">company@descarty.com</a>",
        "If the Japanese and English versions of this policy differ, the Japanese version prevails.",
      ],
    },
  ],
};

const ja: LegalDoc = {
  title: "プライバシーポリシー",
  updated: "最終更新日：2026年11月9日",
  intro: [
    "Descarty株式会社（以下「当社」）は、Kitehand を提供しています。本ポリシーは、Kitehand のアプリ（app.kitehand.ai）とウェブサイト（kitehand.ai）が扱う情報、その送り先、保管場所について説明します。",
    "要点：担当者は、当社が Google Cloud で運用する環境で働き、保管するものはアメリカ合衆国に置きます。担当者との会話と担当者が読む内容は、仕事のために AI モデルに送られます。当社はこれらで AI モデルを学習させず、個人情報を販売しません。",
  ],
  sections: [
    {
      title: "1. ウェブサイト",
      body: [
        "メールでご相談いただいた内容は、お返事に使います。いつでも削除をご依頼いただけます。",
        "訪問数を把握するため、PostHog を利用しています。PostHog は、閲覧したページ、参照元のサイト、端末とブラウザの種類を記録し、そのための識別子をブラウザに保存します。画面の録画やキー入力の記録は行いません。",
        "サイトは Cloudflare で配信しており、Cloudflare は安全と運用のためにリクエストの記録を保存することがあります。",
      ],
    },
    {
      title: "2. アカウント",
      body: [
        "サインインには Okta の Auth0 を使い、メールアドレスとお名前を受け取ります。ワークスペースの名前、メンバーとその役割を保管します。",
      ],
    },
    {
      title: "3. 担当者が保管するもの",
      body: [
        "担当者は、お客様が渡したもの、お客様との会話、仕事のやり方、作業の記録、作ったファイル、確認と承認、お客様が渡したサインイン情報を保管します。これらには、お客様の取引先などの個人情報が含まれることがあります。",
        "担当者はそれぞれ分かれた環境で働き、保管するものは担当者ごとの鍵で暗号化します。鍵は当社が管理します。お客様が担当者に渡したパスワードは、AI モデルに送られません。",
        "公開ページを公開すると、その内容と公開時の名前は誰でも見られます。スターと、ページから担当者を始めたことはアカウントに紐づけて記録し、ページには人数だけを表示します。",
      ],
    },
    {
      title: "4. メール、カレンダー、Google のファイル",
      body: [
        "Gmail、Microsoft 365 その他のメールボックス、Google カレンダー、Google スプレッドシート、Google ドライブを接続すると、担当者はお客様が任せた仕事にのみ使います。カレンダーは読み取りのみで、Google ドライブで扱えるのは、お客様が選んだファイルと担当者が作ったファイルだけです。",
        "サインインのトークンとアプリパスワードは、担当者の環境に暗号化して保管します。担当者が読んだ内容は、担当者が使う AI モデルに送られます。接続を解除するとトークンを削除します。Google や Microsoft のアカウントからも、いつでもアクセスを削除できます。",
        "当社はこれらのデータを広告に使わず、販売せず、AI や機械学習のモデルの開発、改善、学習に使いません。",
        "Kitehand's use and transfer of information received from Google APIs to any other app will adhere to the <a href=\"https://developers.google.com/terms/api-services-user-data-policy\">Google API Services User Data Policy</a>, including the Limited Use requirements.（Google API から受け取った情報の Kitehand による利用と他のアプリへの転送は、Limited Use の要件を含む Google API サービスのユーザーデータに関するポリシーに従います。）",
      ],
    },
    {
      title: "5. AI モデル",
      body: [
        "担当者との会話、お客様が渡したもの、担当者が読むメール、ページ、ファイルの内容は、仕事のために AI モデルに送られます。",
        "Kitehand に含まれる AI モデルは、DeepSeek V4.1 Flash と、画面を読むための OpenAI GPT-6.1 Terra です。OpenRouter を通じて利用し、送った内容を保存も学習もしない事業者（OpenRouter のゼロデータ保持の対象）に限ります。DeepSeek V4.1 Flash は本社が米国または EU にある事業者だけが動かし、DeepSeek 社や中国に拠点を置く事業者には送りません。GPT-6.1 Terra は EU の Microsoft Azure だけで動きます。当社は、送った文章を記録しません。モデルを変えるときは、この項目を更新します。",
        "お客様が選んだモデルには、お客様が選んだプロバイダに直接送られ、そのプロバイダの規約に従います。OpenRouter を選んだ場合は、どの提供先が使われるかは、OpenRouter の規約とお客様の設定によります。",
      ],
    },
    {
      title: "6. 保管場所と外国にある事業者",
      body: [
        "アカウントと担当者が保管するものは、アメリカ合衆国にある Google Cloud のアイオワリージョン（us-central1）に保管します。Kitehand の提供のため、次の事業者を利用します。",
        [
          "Google LLC（Google Cloud：基盤と保管）",
          "Cloudflare, Inc.（サイトとアプリの配信、担当者との通信。会話、ブラウザの画面、入力した内容が通過します）",
          "Okta, Inc.（Auth0：サインイン）",
          "OpenRouter, Inc. とその振り分け先のホスト（Kitehand に含まれる AI モデル）",
          "Stripe（決済）",
          "PostHog, Inc.（サイトの訪問数）",
          "Apple、Google、Mozilla（プッシュ通知。暗号化しており、これらの事業者は内容を読めません）",
        ],
        "これらの多くはアメリカ合衆国の事業者で、同国のサーバーで情報を処理します。Kitehand に含まれる AI モデルの振り分け先は、本社が米国または EU にある事業者です。アメリカ合衆国の個人情報の保護に関する制度については、<a href=\"https://www.ppc.go.jp/\">個人情報保護委員会のウェブサイト</a>で公表されている情報をご参照ください。",
      ],
    },
    {
      title: "7. アクセス",
      body: [
        "当社の者が Kitehand の画面を通じて担当者の環境に入ることはありません。Google Cloud を運用する当社の者によるアクセスは、まだ技術的には制限されていません。当社は、障害の調査と対応、安全の確保、法令への対応に必要な範囲でのみ、お客様のデータにアクセスします。",
      ],
    },
    {
      title: "8. お支払い",
      body: [
        "有料プランのお支払いは Stripe が扱います。カード番号は Stripe が受け取り、当社は保管しません。当社は、請求先の会社名、メールアドレス、プラン、お支払いの状況を利用します。",
      ],
    },
    {
      title: "9. 保存期間",
      body: [
        "担当者の作業の記録、会話、作ったファイルは30日間、回答済みの確認は14日間保存します。担当者を削除すると、その担当者が保管していたものを削除します。プランが終了しても、データは削除されません。アカウントやワークスペース全体の削除はお問い合わせください。削除後も、バックアップに一定期間残ることがあります。",
      ],
    },
    {
      title: "10. 利用目的",
      body: [
        "受け取った情報は、Kitehand の提供、運営、改善、お問い合わせへの回答、料金の請求、安全の確保、必要なお知らせに使います。当社は個人情報を販売せず、お客様の同意がある場合、法令に基づく場合、Kitehand の提供のために上記の事業者に委託する場合を除き、第三者に提供しません。",
      ],
    },
    {
      title: "11. 開示等のご請求",
      body: [
        "当社が保有するお客様の個人情報の開示、訂正、削除、利用停止をご希望の場合は、下記の窓口までご連絡ください。ご本人であることを確認したうえで、法令に従い、遅滞なく対応します。",
      ],
    },
    {
      title: "12. 本ポリシーの変更",
      body: [
        "本ポリシーを変更する場合は、このページに掲載し、上記の日付を更新します。",
      ],
    },
    {
      title: "13. お問い合わせ窓口",
      body: [
        "Descarty株式会社　〒150-0043 東京都渋谷区道玄坂1-10-8 渋谷道玄坂東急ビル2F-C　<a href=\"mailto:company@descarty.com\">company@descarty.com</a>",
        "本ポリシーの日本語版と英語版に相違がある場合は、日本語版が優先します。",
      ],
    },
  ],
};

export const PRIVACY = { en, ja };
