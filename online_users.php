<?php
// قراءة ملف JSON للمستخدمين المتصلين
$file = 'online_users.json';
$users_online = json_decode(file_get_contents($file), true);

// عرض قائمة المستخدمين المتصلين
if (!empty($users_online)) {
    echo "<h2>Users Online:</h2>";
    echo "<ul>";
    foreach ($users_online as $user) {
        echo "<li>" . htmlspecialchars($user) . "</li>";
    }
    echo "</ul>";
} else {
    echo "<p>No users online.</p>";
}
?>
