---
id: 6-zk-dev
title: "Section 6: Building with ZK"
---

This section focuses on resources for building decentralized applications with zkSNARKs.

### Readings

[How I Learned to write zkSNARKs](https://weijiek.medium.com/how-i-learned-zk-snarks-from-scratch-177a01c5514e) and the associated [repo](https://github.com/weijiekoh/zkmm)

[ZKPs for Engineers: A look at the Dark Forest ZKPs](https://blog.zkga.me/df-init-circuit)

[snarkjs Github repo](https://github.com/iden3/snarkjs) - this is the most-used Javascript library for zkSNARK proof generation

[circom-starter repo](https://github.com/briangu33/circom-starter) - a simple repo with a build script where you can play around with circuits

[zk-browser repo](https://github.com/nulven/zk-browser) - source code for a simple webapp that generates ZK proofs for pre-image of MiMC hash and verifies them in browser

### Quests

- [ ]  Complete the [snarkjs tutorial](https://github.com/iden3/snarkjs). Don't worry if steps 1-8 and 15-20 don't make sense; if you want to understand them, section 3 of this Notion document provides more context.
- [ ]  Write a zkSNARK using circom and snarkjs for the MiMC hash function ([info](https://byt3bit.github.io/primesym/mimc/)). You'll probably want to reference the [circomlib](https://github.com/iden3/circomlib/tree/master/src) library of useful circuits (which includes a MiMC function you can import). Feel free to check out [this circuit](https://github.com/darkforest-eth/darkforest-v0.3/blob/master/circuits/init/circuit.circom) in the Dark Forest open-source repo, which imports and uses circomlib's MiMC circuit.
- [ ]  Take a look at the Modulo circuit in the README of [this repo](https://github.com/agajews/circom-dsl). Try to understand why each part is necessary!
