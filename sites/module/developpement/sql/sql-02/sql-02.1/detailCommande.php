<?php
    require("dataDetail.php");
?>


<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <link type="text/css" rel="stylesheet" href="./css/normalize.css" />
        <link type="text/css" rel="stylesheet" href="./css/stylesheet.css" />
        <title>Affichage des commandes clients</title>
    </head>
    
    <body id="detailDesCommandes">
       <section>
           
           <ul>
               <li>Nom du client : <?php echo $customers["customerName"] ?></li>
               <li>Nom du contact : <?php echo $customers["contactLastName"] ?></li>
               <li>Prénom du contact : <?php echo $customers["contactFirstName"] ?></li>
               <li>Adresse : <?php echo $customers["addressLine1"] . " " . $customers["addressLine2"]?></li>
               <li>Ville : <?php echo $customers["city"] ?></li>
           </ul>
       </section>
       
       <section>
            
            <?php foreach($orderDetails as $orderDetail) : ?>
                <ul>
                    <?php $productCode = $orderDetail["productCode"];
                    $req = $pdo->prepare("SELECT * FROM orderdetails AS od JOIN products AS p ON od.productCode = p.productCode WHERE p.productCode =  '{$productCode}'");

                    $req->execute();

                    $products = $req->fetch(PDO::FETCH_ASSOC);
                    ?>
                    
                    <li>Nom du produit : <?php echo $products["productName"] ?></li>
                    <li>Quantité commandé : <?php echo $orderDetail["quantityOrdered"] ?></li>
                    <li>Prix unitaire : <?php echo $orderDetail["priceEach"] ?></li>
                    <li>Sous-total : <?php echo $orderDetail["sousTotal"] ?></li>
                    <?php $sousTotal = $orderDetail["sousTotal"]?>
                    <?php $total = $total + $sousTotal; ?>
                </ul>
            <?php endforeach ?>
       </section>
       
       <section>
           <ul>
               <li>Total de la commande HT : <?php echo $total?></li>
               <?php $TVA = $total * (20/100);
               $TVA = ROUND($TVA, 2)?>
               <li>Montant de la TVA : <?php echo $TVA?></li>
               <?php $prixFinal = $total + $TVA?>
               <li>Total de la commande TTC : <?php echo $prixFinal?></li>
           </ul>
       </section>
       
       <?php $pdo = null; ?>
    </body>
</html>