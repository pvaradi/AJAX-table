<?php

require "db_config.php";
$sql = "SELECT id, user_name, user_password FROM forum_users";
$result = mysqli_query($conn, $sql);
$rows = array();

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($fetch = mysqli_fetch_assoc($result)) {
        $rows[] = $fetch;
    }
} else {
    echo "0 results";
}

echo json_encode($rows, JSON_UNESCAPED_UNICODE);

mysqli_close($conn);
?>