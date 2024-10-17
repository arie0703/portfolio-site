import { Profile } from "@/types/profile";

export const profile: Profile = {
  name: 'K.A.',
  introduction: `2022年に人材系企業へWeb開発エンジニアとして新卒入社。\n入社後はTypeScriptでのWebアプリケーション開発や、AWSを用いたインフラ構築・DevOpsを経験。\n現在はフィットネス系企業にてSREとして活動中。`,
  links: [
    {
      title: 'GitHub',
      url: 'https://github.com/arie0703'
    },
    {
      title: 'Qiita',
      url: 'https://qiita.com/arie0703'
    },
    {
      title: 'Blog',
      url: 'https://nomaddiary.hatenablog.com/'
    },
  ],
  experiences: [
    {
      image: '/images/sample-app-square.jpeg',
      title: 'AWS',
      content: 'ECS Fargate等を用いたアプリケーション動作基盤の構築や\nCodePipelineを用いたCI/CDの構築などを経験。\nAWS Solution Architect Associateも取得。',
    },
    {
      image: '/images/sample-app-square.jpeg',
      title: 'Terraform',
      content: 'AWSのインフラ構築や設定変更時に利用。\nDynamo DB, ECS, ALBなど新規APIの開発に必要なリソース作成時、ディレクトリ構造から設計することも経験。',
    },
    {
      image: '/images/sample-app-square.jpeg',
      title: 'New Relic',
      content: 'ECSで動作するアプリケーションにAPMやBrowser Agentの導入を行なった\nGitHub Actionsと連携して変更リードタイムなどの生産性可視化も行なった。',
    },
    {
      image: '/images/sample-app-square.jpeg',
      title: 'Next.js',
      content: '医療・介護系求人サイトのフロントエンド開発をTypeScript, Next.jsで行なった。\nコンポーネントの開発やStorybookを用いた開発基盤の整備を経験。',
    },
    {
      image: '/images/sample-app-square.jpeg',
      title: 'Jest',
      content: 'Next.jsのプロジェクトにおいて単体テストの実装をJestで行なった。\nGitHub Actionsと連携して、PR上でテスト結果を確認できるワークフローも構築した。',
    },
    {
      image: '/images/sample-app-square.jpeg',
      title: '業務改善ツールの開発',
      content: 'Lambda・Slack botを用いたレビュー管理システムの構築を行い、チームのSlackチャンネルに導入した。',
    },
    {
      image: '/images/sample-app-square.jpeg',
      title: '社内勉強会の実施',
      content: 'AWSハンズオンやもくもく会、社内のメンバー6~8名で定期的なAWS勉強会などを企画・実施した。\n勉強会の実施によって、部署を跨いだ交流・チーム間でノウハウなどを交換する機会を作ることができた。',
    },
  ]
} as const;
