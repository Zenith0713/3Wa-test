<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Compte à rebours</title>
    </head>
    <body>
         
         
         <?php
            //generer un nombre aleatoire entre 1 et 49
            //l'affecter a une variable, puis la mettre dans le tableau
            $tirage = [];
            $title = "Lotterie";

            $rules = ["rule 1 ", "rule 2", "rule 3"];

            
            //Pour le nombre de fois choisi (ici 6) regenerer un nombre entre un min (1) et un max (49)
            //Affecter chaque nombre dans le tableau
            
            
            function lotterie($tirage = [], $i = 0) {
                
                $longueurTableau = 6;
                $min = 1;
                $max = 49;
                
                
                for ($i; $i < $longueurTableau; $i++) {
                
                    $nombreAlea = random_int($min, $max);
                    
                    //Tant que le nombre choisi est un doublons, regenerer un nouveau nombre
                    // Si l'element existe dans le tableau
                    if (in_array($nombreAlea, $tirage)) {
                    
                        return lotterie($tirage, $i);
                        
                    } 
                
                    //$tirage[] = $nombreAlea;
                
                    array_push($tirage, $nombreAlea);
                
                }
                
                return $tirage;
            }
            
            
            
            //trier les 6 nombres tirer
            $array = lotterie();
            
            sort($array);
            
            //afficher le resultat en html
            
            echo "<h1>" . "$title" . "</h1>";
            
            echo "<ul>" . "<li>" . $rules[0] . "</<li>" . "<li>" . $rules[1] . "</<li>"  . "<li>" . $rules[2] . "</<li>" . "</ul>";
            
            foreach($array as $element) {
                echo $element . " ";
            }
            
         ?>
         
         
         
    </body>
</html>