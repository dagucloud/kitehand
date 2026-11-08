// Kitehand's terms of service. The Japanese text prevails over the English, so
// change both together. Prices stay on the pricing section and the seller's
// disclosure, and the two link here rather than repeat each other. The body's
// strings are trusted markup for their links; an array is a bulleted list.

export type LegalDoc = {
  title: string;
  updated: string;
  intro: string[];
  sections: { title: string; body: (string | string[])[] }[];
};

const en: LegalDoc = {
  title: "Terms of Service",
  updated: "Last updated: November 8, 2026",
  intro: [
    "These terms apply to Kitehand (app.kitehand.ai and kitehand.ai, the “Service”), provided by Descarty, Inc. (“we”). By signing up for or using the Service, you agree to these terms. If you have a separate written contract with us, that contract prevails where it differs from these terms.",
  ],
  sections: [
    {
      title: "1. The Service",
      body: [
        "The Service is a cloud service in which software run by AI (a “hand”) does office work from the job description, manual or instructions you give it. A hand is not a person. The Service is provided for business use by companies and sole proprietors. It does not replace the judgment of a legal, tax, accounting or other professional.",
      ],
    },
    {
      title: "2. Accounts",
      body: [
        "Register with accurate information and keep your sign-in safe. A workspace's owners and admins are responsible for how the people they invite use the Service.",
      ],
    },
    {
      title: "3. Plans and payment",
      body: [
        "The Service has a free trial and the paid plans Own Key and Pro. Current prices and what each plan includes are on the <a href=\"/#pricing\">pricing section</a>.",
        "The free trial gives one hand one job for up to 30 runs over 14 days, with AI usage for the trial, once, and needs no credit card. Once its runs or its 14 days are used up, the hand's work waits until you move to a paid plan.",
        "Paid plans are priced per hand and paid in advance, monthly or yearly, by credit card through Stripe. They renew automatically on each renewal date until cancelled. Prices exclude tax, which is added as the law of your country or region requires, including Japan's consumption tax. A paid plan starts when your payment goes through.",
        "Adding a hand or moving to a higher plan is charged at once for the rest of the current period, and applies once paid. Removing a hand or moving to a lower plan applies at once, and what is left of the period is credited to your next payment.",
        "A paid plan has no set cap on a hand's jobs or runs, but for use far beyond ordinary office work, such as repeating at very short intervals, we may ask you to add a hand or adjust the use. The AI usage Pro includes assumes ordinary use as well, and a hand may stop if use goes far beyond it.",
        "We give at least 30 days' notice of a price change, which applies from your first renewal after that. If a payment fails, we may suspend the paid plan.",
      ],
    },
    {
      title: "4. Cancellation and refunds",
      body: [
        "You can cancel at any time, and keep the plan until the end of the period you have paid for. If you ask within 30 days of first starting a paid plan, we refund everything you have paid for it in full. We give no other refund, prorated or otherwise; a credit for removing a hand or moving to a lower plan goes to your next payment. When a plan ends, its hands go back to the free trial with the runs and days they have left, and nothing is deleted.",
      ],
    },
    {
      title: "5. An AI model you choose",
      body: [
        "On any plan, you can have a hand work with a model from a provider the Service offers, on your own API key. In that case:",
        [
          "The provider bills you for its usage, and you follow its terms.",
          "What the hand reads goes to that provider under its terms.",
          "We keep your API key encrypted and use it only for that hand's work.",
          "A hand stops if the provider is down or refuses a request, and whether a model stays available is up to the provider. We are not responsible for these.",
        ],
      ],
    },
    {
      title: "6. Your data",
      body: [
        "<strong>Your rights.</strong> You keep all rights in what you hand over and in what a hand makes from it. We use them only to provide the Service. We may use statistics on how the Service is used that contain none of that content.",
        "<strong>AI models.</strong> The talk with a hand and what it reads, such as mail, pages and files, go to an AI model so that it can do the work. We do not use them to train an AI model. The AI model included in the Service is reached only through hosts that neither store nor train on them. Passwords you give a hand are not sent to an AI model.",
        "<strong>Where it is kept.</strong> Your account and everything a hand keeps are kept in the United States, on Google Cloud, with sign-ins encrypted. To provide the Service we use Google Cloud (hosting), Cloudflare (network), Okta through Auth0 (sign-in), OpenRouter and the hosts it uses (the included AI model), Stripe (payment), and browser makers' push services (notifications, encrypted).",
        "<strong>How long.</strong> A hand's record of its work is kept for 30 days. Deleting a hand deletes what it kept. To delete a whole workspace, contact us. Data may stay in backups for a time after it is deleted.",
        "<strong>Who can reach it.</strong> We reach your data only as needed to provide the Service, to investigate and fix faults, to keep the Service secure, or as the law requires, and we do not disclose it to third parties beyond the providers above and what the law requires. We sign an NDA on request.",
        "How we handle personal information is in our <a href=\"/privacy/\">Privacy Policy</a>.",
      ],
    },
    {
      title: "7. Your responsibilities",
      body: [
        "A hand works with the permissions of the sign-ins you give it. You are responsible for:",
        [
          "Having the right to give it those sign-ins",
          "Following the terms of the websites and services it uses, including any on automated access",
          "Following the law, and your commitments to others, on the data it handles, personal information included",
          "Checking its work and your approvals",
          "Keeping backups of important data",
        ],
        "A hand can make mistakes. For work where a mistake would matter, such as payments or sending anything outside your company, set it to wait for your approval.",
        "When you publish a hand's public page, anyone can read it and the name it is published under, and it appears in search results and the ranking. You are responsible for having the rights to what you publish and for leaving out other people's personal information and anything confidential. We may take down a public page we judge to break the law or these terms.",
      ],
    },
    {
      title: "8. What you may not do",
      body: [
        [
          "Use the Service to break the law, to reach systems you have no permission for, or to put excessive load on other services",
          "Send unsolicited mail or infringe the rights of others",
          "Resell the Service without our written agreement, or decompile or take it apart",
          "Use several accounts to repeat the free trial",
          "Do anything that harms the security of the Service",
        ],
      ],
    },
    {
      title: "9. Rights in the Service",
      body: [
        "We own the Service. We grant you a non-exclusive, non-transferable right to use it within your plan. We may use feedback you give us freely.",
      ],
    },
    {
      title: "10. No warranty",
      body: [
        "The Service is provided as it is. To the extent the law allows, we do not warrant that it is free of errors, that it runs without interruption, or that it fits a particular purpose. A hand may stop or slow when a site it uses changes.",
      ],
    },
    {
      title: "11. Limit of liability",
      body: [
        "Except for our intent or gross negligence, we are liable only for ordinary and direct damage you actually suffer in connection with the Service, up to the amount you paid for the Service in the 12 months before the damage arose. These terms do not limit any liability that the Consumer Contract Act or other law does not allow to be limited.",
      ],
    },
    {
      title: "12. Suspension and ending the Service",
      body: [
        "We may suspend or end your use if you break these terms or a payment fails, and may suspend the Service as needed for maintenance or security. We give at least 30 days' notice before ending the Service itself.",
      ],
    },
    {
      title: "13. Organized crime",
      body: [
        "You and we each state that neither is, or has dealings with, an organized crime group or similar anti-social force. If either breaks this, the other may end the contract without notice.",
      ],
    },
    {
      title: "14. Changes to these terms",
      body: [
        "We post any change on this page and update the date above. A change that narrows your rights takes effect at least 30 days after it is posted. Using the Service after that means you agree to the changed terms.",
      ],
    },
    {
      title: "15. Governing law and courts",
      body: [
        "These terms are governed by the laws of Japan. The Tokyo District Court has exclusive jurisdiction in the first instance over any dispute about the Service.",
      ],
    },
    {
      title: "16. Contact",
      body: [
        "Descarty, Inc., Shibuya Dogenzaka Tokyu Bldg. 2F-C, 1-10-8 Dogenzaka, Shibuya-ku, Tokyo 150-0043, Japan. <a href=\"mailto:company@descarty.com\">company@descarty.com</a>. Our <a href=\"https://descarty.com/en/legal/tokushoho/\">commercial disclosure</a> gives the seller's details.",
        "If the Japanese and English versions of these terms differ, the Japanese version prevails.",
      ],
    },
  ],
};

const ja: LegalDoc = {
  title: "利用規約",
  updated: "最終更新日：2026年11月8日",
  intro: [
    "本規約は、Descarty株式会社（以下「当社」）が提供する Kitehand（app.kitehand.ai と kitehand.ai。以下「本サービス」）に適用されます。本サービスに登録または利用した場合、本規約に同意いただいたものとみなします。当社と別に書面の契約を結んだ場合、本規約と異なる点はその契約が優先します。",
  ],
  sections: [
    {
      title: "1. 本サービス",
      body: [
        "本サービスは、お客様が渡した職務記述書、手順書、指示をもとに、AI で動くソフトウェア（以下「担当者」）が事務の仕事を行うクラウドサービスです。担当者は人ではありません。本サービスは、法人と個人事業主の事業のために提供します。法律、税務、会計その他の専門家の判断に代わるものではありません。",
      ],
    },
    {
      title: "2. アカウント",
      body: [
        "正確な情報で登録し、サインイン情報を適切に管理してください。ワークスペースの所有者と管理者は、招待した人の利用についても責任を負います。",
      ],
    },
    {
      title: "3. プランと支払い",
      body: [
        "本サービスには、無料体験と、有料プランの自前キーおよびプロがあります。現在の料金と各プランの内容は<a href=\"/ja/#pricing\">料金の欄</a>に掲載しています。",
        "無料体験では、担当者1人に仕事を1件、14日間で30回まで任せられ、体験分の AI の利用料を含みます。いずれも一度限りで、クレジットカードの登録は不要です。30回を使い切るか14日が過ぎると、有料プランに切り替えるまで担当者の仕事は止まって待ちます。",
        "有料プランは担当者1人ごとの料金で、月払いまたは年払いの前払いです。お支払いは Stripe によるクレジットカード決済で、解約するまで更新日に自動で決済されます。料金は税別で、消費税その他、お客様の国や地域の法令に従った税を加算します。有料プランは、お支払いが完了した時点で開始します。",
        "担当者の追加や上位のプランへの変更は、今の期間の残りの分を直ちに請求し、お支払いの完了後に適用します。担当者の削減や下位のプランへの変更は直ちに適用し、今の期間の残りの分を次回のお支払いから差し引きます。",
        "有料プランでは、任せる仕事の数と回数に定めた上限はありませんが、ごく短い間隔での繰り返しなど、通常の事務の範囲を大きく超える利用には、担当者の追加や利用の調整をお願いすることがあります。プロに含まれる AI の利用も通常の利用を前提としており、大きく超えると担当者が止まることがあります。",
        "料金を変更する場合は30日以上前に通知し、その後の最初の更新から適用します。お支払いを確認できない場合、有料プランを停止することがあります。",
      ],
    },
    {
      title: "4. 解約と返金",
      body: [
        "いつでも解約でき、お支払い済みの期間の末日までご利用いただけます。有料プランを最初に始めてから30日以内にお申し出いただいた場合は、お支払い済みの料金の全額を返金します。それ以外の返金（日割りの返金を含みます）はありません。担当者の削減や下位のプランへの変更の分は、次回のお支払いから差し引きます。プランの終了後、担当者は残りの回数と日数の無料体験に戻り、データは削除されません。",
      ],
    },
    {
      title: "5. お客様が選ぶ AI モデル",
      body: [
        "どのプランでも、本サービスが対応するプロバイダのモデルを、お客様の API キーで担当者に使わせることができます。この場合、次のとおりとします。",
        [
          "利用料はプロバイダからお客様に請求され、プロバイダの規約はお客様が守ります。",
          "担当者が読む内容は、そのプロバイダの規約のもとで送られます。",
          "API キーは暗号化して保管し、その担当者の仕事にのみ使います。",
          "プロバイダの停止や拒否により担当者は止まることがあり、モデルの提供が続くかはプロバイダの判断によります。当社はこれらについて責任を負いません。",
        ],
      ],
    },
    {
      title: "6. お客様のデータ",
      body: [
        "<strong>権利。</strong>お客様が渡したものと、担当者がそれをもとに作ったものの権利は、すべてお客様に帰属します。当社は、本サービスの提供のためにのみ利用します。内容を含まない利用状況の統計は、当社が利用することがあります。",
        "<strong>AI モデル。</strong>担当者との会話と、担当者が読むメール、ページ、ファイルなどの内容は、仕事のために AI モデルに送られます。当社はこれらで AI モデルを学習させません。本サービスに含まれる AI モデルは、保存も学習もしない提供先を通じてのみ利用します。お客様が担当者に渡したパスワードは、AI モデルに送られません。",
        "<strong>保管場所。</strong>アカウントと担当者が保管するものは、米国の Google Cloud に保管し、サインイン情報は暗号化します。本サービスの提供のため、Google Cloud（基盤）、Cloudflare（通信）、Okta の Auth0（サインイン）、OpenRouter とその提供先（本サービスに含まれる AI モデル）、Stripe（決済）、ブラウザ提供各社のプッシュ配信（通知、暗号化済み）を利用します。",
        "<strong>保存期間。</strong>担当者の作業の記録は30日間保存します。担当者を削除すると、その担当者が保管していたものを削除します。ワークスペース全体の削除はお問い合わせください。削除後も、バックアップに一定期間残ることがあります。",
        "<strong>アクセス。</strong>当社は、本サービスの提供、障害の調査と対応、安全の確保、法令への対応に必要な範囲でのみ、お客様のデータにアクセスします。上記の提供先と法令に基づく場合を除き、第三者に開示しません。ご希望があれば秘密保持契約（NDA）を結びます。",
        "個人情報の扱いは<a href=\"/ja/privacy/\">プライバシーポリシー</a>に掲載しています。",
      ],
    },
    {
      title: "7. お客様の責任",
      body: [
        "担当者は、お客様が渡したサインイン情報の権限で操作します。次の事項はお客様の責任となります。",
        [
          "そのサインイン情報を渡す権限があること",
          "担当者が使うウェブサイトとサービスの規約（自動でのアクセスに関する定めを含みます）を守ること",
          "担当者が扱うデータ（個人情報を含みます）について、法令と取引先との約束を守ること",
          "担当者の仕事と、承認の判断を確かめること",
          "重要なデータのバックアップ",
        ],
        "担当者は誤ることがあります。支払いや社外への送信など、誤ると困る仕事は、承認してから進むように設定してください。",
        "担当者の公開ページを公開すると、ページの内容と公開時の名前は誰でも閲覧でき、検索結果やランキングに表示されます。公開する内容について必要な権利を持つこと、他人の個人情報や秘密情報を含めないことは、お客様の責任です。当社は、法令や本規約に反すると判断した公開ページを非公開にできます。",
      ],
    },
    {
      title: "8. 禁止事項",
      body: [
        [
          "法令に違反する目的、権限のないシステムへのアクセス、他のサービスへの過度な負荷を与える目的での利用",
          "迷惑メールの送信、他者の権利の侵害",
          "当社と書面で合意せずに本サービスを再販すること、本サービスを逆コンパイルまたは解析すること",
          "無料体験を繰り返すために複数のアカウントを使うこと",
          "本サービスの安全を損なう行為",
        ],
      ],
    },
    {
      title: "9. 本サービスの権利",
      body: [
        "本サービスの権利は当社に帰属します。当社は、ご利用のプランの範囲で本サービスを使う、非独占的で譲渡できない権利を許諾します。お寄せいただいたご意見は、当社が自由に利用できるものとします。",
      ],
    },
    {
      title: "10. 保証の否認",
      body: [
        "本サービスは現状のまま提供されます。法令で認められる範囲で、当社は、本サービスに誤りがないこと、中断なく動作すること、特定の目的に適合することを保証しません。担当者が使うサイトの変更により、担当者が止まること、遅くなることがあります。",
      ],
    },
    {
      title: "11. 責任の制限",
      body: [
        "当社の故意または重大な過失による場合を除き、当社は、本サービスに関連してお客様に現実に生じた通常かつ直接の損害に限り、損害が生じる前の12か月間にお客様が本サービスについて支払った金額を上限として責任を負います。消費者契約法その他の法令により制限できない責任は、本規約によって制限されません。",
      ],
    },
    {
      title: "12. 利用の停止と本サービスの終了",
      body: [
        "お客様が本規約に違反した場合、またはお支払いを確認できない場合、当社は利用を停止または終了することがあります。保守や安全のために必要な場合、本サービスを一時的に停止することがあります。本サービス自体を終了する場合は、30日以上前に通知します。",
      ],
    },
    {
      title: "13. 反社会的勢力の排除",
      body: [
        "お客様と当社は、それぞれ、暴力団その他の反社会的勢力に該当せず、これらと関わりがないことを表明します。違反があった場合、相手方は通知なく契約を解除できます。",
      ],
    },
    {
      title: "14. 本規約の変更",
      body: [
        "本規約を変更する場合は、このページに掲載し、上記の日付を更新します。お客様の権利を狭める変更は、掲載から30日以上経ってから有効になります。その後も本サービスを利用した場合、変更後の規約に同意いただいたものとみなします。",
      ],
    },
    {
      title: "15. 準拠法と管轄",
      body: [
        "本規約は日本法に準拠します。本サービスに関して紛争が生じた場合は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
      ],
    },
    {
      title: "16. お問い合わせ窓口",
      body: [
        "Descarty株式会社　〒150-0043 東京都渋谷区道玄坂1-10-8 渋谷道玄坂東急ビル2F-C　<a href=\"mailto:company@descarty.com\">company@descarty.com</a>　販売事業者の情報は<a href=\"https://descarty.com/legal/tokushoho/\">特定商取引法に基づく表記</a>に掲載しています。",
        "本規約の日本語版と英語版に相違がある場合は、日本語版が優先します。",
      ],
    },
  ],
};

export const TERMS = { en, ja };
