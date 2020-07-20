<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Traducteur Anglais - Français</title>
    </head>
    
    <body>
        <h1>Traducteur Anglais - Français</h1>
        
        <form method="POST" action="data.php" id="traduct">
            <select name="direction">
                <option value="translateEnglish">Anglais vers francais</option>
                <option value="translateFrench">French to english</option>
            </select>
            
            <input type="text" name="word" placeholder="Word to translate" />
            <input type="submit" value="submit" />
        </form>
    </body>
</html>