---
title: "Issuance Won. Distribution Hasn't Started."
date: "2026-07-02"
author: "Shenhan01-sys"
authorName: "Hans Gunawan"
authorAvatar: "https://github.com/Shenhan01-sys.png"
category: "Blockchain"
tags: ["rwa", "tokenization", "distribution", "onchain-finance", "mantle", "defi"]
excerpt: "Tokenized real-world assets are a multi-billion-dollar market, yet headline figures conflate issuance with distribution. The largest single RWA on Earth is non-movable, most tokens sit idle, and the distribution layer is the one moat you cannot buy. A research note for the Mantle Research Challenge."
cover: "https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig1_distributed_vs_represented.png"
---

> A research note on the gap between tokenized-asset issuance and global distribution — and why the distribution layer is the one moat you cannot buy. Submission for the Mantle Research Challenge. July 2026.

## Abstract

Tokenized real-world assets have grown into a multi-billion-dollar market, yet headline figures conflate *issuance* (assets placed on a ledger) with *distribution* (assets that actually move, trade, and compose). Drawing on RWA.xyz's new Distributed-vs-Represented framework, two peer-reviewed studies (arXiv:2508.11651; 2606.01131), and Mantle onchain data (2 Jul 2026), this note argues that issuance has succeeded while distribution has barely begun: the largest single RWA (~$19.4B) is non-movable, most tokenized assets show low turnover, and on Mantle a ~10x gap separates existing stablecoin holders from actual RWA holders. Mantle's four-pillar thesis — settlement, compliance, liquidity, distribution — positions distribution as the one pillar that cannot be bought, because it is a network effect. The note concludes that whoever compounds the distribution layer first captures the opening position in the ~$127T reshaping of onchain finance, and outlines the concrete next moves required.

## Key Findings

1. **The largest tokenized real-world asset on Earth is not distributed.** Figure's HELOC token (~$19.4B) sits at #1 on RWA.xyz — but it is "Represented": locked on its issuing platform, non-transferable, non-composable with DeFi. The headline "$XX billion RWA" obscures that most of the value cannot move. ([RWA.xyz, 2 Jul 2026](https://app.rwa.xyz); [RWA.xyz framework blog](https://rwa.xyz/blog/a-new-framework-for-tokenized-assets-distributed-and-represented))

2. **Issuance succeeded; distribution did not — empirically.** Two peer-reviewed studies find most RWA tokens show low trading volume, long holding periods and thin participation, *despite* 24/7 global market potential. Tokenization has digitized already-liquid assets (Treasuries, MMFs) far better than it has unlocked liquidity for illiquid ones (real estate, art). ([arXiv:2508.11651, Aug 2025](https://arxiv.org/html/2508.11651v1); [arXiv:2606.01131, May 2026](https://arxiv.org/abs/2606.01131); >$25B brought onchain per Investax)

3. **On Mantle, the demand-side gap is ~10x.** $229.9M distributed RWA value across 3,276 RWA holders — versus ~31,000 stablecoin holders on the same chain. Q1 2026 RWA value grew 27% to $247.5M (Messari), yet 30-day RWA transfer volume fell 55% to $6.5M. Issuance up; distribution thinning. ([RWA.xyz Mantle, 2 Jul 2026](https://app.rwa.xyz/networks/mantle); [PR Newswire/Messari, Q1 2026](https://www.prnewswire.com/news-releases/mantle-posts-27-rwa-growth-in-q1-2026--reaching-247-5m-according-to-messari-302795234.html))

4. **Breadth ≠ depth — the xStocks paradox.** xStocks (Backed × Bybit) is the global distribution leader: 8 of the top 11 tokenized equities by unique holders, 68% of the top 25 (mid-Feb 2026). Yet only $3.9M sits on Mantle — 1.66% of Mantle's RWA. Listing everywhere ≠ liquidity anywhere. ([RWA.xyz Mantle](https://app.rwa.xyz/networks/mantle); holder data via secondary reporting)

5. **The unbought moat.** Mantle frames a ~$127T onchain-finance gap across four pillars — settlement, compliance, liquidity, **distribution**. Three can be bought or built; distribution is a network effect (users + liquidity + venues) that cannot be purchased. Whoever compounds that network effect wins the distribution layer — and, plausibly, the next phase of onchain finance. ([ETHNews, 28 May 2026](https://ethnews.com/home/mantle-identifies-a-127-trillion-gap-in-onchain-finance) — reporting Mantle's framing)

![Figure 1 — The $19.4B ghost: the #1 RWA is NOT distributed](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig1_distributed_vs_represented.png)
*Figure 1 — The $19.4B ghost: the #1 RWA is NOT distributed (Distributed vs Represented framework).*
## 1. The Thesis: Issuance ≠ Adoption

Every RWA bull cycle, the same story: headlines about "$XX billion tokenized," a wave of fund launches, then flattening. The 2025–26 cycle is the first where the bottleneck is no longer issuance. BlackRock, Franklin Templeton, Ondo, Securitize, Figure, Circle, Backed, and the DTCC have proven assets *can* be put on a ledger. Tokenized U.S. Treasuries crossed $14B in April 2026 — a 37x rise from early 2023. ([Cryptonews, Apr 2026](https://cryptonews.net/news/finance/32756007))

The harder problem is the one nobody can buy their way out of: **getting those assets from issuance into a global, liquid, composable market where they actually behave like financial instruments — priced, tradable, usable as collateral, redeemable, and reachable by investors across borders and venues.** That is distribution. And distribution, unlike issuance, is a network effect.

This note argues three things. First, that the market's favorite RWA metric — total tokenized value — systematically overstates progress because it conflates *issuance* with *distribution*. Second, that the evidence already shows issuance winning and distribution stalled. Third, that the distribution layer is therefore the unbought moat of onchain finance — and that Mantle's positioning as a "liquidity chain" with existing demand (users, stablecoins, yield venues) is a credible, if unfinished, bet on exactly that moat.

## 2. The Friction Map: Why Distribution Is the Hard Part

If issuance is a problem a well-funded institution can solve with lawyers and a tokenization platform, distribution is a coordination problem no single institution can solve alone. Four frictions compound:

**2.1 Mobility & transferability.** Many "tokenized assets" are not actually movable. They sit on the issuer's ledger, whitelisted to institutional participants, and cannot be transferred peer-to-peer. RWA.xyz now splits the market on exactly this axis — **Distributed Assets** (movable to external wallets, transferable, composable) versus **Represented Assets** (recordkeeping only, non-movable). The distinction is not cosmetic: mobility is what unlocks composability with DeFi, which is what turns a token from a database row into a financial primitive.

**2.2 Liquidity depth per venue.** An asset can be *listed* on six chains and still be illiquid on all of them. Distribution is not breadth (how many places list the token) — it is depth (where can you actually trade size without slippage, and who is making the market). This is the gap between "available" and "usable."

**2.3 Regulatory & cross-border reach.** Tokenized assets inherit the jurisdictional patchwork of the underlying security. Whitelists, eligibility, transfer restrictions and KYC/AML rails mean a globally issued token often reaches only a subset of global investors. The SEC's January 2026 statement on tokenized securities reinforced that many onchain representations sit *outside* the master securityholder file — legal intermediation, not just technical plumbing, gates distribution. ([SEC, 28 Jan 2026](https://sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities))

**2.4 Demand-side channels & redemption.** Issuance solves "can it exist." Distribution solves "who holds it, why, and can they exit?" Without retail-facing apps, yield venues, market makers, and credible redemption paths, tokenized assets become inert holdings — the exact pattern the academic literature documents below.

The unifying point: **issuance is a supply-side milestone; distribution is a demand-side system.** You can launch a fund in a quarter. You cannot buy a liquid, cross-border, composable market in a quarter.
## 3. Evidence: What's Working and What's Not

### 3.1 The $19.4B ghost asset — and why the headline metric lies

As of 2 July 2026, the single largest tokenized real-world asset on RWA.xyz is Figure's HELOC token at roughly **$19.4B** — larger than BlackRock's BUIDL, larger than any tokenized Treasury fund. And it is classified **Represented**: it cannot be moved to a wallet outside Figure's platform or transferred peer-to-peer. It is, in distribution terms, a ghost — a big number that does not circulate.

This is why RWA.xyz's new Distributed-vs-Represented framework matters. It reframes the market around the only metric that predicts real utility: *can the token move and compose?* Under the default "Distributed" view, headline market size shrinks — not because the market contracted, but because the immovable institutional recordkeeping volume is finally excluded from the "real" distribution number. The framework's own observation: many Represented Assets are expected to *evolve* into Distributed Assets as regulation clarifies — Figure itself is working to make its tokens DeFi-compatible. ([RWA.xyz framework](https://rwa.xyz/blog/a-new-framework-for-tokenized-assets-distributed-and-represented))

**Implication:** any analysis that quotes "total RWA value" without separating Distributed from Represented is measuring issuance, not distribution. The true distribution market is dramatically smaller — and dramatically more important — than the headline.

### 3.2 "Issuance won. Distribution hasn't started." — the academic evidence

The empirical case is now documented, not asserted. *"Tokenize Everything, But Can You Sell It?"* (arXiv:2508.11651, Aug 2025) finds that **most RWA tokens exhibit low trading volumes, long holding periods, and limited investor participation**, despite 24/7 market potential — with low transfer activity, limited active addresses, and minimal secondary trading across tokenized real estate, private credit, and even Treasury funds. A follow-up, *"Tokenized but Illiquid?"* (arXiv:2606.01131, May 2026), confirms that **outstanding asset value alone does not reliably predict observed liquidity**, and that gold-backed tokens (broad holder bases, persistent activity) outperform many Treasury and private-credit products on actual onchain usage. Investax frames the same finding bluntly: over $25B brought onchain, most of it still inactive in secondary markets.

The pattern is consistent and uncomfortable: **tokenization has succeeded at digitizing assets that were already liquid (Treasuries, MMFs) and largely failed to unlock liquidity for assets that were not (real estate, art).** In other words, issuance kept winning while the harder prize — distribution — barely began.

### 3.3 Mantle's distribution paradox: 3,276 vs 31,000

On Mantle itself (RWA.xyz, 2 Jul 2026), the demand-side gap is visible and large:

| Metric (Mantle, 2 Jul 2026) | Value | 30-day trend |
|---|---|---|
| Distributed RWA value | $229.9M | ▼ 8.47% |
| RWA holders | 3,276 | ▲ 2.15% |
| RWA 30-day transfer volume | $6.5M | ▼ 55.30% |
| RWA asset count | 163 | — |
| Stablecoin holders (same chain) | ~31,000 | ▲ 0.02% |

The league table is dominated by issuance partners — Securitize $106.7M (45%), Chainlink CCIP $90.6M (38%), Ondo $28.7M (12%) — while xStocks, the most *distribution-native* product (159 tokenized equities), sits at just $3.9M (1.66%). ([RWA.xyz Mantle](https://app.rwa.xyz/networks/mantle))

![Figure 2 — Mantle RWA league table: issuance partners dominate, distribution-native thin](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig2_mantle_league.png)
*Figure 2 — Mantle RWA league table: issuance partners dominate, distribution-native thin.*

![Figure 3 — Mantle's distribution paradox: ~10x underpenetrated demand base](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig3_holder_gap.png)
*Figure 3 — Mantle's distribution paradox: ~10x underpenetrated demand base (stablecoin vs RWA holders).*

Read against Messari's Q1 2026 report — Mantle RWA value **+27% to $247.5M**, broadening into fixed income, equities, ETFs and institutional lending yield — the picture is paradoxical but legible: **issuance is compounding, while 30-day distribution activity is contracting.** More value is being placed onchain; less of it is moving. And Mantle's existing ~31,000 stablecoin holders represent roughly a **10x underpenetrated demand base** that RWA products have not yet reached. That is not a failure of supply — it is a distribution problem by definition.

### 3.4 The xStocks paradox: global breadth, $3.9M depth

xStocks (Backed × Bybit, distributed onchain including Mantle) is arguably the strongest distribution story in tokenized equities: by mid-February 2026 it held **8 of the top 11 tokenized equities by unique holder count and 68% of the top 25** — real, repeated use, past the experiment phase. Yet on Mantle it accounts for only **$3.9M**, 1.66% of Mantle's RWA, and across the table its Mantle 30-day value trended down 11%.

The lesson is precise and generalizable: **distribution breadth (many holders, many chains) is not distribution depth (liquidity per venue).** An asset can be the global leader by reach and still be illiquid on any single chain where it lacks a market maker, a yield venue, and an incentive to concentrate liquidity. This is the gap Mantle's distribution stack is explicitly trying to close — Fluxion LP venues and the xPoints + 1M Fluxion points incentive program exist precisely to convert breadth into depth on Mantle.

![Figure 4 — xStocks paradox: global breadth (68% of top-25) vs Mantle depth ($3.9M, 1.66%)](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig4_xstocks_paradox.png)
*Figure 4 — xStocks paradox: global breadth (68% of top-25) vs Mantle depth ($3.9M, 1.66%).*
## 4. Mantle's Distribution Edge — the Moat You Cannot Buy

Mantle frames the onchain-finance opportunity as a ~$127T gap across four pillars: **settlement, compliance, liquidity, and distribution**. Three of those are tractable with capital and engineering. Settlement improves with ZK validity proofs and faster finality. Compliance is a matter of rails, whitelists and partnerships. Liquidity can be seeded — incentives, market-making programs, treasury deployments. **Distribution is different: it is a network effect**, the product of compounding users, venues, and habits over time. You cannot write a check for "a global investor base that already uses your chain to hold and move value."

This is why Mantle's existing demand-side footprint is the strategically interesting asset, not its issuance partnerships:

- **A captive demand base.** ~31,000 stablecoin holders and a deep native-liquidity stack (USDT0, mETH/cmETH restaking, FBTC) mean Mantle already hosts the demand side that RWA products elsewhere must build from scratch. The 10x gap between stablecoin holders and RWA holders is, in moat terms, *headroom*, not a deficit.
- **Banking-to-distribution continuity.** UR — Mantle's smart-money banking app (spend, off-ramp, on-ramp in one place) — is a distribution surface for real users, not just a custody rail. The thesis "blockchain for banking" is, mechanically, a distribution thesis: banking apps are where demand lives.
- **Yield + venue layer that makes assets usable.** Merchant Moe, AGNI, Treehouse, and Fluxion turn a listed token into a tradable, yield-bearing, LP-able primitive — converting xStocks-style breadth into depth. The xPoints + Fluxion points program is an explicit liquidity-depth incentive, not a listing incentive.
- **Issuance partnerships as the supply plug.** Bybit × Backed (xStocks, U.S. equities), Securitize, Ondo, Agora, Chainlink CCIP — Mantle's RWA league table shows supply is already plugged in. Supply was the easy part. The moat is whether the demand-side system compounds.

The clearest way to state the thesis: **settlement, compliance and liquidity are costs; distribution is equity.** Mantle's bet is that owning the distribution layer — users, venues, and the composability that makes a token *behave* like money — is worth more than owning any single issuance partnership.

## 5. Risks & Open Questions

A credible distribution thesis cannot be a press release. The counter-evidence is real:

- **The 30-day contraction may be signal, not noise.** Mantle's distributed RWA value fell 8.47% and transfer volume 55% over 30 days (to 2 Jul 2026). If that trend persists past Q2, the "headroom" framing weakens and the "stalled distribution" framing strengthens. One quarter is not a verdict — but it is the metric to watch.
- **xStocks depth on Mantle is currently thin.** $3.9M (1.66%) for the global distribution leader is a warning that listing ≠ liquidity. Incentive programs must demonstrably convert breadth to depth, or the paradox hardens.
- **Regulatory ceiling.** The SEC's January 2026 statement keeps many onchain representations legally downstream of the master securityholder file. No amount of distribution infrastructure overrides a jurisdiction that says the token does not convey the security's rights. Distribution's ceiling is partly set outside the chain.
- **Network effects cut both ways.** If a higher-liquidity venue (a competing L2, a CEX-DeFi hybrid, or the DTCC's own July 2026 tokenization pilot with BlackRock and Goldman) compounds distribution faster, Mantle's headroom evaporates. Network effects reward the leader, not the early.
- **Represented ≠ failure.** Institutional recordkeeping is a legitimate, large use case. The Distributed-vs-Represented distinction should sharpen analysis, not become a value judgment that all Represented assets are "ghosts." Many will, and should, stay Represented.
## 6. Conclusion — The Next Move

Issuance won. The funds exist, the rails exist, the headlines exist. Distribution has not started — not at depth, not across borders, not as composable, redeemable, liquid financial primitives. The academic record says so (arXiv:2508.11651; 2606.01131). The market structure says so (RWA.xyz's Distributed-vs-Represented split, where the #1 asset by value is a $19.4B non-movable ghost). And Mantle's own data says so, quietly: issuance up 27% in a quarter, 30-day distribution down double digits, a 10x gap between the people already on the chain and the people actually holding its tokenized assets.

The next move is not another issuance partnership. It is the unglamorous, compounding work of distribution: turn breadth into depth (xStocks liquidity on Mantle), turn holders into users (route the ~31,000 stablecoin holders into RWA via UR and yield venues), and turn tokens into primitives (composability, collateral, redemption) so that "tokenized" finally means "tradable." Three of the four pillars can be bought. Distribution is the one that has to be *built* — and the one that, once built, cannot be bought away.

That is the moat. That is the thesis. And whoever builds the distribution layer first doesn't just win Mantle's research challenge — they take the opening position in the $127T reshaping of onchain finance.

---

## References

1. RWA.xyz — Mantle network page (data as of 2 Jul 2026): distributed asset value, holders, transfer volume, league table. https://app.rwa.xyz/networks/mantle
2. RWA.xyz — "A New Framework for Tokenized Assets: Distributed & Represented" (Nov 2025). https://rwa.xyz/blog/a-new-framework-for-tokenized-assets-distributed-and-represented
3. "Tokenize Everything, But Can You Sell It? RWA Liquidity Challenges and the Road Ahead," arXiv:2508.11651v1 (Aug 2025). https://arxiv.org/html/2508.11651v1
4. "Tokenized but Illiquid? Evidence from Real-World Asset Markets," arXiv:2606.01131 (May 2026). https://arxiv.org/abs/2606.01131
5. Investax — "What Is Real-World Asset (RWA) Tokenization? A Full Guide for 2026" (May 2026; >$25B onchain; low secondary-market activity). https://investax.io/blog/what-is-real-world-asset-rwa-tokenization
6. PR Newswire / Messari — "Mantle Posts 27% RWA Growth in Q1 2026, Reaching $247.5M" (Jun 2026). https://www.prnewswire.com/news-releases/mantle-posts-27-rwa-growth-in-q1-2026--reaching-247-5m-according-to-messari-302795234.html
7. PR Newswire — "Mantle Collaborates with Bybit and Backed to Bring U.S. Equities Onchain" (Nov 2025). https://www.prnewswire.com/news-releases/mantle-collaborates-with-bybit-and-backed-to-bring-us-equities-onchain-pioneering-next-trillion-dollar-wave-of-tokenized-assets-302608743.html
8. ETHNews — "Mantle Identifies a $127 Trillion Gap in Onchain Finance" (28 May 2026; four-pillar framing: settlement, compliance, liquidity, distribution). https://ethnews.com/home/mantle-identifies-a-127-trillion-gap-in-onchain-finance
9. SEC — "Statement on Tokenized Securities" (28 Jan 2026). https://sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
10. Cryptonews — "Tokenized U.S. Treasuries hit $14B" (Apr 2026; 37x from early 2023). https://cryptonews.net/news/finance/32756007
11. Mantle — "Mantle Launches UR (Early Contributors' Access Live)" (18 Jun 2025); group.mantle.xyz blog. https://group.mantle.xyz/blog/announcements/mantle-launches-crypto-first-neobank-ur — distribution stack: USDT0, mETH/cmETH, FBTC, Merchant Moe, AGNI, Treehouse, Fluxion; xPoints + 1M Fluxion points.

## Disclaimer

Not financial advice. Personal research opinion prepared for the Mantle Research Challenge by Hans Gunawan (BCC UKDW). RWA.xyz figures are point-in-time (2 Jul 2026) and subject to change. The ~$127T figure and four-pillar framing are reported by ETHNews as Mantle's positioning; the exact primary Mantle source was not independently located and should be verified against Mantle's own blog/letter before formal publication. Verify all onchain figures against live sources before submission.
