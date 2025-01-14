---
title: "Problem Set"
id: 4-problems
---

1. If you control $p$ of the overall processing power in Bitcoin, what is the probability that you can get to $k$ blocks ahead of everyone else in the world at some point in a day? (you can make simplifying assumptions / modeling / estimations)
2. If you control $p$ of the overall stake, and we create a committee of $k$ people out of $n$ total (assume everyone has $1$ stake), what's the probability that you control more than $1/3$ of the committee?
3. (open-ended; research-y) Suppose you can outsource a computation that costs you $x$ to compute to someone else by giving them your key. Now suppose the protocol allows you to punish people who outsource by showing the protocol that you have their key (and their account would get destroyed) but then the outsource loses reputation and must cancel their service. What kind of market would arise for outsourcing computations? What assumptions would you have to make?
4. (hard, but interesting) How would a prover prove (quickly) to a verifier that she did the following computation? "Given a polynomial in $n$ variables, I evaluated the polynomial at all points in the Boolean hypercube (meaning all $2^n$ ways where each variable is set to $0$ or $1$) and I obtained $s$."
5. (first read Paxos and 2-phase commit) What are some advantages of Paxos over 2PC?
6. Suppose your computer only does computation in some field $p$. How do you give a proof for $a + b = c \pmod q$? (be careful of overflow) For something more specific, assume your "proofs" can only consist of equation checks $f(x) = 0 \pmod p$.