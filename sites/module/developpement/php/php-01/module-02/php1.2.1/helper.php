<?php 

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
