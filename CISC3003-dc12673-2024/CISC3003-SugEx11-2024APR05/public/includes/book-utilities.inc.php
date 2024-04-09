<?php

function readCustomers($fileName){
    // Read file
    $customersTxt = fopen($fileName, "r") or die ("File open failed.");

    // Read file line by line
    $customers = [];
    while(($line = fgets($customersTxt)) != false){
        // Parse data using delimiter ;
        $custDataList = explode(";", $line);

        // Convert to json format
        $custDataJson = array(
            "customerId" => $custDataList[0],
            "firstName" => $custDataList[1],
            "lastName" => $custDataList[2],
            "email" => $custDataList[3],
            "university" => $custDataList[4],
            "address" => $custDataList[5],
            "city" => $custDataList[6],
            "state" => $custDataList[7],
            "country" => $custDataList[8],
            "zipOrPostal" => $custDataList[9],
            "phone" => $custDataList[10],
            "sales" => $custDataList[11],
        );

        json_encode($custDataJson);

        // Append into the array
        array_push($customers, $custDataJson);
    }
    fclose($customersTxt);
    
    return $customers;
}   

function readOrders($customer, $fileName){}



?>