<?php
session_start();

// معلومات تسجيل الدخول
$username = $_POST['username'];
$password = $_POST['password'];

// مثال بسيط للتحقق من صحة المستخدم (بدون قاعدة بيانات)
$valid_users = [
    'user1' => 'password1',
    'user2' => 'password2',
];

if (isset($valid_users[$username]) && $valid_users[$username] === $password) {
    // تخزين جلسة المستخدم
    $_SESSION['username'] = $username;
    
    // قراءة ملف المستخدمين المتصلين
    $file = 'online_users.json';
    $users_online = json_decode(file_get_contents($file), true);
    
    // إضافة المستخدم المتصل حاليًا إلى الملف
    if (!in_array($username, $users_online)) {
        $users_online[] = $username;
    }

    // حفظ التغييرات في الملف
    file_put_contents($file, json_encode($users_online));
    
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid login credentials']);
}
?>
