module.exports = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      items: [
        {
          type: "category",
          label: "Introduction",
          items: [
            "introduction/1-introduction/1-ethereum-101",
            "introduction/1-introduction/2-current-state-of-ethereum",
          ],
        },
        {
          type: "category",
          label: "Accounts",
          items: [
            "introduction/2-accounts/1-what-is-an-account",
            "introduction/2-accounts/2-what-is-a-wallet",
            "introduction/2-accounts/3-setting-up-first-wallet",
            "introduction/2-accounts/4-getting-ether",
            "introduction/2-accounts/5-browse-account-data-with-etherscan",
          ],
        },
        {
          type: "category",
          label: "Nodes and Networks",
          items: [
            "introduction/3-nodes-and-networks/1-pigeon-internet",
            "introduction/3-nodes-and-networks/2-peer-to-peer-systems",
            "introduction/3-nodes-and-networks/3-what-is-an-ethereum-node",
            "introduction/3-nodes-and-networks/4-mainnet-and-testnets",
            "introduction/3-nodes-and-networks/5-running-a-node-with-geth",
          ],
        },
        {
          type: "category",
          label: "Transactions",
          items: [
            "introduction/4-transactions/1-what-is-a-transaction",
            "introduction/4-transactions/2-transaction-fees-and-gas",
            "introduction/4-transactions/3-sender-recipient-value",
            "introduction/4-transactions/4-transaction-commitment-batch-blocks",
            "introduction/4-transactions/5-transaction-mining-and-execution",
            "introduction/4-transactions/6-walking-through-real-transaction",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Crypto Philosophy",
      items: [
        "crypto-philosophy/0-preface",
        "crypto-philosophy/1-roots",
        "crypto-philosophy/2-eth-principles",
        "crypto-philosophy/3-internet-history",
        "crypto-philosophy/4-scifi-misc",
      ],
    },
    {
      type: "category",
      label: "Peer Protocols",
      items: ["peer-protocols"],
    },
    {
      type: "category",
      label: "Protocol Theory",
      items: [
        "protocol-theory/0-preface",
        "protocol-theory/1-distributed-systems",
        "protocol-theory/2-consensus-protocols",
        "protocol-theory/3-additional-readings",
        "protocol-theory/4-problems",
      ],
    },
    {
      type: "category",
      label: "Zero Knowledge Cryptography",
      items: [
        "zero-knowledge/0-preface",
        "zero-knowledge/1-intro-to-zkps",
        "zero-knowledge/2-zkp-theory",
        "zero-knowledge/3-zksnark-theory",
        "zero-knowledge/4-mpc",
        "zero-knowledge/5-zk-apps",
        "zero-knowledge/6-zk-dev",
      ],
    },
  ],
};
