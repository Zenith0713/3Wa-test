<?php

$credentials = [
    "host" => "home.3wa.io:3307",
    "dbname" => "live-33_axeloubs0713_",
    "username" => "axeloubs0713",
    "password" => "6dde7ce7ODA1MWJhZDNjZDZjOWMyZjQxN2ZjNjI394c94713",
];

$pdo = new PDO(
    "mysql:host=home.3wa.io:3307;dbname=live-33_axeloubs0713_models",
    $credentials["username"],
    $credentials["password"],
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

$pdo->exec("set names utf8");


$statement = $pdo->prepare("SELECT * FROM orders");

$statement->execute();

$orders = $statement->fetchAll(PDO::FETCH_ASSOC);

/* Chose a faire :


*/

