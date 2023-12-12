async function checkWalletInstalled() {
    logger('debug', `(checkWalletInstalled) -- Checking the Ethereum wallet is installed...`);

    if (typeof window.ethereum == 'undefined') {

        logger('warning', `(checkWalletInstalled) -- No Ethereum Wallet found`);
        return false;

    } else {

        logger('debug', `(checkWalletInstalled) -- Found installed Ethereum Wallet`);
        return true;

    }

}




async function getWalletAccounts() {
    logger('debug', `(getWalletAccounts) -- Requesting wallet accounts...`);

    let walletAccounts = new Array();

    try {

        walletAccounts = await window.ethereum.request(
            {
                method: 'eth_requestAccounts',
                params: []
            });

    } catch (err) {

        if (err.code === 4001) {
            logger('warning', `(getWalletAccounts) -- User canceled the connection request (Code: ${err.code})`);
        }
        else {
            logger('warning', `(getWalletAccounts) -- An error occured during the wallet connection (Code: ${err.code})`);
        }

        return null;
    }

    logger('debug', `(getWalletAccounts) -- Received walletAccounts: (${walletAccounts})`);

    return walletAccounts;
}




async function connectWallet() {
    logger('debug', `(connectWallet) -- Connecting wallet...`);

    let walletAccounts = await getWalletAccounts();

    if (walletAccounts === null || walletAccounts.length === 0) {
        logger('warning', `(connectWallet) -- No walletAccounts found: (${walletAccounts})`);
        showToast(false, `Please connect your wallet to continue!`);


        disconnectWallet();
        return;
    }

    logger('debug', `(connectWallet) -- Received walletAccounts: (${walletAccounts})`);

    activeWalletAccount = walletAccounts[0];
    displayWalletAccount = '0♯' + activeWalletAccount.substr(2, 4) + ' ... ' + activeWalletAccount.substr(activeWalletAccount.length - 4, activeWalletAccount.length - 1);

    logger('debug', `(connectWallet) -- account ${activeWalletAccount} will be used`);
    
    await walletConnected();

    return;
}




async function disconnectWallet(toast = false) {
    logger('debug', `(disconnectWallet) -- Disconnecting wallet...`);
    if (toast === true) { showToast(false, `Wallet disconnected`); }

    activeWalletAccount = null;
    displayWalletAccount = null;

    $('#span-connect-wallet').text('');
    $('#btn-connect-wallet').off('click');

    initWallet();

    return;
}




async function walletConnected() {
    logger('debug', `(walletConnected) -- Final wallet checking...`);

    let walletAccounts = await getWalletAccounts();

    if (walletAccounts[0] === activeWalletAccount) {

        logger('debug', `(walletConnected) -- Wallet is finally connected with account (${walletAccounts[0]} === ${activeWalletAccount})`);
        showToast(true, `Your wallet successfully connected to the app!`);

        $('#btn-connect-wallet').off('click');
        $('#btn-connect-wallet').click(function() { disconnectWallet(true); });

        $('#span-connect-wallet').text(displayWalletAccount);

        $('#btn-add-etny').off('click');
        $('#btn-add-etny').click(function() { addETNYToken(); });

        $('#btn-add-ecld').off('click');
        $('#btn-add-ecld').click(function() { addECLDToken(); });

        window.ethereum.on('accountsChanged', handleAccountsChanged);

    } else {

        logger('warning', `(walletConnected) -- Wallet is not connected because of (${walletAccounts[0]} =?= ${activeWalletAccount}) or (${walletChainId} =?= ${appChainId})`);
        
        if (walletAccounts[0] !== activeWalletAccount) { showToast(false, `Check your wallet account and try again.`); }

        disconnectWallet();

    }

    return;
}




async function initWallet() {

    if (await checkWalletInstalled() === true) {

        $('#btn-connect-wallet').addClass('btn-outline-warning');
        $('#span-connect-wallet').text('Connect Wallet');
        $('#btn-connect-wallet').off('click');
        $('#btn-connect-wallet').click(function() { connectWallet(); });

    } else {

        $('#btn-connect-wallet').addClass('btn-outline-danger');
        $('#span-connect-wallet').text('Install Wallet');
        $('#btn-connect-wallet').off('click');
        $('#btn-connect-wallet').click(function() { window.open(walletDownloadURL); });

    }

    $('#btn-add-etny').off('click');
    $('#btn-add-etny').click(function() { showToast(false, "Connect your Wallet first!"); });

    $('#btn-add-ecld').off('click');
    $('#btn-add-ecld').click(function() { showToast(false, "Connect your Wallet first!"); });

    return;
}




async function handleAccountsChanged(accounts) {
    logger('debug', `(handleAccountsChanged) -- Handling accountsChanged event...`);

    if (accounts.length > 0) {
        disconnectWallet();
        connectWallet();
    } else {
        disconnectWallet(true);
    }

    return;
}



/*


async function getWalletChainId() {
    logger('debug', `(getWalletChainId) -- Requesting wallet chainId...`);

    let walletChainId = null;

    try {

        walletChainId = await window.ethereum.request(
            {
                method: 'eth_chainId',
                params: []
            });
    
    } catch (err) {

        logger('warning', `(getWalletChainId) -- Cannot get wallet chainId (Code: ${err.code})`);

        return null;
    }

    logger('debug', `(getWalletChainId) -- Received wallet chainId: (${walletChainId})`);

    return walletChainId;
}


async function checkWalletChainId() {
    logger('debug', `(checkWalletChainId) -- Checking wallet chainId...`);

    let walletChainId = await getWalletChainId();

    if (walletChainId === null) {
        logger('warning', `(checkWalletChainId) -- No wallet chainId found: (${walletChainId})`);

        disconnectWallet();
        return false;
    }

    if (walletChainId !== appChainId) {
        logger('warning', `(checkWalletChainId) -- User wallet has wrong chainId ${walletChainId} (expected ${appChainId})`);

        return false;
    } else {
        logger('debug', `(checkWalletChainId) -- User wallet has correct chainId (${walletChainId})`);

        return true;
    }
}



async function addWalletChainId() {
    logger('debug', `(addWalletChainId) -- Adding correct wallet chainId ${appChainId}...`);

    chainDetails = {
        chainId: appChainId,
        chainName: appChainName,
        nativeCurrency: appChainCurrency,
        rpcUrls: [ appChainRPC ],
        blockExplorerUrls: [ appChainExplorer ],
    };

    try {

        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [ chainDetails ]
        });
    
    } catch (err) {

        if (err.code === 4001) {
            logger('warning', `(addWalletChainId) -- User cancelled the request (Code: ${err.code})`);
            showToast(false, `Please add network '${appChainName}' to continue.`);
        } else {
            logger('warning', `(addWalletChainId) -- Cannot add chainId with details (${JSON.stringify(chainDetails)}) (Code: ${err.code})`);
            showToast(false, `Cannot add network '${appChainName}'. Check your wallet and try again.`);
        }

        return false;

    }

    logger('debug', `(addWalletChainId) -- Added correct wallet chainId ${appChainId}`);

    return true;
}




async function addWalletAsset(nftNumber) {
    logger('debug', `(addWalletAsset) -- Adding asset (${nftNumber}) to wallet...`);

    try {

        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC721',
                options: {
                    address: appSmartContract,
                    tokenId: nftNumber
                }
            }
        });
    
    } catch (err) {

        logger('warning', `(addWalletAsset) -- Cannot add asset (${err})`);
        showToast(false, `Cannot add asset to your wallet. Try to add it manually by ID: ${Number(nftNumber)}.`);

        return false;

    }

    logger('debug', `(addWalletAsset) -- Added successfully`);

    return true;


}

*/