$('#href-wallet').attr('href', walletDownloadURL);


$('#span-ETNYnetworkURL').text(etnyToken['networkURL']);
$('#btn-ETNYnetworkURL').attr('href', etnyToken['networkURL']);

$('#span-ETNYnetworkExplorer').text(etnyToken['chainDetails']['blockExplorerUrls']);
$('#btn-ETNYnetworkExplorer').attr('href', etnyToken['chainDetails']['blockExplorerUrls']);

$('#span-ETNYnetworkFaucet').text(etnyToken['networkFaucet']);
$('#btn-ETNYnetworkFaucet').attr('href', etnyToken['networkFaucet']);


$('#span-bloxName').text(etnyToken['chainDetails']['chainName']);
$('#span-bloxRPC').text(etnyToken['chainDetails']['rpcUrls']);
$('#span-bloxId').text(etnyToken['chainDetails']['chainId'] + ' (' + Number(etnyToken['chainDetails']['chainId']) + ')');
$('#span-bloxCurrency').text(etnyToken['chainDetails']['nativeCurrency']['symbol']);
$('#span-bloxExplorer').text(etnyToken['chainDetails']['blockExplorerUrls']);


$('#span-etnySC').text(etnyToken['sc']);
$('#span-etnySymbol').text(etnyToken['symbol']);
$('#span-etnyDec').text(etnyToken['decimals']);

$('#btn-viewETNY').attr('href', `${etnyToken['chainDetails']['blockExplorerUrls'][0]}/token/${etnyToken['sc']}`);



$('#span-ECLDnetworkURL').text(ecldToken['networkURL']);
$('#btn-ECLDnetworkURL').attr('href', ecldToken['networkURL']);


$('#span-ECLDnetworkExplorer').text(ecldToken['chainDetails']['blockExplorerUrls']);
$('#btn-ECLDnetworkExplorer').attr('href', ecldToken['chainDetails']['blockExplorerUrls']);

$('#span-ECLDnetworkFaucet').text(ecldToken['networkFaucet']);
$('#btn-ECLDnetworkFaucet').attr('href', ecldToken['networkFaucet']);

$('#href-wallet').attr('href', walletDownloadURL);


$('#span-polygonName').text(ecldToken['chainDetails']['chainName']);
$('#span-polygonRPC').text(ecldToken['chainDetails']['rpcUrls']);
$('#span-polygonId').text(ecldToken['chainDetails']['chainId'] + ' (' + Number(ecldToken['chainDetails']['chainId']) + ')');
$('#span-polygonCurrency').text(ecldToken['chainDetails']['nativeCurrency']['symbol']);
$('#span-polygonExplorer').text(ecldToken['chainDetails']['blockExplorerUrls']);

$('#span-ecldSC').text(ecldToken['sc']);
$('#span-ecldSymbol').text(ecldToken['symbol']);
$('#span-ecldDec').text(ecldToken['decimals']);

$('#btn-viewECLD').attr('href', `${ecldToken['chainDetails']['blockExplorerUrls'][0]}/token/${ecldToken['sc']}`)
