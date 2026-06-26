---
title: "Understanding Smart Contracts: The Foundation of Modern Web3"
date: "2024-06-25"
author: "bcc-ukdw"
authorName: "BCC UKDW"
authorAvatar: "https://www.bccukdw.xyz/Icon.svg"
category: "Tutorial"
tags: ["ethereum", "solidity", "smart-contract", "web3"]
excerpt: "Smart contracts are programs that run automatically on the blockchain without intermediaries. This article explains the core concepts, how they work, and implementation examples on Ethereum."
cover: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop"
---

## What is a Smart Contract?

A smart contract is a computer program stored and executed on a blockchain. Unlike traditional contracts that require a third party (notary, lawyer, bank), smart contracts execute rules **automatically and transparently** based on predefined conditions.

The concept was first introduced by **Nick Szabo** in 1994, long before modern blockchains existed. However, it only became practically implementable after Ethereum launched in 2015.

---

## How Does It Work?

Smart contracts operate on a simple principle:

> **"If condition X is met, then execute action Y."**

For example:

- If a buyer transfers 1 ETH → send the NFT to the buyer's address
- If voting reaches quorum → execute the DAO proposal
- If a token price drops below a threshold → liquidate the position

```
┌─────────────┐     deploy      ┌──────────────────┐
│  Developer  │ ─────────────▶  │  Ethereum Network │
└─────────────┘                 │                  │
                                │  Smart Contract  │
┌─────────────┐     interact    │  (bytecode EVM)  │
│    User     │ ─────────────▶  │                  │
└─────────────┘                 └──────────────────┘
```

---

## Your First Smart Contract

Here is the simplest possible smart contract written in **Solidity**:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
```

### Line-by-line breakdown

| Line                      | Explanation                                              |
| ------------------------- | -------------------------------------------------------- |
| `pragma solidity ^0.8.20` | Specifies the Solidity compiler version                  |
| `contract Greeter`        | Defines a smart contract named Greeter                   |
| `string private greeting` | A state variable stored permanently on the blockchain    |
| `constructor`             | A function that runs once when the contract is deployed  |
| `public view`             | Anyone can read this; it does not modify state           |

---

## A More Realistic Example: Simple Bank

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleBank {
    mapping(address => uint256) private balances;

    event Deposit(address indexed user, uint256 amount);
    event Withdrawal(address indexed user, uint256 amount);

    function deposit() external payable {
        require(msg.value > 0, "Deposit must be greater than 0");
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
        emit Withdrawal(msg.sender, amount);
    }

    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }
}
```

The contract above implements a simple bank:

- **deposit()** — send ETH to the contract, balance is recorded
- **withdraw()** — withdraw ETH after balance validation
- **getBalance()** — check the sender's balance

---

## Advantages of Smart Contracts

### 1. Trustless

No need to trust a third party. The code is transparent and can be audited by anyone on a blockchain explorer like [Etherscan](https://etherscan.io).

### 2. Immutable (after deployment)

Once deployed, the code cannot be changed. This ensures the rules cannot be manipulated unilaterally.

### 3. Automated

No one needs to "run" it manually. Once the condition is met, execution happens automatically.

### 4. Efficient

No intermediary fees. Only gas fees for computation on the Ethereum network.

---

## Tools We Use at BCC UKDW

For learning smart contracts, we use the following stack:

- **[Remix IDE](https://remix.ethereum.org)** — browser-based IDE, great for beginners
- **Hardhat** — professional development & testing framework
- **OpenZeppelin** — audited smart contract library
- **MetaMask** — wallet for interacting with dApps

```bash
# Set up a Hardhat project
npm init -y
npm install --save-dev hardhat
npx hardhat init

# Compile contracts
npx hardhat compile

# Deploy to testnet
npx hardhat run scripts/deploy.js --network sepolia
```

---

## Next Steps

After understanding the basics, you can explore further:

1. **ERC-20** — fungible token standard (like USDT, UNI)
2. **ERC-721** — NFT standard
3. **DeFi Protocols** — AMM, lending protocols, yield farming
4. **DAO** — smart contract-based governance

---

Smart contracts are the foundation of the entire Web3 ecosystem. From DeFi and NFTs to DAOs and GameFi — everything runs on smart contracts. By understanding how they work, you have already taken a major step into the world of blockchain.

**Happy learning from BCC UKDW!** 🔗
