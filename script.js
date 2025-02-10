function copyPixKey() {
    const pixKeyInput = document.getElementById('pixKey');
    const copyButton = document.getElementById('copyButton');
    
    // Select the text input
    pixKeyInput.select();
    pixKeyInput.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy to clipboard
    navigator.clipboard.writeText(pixKeyInput.value).then(() => {
        // Visual feedback
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copiado! ';
        copyButton.style.backgroundColor = '#4a4a4a';
        
        // Return to original state after 2 seconds
        setTimeout(() => {
            copyButton.textContent = originalText;
            copyButton.style.backgroundColor = 'var(--primary-color)';
        }, 2000);
    }).catch(err => {
        console.error('Error copying Pix key:', err);
        alert('Não foi possível copiar a chave Pix');
    });
}

function handleQRCodeUpload(event) {
    const file = event.target.files[0];
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            qrCodeContainer.innerHTML = `<img src="${e.target.result}" alt="QR Code" class="uploaded-qr-code">`;
        };
        
        reader.readAsDataURL(file);
    }
}