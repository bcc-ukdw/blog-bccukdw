---
title: "发行已胜。分销未启。"
date: "2026-07-02"
author: "Shenhan01-sys"
authorName: "Hans Gunawan"
authorAvatar: "https://github.com/Shenhan01-sys.png"
category: "区块链"
tags: ["rwa", "代币化", "分销", "链上金融", "mantle", "defi"]
excerpt: "真实世界资产代币化已成数十亿美元市场，但头条数字混淆了发行与分销。全球最大的单一 RWA 不可移动，多数代币闲置不动，而分销层是你无法买下的唯一护城河。一篇为 Mantle 研究挑战赛撰写的研究笔记。"
cover: "https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig1_distributed_vs_represented.png"
readTime: 13
---

> 一篇关于代币化资产发行与全球分销之间鸿沟的研究笔记——以及为何分销层是你无法买下的唯一护城河。为 Mantle 研究挑战赛提交。2026 年 7 月。

## 摘要

真实世界代币化资产（RWA）已成长为数十亿美元市场，但头条数字将*发行*（资产被放上账本）与*分销*（资产真正流动、交易、组合）混为一谈。借助 RWA.xyz 新的 Distributed-vs-Represented 框架、两篇同行评审研究（arXiv:2508.11651；2606.01131）及 Mantle 链上数据（2026 年 7 月 2 日），本笔记论证：发行已成功而分销几乎尚未开始——最大的单一 RWA（约 $19.4B）不可移动，多数代币化资产周转低下，Mantle 上现有稳定币持有者与实际 RWA 持有者之间存在约 10 倍鸿沟。Mantle 的四支柱论点——结算、合规、流动性、分销——将分销定位为唯一无法买下的支柱，因其是网络效应。本笔记结论：谁先积累起分销层，谁就攫取 ~$127T 链上金融重塑中的开局位置，并勾勒出所需的具体下一步行动。

## 核心发现

1. **地球上最大的代币化真实世界资产并未被分销。** Figure 的 HELOC 代币（约 $19.4B）位列 RWA.xyz 第一——但它是"Represented"：锁在其发行平台上，不可点对点转让，不可与 DeFi 组合。头条"$XX 十亿 RWA"掩盖了大部分价值无法流动的事实。([RWA.xyz, 2026 年 7 月 2 日](https://app.rwa.xyz)；[RWA.xyz 框架博客](https://rwa.xyz/blog/a-new-framework-for-tokenized-assets-distributed-and-represented))

2. **发行成功；分销没有——经验证据。** 两篇同行评审研究发现多数 RWA 代币交易量低、持有期长、参与度薄，*尽管*有 24/7 全球市场潜力。代币化在数字化已具流动性的资产（国库券、MMF）上远胜于为非流动性资产（房地产、艺术品）解锁流动性。([arXiv:2508.11651, 2025 年 8 月](https://arxiv.org/html/2508.11651v1)；[arXiv:2606.01131, 2026 年 5 月](https://arxiv.org/abs/2606.01131)；>$25B 上链 per Investax)

3. **在 Mantle 上，需求侧鸿沟约 10 倍。** $229.9M 分销 RWA 价值分布于 3,276 名 RWA 持有者——而同一链上约 31,000 名稳定币持有者。2026 Q1 RWA 价值增长 27% 至 $247.5M（Messari），但 30 日 RWA 转账量下降 55% 至 $6.5M。发行上升；分销变薄。([RWA.xyz Mantle, 2026 年 7 月 2 日](https://app.rwa.xyz/networks/mantle)；[PR Newswire/Messari, 2026 Q1](https://www.prnewswire.com/news-releases/mantle-posts-27-rwa-growth-in-q1-2026--reaching-247-5m-according-to-messari-302795234.html))

4. **广度 ≠ 深度——xStocks 悖论。** xStocks（Backed × Bybit）是全球分销领导者：按独立持有者计前 11 大代币化股票中占 8 席，前 25 中占 68%（2026 年 2 月中）。但 Mantle 上仅 $3.9M——Mantle RWA 的 1.66%。处处上架 ≠ 处处流动性。([RWA.xyz Mantle](https://app.rwa.xyz/networks/mantle)；持有者数据来自二手报道)

5. **无法买下的护城河。** Mantle 将 ~$127T 链上金融鸿沟框定为四支柱——结算、合规、流动性、**分销**。三个可买可建；分销是网络效应（用户 + 流动性 + 场所），无法购买。谁积累起该网络效应，谁就赢得分销层——并合理地赢得链上金融的下一阶段。([ETHNews, 2026 年 5 月 28 日](https://ethnews.com/home/mantle-identifies-a-127-trillion-gap-in-onchain-finance)——报道 Mantle 的框架)

![图 1 — $19.4B 幽灵：#1 RWA 并未被分销](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig1_distributed_vs_represented.png)
*图 1 — $19.4B 幽灵：#1 RWA 并未被分销（Distributed vs Represented 框架）。*
## 1. 论点：发行 ≠ 采用

每个 RWA 牛市周期，同样的故事："$XX 十亿代币化"的头条，一波基金发行潮，然后归于平坦。2025–26 周期是首个瓶颈不再是发行的周期。BlackRock、Franklin Templeton、Ondo、Securitize、Figure、Circle、Backed 与 DTCC 已证明资产*可以*被放上账本。代币化美国国库券在 2026 年 4 月突破 $14B——较 2023 年初增长 37 倍。([Cryptonews, 2026 年 4 月](https://cryptonews.net/news/finance/32756007))

更难的问题是任何人都无法用钱解决的：**将这些资产从发行推进到全球、流动、可组合的市场，使其真正像金融工具一样运作——定价、可交易、可作抵押、可赎回，并跨越边界与场所触达投资者。** 这就是分销。而分销不同于发行，是网络效应。

本笔记论证三点。第一，市场最爱的 RWA 指标——代币化总价值——系统性高估进展，因其混淆了*发行*与*分销*。第二，证据已显示发行获胜而分销停滞。第三，分销层因此是链上金融中无法买下的护城河——而 Mantle 作为拥有现有需求（用户、稳定币、收益场所）的"流动性链"的定位，正是对该护城河的一个可信、虽未完成的押注。

## 2. 摩擦地图：为何分销是难点

若发行是资金雄厚的机构可用律师与代币化平台解决的问题，分销则是单一机构无法独力解决的协调问题。四种摩擦叠加：

**2.1 可移动性与可转让性。** 许多"代币化资产"实际上无法移动。它们躺在发行方账本上，白名单限机构参与者，无法点对点转让。RWA.xyz 正是在此轴上划分市场——**Distributed Assets**（可移至外部钱包、可转让、可组合）对比 **Represented Assets**（仅作记账、不可移动）。区别并非装饰性：可移动性解锁与 DeFi 的组合性，而这把代币从数据库一行变为金融原语。

**2.2 每个场所的流动性深度。** 资产可*上架*于六条链却在所有链上都不流动。分销不是广度（多少地方上架代币）——而是深度（你实际能在哪无滑点交易大单，谁在做市）。这是"可用"与"可得"之间的鸿沟。

**2.3 监管与跨境触达。** 代币化资产继承底层证券的司法拼图。白名单、资格、转让限制与 KYC/AML 轨道意味着全球发行的代币往往只触达全球投资者的一部分。SEC 2026 年 1 月关于代币化证券的声明强调，许多链上表示*处于*主证券持有人文件*之外*——法律中介而非仅技术管道，限制了分销。([SEC, 2026 年 1 月 28 日](https://sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities))

**2.4 需求侧渠道与赎回。** 发行解决"能否存在"。分销解决"谁持有、为何持有、能否退出？"没有面向零售的应用、收益场所、做市商与可信赎回路径，代币化资产变成 inert 持仓——正是下文学术文献记录的模式。

统一点：**发行是供给侧里程碑；分销是需求侧系统。** 你能在一个季度内推出基金。你无法在一个季度内买下流动、跨境、可组合的市场。
## 3. 证据：哪些在奏效，哪些没有

### 3.1 $19.4B 幽灵资产——以及为何头条指标在撒谎

截至 2026 年 7 月 2 日，RWA.xyz 上最大的单一代币化真实世界资产是 Figure 的 HELOC 代币，约 **$19.4B**——大于 BlackRock 的 BUIDL，大于任何代币化国库券基金。它被归类为 **Represented**：无法移至 Figure 平台之外的钱包，也无法点对点转让。以分销术语而言，它是幽灵——一个不流通的大数字。

这正是 RWA.xyz 新的 Distributed-vs-Represented 框架重要的原因。它围绕唯一预测真实效用的指标重新框定市场：*代币能否移动并组合？* 在默认"Distributed"视图下，头条市场规模缩小——并非因为市场收缩，而是因为不可移动的机构记账体量终于被排除在"真实"分销数字之外。框架自身的观察：许多 Represented Assets 预期会随监管明晰而*演化为* Distributed Assets——Figure 自身正致力于使其代币兼容 DeFi。([RWA.xyz 框架](https://rwa.xyz/blog/a-new-framework-for-tokenized-assets-distributed-and-represented))

**含义：** 任何引用"RWA 总价值"而不区分 Distributed 与 Represented 的分析，测量的是发行而非分销。真实的分销市场远小于头条——也远比头条重要。

### 3.2 "发行已胜。分销未启。"——学术证据

经验证据如今已被记录，而非断言。*"Tokenize Everything, But Can You Sell It?"*（arXiv:2508.11651，2025 年 8 月）发现**多数 RWA 代币交易量低、持有期长、投资者参与有限**，尽管有 24/7 市场潜力——在代币化房地产、私人信贷乃至国库券基金中转账活动低、活跃地址有限、二级交易极少。后续研究 *"Tokenized but Illiquid?"*（arXiv:2606.01131，2026 年 5 月）确认**未偿资产价值本身不能可靠预测观测到的流动性**，且黄金支持代币（持有者基础广、活动持续）在实际链上使用上优于许多国库券与私人信贷产品。Investax 直白总结同一发现：>$25B 上链，多数仍在二级市场 inactive。

模式一致且令人不安：**代币化在数字化已具流动性的资产（国库券、MMF）上成功，在为非流动性资产（房地产、艺术品）解锁流动性上基本失败。** 换言之，发行持续获胜，而更难的奖赏——分销——几乎尚未开始。

### 3.3 Mantle 的分销悖论：3,276 对 31,000

在 Mantle 自身（RWA.xyz，2026 年 7 月 2 日），需求侧鸿沟可见且巨大：

| 指标（Mantle，2026 年 7 月 2 日） | 数值 | 30 日趋势 |
|---|---|---|
| 分销 RWA 价值 | $229.9M | ▼ 8.47% |
| RWA 持有者 | 3,276 | ▲ 2.15% |
| RWA 30 日转账量 | $6.5M | ▼ 55.30% |
| RWA 资产数 | 163 | — |
| 稳定币持有者（同链） | ~31,000 | ▲ 0.02% |

榜单被发行伙伴主导——Securitize $106.7M（45%）、Chainlink CCIP $90.6M（38%）、Ondo $28.7M（12%）——而最*分销原生*的产品 xStocks（159 种代币化股票）仅 $3.9M（1.66%）。([RWA.xyz Mantle](https://app.rwa.xyz/networks/mantle))

![图 2 — Mantle RWA 榜单：发行伙伴主导，分销原生薄弱](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig2_mantle_league.png)
*图 2 — Mantle RWA 榜单：发行伙伴主导，分销原生薄弱。*

![图 3 — Mantle 的分销悖论：约 10 倍未渗透的需求基础](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig3_holder_gap.png)
*图 3 — Mantle 的分销悖论：约 10 倍未渗透的需求基础（稳定币与 RWA 持有者对比）。*

对照 Messari 的 2026 Q1 报告——Mantle RWA 价值 **+27% 至 $247.5M**，拓宽至固定收益、股票、ETF 与机构借贷收益——画面悖论但可读：**发行在复利增长，而 30 日分销活动在收缩。** 更多价值被放上链；更少的在流动。而 Mantle 现有约 31,000 名稳定币持有者代表约 **10 倍未渗透的需求基础**，RWA 产品尚未触达。这不是供给侧失败——按定义就是分销问题。

### 3.4 xStocks 悖论：全球广度，$3.9M 深度

xStocks（Backed × Bybit，链上分销含 Mantle）可以说是代币化股票中最强的分销故事：截至 2026 年 2 月中，按独立持有者计它占据**前 11 大代币化股票中的 8 席及前 25 的 68%**——真实、反复的使用，已过实验阶段。但在 Mantle 上它仅 **$3.9M**，Mantle RWA 的 1.66%，且榜单上其 Mantle 30 日价值下降 11%。

教训精确且可推广：**分销广度（多持有者、多链）不等于分销深度（每场所流动性）。** 一项资产可按触达成为全球领导者，却仍在不具备做市商、收益场所与集中流动性激励的任何单一链上不流动。这正是 Mantle 分销栈明确试图填补的鸿沟——Fluxion LP 场所与 xPoints + 1M Fluxion points 激励计划正是为在 Mantle 上将广度转化为深度而存在。

![图 4 — xStocks 悖论：全球广度（前 25 的 68%）对比 Mantle 深度（$3.9M，1.66%）](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig4_xstocks_paradox.png)
*图 4 — xStocks 悖论：全球广度（前 25 的 68%）对比 Mantle 深度（$3.9M，1.66%）。*
## 4. Mantle 的分销优势——你无法买下的护城河

Mantle 将链上金融机会框定为约 $127T 鸿沟，横跨四支柱：**结算、合规、流动性、分销**。其中三个可用资本与工程解决。结算随 ZK 有效性证明与更快终局性改善。合规关乎轨道、白名单与伙伴关系。流动性可被播种——激励、做市计划、金库部署。**分销不同：它是网络效应**，是随时间积累用户、场所与习惯的产物。你无法开支票买下"一个已用你的链持有和转移价值的全球投资者基础"。

这正是为何 Mantle 现有的需求侧足迹是战略上有趣的资产，而非其发行伙伴关系：

- **受俘的需求基础。** 约 31,000 名稳定币持有者与深厚的原生流动性栈（USDT0、mETH/cmETH 再质押、FBTC）意味着 Mantle 已托管别处 RWA 产品须从零构建的需求侧。稳定币持有者与 RWA 持有者间的 10 倍鸿沟，以护城河术语，是*增长空间*而非赤字。
- **银行到分销的连续性。** UR——Mantle 的智能银行应用（花销、提现、入金于一处）——是面向真实用户的分销界面，而非仅托管轨道。"区块链服务银行"论点在机制上是分销论点：银行应用是需求所在。
- **使资产可用的收益与场所层。** Merchant Moe、AGNI、Treehouse 与 Fluxion 将上架代币变为可交易、生息、可 LP 的原语——将 xStocks 式广度转化为深度。xPoints + Fluxion points 计划是显式的流动性深度激励，而非上架激励。
- **发行伙伴作为供给插头。** Bybit × Backed（xStocks、美股）、Securitize、Ondo、Agora、Chainlink CCIP——Mantle 的 RWA 榜单显示供给已插入。供给是容易的部分。护城河在于需求侧系统是否复利增长。

最清晰的论点表述：**结算、合规与流动性是成本；分销是权益。** Mantle 的押注是，拥有分销层——用户、场所与使代币*表现得*像货币的组合性——比拥有任何单一发行伙伴关系更有价值。

## 5. 风险与开放问题

可信的分销论点不能是新闻稿。反证真实存在：

- **30 日收缩可能是信号，非噪音。** Mantle 的分销 RWA 价值 30 日内下降 8.47%、转账量下降 55%（至 2026 年 7 月 2 日）。若该趋势持续过 Q2，"增长空间"框架减弱而"分销停滞"框架增强。一个季度不是定论——但这是该盯的指标。
- **xStocks 在 Mantle 的深度当前薄弱。** 全球分销领导者仅 $3.9M（1.66%）是警告：上架 ≠ 流动性。激励计划须可证明地将广度转为深度，否则悖论固化。
- **监管天花板。** SEC 2026 年 1 月声明使许多链上表示在法律上处于主证券持有人文件下游。再多分销基础设施也无法凌驾于称代币不传达证券权利的司法管辖。分销天花板部分在链外设定。
- **网络效应双向切割。** 若更高流动性的场所（竞争 L2、CEX-DeFi 混合体，或 DTCC 自身 2026 年 7 月与 BlackRock 和高盛的代币化试点）更快积累分销，Mantle 的增长空间蒸发。网络效应奖励领导者，而非先到者。
- **Represented ≠ 失败。** 机构记账是合法且庞大的用例。Distributed-vs-Represented 区分应锐化分析，而非变成所有 Represented 资产都是"幽灵"的价值判断。许多将、且应保持 Represented。

## 6. 结论——下一步

发行已胜。基金存在，轨道存在，头条存在。分销尚未开始——不在深度上，不在跨境上，不作为可组合、可赎回、流动的金融原语。学术记录如此说（arXiv:2508.11651；2606.01131）。市场结构如此说（RWA.xyz 的 Distributed-vs-Represented 划分，其中按价值计 #1 资产是 $19.4B 不可移动幽灵）。而 Mantle 自身数据也如此说，悄然地：发行一季涨 27%，30 日分销双位数下跌，链上已有者与实际持有其代币化资产者之间 10 倍鸿沟。

下一步不是又一个发行伙伴关系。是分销的、不耀眼的、复利式工作：将广度转为深度（Mantle 上 xStocks 流动性），将持有者转为用户（通过 UR 与收益场所将约 31,000 稳定币持有者路由至 RWA），并将代币转为原语（组合性、抵押、赎回）以使"代币化"终意味"可交易"。四支柱中三个可买。分销是须*建造*的那个——且一旦建成，无法被买走。

那是护城河。那是论点。谁先建成分销层，谁就不只是赢得 Mantle 的研究挑战——而是攫取 $127T 链上金融重塑中的开局位置。

---

## 参考文献

1. RWA.xyz — Mantle network 页面（数据截至 2026 年 7 月 2 日）：分销资产价值、持有者、转账量、榜单。https://app.rwa.xyz/networks/mantle
2. RWA.xyz — "A New Framework for Tokenized Assets: Distributed & Represented"（2025 年 11 月）。https://rwa.xyz/blog/a-new-framework-for-tokenized-assets-distributed-and-represented
3. "Tokenize Everything, But Can You Sell It? RWA Liquidity Challenges and the Road Ahead," arXiv:2508.11651v1（2025 年 8 月）。https://arxiv.org/html/2508.11651v1
4. "Tokenized but Illiquid? Evidence from Real-World Asset Markets," arXiv:2606.01131（2026 年 5 月）。https://arxiv.org/abs/2606.01131
5. Investax — "What Is Real-World Asset (RWA) Tokenization? A Full Guide for 2026"（2026 年 5 月；>$25B 上链；二级市场活动低）。https://investax.io/blog/what-is-real-world-asset-rwa-tokenization
6. PR Newswire / Messari — "Mantle Posts 27% RWA Growth in Q1 2026, Reaching $247.5M"（2026 年 6 月）。https://www.prnewswire.com/news-releases/mantle-posts-27-rwa-growth-in-q1-2026--reaching-247-5m-according-to-messari-302795234.html
7. PR Newswire — "Mantle Collaborates with Bybit and Backed to Bring U.S. Equities Onchain"（2025 年 11 月）。https://www.prnewswire.com/news-releases/mantle-collaborates-with-bybit-and-backed-to-bring-us-equities-onchain-pioneering-next-trillion-dollar-wave-of-tokenized-assets-302608743.html
8. ETHNews — "Mantle Identifies a $127 Trillion Gap in Onchain Finance"（2026 年 5 月 28 日；四支柱框架：结算、合规、流动性、分销）。https://ethnews.com/home/mantle-identifies-a-127-trillion-gap-in-onchain-finance
9. SEC — "Statement on Tokenized Securities"（2026 年 1 月 28 日）。https://sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
10. Cryptonews — "Tokenized U.S. Treasuries hit $14B"（2026 年 4 月；较 2023 年初 37 倍）。https://cryptonews.net/news/finance/32756007
11. Mantle — "Mantle Launches UR (Early Contributors' Access Live)"（2025 年 6 月 18 日）；group.mantle.xyz 博客。https://group.mantle.xyz/blog/announcements/mantle-launches-crypto-first-neobank-ur — 分销栈：USDT0、mETH/cmETH、FBTC、Merchant Moe、AGNI、Treehouse、Fluxion；xPoints + 1M Fluxion points。

## 免责声明

非财务建议。由 Hans Gunawan（BCC UKDW）为 Mantle 研究挑战赛准备的个人研究观点。RWA.xyz 数据为时点数据（2026 年 7 月 2 日）且可能变动。约 $127T 数字与四支柱框架由 ETHNews 报道为 Mantle 的定位；确切的 Mantle 一手来源未独立定位，应在正式发布前对照 Mantle 自有博客/信函核实。提交前请对照实时来源核实所有链上数据。
