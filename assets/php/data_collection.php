<?
    require_once '../../../mysqli_connection.php';
    $name_saved = $_POST["entered_name"];
    $name_saved = (string)$name_saved;
    $email_saved = $_POST["email_typed"];
    $email_saved = (string)$email_saved;
    $message_typed = $_POST["message_typed1"];
    $my_email = "jimmy.grzybek@gmail.com";
    
    $query_entry = "INSERT INTO contacts_entered (contact_email, contact_name, contact_message) VALUES  ( '$email_saved', '$name_saved', '$message_typed' )";
    
    $success = (mysqli_query( $link, $query_entry));

    if($success){
        echo $name_saved;
    }
    else{
        echo "ERROR205";
    }
?>