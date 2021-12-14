# ethereum-api

A simple Ethereum API proxy for multi-EVM dapps

## API

- GET `/account-balance?address={address}&chainId={chainId}`
- GET `/account-assets?address={address}&chainId={chainId}`
- GET `/account-transactions?address={address}&chainId={chainId}`
- GET `/account-nonce?address={address}&chainId={chainId}`
- GET `/account-collectibles?address={address}`
- GET `/token-balance?address={address}&contractAddress={contractAddress}&chainId={chainId}`
- GET `/gas-limit?contractAddress={contractAddress}&data={data}&chainId={chainId}`
- GET `/gas-prices`
- GET `/gas-guzzlers`
- GET `/eth-prices`
- GET `/dai-prices`
- GET `/block-number?chainId={chainId}`
- GET `/chain-data?chainId={chainId}`
- GET `/supported-chains`
- POST `/custom-request?chainId={chainId}` (body: JSON-RPC request)
- POST `/rpc?chainId={chainId}` (body: JSON-RPC request)

## Examples

### GET Account Balance

Required Params: address, chainId

```bash
GET https://ethereum-api.xyz/account-balance?address=0xfeBD6abD30D8E1AD477957C376efb79d1758B8c1&chainId=1

# Response
{
    "success": true,
    "result": {
        "symbol": "ETH",
        "name": "Ethereum",
        "decimals": "18",
        "contractAddress": "",
        "balance": "0"
    }
}
```

### GET Account Assets

Required Params: address, chainId

```bash
GET https://ethereum-api.xyz/account-assets?address=0xfeBD6abD30D8E1AD477957C376efb79d1758B8c1&chainId=1

# Response
{
    "success": true,
    "result": [
        {
            "symbol": "ETH",
            "name": "Ethereum",
            "decimals": "18",
            "contractAddress": "",
            "balance": "0"
        },
        {
            "symbol": "BKC",
            "name": "Bankcoin Cash",
            "decimals": "8",
            "contractAddress": "0xc88be04c809856b75e3dfe19eb4dcf0a3b15317a",
            "balance": "158552014464"
        }
    ]
}
```

### GET Account Transactions

Required Params: address, chainId

```bash
GET https://ethereum-api.xyz/account-transactions?address=0xfeBD6abD30D8E1AD477957C376efb79d1758B8c1&chainId=1

# Response
{
    "success": true,
    "result": [
        {
            "timestamp": "1549654458000",
            "hash": "0x837991f0f72fb1acc63b386dbbd59957a9034476af20264378507d627a9e6569",
            "from": "0xfebd6abd30d8e1ad477957c376efb79d1758b8c1",
            "to": "0x8b17190217491094d09d7c8ca5ef683ac251c900",
            "nonce": "3",
            "gasPrice": "1000000000",
            "gasUsed": "21000",
            "fee": "21000000000000",
            "value": "720919600000000",
            "input": "0x",
            "error": false,
            "asset": {
                "symbol": "ETH",
                "name": "Ethereum",
                "decimals": "18",
                "contractAddress": ""
            },
            "operations": []
        },
        {
            "timestamp": "1548329044000",
            "hash": "0xf24978e7502e97342a679b7a5d1fe9b41a56d497f4ed17293ba64b4c4bbce757",
            "from": "0xfebd6abd30d8e1ad477957c376efb79d1758b8c1",
            "to": "0xc88be04c809856b75e3dfe19eb4dcf0a3b15317a",
            "nonce": "2",
            "gasPrice": "1500000000",
            "gasUsed": "24178",
            "fee": "36267000000000",
            "value": "0",
            "input": "0xa9059cbb0000000000000000000000008b17190217491094d09d7c8ca5ef683ac251c900000000000000000000000000000000000000000000000055f3831b1ab52a0000",
            "error": true,
            "asset": {
                "symbol": "ETH",
                "name": "Ethereum",
                "decimals": "18",
                "contractAddress": ""
            },
            "operations": []
        },
        {
            "timestamp": "1540938002000",
            "hash": "0xd9c6e897a164ac0947ba5b005a80f4dbd9cf61544d61ac2d8481c61d60c2d7a0",
            "from": "0xfebd6abd30d8e1ad477957c376efb79d1758b8c1",
            "to": "0xc88be04c809856b75e3dfe19eb4dcf0a3b15317a",
            "nonce": "1",
            "gasPrice": "1200000000",
            "gasUsed": "24178",
            "fee": "29013600000000",
            "value": "0",
            "input": "0xa9059cbb0000000000000000000000008b17190217491094d09d7c8ca5ef683ac251c900000000000000000000000000000000000000000000000055f3831b1ab52a0000",
            "error": true,
            "asset": {
                "symbol": "ETH",
                "name": "Ethereum",
                "decimals": "18",
                "contractAddress": ""
            },
            "operations": []
        },
        {
            "timestamp": "1540675507000",
            "hash": "0xad42e20f783e4c5a6407e9fea9a0ac26aebc76e45a04d9bb68886b3fe2dd0e1d",
            "from": "0xfebd6abd30d8e1ad477957c376efb79d1758b8c1",
            "to": "0xc88be04c809856b75e3dfe19eb4dcf0a3b15317a",
            "nonce": "0",
            "gasPrice": "2300000000",
            "gasUsed": "83826",
            "fee": "192799800000000",
            "value": "0",
            "input": "0x",
            "error": false,
            "asset": {
                "symbol": "ETH",
                "name": "Ethereum",
                "decimals": "18",
                "contractAddress": ""
            },
            "operations": [
                {
                    "asset": {
                        "symbol": "BKC",
                        "name": "Bankcoin Cash",
                        "decimals": "8",
                        "contractAddress": "0xc88be04c809856b75e3dfe19eb4dcf0a3b15317a"
                    },
                    "value": "158552014464",
                    "from": "0x0000000000000000000000000000000000000000",
                    "to": "0xfebd6abd30d8e1ad477957c376efb79d1758b8c1",
                    "functionName": "0x"
                }
            ]
        },
        {
            "timestamp": "1538926843000",
            "hash": "0xe8ab634b5e03491b938c011346fa4f2ac37ca64dceb37b5b362b30cf5b6676f1",
            "from": "0xc2b082e2efe9abab6f042d15beb46380b1952398",
            "to": "0xfebd6abd30d8e1ad477957c376efb79d1758b8c1",
            "nonce": "5809",
            "gasPrice": "2500000000",
            "gasUsed": "21000",
            "fee": "52500000000000",
            "value": "1000000000000000",
            "input": "0x",
            "error": false,
            "asset": {
                "symbol": "ETH",
                "name": "Ethereum",
                "decimals": "18",
                "contractAddress": ""
            },
            "operations": []
        }
    ]
}
```

### GET Account Nonce

Required Params: address, chainId

```bash
GET https://ethereum-api.xyz/account-nonce?address=0xfeBD6abD30D8E1AD477957C376efb79d1758B8c1&chainId=1

# Response
{
    "success": true,
    "result": 4
}
```

### GET Account Collectibles (Ethereum Mainnet only)

Required Params: address

```bash
GET https://ethereum-api.xyz/account-collectibles?address=0xfeBD6abD30D8E1AD477957C376efb79d1758B8c1

# Response
You can find a reference on OpenSea API at https://docs.opensea.io/reference#getting-assets
```

### GET Token Balance

Required Params: address, chainId, contractAddress

```bash
GET https://ethereum-api.xyz/token-balance?address=0xfeBD6abD30D8E1AD477957C376efb79d1758B8c1&contractAddress=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359&chainId=1

# Response
{
    "success": true,
    "result": {
        "symbol": "DAI",
        "name": "Dai Stablecoin v1.0",
        "decimals": "18",
        "contractAddress": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
        "balance": ""
    }
}
```

### GET Gas Limit

Required Params: contractAddress, data, chainId

```bash
GET https://ethereum-api.xyz/gas-limit?contractAddress=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359&data=0xa9059cbb0000000000000000000000009b7b2b4f7a391b6f14a81221ae0920a9735b67fb0000000000000000000000000000000000000000000000000de0b6b3a7640000&chainId=1

# Response
{
    "success": true,
    "result": 37298
}
```

### GET Gas Prices (Ethereum Mainnet only)

Required Params: none

**Note:** Returned values of `price` values are in Gwei, `time` is in seconds.

```bash
GET https://ethereum-api.xyz/gas-prices

# Response
{
    "success": true,
    "result": {
        "timestamp": 1549666078325,
        "slow": {
            "time": 858,
            "price": 1.1
        },
        "average": {
            "time": 150,
            "price": 1.2
        },
        "fast": {
            "time": 36,
            "price": 25
        }
    }
}
```

### GET Gas Guzzlers (Ethereum Mainnet only)

Required Params: none

```bash
GET https://ethereum-api.xyz/gas-guzzlers

# Response
{
    "success": true,
    "result": [
        {"address":"0xe9428d4a341ac20e9f2e6b95b12c9ad52733fcd9","pct":"13.69","gasused":3548306,"id":""},
        ...
    ]
}
```

### GET ETH Prices (Ethereum Mainnet only)

Required Params: none
Optional Params: fiat (default: USD,EUR,GBP)

```bash
GET https://ethereum-api.xyz/eth-prices?fiat=USD,EUR,GBP,JPY

# Response
{
    "success": true,
    "result": {
        "USD": 154.75,
        "EUR": 137.59,
        "GBP": 118.44,
        "JPY": 17444.71
    }
}
```

### GET DAI Prices (Ethereum Mainnet only)

Required Params: none
Optional Params: fiat (default: USD,EUR,GBP)

```bash
GET https://ethereum-api.xyz/dai-prices?fiat=USD,EUR,GBP,JPY

# Response
{
    "success": true,
    "result": {
        "USD": 154.75,
        "EUR": 137.59,
        "GBP": 118.44,
        "JPY": 17444.71
    }
}
```

### GET Block Number

Required Params: chainId

```bash
GET https://ethereum-api.xyz/block-number?chainId=1

# Response
{
    "success": true,
    "result": 7412670
}
```

### GET Chain Data

Required Params: chainId

```bash
GET https://ethereum-api.xyz/chain-data?chainId=1

# Response
{
    "success": true,
    "result": {
        "name": "Ethereum Mainnet",
        "short_name": "eth",
        "chain": "ETH",
        "network": "mainnet",
        "chain_id": 1,
        "network_id": 1,
        "rpc_url": "https://mainnet.infura.io/v3/INFURA_ID",
        "native_currency": {
            "symbol": "ETH",
            "name": "Ethereum",
            "decimals": "18",
            "contractAddress": "",
            "balance": ""
        }
    }
}
```

### GET Supported Chains

Required Params: none

```bash
GET https://ethereum-api.xyz/supported-chains

# Response
{
    "success": true,
    "result": [
        {
            "name": "Ethereum Mainnet",
            "short_name": "eth",
            "chain": "ETH",
            "network": "mainnet",
            "chain_id": 1,
            "network_id": 1,
            "rpc_url": "https://mainnet.infura.io/v3/INFURA_ID",
            "native_currency": {
                "symbol": "ETH",
                "name": "Ethereum",
                "decimals": "18",
                "contractAddress": "",
                "balance": ""
            }
        },
        {
            "name": "Ethereum Ropsten",
            "short_name": "rop",
            "chain": "ETH",
            "network": "ropsten",
            "chain_id": 3,
            "network_id": 3,
            "rpc_url": "https://ropsten.infura.io/v3/206405f9762348f99d0d5c27004b2213",
            "native_currency": {
                "symbol": "ETH",
                "name": "Ethereum",
                "decimals": "18",
                "contractAddress": "",
                "balance": "292431829496767250000"
            }
        },
        {
            "name": "Ethereum Rinkeby",
            "short_name": "rin",
            "chain": "ETH",
            "network": "rinkeby",
            "chain_id": 4,
            "network_id": 4,
            "rpc_url": "https://rinkeby.infura.io/v3/INFURA_ID",
            "native_currency": {
                "symbol": "ETH",
                "name": "Ethereum",
                "decimals": "18",
                "contractAddress": "",
                "balance": ""
            }
        },
        {
            "name": "Ethereum Görli",
            "short_name": "gor",
            "chain": "ETH",
            "network": "goerli",
            "chain_id": 5,
            "network_id": 5,
            "rpc_url": "https://goerli.infura.io/v3/INFURA_ID",
            "native_currency": {
                "symbol": "ETH",
                "name": "Ethereum",
                "decimals": "18",
                "contractAddress": "",
                "balance": ""
            }
        },
        {
            "name": "RSK Mainnet",
            "short_name": "rsk",
            "chain": "RSK",
            "network": "mainnet",
            "chain_id": 30,
            "network_id": 30,
            "rpc_url": "https://public-node.rsk.co",
            "native_currency": {
                "symbol": "RSK",
                "name": "RSK",
                "decimals": "18",
                "contractAddress": "",
                "balance": "0"
            }
        },
        {
            "name": "Ethereum Kovan",
            "short_name": "kov",
            "chain": "ETH",
            "network": "kovan",
            "chain_id": 42,
            "network_id": 42,
            "rpc_url": "https://kovan.infura.io/v3/INFURA_ID",
            "native_currency": {
                "symbol": "ETH",
                "name": "Ethereum",
                "decimals": "18",
                "contractAddress": "",
                "balance": ""
            }
        },
        {
            "name": "Ethereum Classic Mainnet",
            "short_name": "etc",
            "chain": "ETC",
            "network": "mainnet",
            "chain_id": 61,
            "network_id": 1,
            "rpc_url": "https://ethereumclassic.network",
            "native_currency": {
                "symbol": "ETH",
                "name": "Ethereum",
                "decimals": "18",
                "contractAddress": "",
                "balance": ""
            }
        },
        {
            "name": "POA Network Sokol",
            "short_name": "poa",
            "chain": "POA",
            "network": "sokol",
            "chain_id": 77,
            "network_id": 77,
            "rpc_url": "https://sokol.poa.network",
            "native_currency": {
                "symbol": "POA",
                "name": "POA",
                "decimals": "18",
                "contractAddress": "",
                "balance": ""
            }
        },
        {
            "name": "POA Network Core",
            "short_name": "skl",
            "chain": "POA",
            "network": "core",
            "chain_id": 99,
            "network_id": 99,
            "rpc_url": "https://core.poa.network",
            "native_currency": {
                "symbol": "POA",
                "name": "POA",
                "decimals": "18",
                "contractAddress": "",
                "balance": "0"
            }
        },
        {
            "name": "xDAI Chain",
            "short_name": "xdai",
            "chain": "POA",
            "network": "dai",
            "chain_id": 100,
            "network_id": 100,
            "rpc_url": "https://dai.poa.network",
            "native_currency": {
                "symbol": "xDAI",
                "name": "xDAI",
                "decimals": "18",
                "contractAddress": "",
                "balance": "0"
            }
        },
        {
            "name": "Callisto Mainnet",
            "short_name": "clo",
            "chain": "callisto",
            "network": "mainnet",
            "chain_id": 820,
            "network_id": 1,
            "rpc_url": "https://clo-geth.0xinfra.com/",
            "native_currency": {
                "symbol": "CLO",
                "name": "CLO",
                "decimals": "18",
                "contractAddress": "",
                "balance": "0"
            }
        }
    ]
}
```

### POST Custom JSON-RPC Request

Required Params: chainId

```bash
POST https://ethereum-api.xyz/custom-request?chainId=1

# Body
{
    "method": "eth_chainId",
    "params": []
}

# Response
{
    "success": true,
    "result": "0x1"
}
```

### POST Full JSON-RPC Request

Required Params: chainId

```bash
POST https://ethereum-api.xyz/rpc?chainId=1

# Body
{
	"id": 1337,
	"jsonrpc": "2.0",
	"method": "eth_blockNumber",
	"params": []
}

# Response
{
    "id": 1337,
    "jsonrpc": "2.0",
    "result": "0x7c6359"
}
```

### Error Responses

Example of an error response

```bash
# Error
{
    "success": false,
    "error": "Internal Server Error",
    "message": "Missing or invalid chainId parameter"
}
```
