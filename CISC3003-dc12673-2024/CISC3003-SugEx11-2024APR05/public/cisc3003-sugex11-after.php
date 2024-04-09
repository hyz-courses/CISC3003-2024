<?php

include 'includes/book-utilities.inc.php';




?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>CISC3003 Suggested Exercise 11</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.blue_grey-orange.min.css">
    <link rel="stylesheet" href="css/styles.css">

    <script src="https://code.jquery.com/jquery-1.7.2.min.js"></script>
    <script src="https://code.getmdl.io/1.1.3/material.min.js"></script>
    <script src="js/jquery.sparkline.2.1.2.js"></script>

    <script>
    $(function() {
        $('.inlinebar').sparkline('html', {
            type: 'bar',
            barColor: 'purple'
        });
    });
    </script>

</head>

<body>

    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">

        <?php include 'includes/header.inc.php'; ?>
        <?php include 'includes/left-nav.inc.php'; ?>

        <main class="mdl-layout__content mdl-color--grey-50">
            <section class="page-content">

                <div class="mdl-grid">

                    <!-- mdl-cell + mdl-card -->
                    <div class="mdl-cell mdl-cell--7-col card-lesson mdl-card  mdl-shadow--2dp">
                        <div class="mdl-card__title mdl-color--orange">
                            <h2 class="mdl-card__title-text">Customers</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            <table class="mdl-data-table  mdl-shadow--2dp">
                                <thead>
                                    <tr>
                                        <th class="mdl-data-table__cell--non-numeric">Name</th>
                                        <th class="mdl-data-table__cell--non-numeric">University</th>
                                        <th class="mdl-data-table__cell--non-numeric">City</th>
                                        <th>Sales</th>
                                    </tr>

                                    <!-- Customer Table -->
                                    <?php
                                        // Get customer data in json format
                                        $customers = readCustomers("./data/customers.txt");

                                        // Function to parse bar chart data
                                        function parseBarChartData($dataString){
                                            // Use , as delimiter to parse
                                            $dataCharList = explode(",", $dataString);

                                            // Convert to integer
                                            $bcDataStr = "";
                                            for($i = 0; $i < count($dataCharList); $i++){
                                                $bcDataStr = $bcDataStr.$dataCharList[$i].($i == count($dataCharList) - 1 ? "" :  ",");
                                            }
                                            return $bcDataStr;
                                        }

                                        // Render table for all customers.
                                        foreach($customers as $custDataJson){
                                            // Process URL
                                            $rawUrl = "./cisc3003-sugex11-after.php";
                                            $url = $rawUrl.'?customerId='.urlencode($custDataJson['customerId']);

                                            // Parse bar-chart data
                                            $salesData = parseBarChartData($custDataJson['sales']);
                                            
                                            // Table Row
                                            echo '<tr>';
                                            
                                            echo '<th><a href='.$url.'>'.$custDataJson["firstName"].'</a></th>';
                                            echo '<th>'.$custDataJson["university"].'</th>';
                                            echo '<th>'.$custDataJson["city"].'</th>';
                                            echo '<th><span class="inlinebar">'.$salesData.'</span></th>';

                                            echo '</tr>';
                                        }
                                    ?>
                                </thead>
                                <tbody>


                                </tbody>
                            </table>
                        </div>
                    </div> <!-- / mdl-cell + mdl-card -->


                    <div class="mdl-grid mdl-cell--5-col">



                        <!-- mdl-cell + mdl-card -->
                        <div class="mdl-cell mdl-cell--12-col card-lesson mdl-card  mdl-shadow--2dp">
                            <div class="mdl-card__title mdl-color--deep-purple mdl-color-text--white">
                                <h2 class="mdl-card__title-text">Customer Details</h2>
                            </div>
                            <div class="mdl-card__supporting-text">
                                <!-- Customer Name -->
                                <?php
                                    // echo $_GET['customerId'];
                                    $curCustJsonData = null;
                                    foreach($customers as $custJsonData){
                                        if($custJsonData['customerId'] == $_GET['customerId']){
                                            $curCustJsonData = $custJsonData;
                                        }
                                    }
                                    
                                    echo '<h4>'.$curCustJsonData['firstName'].' '.$curCustJsonData['lastName'].'</h4>';
                                ?>

                                <!-- Customer Details -->
                                <?php
                                    echo $curCustJsonData['university'];
                                    echo '<br>';
                                    echo $curCustJsonData['address'];
                                    echo '<br>';
                                    echo ''.$curCustJsonData['city'].', '.$curCustJsonData['country'].'';
                                ?>

                            </div>
                        </div> <!-- / mdl-cell + mdl-card -->

                        <!-- mdl-cell + mdl-card -->
                        <div class="mdl-cell mdl-cell--12-col card-lesson mdl-card  mdl-shadow--2dp">
                            <div class="mdl-card__title mdl-color--deep-purple mdl-color-text--white">
                                <h2 class="mdl-card__title-text">Order Details</h2>
                            </div>
                            <div class="mdl-card__supporting-text">



                                <table class="mdl-data-table  mdl-shadow--2dp">
                                    <thead>
                                        <tr>
                                            <th class="mdl-data-table__cell--non-numeric">Cover</th>
                                            <th class="mdl-data-table__cell--non-numeric">ISBN</th>
                                            <th class="mdl-data-table__cell--non-numeric">Title</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                    </tbody>
                                </table>


                            </div>
                        </div> <!-- / mdl-cell + mdl-card -->


                    </div>


                </div> <!-- / mdl-grid -->

            </section>
        </main>
    </div> <!-- / mdl-layout -->

</body>

</html>