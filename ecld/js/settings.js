
const logPrefix = 'ECLD';
const walletDownloadURL = 'https://metamask.io/download/';


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
    decimals: 18

};
