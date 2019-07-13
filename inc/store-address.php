<?php

 function storeAddress() {

    // Validation
    if(!$_POST['MERGE0']) { 
        return "No email address provided"; 
    } 

    if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*$/i", $_POST['MERGE0'])) {
        return "Email address is invalid"; 
    }


    require_once('MCAPI.class.php'); 

    $api = new MCAPI('api-key');

    $merge_vars = Array( 
        'WEBSITE' => $_POST['MERGE1'],
        'EMAIL' => $_POST['MERGE0']
        );

    $list_id = "list_id";

    if($api->listSubscribe($list_id, $_POST['MERGE0'], $merge_vars ) === true) {
        return 'Success!&nbsp;';
    } else {
        // An error ocurred, return error message   
        return '<b>Error:</b>&nbsp; ' . $api->errorMessage;
    }

}

// If being called via ajax, autorun the function
if($_POST['ajax']){ echo storeAddress(); }
?>