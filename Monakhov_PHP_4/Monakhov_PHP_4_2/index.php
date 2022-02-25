<?php

$i = 0;

while (++$i) {
    if ($i >=10) {
        break;
    }
    switch ($i) {
        case 5:
            echo "Итерация 5" . " ";
        case 10:
            echo "Итерация 10";
    }
}