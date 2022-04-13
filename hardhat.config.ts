// hardhat.config.ts
import "dotenv/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-ethers";
import "@tenderly/hardhat-tenderly";
import "@nomiclabs/hardhat-waffle";
// import "@openzeppelin/hardhat-upgrades";
import "hardhat-abi-exporter";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-gas-reporter";
// import "hardhat-spdx-license-identifier";
// import "hardhat-typechain";
import "hardhat-watcher";
import "solidity-coverage";
// import "./tasks";

import { HardhatUserConfig } from "hardhat/types";
// import { removeConsoleLog } from "hardhat-preprocessor"
const privateKey: string = process.env.PRIVATE_KEY || "";

const mnemonic: string =
  process.env.MNEMONIC ||
  "test test test test test test test test test test test test";

let accounts;
const localaccount = { mnemonic };
if (privateKey != "") {
  accounts = [privateKey];
} else {
  accounts = { mnemonic };
}
const config: HardhatUserConfig = {
  abiExporter: {
    path: "./abi",
    clear: false,
    flat: true,
    // only: [],
    // except: []
  },
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    currency: "USD",
    enabled: process.env.REPORT_GAS === "true",
    excludeContracts: ["contracts/mocks/", "contracts/libraries/"],
  },
  mocha: {
    timeout: 20000,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    dev: {
      // Default to 1
      default: 0,
    },
    treasury: {
      default: 1,
    },
    investor: {
      default: 2,
    },
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      gasPrice: 120 * 1000000000,
      chainId: 1,
    },
    localhost: {
      live: false,
      saveDeployments: true,
      tags: ["local"],
    },
    hardhat: {
      forking: {
        enabled: true,
        url: "https://api.avax.network/ext/bc/C/rpc",
        blockNumber: 6394745,
      },
      live: false,
      saveDeployments: true,
      tags: ["test", "local"],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      chainId: 3,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      chainId: 4,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      chainId: 5,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      chainId: 42,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 20000000000,
      gasMultiplier: 2,
    },
    astar: {
      //astar
      url: "https://rpc.astar.network:8545",
      accounts,
      chainId: 592,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: "auto",
      // gasMultiplier: 2,
    },

    shiden: {
      // SDN
      url: "https://rpc.shiden.astar.network:8545",
      accounts,
      chainId: 336,
      // https://blockscout.com/shiden
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: "auto",
      // gasMultiplier: 2,
      // gas: 12000000,
      // timeout: 1800000,
      // allowUnlimitedContractSize: true,
      // blockGasLimit: 0x1fffffffffffff,
    },
    moonbeam: {
      url: "https://rpc.api.moonbeam.network",
      // GLMR
      // https://moonscan.io/
      accounts,
      chainId: 1284,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gas: 5198000,
      gasMultiplier: 2,
    },
    moonbase: {
      url: "https://rpc.testnet.moonbeam.network",
      // https://moonbase-blockscout.testnet.moonbeam.network/
      accounts,
      chainId: 1287,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gas: 5198000,
      gasMultiplier: 2,
    },

    moonriver: {
      url: "https://rpc.moonriver.moonbeam.network",
      accounts,
      chainId: 1285,
      live: true,
      saveDeployments: true,
      tags: ["prod"],
    },
    arbitrum: {
      url: "https://kovan3.arbitrum.io/rpc",
      accounts,
      chainId: 79377087078960,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    fantom: {
      // url: "https://rpcapi.fantom.network",
      // accounts,
      // chainId: 250,
      // live: true,
      // saveDeployments: true,
      // gasPrice: 22000000000,
      url: "https://rpc.ftm.tools/",
      accounts,
      chainId: 250,
      live: true,
      saveDeployments: true,
      tags: ["prod"],
    },
    fantomtest: {
      url: "https://rpc.testnet.fantom.network",
      accounts,
      chainId: 4002,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts,
      chainId: 137,
      live: true,
      saveDeployments: true,
    },
    polygon: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts,
      chainId: 137,
      live: true,
      saveDeployments: true,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts,
      chainId: 80001,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },

    xdai: {
      url: "https://rpc.xdaichain.com",
      accounts,
      chainId: 100,
      live: true,
      saveDeployments: true,
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org",
      accounts,
      chainId: 56,
      live: true,
      saveDeployments: true,
    },
    "bsc-testnet": {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545",
      accounts,
      chainId: 97,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    heco: {
      url: "https://http-mainnet.hecochain.com",
      accounts,
      chainId: 128,
      live: true,
      saveDeployments: true,
    },
    "heco-testnet": {
      url: "https://http-testnet.hecochain.com",
      accounts,
      chainId: 256,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts,
      chainId: 43114,
      live: true,
      saveDeployments: true,
      gasPrice: 225000000000,
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts,
      chainId: 43113,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    harmony: {
      url: "https://api.s0.t.hmny.io",
      accounts,
      chainId: 1666600000,
      live: true,
      saveDeployments: true,
    },
    "harmony-testnet": {
      url: "https://api.s0.b.hmny.io",
      accounts,
      chainId: 1666700000,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    harmonytest: {
      url: "https://api.s0.b.hmny.io",
      accounts, // ONE
      chainId: 1666700000,
      // https://explorer.pops.one/
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      // gasMultiplier: 2,
      gas: 12000000,
      timeout: 1800000,
      allowUnlimitedContractSize: true,
      blockGasLimit: 0x1fffffffffffff,
    },
  },
  paths: {
    artifacts: "artifacts",
    cache: "cache",
    deploy: "deploy",
    deployments: "deployments",
    imports: "imports",
    sources: "contracts",
    tests: "test",
  },
  // preprocess: {
  //   eachLine: removeConsoleLog((bre) => bre.network.name !== "hardhat" && bre.network.name !== "localhost"),
  // },
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {},
      },
      {
        version: "0.8.13",
        settings: {},
      },
    ],
  },
  // spdxLicenseIdentifier: {
  //   overwrite: false,
  //   runOnCompile: true,
  // },
  tenderly: {
    project: process.env.TENDERLY_PROJECT!,
    username: process.env.TENDERLY_USERNAME!,
  },
  // typechain: {
  //   outDir: "types",
  //   target: "ethers-v5",
  // },
  watcher: {
    compile: {
      tasks: ["compile"],
      files: ["./contracts"],
      verbose: true,
    },
  },
};

export default config;
