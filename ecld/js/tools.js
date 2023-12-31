async function logger(severity, message) {

    if (typeof severity !== 'string') {
        console.error(`${logPrefix} (${Date.now()}): Wrong severity parameter!`);
    }

    switch (severity) {

        case 'debug':
            if (appDebug === true) {
                console.log(`${logPrefix} (${Date.now()}): ${message}`);
            }
            break;

        case 'info':
            console.info(`${logPrefix} (${Date.now()}): ${message}`);
            break;

        case 'warning':
            console.warn(`${logPrefix} (${Date.now()}): ${message}`);
            break;

        case 'error':
            console.error(`${logPrefix} (${Date.now()}): ${message}`);
            break;

        default:
            console.error(`${logPrefix} (${Date.now()}): Wrong severity parameter!`);
            break;

    }
}


async function showToast(success, message) {

    $('html, body').animate({ scrollTop: 0 }, 'fast');

    $('#toast-body').removeClass('bg-success');
    $('#toast-body').removeClass('bg-danger');

    if (success === true) { $('#toast-body').addClass('bg-success'); }
    else { $('#toast-body').addClass('bg-danger'); }

    $('#toast-text').text(message);

    $('#toast-div').toast('show');

}
