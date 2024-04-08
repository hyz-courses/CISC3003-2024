<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CISC3003 Practice 10</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.blue_grey-orange.min.css">

    <link rel="stylesheet" href="css/styles.css">
    <script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>
</head>

<body>

    <!-- The drawer is always open in large screens. The header is always shown,
  even in small screens. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">

        <!-- Header -->
        <?php
            include('./php/header.inc.php');
            echo $header;
        ?>

        <!-- Left Bar -->
        <?php
            include('./php/left.inc.php');
            echo $sidebar;
        ?>

        <main class="mdl-layout__content mdl-color--grey-50">
            <header class="mdl-color--blue-grey-200">
                <h4>Order Summaries</h4>
                <p>Examine your customer orders</p>
            </header>
            <section class="page-content">

                <div class="mdl-grid">

                    <!-- mdl-cell + mdl-card -->
                    <div class="mdl-cell mdl-cell--3-col card-lesson mdl-card  mdl-shadow--2dp">
                        <div class="mdl-card__title mdl-color--deep-purple mdl-color-text--white">
                            <h2 class="mdl-card__title-text">My Orders</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            <ul class="mdl-list">
                                <li><a href="#">Order #500</a></li>
                                <li><a href="#">Order #510</a></li>
                                <li><a href="#">Order #520</a></li>
                                <li><a href="#">Order #530</a></li>
                                <li><a href="#">Order #540</a></li>
                            </ul>
                        </div>
                    </div> <!-- / mdl-cell + mdl-card -->




                    <!-- mdl-cell + mdl-card -->
                    <div class="mdl-cell mdl-cell--9-col card-lesson mdl-card  mdl-shadow--2dp">
                        <div class="mdl-card__title mdl-color--orange">
                            <h2 class="mdl-card__title-text">Selected Order: #520</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            <table class="mdl-data-table  mdl-shadow--2dp">
                                <caption>Customer: <strong>Mount Royal University</strong></caption>
                                <!-- Table Header -->
                                <thead>
                                    <tr>
                                        <th>Cover</th>
                                        <th class="mdl-data-table__cell--non-numeric">Title</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>


                                <!-- Table Body -->
                                <?php
                                    /** ========== Data Part ========== */
                                    // Import the datas
                                    include('./php/data.inc.php');
                                    
                                    // Make data into lists
                                    $files = [$file1, $file2, $file3, $file4];
                                    $titles = [$title1, $title2, $title3, $title4];
                                    $quantities = [$quantity1, $quantity2, $quantity3, $quantity4];
                                    $prices = [$price1, $price2, $price3, $price4];

                                    // Compute Subtotal
                                    function getSubTotal($q, $p){
                                        $subtotal = 0;
                                        for ($i=0; $i<count($q); $i++){
                                            $subtotal += $q[$i] * $p[$i];
                                        }
                                        return $subtotal;
                                    }

                                    // Compute Shipping
                                    function getShipping($subtotal, $threshold){
                                        return $subtotal > $threshold ? 100: 200;
                                    }
                                    
                                    // Single row of table
                                    function outputOrderRow($file, $title, $quantity, $price){
                                        echo '<tr>';
                                        echo '<td><img src="images/books/tinysquare/'.$file.'"></td>';
                                        echo '<td class="mdl-data-table__cell--non-numeric">'.$title.'</td>';
                                        echo '<td>'.number_format($quantity,2).'</td>';
                                        echo '<td>$'.number_format($price,2).'</td>';
                                        echo '<td>$'.number_format($quantity*$price,2).'</td>';
                                        echo '</tr>';
                                    }

                                    // Single row of table footer
                                    function outputTableFooterRow($item, $value, $isGrand=false){
                                        $className = $isGrand ? "grandtotals" : "totals";
                                        echo '<tr class="'.$className.'">';
                                        echo '<td colspan="4">'.$item.'</td>';
                                        echo '<td> $'.$value.'</td>';
                                        echo '</tr>';
                                    }
                                    
                                    /** ========== Rendering Part ========== */
                                    // Get Basic Values
                                    $subtotal = getSubTotal($quantities, $prices);
                                    $shipping = getShipping($subtotal, 10000);
                                    $grandTotal = $shipping + $subtotal;

                                    // Render Table Body 
                                    echo '<tbody>';
                                    for ($i=0; $i < count($files); $i++){
                                        outputOrderRow($files[$i], $titles[$i], $quantities[$i], $prices[$i]);
                                    }
                                    echo '</tbody>';

                                    // Render Table Footer
                                    echo '<tfoot>';
                                    outputTableFooterRow('Subtotal', $subtotal);
                                    outputTableFooterRow('Shipping', $shipping);
                                    outputTableFooterRow('Grand Total', $grandTotal, true);
                                    echo '</tfoot>';
                                ?>
                            </table>
                        </div>

                    </div> <!-- / mdl-cell + mdl-card -->




                </div> <!-- / mdl-grid -->


            </section>
        </main>


    </div>

</body>

</html>