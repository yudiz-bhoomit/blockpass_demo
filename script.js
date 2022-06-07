const kycButton = document.getElementById('kyc');

kycButton.addEventListener('click', (e) => {
    console.log('button clicked');
});

setTimeout(() => {  
    const blockpass = new BlockpassKYCConnect('bfk_warzone_8b8bd', {
        elementId: 'kyc',
        mainColor: '800080',
        email: 'yuvraj.u@yudiz.in',
        refId: '620f42fcc8afd9e5041d635f',
    });
    blockpass.startKYCConnect()

}, 100);
