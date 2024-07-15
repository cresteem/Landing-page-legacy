<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $servername = "localhost";
    $username = "";
    $password = "";
    $dbname = "";

    // Create a connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Sanitize and retrieve POST data
    $name = $conn->real_escape_string($_POST["cname"]);
    $contact = $conn->real_escape_string($_POST["cphone"]);
    $email = $conn->real_escape_string($_POST["cemail"]);
    $req = $conn->real_escape_string($_POST["creq"]);

    // SQL query to insert data into the table
    $sql = "INSERT INTO form_requests (name, contact, email, req) VALUES ('$name', '$contact', '$email', '$req')";

    if ($conn->query($sql) === true) {
        $response = 1;
    } else {
        $response = 0;
    }

    // Close the connection
    $conn->close();

    echo $response;
}
?>
