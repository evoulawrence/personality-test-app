<?php
require "../bootstrap.php";
use Src\Controllers\PersonalityTestController;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

// all of our endpoints start with /teamway
// everything else results in a 404 Not Found
if ($uri[1] !== 'teamway') {
    header("HTTP/1.1 404 Not Found");
    exit();
}

$username = null;
$password = null;
if (isset($_GET['username']) && isset($_GET['password'])) {
    $username = $_GET['username'];
    $password = $_GET['password'];
}

$requestMethod = $_SERVER["REQUEST_METHOD"];

// pass the request method to the PersonalityTestController and process the HTTP request:
$controller = new PersonalityTestController($dbConnection, $requestMethod, $username, $password);
$controller->processRequest();

?>