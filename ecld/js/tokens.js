async function addETNYToken() {

    $('#btn-spinner-etny').removeClass('visually-hidden');
    $('#btn-add-etny').attr('disabled', true);


    try {

        await window.ethereum.request(
            {
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: etnyToken['chainDetails']['chainId'] }]
            });

    } catch(err) {

        if (err.code === 4902 || err.code === -32603) {
            logger('warning', `(addETNYToken) -- chaiId ${etnyToken['chainID']} is not presented (Code: ${err.code}). Trying to add...`);

            try {

                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [ etnyToken['chainDetails'] ]
                });

            } catch(err) {

                if (err.code === 4001) {
                    logger('warning', `(addETNYToken) -- User cancelled request to change the network: (Code: ${err.code})`);

                    $('#btn-spinner-etny').addClass('visually-hidden');
                    $('#btn-add-etny').attr('disabled', false);                
        
                    showToast(false, `User cancelled the operation!`);
        
                    return;
        
                } else {
                    logger('warning', `(addETNYToken) -- Unknown problem: (Code: ${err.code})`);

                    $('#btn-spinner-etny').addClass('visually-hidden');
                    $('#btn-add-etny').attr('disabled', false);                
        
                    showToast(false, `Cannot switch your wallet to ${etnyToken['chainDetails']['chainName']} (Code: ${err.code})`);
        
                    return;
        
                }

            }

        } else if (err.code === 4001) {

            logger('warning', `(addETNYToken) -- User cancelled request to change the network: (Code: ${err.code})`);

            $('#btn-spinner-etny').addClass('visually-hidden');
            $('#btn-add-etny').attr('disabled', false);        
        
            showToast(false, `User cancelled the operation!`);

            return;

        } else {

            logger('warning', `(addETNYToken) -- Unknown problem: (Code: ${err.code})`);

            $('#btn-spinner-etny').addClass('visually-hidden');
            $('#btn-add-etny').attr('disabled', false);

            showToast(false, `Cannot switch your wallet to ${etnyToken['chainDetails']['chainName']} (Code: ${err.code})`);

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

        if (err.code === 4001) {

            logger('warning', `(addETNYToken) -- User cancelled the request to add the token: (Code: ${err.code})`);

            $('#btn-spinner-etny').addClass('visually-hidden');
            $('#btn-add-etny').attr('disabled', false);        
        
            showToast(false, `User cancelled the operation!`);

            return;

        } else {

            logger('warning', `(addWalletAsset) -- Cannot add asset (${err.code})`);

            $('#btn-spinner-etny').addClass('visually-hidden');
            $('#btn-add-etny').attr('disabled', false);
        
            showToast(false, `Cannot add asset (Code: ${err.code}). Try to add it manually.`);

            return false;

        }

    }


    $('#btn-spinner-etny').addClass('visually-hidden');
    $('#btn-add-etny').attr('disabled', false);

    showToast(true, `Successfully added ETNY token to your wallet!`);
    
}




async function addECLDToken() {

    $('#btn-spinner-ecld').removeClass('visually-hidden');
    $('#btn-add-ecld').attr('disabled', true);

    
    try {

        await window.ethereum.request(
            {
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: ecldToken['chainDetails']['chainId'] }]
            });

    } catch(err) {

        if (err.code === 4902 || err.code === -32603) {
            logger('warning', `(addECLDToken) -- chaiId ${ecldToken['chainID']} is not presented (Code: ${err.code}). Trying to add...`);

            try {

                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [ ecldToken['chainDetails'] ]
                });

            } catch(err) {

                if (err.code === 4001) {
                    logger('warning', `(addECLDToken) -- User cancelled request to change the network: (Code: ${err.code})`);

                    $('#btn-spinner-ecld').addClass('visually-hidden');
                    $('#btn-add-ecld').attr('disabled', false);
        
                    showToast(false, `User cancelled the operation!`);
        
                    return;
        
                } else {
                    logger('warning', `(addECLDToken) -- Unknown problem: (Code: ${err.code})`);

                    $('#btn-spinner-ecld').addClass('visually-hidden');
                    $('#btn-add-ecld').attr('disabled', false);
        
                    showToast(false, `Cannot switch your wallet to ${ecldToken['chainName']} (Code: ${err.code})`);
        
                    return;
        
                }

            }

        } else if (err.code === 4001) {

            logger('warning', `(addECLDToken) -- User cancelled request to change the network: (Code: ${err.code})`);

            $('#btn-spinner-ecld').addClass('visually-hidden');
            $('#btn-add-ecld').attr('disabled', false);
        
            showToast(false, `User cancelled the operation!`);

            return;

        } else {

            logger('warning', `(addECLDToken) -- Unknown problem: (Code: ${err.code})`);

            $('#btn-spinner-ecld').addClass('visually-hidden');
            $('#btn-add-ecld').attr('disabled', false);

            showToast(false, `Cannot switch your wallet to ${ecldToken['chainName']} (Code: ${err.code})`);

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

        if (err.code === 4001) {

            logger('warning', `(addECLDToken) -- User cancelled the request to add the token (Code: ${err.code})`);

            $('#btn-spinner-ecld').addClass('visually-hidden');
            $('#btn-add-ecld').attr('disabled', false);        
        
            showToast(false, `User cancelled the operation!`);

            return;

        } else {

            logger('warning', `(addECLDToken) -- Cannot add asset (${err.code})`);

            $('#btn-spinner-ecld').addClass('visually-hidden');
            $('#btn-add-ecld').attr('disabled', false);
        
            showToast(false, `Cannot add asset (Code: ${err.code}). Try to add it manually.`);

            return false;

        }

    }

    $('#btn-spinner-ecld').addClass('visually-hidden');
    $('#btn-add-ecld').attr('disabled', false);

    showToast(true, `Successfully added ECLD token to your wallet!`);
    
}