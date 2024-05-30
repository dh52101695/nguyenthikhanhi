function validateForm() {
    var user = nameInput.value.trim();
    var pass = passInput.value.trim();
    var isValid=true;

    if (user === '') {
        userErrorMessage.textContent = 'Vui Lòng Nhập User Của Bạn';
        isValid = false;
    } else {
        userErrorMessage.textContent = '';
    }
    if (user === '') {
        passErrorMessage.textContent = 'Vui Lòng Nhập PASS Của Bạn';
        isValid = false;
    } else {
        passErrorMessage.textContent = '';
    }
    if (isValid) {
        alert('Đăng nhập thành công!');
    }
}