<?php
    require('read.php');
?>


<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Liste de taches</title>
        <link type="text/css" rel="stylesheet" href="./css/normalize.css" />
        <link type="text/css" rel="stylesheet" href="./css/stylesheet.css" />
    </head>
    
    <body>
        <h1>Liste de taches</h1>
        
        <form method="POST" action="data.php" id="traduct">
            <input type="text" name="title" placeholder="Titre de la tache" />
            <textarea name="textarea" rows="5" cols="30" placeholder="Descriptif de la tache"></textarea>
            <input type="date" name="deadline" placeholder="Date butoir" />
            
            <label for="pet-select">Choisir la priorité de la tache :</label>
            
            <select name="priority" id="priority-select">
                <option value="low">Basse</option>
                <option value="normal">Normal</option>
                <option value="High">Haute</option>
            </select>
            <input type="submit" value="submit" id="button"/>
        </form>
        
        
        
        <?php if(!empty($data)) : ?>
            <h1>Liste de tache en cours</h1>
            
            <ul id="flex1">
                <?php foreach($data as $index => $todolist) : ?>
                    <form action="deleteOneTask.php" method="POST">
                        <li>
                            <ul>
                                <li>Tache fini ? 
                                    <input type="checkbox" name="task" class="check" />
                                    <input type="hidden" name="taskId" value="<?= $index ?>"/>
                                </li>

                                <?php foreach($todolist as $index => $element) : ?>
                                    <li><?= $element ?></li>
                                <?php endforeach ?>
                                
                            </ul>
                            <button type="submit">Effacer cette tache</button>
                        </li>
                    </form>
                <?php endforeach ?>
            </ul>
        <?php endif ?>
        
        <script src="./js/main.js"></script>
    </body>
</html>


