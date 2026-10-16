/** よくある質問の一問一答。 */
export interface FaqItem {
  question: string;
  answer: string;
}

/** ランディングページに載せる文章。料金・人数・実績などの数値は持たない。 */
export interface PageContent {
  title: string;
  description: string;
  brand: string;
  eyebrow: string;
  catchcopy: readonly [string, string];
  lead: string;
  consultLabel: string;
  faqId: string;
  audience: {
    heading: string;
    items: readonly string[];
  };
  learn: {
    heading: string;
    items: readonly string[];
  };
  flow: {
    heading: string;
    steps: readonly string[];
  };
  faq: {
    heading: string;
    items: readonly FaqItem[];
  };
  closing: {
    heading: string;
    lead: string;
  };
  footer: {
    notice: string;
  };
}

export const content = {
  title: 'Code Start | はじめの一歩を、いちばんやさしく。',
  description:
    '架空のプログラミングスクール Code Start。未経験から、HTML / CSS、JavaScript、Git / GitHub を自分のペースで学ぶための案内です。',
  brand: 'Code Start',
  eyebrow: 'プログラミングスクール',
  catchcopy: ['はじめの一歩を、', 'いちばんやさしく。'],
  lead: '何から始めればいいか迷っている人へ。基礎の基礎から、自分の手でページを作って公開するところまで、質問しながら進めます。',
  consultLabel: '無料相談する',
  faqId: 'faq',
  audience: {
    heading: 'こんな人におすすめ',
    items: [
      'プログラミングに興味はあるけれど、何から始めればいいか分からない人',
      '独学で挫折した経験がある人',
      '自分の手で Web サイトを作ってみたい人',
    ],
  },
  learn: {
    heading: '学べること',
    items: [
      'HTML / CSS によるページ作りの基本',
      'JavaScript で動きのあるページを作る方法',
      'Git / GitHub を使ったコード管理と公開の流れ',
    ],
  },
  flow: {
    heading: '受講の流れ',
    steps: [
      '無料相談で目標と学び方を一緒に決める',
      'カリキュラムに沿って、質問しながら学ぶ',
      'オリジナルの作品を作って公開する',
    ],
  },
  faq: {
    heading: 'よくある質問',
    items: [
      {
        question: 'まったくの未経験でも大丈夫ですか？',
        answer: 'はい、基礎の基礎から始めます。',
      },
      {
        question: 'どんなパソコンが必要ですか？',
        answer: 'ブラウザが動くパソコンがあれば始められます。',
      },
    ],
  },
  closing: {
    heading: 'まずは、よくある質問へ。',
    lead: '学び始めの不安への答えを、短くまとめています。',
  },
  footer: {
    notice:
      'Code Start は架空のプログラミングスクールです。実在のサービスではなく、このページは学習用のサンプルです。',
  },
} as const satisfies PageContent;
