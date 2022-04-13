# The problem summary

Only the output on Astar & Shiden are different from the others.

On Astar & Shiden

```
await Test.total():  29999000000
```

On other chains (moonbeam, bsc, harmony, harmony testnet, fantom, fantom test, polygon, mumbai, avalanche, xdai ).

```
await Test.total():  30000000000
```

---

# setup

```
yarn
mv .env.sample .env
vim .env
```

---

# build

```
yarn build
```

---

# deploy & test

## for astar

```
yarn deploy:test:astar
```

output

```
yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network astar --tags Test
Nothing to compile
start..
hre.network.name = astar
signers[0].getBalance:  5883788679997990000
deployer = 0x6eA8D23189aE68F1423c6Fc8f93b602B5C0524A7


mydeploy: Test

deploying "Test" (tx: 0x56109c6dcad27b8f178a2535dc997e8fac5b902943aae9b37d7069cb8fe52ecb)...: deployed at 0xd4a4C13044A1B9985Aa0cE2A69717B41c6EFea81 with 194199 gas
Test.address:  0xd4a4C13044A1B9985Aa0cE2A69717B41c6EFea81
await Test.amount1():  10000000000
await Test.amount2():  10000000000
await Test.amount3():  10000000000
await Test.total():  29999000000
✨  Done in 141.33s.

```

## for shiden

```
yarn deploy:test:shiden
```

output

```
yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network shiden --tags Test
Nothing to compile
start..
hre.network.name = shiden
signers[0].getBalance:  3999999999000000
deployer = 0x6eA8D23189aE68F1423c6Fc8f93b602B5C0524A7





mydeploy: Test

deploying "Test" (tx: 0x1620a231207c63e90075180348709f0c4718ba7f844bb99e12a78cf6bfa4edbb)...: deployed at 0xa8D4AD8ee8D29BcD0Bad8B0800F761Fb0005972d with 194199 gas
Test.address:  0xa8D4AD8ee8D29BcD0Bad8B0800F761Fb0005972d
await Test.amount1():  10000000000
await Test.amount2():  10000000000
await Test.amount3():  10000000000
await Test.total():  29999000000
✨  Done in 188.58s.

```

## for moonbeam

```
yarn deploy:test:moonbeam
```

output

```
yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network moonbeam --tags Test
Nothing to compile
start..
hre.network.name = moonbeam
signers[0].getBalance:  4000000000000000000
deployer = 0x6eA8D23189aE68F1423c6Fc8f93b602B5C0524A7



mydeploy: Test

deploying "Test" (tx: 0xb7fc21e07b0c9c9ba8067ecb9559dbdbb53849ff108c54935ac53277f25addd2)...: deployed at 0xa8D4AD8ee8D29BcD0Bad8B0800F761Fb0005972d with 194199 gas
Test.address:  0xa8D4AD8ee8D29BcD0Bad8B0800F761Fb0005972d
await Test.amount1():  10000000000
await Test.amount2():  10000000000
await Test.amount3():  10000000000
await Test.total():  30000000000
✨  Done in 92.38s.
```

## for fantom

```
yarn deploy:test:fantom
```

output

```
yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network fantom --tags Test
Nothing to compile
start..
hre.network.name = fantom
signers[0].getBalance:  10803726279812061866
deployer = 0x6eA8D23189aE68F1423c6Fc8f93b602B5C0524A7


mydeploy: Test

deploying "Test" (tx: 0x5c4a0ec16a297898a5091738708379fd04b0586a69f07d55c6cbd8a938afe5e2)...: deployed at 0xf5f25E3E0E771dd28dcD220D9b0Cb6670640E7a7 with 219739 gas
Test.address:  0xf5f25E3E0E771dd28dcD220D9b0Cb6670640E7a7
await Test.amount1():  10000000000
await Test.amount2():  10000000000
await Test.amount3():  10000000000
await Test.total():  30000000000
✨  Done in 76.88s.
```

## for fantom testnet

```
yarn deploy:test:fantomtest
```

output

```
yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network fantomtest --tags Test
Error HH100: Network fantomtest doesn't exist

For more info go to https://hardhat.org/HH100 or run Hardhat with --show-stack-traces
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
kaz@kazs-Mac-mini 20220413test % yarn deploy:test:fantomtest
yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network fantomtest --tags Test
Nothing to compile
start..
hre.network.name = fantomtest
signers[0].getBalance:  42395277285067524440
deployer = 0x6eA8D23189aE68F1423c6Fc8f93b602B5C0524A7





mydeploy: Test

deploying "Test" (tx: 0x10f6254aa50c8f43b3ae1b43375b62b1e2c86ea9a1b71a7ae0cb1c32921c00af)...: deployed at 0xbd18e0C3A13e399E2531541aF2c0A8ff85D1B552 with 224779 gas
Test.address:  0xbd18e0C3A13e399E2531541aF2c0A8ff85D1B552
await Test.amount1():  10000000000
await Test.amount2():  10000000000
await Test.amount3():  10000000000
await Test.total():  30000000000
✨  Done in 25.72s.
```

## for mumbai

```
yarn deploy:test:mumbai
```

output

```
yarn run v1.22.10
warning ../../package.json: No license field
error Command "deploy:test:mumbai" not found.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
kaz@kazs-Mac-mini 20220413test % yarn deploy:test:mumbai
yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network mumbai --tags Test
Nothing to compile
start..
hre.network.name = mumbai
signers[0].getBalance:  1123979322997873281
deployer = 0x6eA8D23189aE68F1423c6Fc8f93b602B5C0524A7





mydeploy: Test

deploying "Test" (tx: 0xd120b8f715e456712580e3e6f40595a1583c1fb42c25d41754575133d99a3080)...: deployed at 0x2e521b18047fcF670b4C0D495ce8D10303C679f6 with 194199 gas
Test.address:  0x2e521b18047fcF670b4C0D495ce8D10303C679f6
await Test.amount1():  10000000000
await Test.amount2():  10000000000
await Test.amount3():  10000000000
await Test.total():  30000000000
✨  Done in 46.52s.

```

## for xdai

```
yarn deploy:test:xdai
```

output

```

yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network xdai --tags Test
Nothing to compile
start..
hre.network.name = xdai
signers[0].getBalance:  39619239325647856189
deployer = 0x6eA8D23189aE68F1423c6Fc8f93b602B5C0524A7

mydeploy: Test

deploying "Test" (tx: 0x0683cf3b7b42f2d8227deb6b19a63b0ed55bd412b59cde45283406e83f52b9c2)...: deployed at 0x4ee6790cb522ca40E993571E545b7cd0837395Af with 194199 gas
Test.address:  0x4ee6790cb522ca40E993571E545b7cd0837395Af

await Test.amount1():  10000000000
await Test.amount2():  10000000000
await Test.amount3():  10000000000
await Test.total():  30000000000
✨  Done in 46.40s.
```

## for polygon

```
yarn deploy:test:polygon
```

output

```
yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network polygon --tags Test
Nothing to compile
start..
hre.network.name = polygon
signers[0].getBalance:  2006467430922362070
deployer = 0x6eA8D23189aE68F1423c6Fc8f93b602B5C0524A7





mydeploy: Test

reusing "Test" at 0xa1c12e8C62d180F392217394ce15D8b113E46ed4
Test.address:  0xa1c12e8C62d180F392217394ce15D8b113E46ed4
await Test.amount1():  10000000000
await Test.amount2():  10000000000
await Test.amount3():  10000000000
await Test.total():  30000000000
✨  Done in 442.88s.
```

## for bsc

```
yarn deploy:test:bsc
```

output

```

yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network bsc --tags Test
Nothing to compile
start..
hre.network.name = bsc
signers[0].getBalance:  627176380000000000
deployer = 0x6eA8D23189aE68F1423c6Fc8f93b602B5C0524A7





mydeploy: Test

deploying "Test" (tx: 0xf68b2745607201c565e670643e053a689056bd68aa99d0cb3c833154d1f57097)...: deployed at 0x2CD2f283f1Eb10cD83FC85b226A93EaBE5E1DE8C with 188599 gas
Test.address:  0x2CD2f283f1Eb10cD83FC85b226A93EaBE5E1DE8C
await Test.amount1():  10000000000
await Test.amount2():  10000000000
await Test.amount3():  10000000000
await Test.total():  30000000000
✨  Done in 50.17s.
```

## for harmony

```
yarn deploy:test:harmony
```

output

```
yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network harmony --tags Test
Nothing to compile
start..
hre.network.name = harmony
signers[0].getBalance:  9630470190000000000
deployer = 0x6eA8D23189aE68F1423c6Fc8f93b602B5C0524A7





mydeploy: Test

deploying "Test" (tx: 0x69610ee409f8f8db14dd1a1e3b6c71b72af5047d5db1f647459c133293a7dae2)...: deployed at 0x922f60Ca2953d02e6De59dc36599D7A05C5bE357 with 188599 gas
Test.address:  0x922f60Ca2953d02e6De59dc36599D7A05C5bE357
await Test.amount1():  10000000000
await Test.amount2():  10000000000
await Test.amount3():  10000000000
await Test.total():  30000000000
✨  Done in 43.70s.
```

## for harmony testnet

```
yarn deploy:test:harmonytest
```

output

```

yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network harmonytest --tags Test
Nothing to compile
start..
hre.network.name = harmonytest
signers[0].getBalance:  993601264450000000000
deployer = 0x6eA8D23189aE68F1423c6Fc8f93b602B5C0524A7





mydeploy: Test

deploying "Test" (tx: 0x1e1104284fa4299ec96c4d3852e52807b06305ed40b3dabd3fc0d9a1eb7e9c79)...: deployed at 0x364CCE1F5009924D7EaDD6f1d76e69B2eCDBc92e with 188599 gas
Test.address:  0x364CCE1F5009924D7EaDD6f1d76e69B2eCDBc92e
await Test.amount1():  10000000000
await Test.amount2():  10000000000
await Test.amount3():  10000000000
await Test.total():  30000000000
✨  Done in 51.14s.

```

## for avalanche

```
yarn deploy:test:avalanche
```

output

```
yarn run v1.22.10
warning ../../package.json: No license field
$ hardhat deploy --network avalanche --tags Test
Nothing to compile
start..
hre.network.name = avalanche
signers[0].getBalance:  1992816822514951565
deployer = 0x6eA8D23189aE68F1423c6Fc8f93b602B5C0524A7





mydeploy: Test

deploying "Test" (tx: 0x87582ef300c93e734378d9acb03010a6614012bdef24b1b71a9d23ced937b040)...: deployed at 0xa1c12e8C62d180F392217394ce15D8b113E46ed4 with 194199 gas
Test.address:  0xa1c12e8C62d180F392217394ce15D8b113E46ed4
await Test.amount1():  10000000000
await Test.amount2():  10000000000
await Test.amount3():  10000000000
await Test.total():  30000000000
✨  Done in 39.57s.
```
