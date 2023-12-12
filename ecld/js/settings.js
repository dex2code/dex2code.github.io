
const logPrefix = 'ECLD';
const walletDownloadURL = 'https://metamask.io/download';


var activeWalletAccount = null;
var displayWalletAccount = null;


const appDebug = true;


const etnyToken = {

    chainDetails: {
        chainId: '0x2323',
        chainName: 'bloxberg',
        rpcUrls: [ 'https://core.bloxberg.org' ],
        blockExplorerUrls: [ 'https://blockexplorer.bloxberg.org' ],
        nativeCurrency: {
            name: 'U+25B3',
            symbol: 'U+25B3',
            decimals: 18
        }
    },

    name: 'ETNY',
    symbol: 'ETNY',
    sc: '0x549A6E06BB2084100148D50F51CF77a3436C3Ae7',
    decimals: 18,

    networkURL: 'https://bloxberg.org',
    networkFaucet: 'https://faucet.bloxberg.org'

};


const ecldToken = {

    chainDetails: {
        chainId: '0x89',
        chainName: 'Polygon Mainnet',
        rpcUrls: [ 'https://polygon-rpc.com' ],
        blockExplorerUrls: [ 'https://polygonscan.com' ],
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18
        }
    },

    name: 'ECLD',
    symbol: 'ECLD',
    sc: '0xc6920888988cAcEeA7ACCA0c96f2D65b05eE22Ba',
    decimals: 18,

    networkURL: 'https://polygon.technology'

};
