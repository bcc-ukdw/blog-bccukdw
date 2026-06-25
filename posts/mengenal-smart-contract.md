---
title: "Mengenal Smart Contract: Fondasi Web3 Modern"
date: "2024-06-25"
author: "bcc-ukdw"
authorName: "BCC UKDW"
authorAvatar: "https://avatars.githubusercontent.com/u/bcc-ukdw"
category: "Tutorial"
tags: ["ethereum", "solidity", "smart-contract", "web3"]
excerpt: "Smart contract adalah program yang berjalan otomatis di blockchain tanpa perantara. Artikel ini menjelaskan konsep dasar, cara kerja, dan contoh implementasi di Ethereum."
cover: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop"
---

## Apa itu Smart Contract?

Smart contract adalah program komputer yang tersimpan dan berjalan di atas blockchain. Berbeda dengan kontrak biasa yang membutuhkan pihak ketiga (notaris, pengacara, bank), smart contract mengeksekusi aturan secara **otomatis dan transparan** berdasarkan kondisi yang sudah ditetapkan.

Konsep ini pertama kali diperkenalkan oleh **Nick Szabo** pada tahun 1994, jauh sebelum blockchain modern ada. Namun baru benar-benar bisa diimplementasikan setelah Ethereum diluncurkan pada 2015.

---

## Bagaimana Cara Kerjanya?

Smart contract bekerja dengan prinsip sederhana:

> **"Jika kondisi X terpenuhi, maka eksekusi aksi Y."**

Misalnya:
- Jika pembeli mentransfer 1 ETH → kirim NFT ke alamat pembeli
- Jika voting mencapai quorum → eksekusi proposal DAO
- Jika harga token turun di bawah threshold → likuidasi posisi

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

## Contoh Smart Contract Pertama

Berikut contoh smart contract paling sederhana menggunakan **Solidity**:

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

### Penjelasan baris per baris

| Baris | Penjelasan |
|-------|-----------|
| `pragma solidity ^0.8.20` | Versi Solidity yang digunakan |
| `contract Greeter` | Mendefinisikan smart contract bernama Greeter |
| `string private greeting` | Variabel state yang tersimpan di blockchain |
| `constructor` | Fungsi yang dijalankan satu kali saat deploy |
| `public view` | Fungsi bisa dibaca siapa saja, tidak mengubah state |

---

## Contoh yang Lebih Nyata: Simple Bank

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleBank {
    mapping(address => uint256) private balances;

    event Deposit(address indexed user, uint256 amount);
    event Withdrawal(address indexed user, uint256 amount);

    function deposit() external payable {
        require(msg.value > 0, "Deposit harus lebih dari 0");
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Saldo tidak cukup");
        balances[msg.sender] -= amount;
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer gagal");
        emit Withdrawal(msg.sender, amount);
    }

    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }
}
```

Contract di atas mengimplementasikan bank sederhana:
- **deposit()** — kirim ETH ke contract, saldo tercatat
- **withdraw()** — tarik ETH, validasi saldo dulu
- **getBalance()** — cek saldo milik sender

---

## Keunggulan Smart Contract

### 1. Trustless
Tidak perlu percaya pada pihak ketiga. Kodenya transparan dan bisa diaudit siapa saja di blockchain explorer seperti [Etherscan](https://etherscan.io).

### 2. Immutable (setelah deploy)
Setelah di-deploy, kode tidak bisa diubah. Ini memastikan aturan tidak bisa dimanipulasi secara sepihak.

### 3. Otomatis
Tidak perlu ada yang "menjalankan" secara manual. Begitu kondisi terpenuhi, eksekusi terjadi otomatis.

### 4. Efisien
Tidak ada biaya intermediary. Hanya gas fee untuk komputasi di jaringan Ethereum.

---

## Tools yang Digunakan di BCC UKDW

Untuk belajar smart contract, kami menggunakan stack berikut:

- **[Remix IDE](https://remix.ethereum.org)** — IDE berbasis browser, paling cocok untuk pemula
- **Hardhat** — Framework development & testing profesional
- **OpenZeppelin** — Library smart contract yang sudah diaudit
- **MetaMask** — Wallet untuk berinteraksi dengan dApp

```bash
# Setup Hardhat project
npm init -y
npm install --save-dev hardhat
npx hardhat init

# Compile contract
npx hardhat compile

# Deploy ke testnet
npx hardhat run scripts/deploy.js --network sepolia
```

---

## Langkah Selanjutnya

Setelah memahami dasar smart contract, kamu bisa eksplorasi lebih jauh:

1. **ERC-20** — Standar token fungible (seperti USDT, UNI)
2. **ERC-721** — Standar NFT
3. **DeFi Protocols** — AMM, lending protocol, yield farming
4. **DAO** — Governance berbasis smart contract

---

Smart contract adalah fondasi dari seluruh ekosistem Web3. Mulai dari DeFi, NFT, DAO, hingga GameFi — semuanya berjalan di atas smart contract. Dengan memahami cara kerjanya, kamu sudah melangkah jauh ke dalam dunia blockchain.

**Selamat belajar dari BCC UKDW!** 🔗
