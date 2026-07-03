---
title: "926个钱包，一扇门：Mantle代币化股票市场的链上解剖"
date: "2026-07-03"
author: "yeheskieltame"
authorName: "Yeheskiel Yunus Tame"
authorAvatar: "https://github.com/yeheskieltame.png"
category: "Blockchain"
tags: ["rwa", "mantle", "代币化股票", "链上数据", "分发", "dune"]
excerpt: "用精确整数运算从原始日志重建Mantle上全部368只代币化股票的每一位持有者：88%的持有者通过一扇仅开放四周的Bybit通道进入，其中98.3%至今仍在持有，而真正实现分发的代币只有一只。完整链上取证，每一项论断均附可复现的公开查询。"
cover: "https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/cover.png"
readTime: 15
---

*我用精确整数运算，从原始日志重建了Mantle上全部368只代币化股票的每一位持有者。其中88%的持有者，是通过一扇只开放了四周的通道进入的。这篇文章讲的是：谁打开了那扇门，为什么买家从未离开，以及下一波需求正站在哪里。*

**本文的每一项论断，你都可以在阅读之前自行验证：**

- **实时看板，13条公开查询：** https://dune.com/yeheskiel/mantle-rwa-distribution-tracker
- **开源追踪代理与完整研究结论：** https://github.com/yeheskieltame/mantle-rwa-distribution-tracker

这项研究运行在一个自动化追踪器之上：一个开源代理，每天根据预先设定的阈值复查实时数据。在它的第一次多代币运行中，它自己捕捉到了这个故事的结局：标记出NVDAx是Mantle上第一只、也是唯一一只越过两条分发阈值的xStock。下文的每一点都链接到可以证明它的查询或文档。

*数据截至2026年7月2日。非投资建议。*

![研究速览：统计卡片网格，展示368只发行对1只分发、88%的四周窗口、98.3%留存率、926位持有者、421个新钱包、4月10日的通道开启日期，以及NULL的计量缺口。](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-glance.png)
*研究速览。每一个数字都来自链上测量，并在下文各节链接到公开查询。*

---

## 没人画过的那张图

有一张图，RWA的头条新闻从来不会展示。把Backed通过xStocks在Mantle上发行的全部368只代币化美股拿来，从原始Transfer日志重建每个钱包的余额，然后按周统计自上线以来的独立持有者数量。

这条线做了三件事。先是爬行：头三个半月只有三到六位持有者。然后爆发：2026年4月13日到5月10日之间新增816个持有者钱包，其中单周就有353个。接着归于平坦：此后每周只新增一到十一位持有者，如今总数为926。

一个四周的窗口，创造了Mantle有史以来88%的代币化股票持有者（[趋势查询 7865851](https://dune.com/queries/7865851)）。

![图1：xStock总持有者折线图，突出显示Bybit窗口，附每周首次持有者柱状图和统计摘要卡片。](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-trend.png)
*图1. 持有者增长，2025年12月至2026年7月。标记为4月10日Bybit公告；色带为产生了全部持有者88%的四周窗口。来源：Dune查询 7865851。*

这样的暴涨不是自然采用。这是一扇门被打开了。于是我去找那扇门。

## 市场动向：Mantle赢下了供给侧

首先，把头条说对的部分说清楚。两个季度之内，Mantle成为了严肃的代币化股票发行场所：

- RWA TVL在2026年一季度环比增长27.4%，达到2.475亿美元，由Maple的syrupUSDT、MI4指数基金和xStocks驱动（[Messari via Chainwire，2026年6月9日](https://chainwire.org/2026/06/09/mantle-posts-27-rwa-growth-in-q1-2026-reaching-247-5m-according-to-messari/)）。
- 代币化SpaceX（SPCXx）在SpaceX完成史上最大IPO的同一天登陆Mantle，可在Fluxion和Merchant Moe交易，1:1锚定，由发行方直接定价（[Chainwire，2026年6月12日](https://chainwire.org/2026/06/12/mantle-and-xstocks-bring-tokenized-spacex-spcxx-to-fluxion-merchant-moe-as-historys-largest-ipo-goes-live/)）。
- 富兰克林邓普顿的USPX ETF通过xStocks上链，是任何以太坊L2上第一批来自顶级传统资管机构的代币化ETF之一（[PR Newswire](https://www.prnewswire.com/news-releases/mantle-becomes-one-of-the-first-ethereum-l2s-to-bring-franklin-templetons-uspx-etf-on-chain-with-xstocks-302808048.html)）。

发行方挑选场所，就像CFO挑选银行。Mantle的机构信誉（全球最大的DAO金库、深厚的交易所关系）赢得了这场竞争。供给随之而来。

但供给是发行方的决定。分发，才是市场给出的裁决。所以我不引用TVL，而是去测量这份裁决。

## 方法：数持有者，不数头条

我从原始`mantle.logs`的Transfer事件出发，用精确的256位整数运算（`decimal(38,0)`：没有浮点舍入，没有粉尘阈值，零余额就是精确的零），重建了曾接触过368只xStocks中任何一只的每个钱包的余额。数据覆盖从Mantle创世（2023年7月2日）到快照日。我用Routescan API做了交叉验证：集中度数字精确到小数位一致，实时持有者数量偏差在3%以内（实时数据本来就新几个小时）。

一切都是公开且可复现的：

- 带13条参数化查询的实时看板：https://dune.com/yeheskiel/mantle-rwa-distribution-tracker
- 每天复查数据、在阈值被突破时发出警报的开源追踪代理：https://github.com/yeheskieltame/mantle-rwa-distribution-tracker

由此得出六项发现，它们合在一起解释了那张图。

## 发现一：发行368只，分发1只

先于数据设定可证伪的阈值：一只代币要被认定为已分发，须持有者超过500，且最大钱包持仓低于供应量的75%。

- 368只xStocks中恰好只有一只过线：NVDAx，612位持有者，最大钱包74.55%（[排行榜 7863671](https://dune.com/queries/7863671)）。
- 只有15只（4.1%）拥有哪怕10位持有者（[汇总 7863679](https://dune.com/queries/7863679)）。
- 中位数的xStock只有一到三位持有者：发行了，没被采用。

![图2：漏斗卡片，368只发行，15只至少有十位持有者，1只真正实现分发。](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-funnel.png)
*图2. 全部368只xStocks的采用漏斗。来源：Dune查询 7863671 与 7863679。*

完整排行让断崖一目了然。NVDAx、TSLAx和CRCLx之后，持有者数量坍缩到两位数甚至个位数：

![图3：按精确持有者数量排名的前十xStock横向条形图，附各自最大钱包占比与判定。](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-league.png)
*图3. 368只xStocks中按精确持有者排名的前十。其余358只各自持有者不足15位。来源：Dune查询 7863671。*

旗舰产品把这一点衬托得更锋利。代币化SpaceX只有26位持有者。发行方钱包仍握着99.2%的供应量；交易三周后的外部流通占比只有0.8%（[集中度 7863618](https://dune.com/queries/7863618)）。它的全部供应史只有一次150,000枚的铸造和一次120,000枚的销毁（[铸造与销毁 7863661](https://dune.com/queries/7863661)）。SPCXx在21天里录得5,686笔转账，但单日不同收款钱包从未超过约19个（[活动 7863657](https://dune.com/queries/7863657)）：那些交易数是套利机器人的空转，不是人。任何建立在活动量或TVL之上的采用指标，都会高估现实。

## 发现二：那扇门有名字

四月里是谁拧开了水龙头？链上证据从三条独立路径给出了答案。

**指纹。** 这批新增钱包的入账转账，绝大多数是由第三方发起的直接`token.transfer()`调用，而非收款钱包自己发起。这是中心化交易所提币的签名特征：不是DEX兑换，也不是空投，因为金额差异很大（[机制 7866292](https://dune.com/queries/7866292)）。

**钱包。** 一个热钱包，`0x5888...836c`，向816个新增钱包中的462个送达了他们的第一笔xStock，横跨七个代码，从4月13日到5月10日每天都在活动，然后停止。这个钱包在Mantle上有276万笔历史交易，并出现在Bybit针对Mantle网络的储备证明报告中。它是Bybit在Mantle上的热钱包（[分发方 7866312](https://dune.com/queries/7866312)；[Bybit储备证明](https://www.bybit.com/common-static/cht-static/por/Bybit_PoR_Audit_2026_Feb_26.pdf)）。

**日期。** 2026年4月10日，Mantle、Bybit与Backed共同宣布xStocks集成，Bybit开通Mantle网络上的xStocks充值与提现（[Bybit公告](https://announcements.bybit.com/en/article/bybit-now-supports-xstocks-deposits-and-withdrawals-on-mantle-bltd6af69aacd874633/)；[The Block](https://www.theblock.co/post/378030/bybit-backed-xstocks-tokenized-nvidia-mstr-mantle)）。链上浪潮从公告后的第一个星期一开始。

![图4：三张证据卡片（指纹、钱包、日期），下方是逐日条带，显示热钱包在窗口期每天活跃，随后停止。](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-gateway.png)
*图4. 归因概要。送达日条带是该热钱包4月1日至5月24日的活动：空白，然后窗口期每天点亮，然后再度空白。来源：Dune查询 7866292 与 7866312，Bybit储备证明。*

于是，Mantle的RWA持有者基础的全部谜团化为一句话：人们在Bybit买入代币化股票并提币到Mantle，持续了四周，然后那个时刻过去了。就连NVDAx的阈值突破，这个生态系统唯一的分发成功案例，也发生在这个窗口之内。

## 发现三：买家留下了，漏斗没有

留存率：Bybit窗口新增的816个钱包中，802个（98.3%）至今仍持有他们的xStocks（[留存 7866325](https://dune.com/queries/7866325)）。他们不是撸完奖励就跑的农民。他们是为产品而来的买入并持有的投资者。

接下来是把这一切变成策略的对照。六月，SPCXx的上线伴随着Merchant Moe的Project X活动，最高100,000枚MNT的流动性奖励（[Chainwire](https://chainwire.org/2026/06/12/mantle-and-xstocks-bring-tokenized-spacex-spcxx-to-fluxion-merchant-moe-as-historys-largest-ipo-goes-live/)）。它买到了池子深度和交易空转，却几乎没有带来新持有者；整个六月，全生态每周首次持有者停留在个位数到十几（[趋势 7865851](https://dune.com/queries/7865851)）。而不需要任何激励的CEX通道，带来了816位留存率98.3%的持有者。

Mantle生态正在为流动性掏钱，而唯一被验证有效的持有者获取渠道，却无人照管。

![图5：Bybit窗口群组98.3%留存率仪表，旁边的供应罐显示SPCXx的99.2%仍在发行方钱包。](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-retention.png)
*图5. 左：Bybit窗口群组八周后的留存。右：上线三周并叠加100,000 MNT流动性活动后的SPCXx供应集中度。来源：Dune查询 7866325、7863618、7863661、7863657。*

## 发现四：代币化股票确实在获取真实用户，只是还不够多

按完整链上历史对当前全部923个外部持有者钱包分类（覆盖自Mantle创世，合约通过`creation_traces`标记）：

| 钱包来源 | 钱包数 | 占比 |
|---|---|---|
| Mantle老用户（首次持有xStock前在Mantle上的中位时长459天） | 458 | 49.6% |
| 随第一笔xStock来到Mantle | 421 | 45.6% |
| 合约（DEX池或金库） | 30 | 3.3% |
| 被动接收者（从未发起过交易） | 14 | 1.5% |

两点启示。第一，代币化股票是货真价实的用户获取产品：将近一半的持有者，是专为这个RWA而出现的钱包。第二，七个月421个新钱包，就是全部的获取成果。给个规模参照：仅印度尼西亚就有约2600万散户股票投资者。

![图6：持有者来源环形图，45.6%随第一笔xStock来到Mantle，各组配有图例卡片。](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-origin.png)
*图6. 当前923个持有者钱包的来源。来源：Dune查询 7865842。*

## 发现五：这个生态甚至还无法测量自己的RWA流动性

搭建看板时，我撞上了三个值得点名的计量缺口，因为正是它们掩盖了本文所记录的问题：

- SPCXx只在一个被索引的场所交易（Merchant Moe：418笔交易，峰值每周208笔，衰减到约42笔）。
- Fluxion，Mantle官方公告中的RWA主力DEX，在Dune的`dex.trades`数据集中完全没有被索引。
- xStocks不在DEX价格预言机里，`amount_usd`一律返回NULL：用标准工具根本无法度量Mantle上代币化股票的美元流动性（[DEX 7863658](https://dune.com/queries/7863658)）。

建设者无法优化他们看不见的东西。在Fluxion被索引、xStocks有报价之前，连Mantle自己都无法用美元报出旗舰RWA产品的流动性。

## 发现六：这套框架会自动捕捉成功

这项研究附带一个开源追踪代理（Python，仅用标准库，学生不装任何东西就能跑）。它每天通过分页的Routescan调用拉取精确持有者数据，对照可证伪阈值检查，交叉验证Dune与实时链上数据，写出摘要，并在阈值被突破时发送webhook警报。它免费跑在GitHub Actions上，警报链路经过端到端测试。

在第一次多代币运行中（2026年7月2日11:40 UTC），它标记出：NVDAx最大钱包74.553%，低于75%阈值；实时持有者629，高于500。Mantle上第一只成为已分发的xStock，被一套在答案揭晓前就定好的标准自动侦测到（[代理摘要，由CI提交](https://github.com/yeheskieltame/mantle-rwa-distribution-tracker/blob/main/agent/reports/2026-07-02.md)）。

这就是"分发成为KPI"在实践中的样子：阈值预先登记，越线自动侦测，凭据留在链上。

## Mantle接下来应该做什么

每条建议都带着理由和证据。

![图7：四张行动卡片，每条建议配上支撑它的链上数字。](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-playbook.png)
*图7. 行动手册：四步棋，每一步都有本研究在链上量出的数字背书。*

**1. 让CEX通道常开，而不是只在发布日开。**
理由：Mantle上唯一规模化产出过持有者的漏斗是CEX提币上链，而它只在发布时刻运转过。按现有证据，通道每活跃一周约值200到350位高留存持有者。
证据：88%的持有者在4月13日至5月10日到来（[7865851](https://dune.com/queries/7865851)）；送达来自Bybit的Mantle热钱包（[7866312](https://dune.com/queries/7866312)；[Bybit储备证明](https://www.bybit.com/common-static/cht-static/por/Bybit_PoR_Audit_2026_Feb_26.pdf)）；窗口紧随4月10日公告开启（[Bybit](https://announcements.bybit.com/en/article/bybit-now-supports-xstocks-deposits-and-withdrawals-on-mantle-bltd6af69aacd874633/)）；此后增长为每周一到十一个钱包。

**2. 资助首位持有者获取，而不只是流动性。**
理由：生态已经跑过的两个实验指向同一个方向。通道用户不花激励且98.3%仍在持有；100,000 MNT的流动性活动买到的是空转，不是持有者。预算跟着被度量的东西走。
证据：留存802/816（[7866325](https://dune.com/queries/7866325)）；SPCXx的空转画像（[7863657](https://dune.com/queries/7863657)，[7863618](https://dune.com/queries/7863618)）；活动当月持有者趋势几乎纹丝不动（[7865851](https://dune.com/queries/7865851)）。

**3. 修好计量栈。**
理由：见发现五。旗舰场所对标准分析工具不可见，代币化股票流动性无法以美元报价。
证据：`dex.trades`的覆盖情况与NULL的`amount_usd`（[7863658](https://dune.com/queries/7863658)）。

**4. 追踪外部流通占比和持有者数，而不是TVL或供应量。**
理由：供应量是发行方的决定（一次铸造、一次销毁），供给侧KPI度量的是发行方，不是市场。分发指标可证伪、可低成本持续监控，而且已经实时捕捉到了唯一的真实成功。
证据：[7863661](https://dune.com/queries/7863661)、[7863645](https://dune.com/queries/7863645)，以及上文的代理摘要。

## 接下来会发生什么：可证伪的预测

- **分发成为被报告的KPI。** 在VM Crypta的单代币分析和本篇全生态分析之后，持有者数与外部流通占比将开始与TVL并列出现在生态报告中。我的看板已经在持续追踪这些阈值。
- **通道要么被有意经营，要么市场继续平坦。** 如果Mantle与Bybit运营周期性的通道活动，就会看到四月式的跃迁；如果不，就会看到每周个位数的增长延续。无论哪种，趋势查询都会如实呈现。
- **需要盯住的监管催化剂是OJK。** 印尼的加密监管已并入OJK，代币化外国证券处于资本市场规则与加密资产规则之间的灰色地带。OJK一个明确的立场，哪怕只是一个沙盒，都会是合规本地分发的最大解锁；在那之前，通路只能经过全球交易所，而这恰恰是Bybit轨道重要的原因。
- **东南亚决定谁赢下散户赛道。** 这是我亲身下注的预测，见下文。

## 下一波需求就站在门外

98.3%的留存率之所以是战略而非谈资，原因在此：通道模式有效，它带来的用户会留下，而这条通道尚未开发的最大市场，正是Bybit已经在运营的市场。

印尼有2670万资本市场投资者（[OJK，2026年5月](https://www.bareksa.com/berita/saham/2026-05-20/ojk-sebut-jumlah-investor-pasar-modal-capai-267-juta-54-berusia-di-bawah-30-tahun)），其中约54%在30岁以下，新入市者约80%不到30岁（[KSEI与IDX数据](https://databoks.katadata.co.id/pasar/statistik/69e049f4a9230/investor-muda-mendominasi-pasar-modal-indonesia-awal-2026)）。印尼还有2170万注册加密用户，如今由OJK直接监管（[OJK，2026年4月](https://www.viva.co.id/gaya-hidup/digilife/1907455-investor-kripto-indonesia-tembus-217-juta-orang)）。对数百万印尼年轻人来说，加密账户先于券商账户存在，而他们真正谈论的股票是英伟达、特斯拉，现在还有SpaceX。挡在他们与美股之间的，恰恰是代币化所消除的一切：美元兑换、境外券商KYC、吞掉20美元仓位的手续费，以及当地时间21:30到04:00的交易时段。

![图8：比例圆圈对比印尼2670万资本市场投资者、2170万加密用户与今天Mantle上926个xStock持有者钱包。](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-indonesia.png)
*图8. 需求池的规模：Mantle全部代币化股票持有者，在印尼投资者人口面前只是一个小点。来源：OJK、KSEI；持有者来自Dune查询 7865851。*

从"拥有Bybit账户的印尼学生"到"Mantle上的代币化股票持有者"，这条管道已经存在。我看着它在四周里搬来了816个人，背后没有一个字的印尼语营销。一个刻意为之的版本：本地化教育、校园项目、经由持牌交易所的印尼盾出入金，还没有任何在位者。谁先跑起来，谁就拿下这条赛道；而那些诚实的风险（代币化股票是价格敞口而非股东权利，OJK对代币化外国证券的立场尚未落定，小钱包带来广度而非深度）应该写进课程表，而不是藏进脚注。

Mantle建好了供给侧，并在四月的四个星期里证明：只要有人开门，需求侧就会到场。分发层需要分发者。而我正是在一个他们每周聚会的校园里写下这些。

---

## 复现全部内容

- **实时看板**（所有发现皆为交互面板，任意xStock均可用代币选择器切换）：https://dune.com/yeheskiel/mantle-rwa-distribution-tracker
- **代码仓库**（13条查询的原始SQL、追踪代理、CI工作流、含方法说明与局限的完整结论）：https://github.com/yeheskieltame/mantle-rwa-distribution-tracker
- **结论文档**（本文的长证据版）：[FINDINGS.md](https://github.com/yeheskieltame/mantle-rwa-distribution-tracker/blob/main/FINDINGS.md)

这一切都开放给生态采用：把查询fork到Dune索引的任何链上的任何代币家族，把代理的webhook指向生态的警报频道，或者把外部流通占比指标和阈值直接搬进官方报告。公开工具而不只是结论，正是为了这个。

逐条论断的证据：

| 本文论断 | 公开来源 |
|---|---|
| 368只xStocks发行；15只有10+持有者；1只已分发 | Dune [7863671](https://dune.com/queries/7863671)，[7863679](https://dune.com/queries/7863679) |
| 926位持有者；88%在4月13日至5月10日获取；此后个位数 | Dune [7865851](https://dune.com/queries/7865851) |
| 进入机制 = 第三方直接转账（CEX提币） | Dune [7866292](https://dune.com/queries/7866292) |
| Bybit热钱包送达816个群组钱包中的462个 | Dune [7866312](https://dune.com/queries/7866312)，[Bybit储备证明](https://www.bybit.com/common-static/cht-static/por/Bybit_PoR_Audit_2026_Feb_26.pdf) |
| 集成于2026年4月10日公告 | [Bybit](https://announcements.bybit.com/en/article/bybit-now-supports-xstocks-deposits-and-withdrawals-on-mantle-bltd6af69aacd874633/)，[The Block](https://www.theblock.co/post/378030/bybit-backed-xstocks-tokenized-nvidia-mstr-mantle) |
| 群组留存98.3%（802/816） | Dune [7866325](https://dune.com/queries/7866325) |
| 持有者来源构成（45.6%随首笔xStock到来，中位钱包年龄459天） | Dune [7865842](https://dune.com/queries/7865842) |
| SPCXx：26位持有者，发行方99.2%，流通0.8%，一次铸造一次销毁 | Dune [7863618](https://dune.com/queries/7863618)，[7863645](https://dune.com/queries/7863645)，[7863661](https://dune.com/queries/7863661) |
| SPCXx活动为空转（5,686笔转账，单日最多19个接收方） | Dune [7863657](https://dune.com/queries/7863657) |
| Fluxion未被索引；xStock美元交易量不可测 | Dune [7863658](https://dune.com/queries/7863658) |
| Project X，最高100,000 MNT流动性奖励 | [Chainwire，2026年6月12日](https://chainwire.org/2026/06/12/mantle-and-xstocks-bring-tokenized-spacex-spcxx-to-fluxion-merchant-moe-as-historys-largest-ipo-goes-live/) |
| NVDAx阈值突破被自动侦测 | [CI提交的代理摘要](https://github.com/yeheskieltame/mantle-rwa-distribution-tracker/blob/main/agent/reports/2026-07-02.md) |
| RWA TVL环比+27.4%至2.475亿美元 | [Messari via Chainwire](https://chainwire.org/2026/06/09/mantle-posts-27-rwa-growth-in-q1-2026-reaching-247-5m-according-to-messari/) |
| 印尼：2670万投资者，54%在30岁以下；2170万加密用户 | [OJK/Bareksa](https://www.bareksa.com/berita/saham/2026-05-20/ojk-sebut-jumlah-investor-pasar-modal-capai-267-juta-54-berusia-di-bawah-30-tahun)，[KSEI/Databoks](https://databoks.katadata.co.id/pasar/statistik/69e049f4a9230/investor-muda-mendominasi-pasar-modal-indonesia-awal-2026)，[OJK/Viva](https://www.viva.co.id/gaya-hidup/digilife/1907455-investor-kripto-indonesia-tembus-217-juta-orang) |

前人工作：VM Crypta的["The 99.54% Problem"](https://paragraph.com/@vmcrypta/the-9954percent-problem-spcxx-and-the-distribution-gap-in-mantles-rwa-thesis)（2026年6月16日）率先记录了SPCXx的集中度；本研究把问题扩展到368只代币的完整生态，为确实存在的需求找到归因，并测量了它的留存。

*披露。我在印度尼西亚领导一个高校区块链社区，并在Mantle上构建RWA项目OwnaFarm，因此我与本文分析的生态存在利益关联。研究本身是为Mantle Research Challenge完成的独立工作，其构建原则是可查证而非可信任：每个数字都链接到可复现的公开查询，产出监控结果的追踪代理是开源的。本文任何内容均非投资建议。*

---

*来自社区的姊妹篇：[Issuance Won. Distribution Hasn't Started.](https://blog.bccukdw.xyz/issuance-won-distribution-hasnt-started)，与本文在钱包层面所测量的同一论题的宏观框架。*
