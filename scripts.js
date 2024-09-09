document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // منع التحديث الافتراضي للصفحة

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // بيانات تسجيل الدخول الوهمية
    const validUsername = "as3g_as";
    const validPassword = "as3g_xg";

    if (username === validUsername && password === validPassword) {
        // إذا كانت بيانات الدخول صحيحة
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerText = 'Login successful! Redirecting...';

        // إعادة التوجيه إلى صفحة أخرى بعد تسجيل الدخول بنجاح
        setTimeout(() => {
            window.location.href = "dashboard.html";  // توجيه إلى الصفحة الجديدة
        }, 2000);  // تأخير بسيط قبل إعادة التوجيه
    } else {
        // إذا كانت بيانات الدخول غير صحيحة
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerText = 'Invalid username or password.';
    }
});
const showPasswordButton = document.getElementById('showPasswordButton');

showPasswordButton.addEventListener('click', function() {
    passwordContainer.style.display = 'flex';
});
