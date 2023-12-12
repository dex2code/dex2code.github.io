async function addETNYToken() {
    
    try {

        await window.ethereum.request(
            {
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: etnyToken['chainDetails']['chainId'] }]
            });

    } catch(err) {

        if (err.code === 4902) {
            logger('warning', `(addETNYToken) -- chaiId ${etnyToken['chainID']} is not presented (Code: ${err.code}). Trying to add...`);

            try {

                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [ etnyToken['chainDetails'] ]
                });

            } catch(err) {

                if (err.code === 4001) {
                    logger('warning', `(addETNYToken) -- User cancelled request to change the network: (Code: ${err.code})`);
        
                    showToast(false, `User cancelled the operation!`);
        
                    return;
        
                } else {
                    logger('warning', `(addETNYToken) -- Unknown problem: (Code: ${err.code})`);
        
                    showToast(false, `Cannot switch your wallet to ${etnyToken['chainName']} (${err.code})`);
        
                    return;
        
                }

            }

        } else if (err.code === 4001) {

            logger('warning', `(addETNYToken) -- User cancelled request to change the network: (Code: ${err.code})`);
        
            showToast(false, `User cancelled the operation!`);

            return;

        } else {

            logger('warning', `(addETNYToken) -- Unknown problem: (Code: ${err.code})`);

            showToast(false, `Cannot switch your wallet to ${etnyToken['chainDetails']['chainName']} (${err.text})`);

            return;

        }

    }

    try {

        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: etnyToken['sc'],
                    symbol: etnyToken['symbol'],
                    decimals: etnyToken['decimals']
                }
            }
        });
    
    } catch (err) {

        logger('warning', `(addWalletAsset) -- Cannot add asset (${err})`);
        showToast(false, `Cannot add asset to your wallet. Try to add it manually.`);

        return false;

    }

    
}




async function addECLDToken() {
    
    try {

        await window.ethereum.request(
            {
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: ecldToken['chainDetails']['chainId'] }]
            });

    } catch(err) {

        if (err.code === 4902) {
            logger('warning', `(addECLDToken) -- chaiId ${ecldToken['chainID']} is not presented (Code: ${err.code}). Trying to add...`);

            try {

                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [ ecldToken['chainDetails'] ]
                });

            } catch(err) {

                if (err.code === 4001) {
                    logger('warning', `(addECLDToken) -- User cancelled request to change the network: (Code: ${err.code})`);
        
                    showToast(false, `User cancelled the operation!`);
        
                    return;
        
                } else {
                    logger('warning', `(addECLDToken) -- Unknown problem: (Code: ${err.code})`);
        
                    showToast(false, `Cannot switch your wallet to ${ecldToken['chainName']} (${err.code})`);
        
                    return;
        
                }

            }

        } else if (err.code === 4001) {

            logger('warning', `(addECLDToken) -- User cancelled request to change the network: (Code: ${err.code})`);
        
            showToast(false, `User cancelled the operation!`);

            return;

        } else {

            logger('warning', `(addECLDToken) -- Unknown problem: (Code: ${err.code})`);

            showToast(false, `Cannot switch your wallet to ${ecldToken['chainName']} (${err.code})`);

            return;

        }

    }

    try {

        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: ecldToken['sc'],
                    symbol: ecldToken['symbol'],
                    decimals: ecldToken['decimals']
                }
            }
        });
    
    } catch (err) {

        logger('warning', `(addWalletAsset) -- Cannot add asset (${err})`);
        showToast(false, `Cannot add asset to your wallet. Try to add it manually.`);

        return false;

    }

    
}