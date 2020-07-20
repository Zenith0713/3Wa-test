<?php

$pdo = new PDO(
    "mysql:host=home.3wa.io:3307;dbname=live-33_axeloubs0713_models",
    "axeloubs0713",
    "6dde7ce7ODA1MWJhZDNjZDZjOWMyZjQxN2ZjNjI394c94713",
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

$pdo->exec("set names utf8");

// 
//var_dump($customers);

$orderNumber = $_GET["orderNumber"];

//1-productName
    //1.1-Besoin du productCode
//2-quantityOrdered
//3-priceEach
//4-sous-total

/*
SELECT * 
FROM orders AS o
JOIN orderdetails AS od ON o.orderNumber = od.orderNumber 
WHERE id = $orderNumber;
*/

$newStatement = $pdo->prepare("SELECT *, ROUND(od.quantityOrdered * od.priceEach) AS sousTotal FROM orders AS o JOIN orderdetails AS od ON o.orderNumber = od.orderNumber WHERE od.orderNumber = " . $orderNumber);

$newStatement->execute();

$orderDetails = $newStatement->fetchAll(PDO::FETCH_ASSOC);



$customerNumber = $_GET["customerNumber"];

$statement = $pdo->prepare("SELECT * FROM customers WHERE customerNumber = " . $customerNumber);

$statement->execute();

$customers = $statement->fetch(PDO::FETCH_ASSOC);

$total = 0;

