<?php
$json = file_get_contents('items.json');
 header('Content-type: application/json');
 echo $json;

