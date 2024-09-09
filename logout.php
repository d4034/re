<?php
session_start();

if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    
    // قراءة ملف المستخدمين المتصلين
    $file = 'online_users.json';
    $users_online = json_decode(file_get_contents($file), true);
    
    // إزالة المستخدم المتصل
    if (($key = array_search($username, $users_online)) !== false) {
        unset($users_online[$key]);
    }
    
    // إعادة تخزين القائمة المحدثة
    file_put_contents($file, json_encode($users_online));

    // إنهاء جلسة المستخدم
    session_destroy();
    
    // إعادة توجيه المستخدم لصفحة تسجيل الدخول
    header('Location: login.html');
}
?>
