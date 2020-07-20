<?php 

$dictionnary = [
    'chat' => 'cat',
    'chien' => 'dog',
    'laurent' => 'superman'
];


function clean($string) {
    $clean =  htmlentities($string);
    $clean =  htmlspecialchars($string);
    
    return $clean;
}


function cleanPost($post) {
    $rebuildPost = [];
    
    foreach($post as $key => $value ) {
                        // <script>
        $cleanString = clean($value);
       // &lt;script&gt;
        
        $rebuildPost[$key] = $cleanString;
        
    }
    
    return $rebuildPost;
}


$post = $_POST;
$cleanPost = cleanPost($post);
// $word = $cleanPost['word'];
$direction = $cleanPost["direction"];



function translate($dictionnary, $cleanPost, $direction) {
    
    if($direction == "translateEnglish") {
        echo "<h2>" . "Anglais vers Francais" . "</h2>" ;
        if(in_array($cleanPost["word"], $dictionnary)) {
            echo $cleanPost["word"] . ", ce mot est dans le dictionnaire. Il signifie " . array_search($cleanPost["word"], $dictionnary) . ". ";
        } else {
            echo "Ce mot n'est pas dans le dictionnaire Anglais";
        }
    }
    
    if($direction == "translateFrench") {
        echo "<h2>" . "French to English" . "</h2>" ;
        
        if(array_key_exists($cleanPost["word"], $dictionnary)) {
            echo $cleanPost["word"] . ", ce mot est dans le dictionnaire. Il signifie " . $dictionnary[$cleanPost["word"]] . ". ";
        } else {
            echo "This word is not in the French dictionary";
        }
    }
}


if(!empty($cleanPost)) {
    translate($dictionnary, $cleanPost, $direction);
}
