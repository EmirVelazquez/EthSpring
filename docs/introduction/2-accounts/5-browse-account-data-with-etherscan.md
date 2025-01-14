---
title: "2.5 Browse account data with Etherscan"
id: 5-browse-account-data-with-etherscan
---

Etherscan is a helpful web application that allows you to view information about the Ethereum blockchain in a human-readable way.

The entire history of all transactions, blocks, accounts, code, and other metadata collectively make up the “blockchain,” which is stored on every single Ethereum node. Etherscan.io runs a few nodes of their own, and thus has a copy of the entire blockchain on its machines. Etherscan then serves all of this data in a webapp.

We can use Etherscan to find information about different accounts. For example, two user accounts:

- Your own account: Open MetaMask, click the three dots next to your account name (by default the account name is “Account 1”), and click “View account on Etherscan.” This opens up a URL that looks something like: [https://etherscan.io/address/](https://etherscan.io/address/)[ADDRESS].
- [An account I own](https://etherscan.io/address/0x85d918c2b7f172d033d190152aec58709fb6d048): This is an account with address 0x85d918c2B7F172d033D190152AEc58709Fb6D048. In the past I’ve used it to send Ether to people who have read and given feedback on my articles! You can see that it has a nonzero balance.

With Etherscan, you can view the account data of any account, including your own. Replacing the address in the URL allows you to see the data associated with any account. If you’ve just created your account, Etherscan should show a balance of 0 ETH and no previous transactions.

We’ll revisit Etherscan later when we break down more complicated constructs, such as transactions and smart contract accounts.

- more on precisely what it means to be a “node” later - for now, think of nodes as the computers that are storing the blockchain, broadcasting transaction requests, executing others’ transactions and code, and synchronizing with each other on the Ethereum network.
