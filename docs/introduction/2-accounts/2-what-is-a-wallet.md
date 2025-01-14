---
title: "2.2 What is a wallet?"
id: 2-what-is-a-wallet
---

## Public-Key Cryptography: A Review

If Alice wants to send ether from her own account to Bob’s account, Alice need to create a transaction request and send it out to the network for verification. Ethereum’s usage of public-key cryptography ensures that Alice can prove that she originally initiated the transaction request. Without cryptographic mechanisms, a malicious adversary Eve could simply publicly broadcast a request that looks something like “send 5 ETH from Alice’s account to Eve’s account,” and no one would be able to verify that it didn’t come from Alice.

In public-key cryptography, every actor has a public and private key pair. The private key is known only by the corresponding actor, while everyone’s public keys can be seen by everyone. In this system, Alice can broadcast a message publicly and sign this message with an unforgeable signature that is generated from her private key and the message. Any other actor can verify the (message, signature) combination, given only knowledge of Alice’s public key. This enables Alice to sign her transaction request, and for anyone who sees this request to know that it could only have come from Alice.

## Wallet Definition

Ethereum uses public-key cryptography by associating every account with a public/private-key pair. For our purposes, we can basically think of the account address as the public key\*.

**A wallet is the public/private-key pair associated with an account.** That’s it. The following are examples of Ethereum wallets:

- A Chrome extension such as MetaMask, which stores a public and private key pair in your browser’s local storage (under the hood, in some folder on your computer).
- The keystore folder on your computer created and written to by Geth, a CLI for running an Ethereum node.
- A USB or other hardware device (such as TREZOR) containing an encrypted file with your public and private keys.
- A txt file saved on your computer with a plaintext copy of your public and private keys.
- A piece of paper on which you’ve written your public and private keys with a pen.

The following are NOT examples of wallets:

- An account on a site like Coinbase or Bitfinex. Your account credentials do not give you access to the public and private keys of the wallet(s) that they actually used to store your balance. In practice, multiple wallets may be used to store the balance of your Coinbase account, or multiple Coinbase accounts may be linked to a single wallet; either way, it’s out of your control.
- A webapp client such as MyCrypto or MyEtherWallet (a little misleadingly-named). For example, MyEtherWallet is an application that allows you to create, sign, and broadcast transactions client-side, once you provide the client your public and private keys. However, MEW does not actually store your keys, server-side or anywhere else (which is good and safe). You are responsible for storing your keys/maintaining your wallet.
- A 20-byte Ethereum address by itself. Again, though this gives you knowledge of the public key of this account, you don’t have the private key and can’t actually do anything that would require you to prove you are the owner of the account.
- there’s actually a little more nuance, but the public key and address can “basically” be derived from each other without too much difficulty.

## What happens if someone else has my private key?

From the specification of public-key crypto, the “owner” of an account is the entity or entities who know the private key. So if someone else knows the private key to your account, they can:

- Sign and send transactions from your account to any other account.
- Sign messages and initiate smart contract execution under the identity of your account.

Common ways that people lose control of their accounts include:

- Getting tricked into entering their private key where a malicious adversary has access to; i.e. getting phished.
- Not actually having control of the account to begin with, i.e. using some third party service to manage your keys and transactions (such as an exchange), whose operators get hacked or whose operators simply shut down the service one day to run away with the money.

## What if I lose my private key?

If you lose your private key you can’t sign any messages, and therefore you can’t prove to anyone on the network that you own the account. Again, from the specification, the “owner” of an account is the entity who knows the private key; if you don’t know the private key, by definition you don’t own the account. So **don’t lose your private key**, and **don’t tell anyone your private key**.
