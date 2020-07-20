<?php

require('helper.php');
require('read.php');

$post = cleanPost($_POST);

$index = $post["taskId"];


// https://js.tensorflow.org/api/latest/

array_splice($data, $index , 1);


$handle = fopen('todolist.csv', 'w');


foreach($data as $task) {
    fputcsv($handle, $task);    
}


fclose($handle);


header('Location: index.php');


die();