<?php
$a = "теперь пора всем хорошим людям прийти на помощь стране";

$worlds = explode( " ", $a);
$b = [
    $worlds[1],
    $worlds[0],
    $worlds[8],
    $worlds[5],
    $worlds[6],
    $worlds[7],
    $worlds[2],
    $worlds[3],
    $worlds[4],
];
$b = join(" ", $b);
echo $b;