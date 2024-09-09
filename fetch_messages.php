<?php
// إعدادات الاتصال بقاعدة البيانات
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test_database"; // اسم قاعدة البيانات

// الاتصال بقاعدة البيانات
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
}

// جلب الرسائل من قاعدة البيانات
$sql = "SELECT username, message, created_at FROM messages ORDER BY created_at DESC";
$result = $conn->query($sql);

$messages = array();

if ($result->num_rows > 0) {
    // إخراج كل رسالة
    while($row = $result->fetch_assoc()) {
        $messages[] = $row;
    }
}

// تحويل البيانات إلى JSON
echo json_encode($messages);

$conn->close();
?>
