<?php 

require("helper.php");

$post = $_POST;
$cleanPost = cleanPost($post);

$handle = fopen("todolist.csv", "a+");

fputcsv($handle, $cleanPost);

fclose($handle);


header('Location: index.php');



// echo "<p>" . $cleanPost["title"] . "</p>";
// echo "<p>" . $cleanPost["textarea"] . "</p>";
