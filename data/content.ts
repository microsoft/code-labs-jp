import { Product, products } from './product'
import { Category } from './category'
import { Language, languages } from './language'

export type Content = {
  id: string
  title: string
  type?: 'handson'
  category: Category
  targets: string[]
  owner?: string
  description: string
  products: Product[]
  languages?: Language[]
  url: string
}

const productsByIds = (...ids: string[]): Product[] =>
  products.filter((p) => ids.includes(p.id))

const languagesByIds = (...ids: string[]): Language[] =>
  languages.filter((p) => ids.includes(p.id))

export const contents: Content[] = [
  {
    id: '1',
    title:
      'ハンズオン ラボ : Azure Synapse Analytics エンドツーエンド ソリューション',
    type: 'handson',
    category: 'data',
    targets: [
      'データ エンジニア',
      'データ サイエンティスト',
      '機械学習エンジニア',
    ],
    owner: 'Takekazu Okamoto',
    description:
      'Azure Synapse Analytics を使用する機械学習ソリューションのデータ分析環境を実際に構築します。新機能のAzure Synapse Studio UIを通して、小売業のコールドデータ分析を、SparkやSQLを使って実際に行い、Azureでの最新分析環境を理解することができます。(体験型ハンズオン)',
    products: productsByIds('1', '2', '3', '4', '5', '6', '7', '8'),
    url: 'https://github.com/takeokams/MCW-Azure-Synapse-Analytics-and-AI',
  },
  {
    id: '2',
    title:
      'ハンズ オン ラボ : オンプレミスの SQL Server 2008 R2 データベースを Azure SQL Managed Instance (SQL MI) に移行するための概念実証を構成する',
    type: 'handson',
    category: 'data',
    targets: [
      'データベース管理者',
      'SQL/データベース開発者',
      'アプリケーション開発者',
    ],
    owner: 'Takekazu Okamoto',
    description:
      'オンプレミスで稼働しているオンラインゲームのシステムのクラウド移行を題材とし、SQL Serverとそれを利用するWebアプリケーションの具体的な移行手法を体験して、実際のプロジェクトで必要な情報を効率的に得ることができます。(体験型ハンズオン)',
    products: productsByIds(
      '9',
      '10',
      '11',
      '12',
      '5',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20'
    ),
    url: 'https://github.com/takeokams/MCW-Migrating-SQL-databases-to-Azure',
  },
  {
    id: '3',
    title:
      'Smart Store リファレンス アーキテクチャーサンプル (1) スマホひとつでお買い物:無人店舗の統合ソリューション',
    type: 'handson',
    category: 'retail',
    targets: [],
    owner: 'Yoshiko Hisatomi',
    description:
      'Smart Store リファレンスアーキテクチャー に基づくサンプル実装です。統合商品マスタ、在庫管理、Box管理サービス、POSサービス、Boxクライアントアプリを含みます。',
    products: [],
    url: 'https://github.com/intelligent-retail/smart-store',
  },
  {
    id: '4',
    title:
      'Smart Store リファレンス アーキテクチャーサンプル (2) ノンコーディング スマートカメラ',
    type: 'handson',
    category: 'retail',
    targets: [],
    owner: 'Yoshiko Hisatomi',
    description:
      'ディープラーニングベースの画像認識エンジンにより、防犯カメラ映像を分析します。本リファレンスアーキテクチャでは、エッジ用の高速推論チップを活用することで、高速・高精度な人物検出、人物トラッキング、顔検出、顔からの性別・年齢推定を実現しています。',
    products: productsByIds('21', '22'),
    url: 'https://github.com/intelligent-retail/smart-camera',
  },
  {
    id: '5',
    title: 'Azure Serverless Ninjas Workshop (Azure Functions)',
    type: 'handson',
    category: 'retail',
    targets: [],
    owner: 'Daiyu Hatakeyama',
    description:
      'Azure Functions(Durable Functions), Logic App, EventGrid など一通りを体験いただけます。',
    products: productsByIds('23', '24', '25'),
    url: 'https://github.com/codingwithsasquatch/serverless_ninjas_workshop',
  },
  {
    id: '6',
    title: 'Azure Kubernetes Services',
    type: 'handson',
    category: 'retail',
    targets: [],
    description: 'kubernetes のインストール、構成管理などを体験いただけます。',
    products: productsByIds('26'),
    url: 'https://github.com/yokawasa/azure-container-labs',
  },
  {
    id: '7',
    title: 'Azure Kubernetes Services　(Java ベース)',
    type: 'handson',
    category: 'retail',
    targets: [],
    description:
      'kubernetes のインストール、管理のためのツール群、Service Mesh、そして、VNet と MySQL 起動までを一通り体験可能です。',
    products: productsByIds('26'),
    languages: languagesByIds('1'),
    url:
      'https://github.com/yoshioterada/k8s-Azure-Container-Service-AKS--on-Azure',
  },
  {
    id: '8',
    title: 'Microsoft Translator text to text のハンズオン(JAX-RS)',
    type: 'handson',
    category: 'retail',
    targets: [],
    description:
      'Microsoft Translator はテキスト(英語)からテキスト(日本語)の翻訳のほか、音声データ(wavファイル)からテキストへ翻訳などができます。本ハンズオンでは、テキストからテキストの翻訳、音声からテキストへの翻訳の２種類の翻訳の実装方法について紹介します',
    products: productsByIds('28'),
    languages: languagesByIds('1'),
    url: 'https://github.com/yoshioterada/MS-Translator-Speech-HoL',
  },
  {
    id: '9',
    title:
      'Azure Cognitive Services を活用した Xamarin によるマルチプラットフォームアプリ開発 ハンズオン',
    type: 'handson',
    category: 'retail',
    targets: [],
    description:
      'Cognitive Services を利用したアプリケーションに触れ、Cognitive Services の利用方法について学習します。その後、Cognitive Services Face API を活用 して、取り込んだ画像を分析して人間の顔に関する情報 (年齢、性別、表情) を出力するアプリを、マルチプラットフォーム向け(Windows, iOS, Android) の開発環境である Xamarin を用いたアプリケーションとして構築します',
    products: productsByIds('29', '30'),
    url: 'https://github.com/ayako/CognitiveXamarinHOL_201806',
  },
  {
    id: '10',
    title: 'Azure Machine Learning services を使った深層学習の実行',
    type: 'handson',
    category: 'retail',
    targets: [],
    description:
      '学習用の Python スクリプトを制御していく方法をハンズオン形式で学んでいただきます。',
    products: productsByIds('4'),
    url:
      'https://github.com/DeepLearningLab/AML-Handson?fbclid=IwAR0ukYdflpwTAR4f78xXf627g_M7y8W343fXrhUY5opQC9JRJHbGDRoP6jQ',
  },
  {
    id: '11',
    title: 'Azure Machine Learning Hands-On all for TensorFlow 1.x',
    type: 'handson',
    category: 'retail',
    targets: [],
    description:
      'このサンプルでは、TensorFlowを使ったAzure Machine Learning(旧Azure Machine Learningサービス)を、開発ライフサイクル全体(データの探索、訓練、調整、公開)に沿って利用する方法を体験いただけます。なお、MNISTのデータセット(train.tfrecords, test.tfrecords)を利用します。',
    products: productsByIds('31'),
    url: 'https://github.com/tsmatz/azure-ml-tensorflow-complete-sample',
  },
  {
    id: '12',
    title: 'CustomAI Course for the AI Airlift',
    type: 'handson',
    category: 'retail',
    targets: [],
    description: `以下の3つのコースを体験いただけます。<br />
      1. Azure Databricks and its integration with Azure Machine Learning Services<br />
      2. Continuous Integration and Continuous Delivery (CI/CD)<br />
      3. Deep learning with Azure Machine Learning Services using VS Code"`,
    products: [],
    url: 'https://azure.github.io/LearnAI-CustomAI-Airlift/',
  },
  {
    id: '13',
    title: 'BERT - MLOps サンプル',
    type: 'handson',
    category: 'ai',
    targets: [],
    description: 'BERT を使って、MLOps まで実装します',
    products: [],
    url: 'https://github.com/microsoft/bert-stack-overflow',
  },
  {
    id: '14',
    title: 'BERT on Azure',
    type: 'handson',
    category: 'ai',
    targets: [],
    description:
      'BERT on Azure Machine Learning Service サンプルハンズオンです',
    products: [],
    url: 'https://github.com/Microsoft/AzureML-BERT',
  },
  {
    id: '15',
    title: 'Azure Databricks ハンズオン : NYC Taxi Public Data',
    type: 'handson',
    category: 'analytics',
    targets: [],
    description:
      'NYC Taxi public data を用いて、小さなデータが増え続けるパターンをどう処理していくかを databricks を用いて実際に体験してみます。',
    products: productsByIds('32'),
    url: 'https://github.com/microsoft/Azure-Databricks-NYC-Taxi-Workshop',
  },
  {
    id: '16',
    title: 'DataBricks での機械学習 - 入門編',
    type: 'handson',
    category: 'analytics',
    targets: [],
    description: '',
    products: productsByIds('32'),
    url: 'https://github.com/tsmatz/azure-databricks-exercise',
  },
  {
    id: '17',
    title: 'Predictive Analytics with Spark in Azure Databricks',
    type: 'handson',
    category: 'analytics',
    targets: [],
    description:
      'how to use the Spark MLLib library to build machine learning solutions in a Spark Azure HDInsight cluster',
    products: productsByIds('32'),
    url: 'https://microsoftlearning.github.io/databricks-ml/',
  },
  {
    id: '18',
    title: 'Anomaly Detection and Predictive Maintenance',
    type: 'handson',
    category: 'analytics',
    targets: [],
    description: '簡単な異常検知と予測保全を構成するソリューションです',
    products: productsByIds('32'),
    url: 'https://azure.github.io/LearnAI-ADPM/',
  },
  {
    id: '19',
    title: 'SQL Server and SQL Database Workshop and Labs',
    type: 'handson',
    category: 'data',
    targets: [],
    description:
      'ソフトウェアとしてのSQL Server も含めた、Data処理、Big Data Cluster、on Kubernetes、Data Science、Machine Learning などもカバー。初学者から、新機能を試したいエキスパートまでおススメです。',
    products: productsByIds('33'),
    url: 'https://microsoft.github.io/sqlworkshops/',
  },
  {
    id: '20',
    title: 'Azure Synapse Analytics end-to-end solution',
    type: 'handson',
    category: 'analytics',
    targets: [],
    description: '実際に大きなデータ量を扱うハンズオンです。',
    products: productsByIds('1'),
    url:
      'https://github.com/microsoft/MCW-Azure-Synapse-Analytics-end-to-end-solution',
  },
  {
    id: '21',
    title: 'Azure Synapse Analytics Lab',
    type: 'handson',
    category: 'analytics',
    targets: [],
    description: 'ビジネスシナリオに基づいたコンテンツ',
    products: productsByIds('1'),
    url: 'https://github.com/solliancenet/azure-synapse-analytics-day',
  },
  {
    id: '22',
    title: 'Azure Synapse Analytics Workshop (level 400, 4 days)',
    type: 'handson',
    category: 'analytics',
    targets: [],
    description: 'Synapse Analytics 中級者向けのワークショップの資料です。',
    products: productsByIds('1'),
    url: 'https://github.com/solliancenet/azure-synapse-analytics-workshop-400',
  },
  {
    id: '23',
    title: 'End-To-End の操作',
    type: 'handson',
    category: 'data',
    targets: [],
    description:
      'インスタンスを作成する事から始めて、Power BI からの接続。複数の KQL 実行まで。',
    products: productsByIds('34'),
    url: 'https://aka.ms/adx.lab',
  },
  {
    id: '24',
    title: 'Azure Search - Cognitive Search',
    type: 'handson',
    category: 'ai',
    targets: [],
    description:
      'Blob上のファイルのクローリング (インデッキシング) 時に、ファイル内部を解析し、結果を Search Indexの列として追加する、深層学習の応用例になります。',
    products: productsByIds('35'),
    url: 'https://azure.github.io/LearnAI-KnowledgeMiningBootcamp/',
  },
  {
    id: '25',
    title: 'Power BI 基礎ハンズオン',
    type: 'handson',
    category: 'bi',
    targets: [],
    description: 'Power BI Desktop を使っての基本的な作業手順を体験します。',
    products: productsByIds('36'),
    url:
      'https://github.com/dahatake/Azure-Workshops/blob/master/PowerBI/README.md',
  },
  {
    id: '26',
    title: 'IoT Kit ハンズオンコンテンツ',
    type: 'handson',
    category: 'iot',
    targets: [],
    description: '実機前提の Azure IoT 利用イメージを得られます',
    products: productsByIds('37', '7', '29', '23', '8', '4'),
    url: 'https://github.com/ms-iotkithol-jp/IoTKitHoLV4',
  },
  {
    id: '27',
    title: 'Business continuity and disaster recovery',
    type: 'handson',
    category: 'infra',
    targets: ['Infrastructure Architects', 'Cloud Solution Architects'],
    description:
      'このワークショップでは、Azureの事業継続と災害復旧（BCDR）技術を使用したソリューション設計について学びます （英語）',
    products: productsByIds('38', '39', '40', '41', '5'),
    url:
      'https://github.com/microsoft/MCW-Business-continuity-and-disaster-recovery',
  },
  {
    id: '28',
    title: 'Big Data 可視化ワークショップ',
    type: 'handson',
    category: 'ai',
    targets: ['AI Engineers', 'Data scientist'],
    description:
      'フライトデータと気象条件に基づいて、今後のフライトに遅延が発生するかどうかを予測するための機械学習モデルを構築します。（英語）',
    products: productsByIds('42', '43', '44', '45', '36', '5'),
    url:
      'https://github.com/AzureWorkshops/Big-Data-Visualization-New/blob/master/docs/00_Overview.md',
  },
  {
    id: '29',
    title: 'Azure Cognitive Services の一つ、Anomaly Detector API のデモ',
    type: 'handson',
    category: 'ai',
    targets: [],
    owner: 'Tomoyuki Sumi',
    description:
      'Azure Cognitive Services の一つ、Anomaly Detector API のデモ（Node.js サンプル）です。 デモを実行するには、あらかじめ Anomaly Detector API のエンドポイントとアクセスキーを入手する必要があります。このデモでは、入力データや設定パラメータがどのような出力の違いとなるのかをグラフィカルに確認することができます。',
    products: productsByIds('46'),
    languages: languagesByIds('2'),
    url: 'https://github.com/TOSUMI-MS/AnomalyDetectorAPIViewer',
  },
  {
    id: '30',
    title: 'Azure Arc 概要ハンズオン',
    type: 'handson',
    category: 'infra',
    targets: [],
    owner: 'Shiho Asa',
    description:
      'Azure Arc のコア機能、デプロイシナリオ、ユースケースなどについてデモを通じて理解することができます。',
    products: productsByIds('48'),
    url: 'https://github.com/asashiho/azure_arc',
  },
  {
    id: '31',
    title: 'Device Emulator On Functions',
    type: 'handson',
    category: 'iot',
    targets: [],
    owner: 'Hiroshi Ota',
    description:
      'Azure Functions で気軽に Azure IoT Hub にセンサー情報を送信するデバイスエミュレータサンプルです。',
    products: productsByIds('23', '22'),
    url: 'https://github.com/ms-iotkithol-jp/DeviceEmulatorOnFunctions',
  },
  {
    id: '32',
    title: 'Azure Machine Learning を活用した AutoML ハンズオン',
    type: 'handson',
    category: 'ai',
    targets: [],
    description:
      '最近話題の AutoML について一から体験いただくコンテンツです。AutoML による大規模モデリングに加えて、モデル解釈やデータセット管理関連も学べます。',
    products: [],
    url: 'https://github.com/konabuta/Automated-ML-Workshop',
  },
  {
    id: '33',
    title:
      'FgCF (Financial-grade Cloud Fundamentals) リファレンスアーキテクチャ/テクノロジガイドライン',
    category: 'finance',
    targets: ['Azure をご利用いただくアーキテクト、デベロッパーの皆様'],
    description:
      'FgCF は、企業がデジタル変革へ取り組んでいくために、Tech Intensity（テクノロジー強度）を強化していくための各種ハイレベルなリファレンスアーキテクチャやテクノロジガイドライン類を、日本のお客様に使いやすい・わかりやすい形で提供することを目的として開発されています。',
    products: productsByIds('49', '50', '51', '5', '26', '52', '53'),
    languages: languagesByIds('3', '4', '1', '5'),
    url: 'https://github.com/nakamacchi/fgcf',
  },
]
