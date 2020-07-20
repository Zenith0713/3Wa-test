<?php
    require("data.php");
?>


<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <link type="text/css" rel="stylesheet" href="./css/normalize.css" />
        <link type="text/css" rel="stylesheet" href="./css/stylesheet.css" />
        <title>Affichage des commandes clients</title>
    </head>
    
    <body id="listeDesCommandes">
       <table>
           <tr>
               <th colspan="4" id ="titreTable">Liste des commandes</th>
           </tr>
           
           <tr id ="secondTitreTable">
               <th>Numéro de la commande</th>
               <th>Date de commande</th>
               <th>Date de livraison</th>
               <th>Statut de la commande</th>
           </tr>
           
           
            <?php foreach($orders as $order) : ?>
                <tr>
                     <td> <a href="detailCommande.php?orderNumber=<?php echo $order["orderNumber"] ?>&customerNumber=<?php echo $order["customerNumber"] ?>"> 
                         <?php echo $order["orderNumber"] ?> 
                     </a></td>
                     <td> <?php echo $order["orderDate"] ?> </td>
                     <td> <?php echo $order["requiredDate"] ?> </td>
                     <td> <?php echo $order["status"] ?> </td>
                 </tr>
                 
                
            <?php endforeach ?>
            
           
           
       </table>
    </body>
</html>