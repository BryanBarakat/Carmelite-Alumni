<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header('Content-Type: application/json; charset=utf-8');

    session_start();

    require("connect.php");
    
    $sql = "SELECT first_name	,last_name	,date_of_birth	,phone_personal_info	,gender	,nationality,	residency	,street	,building	,email	,phone_address	,front_id_passport	,back_id_passport	,photo_id	,school	,user_type	,final_year_school	,graduation_year_school	,year_of_entry_school	,floor	,professional_career,	career_title	,career_company	,siblings_in_carmelite	,sibling_names	,sibling_emails	,sibling_phones	,message	,university_studies	,university_diplomas	,university_years	,father_name	,governorate,state,other_phone FROM users";
    $query = mysqli_query($connection,$sql);
    if($query){
        while ($row = mysqli_fetch_assoc($query)) {
            print_r(json_encode($row));
        }
    } else{
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($connection);
    }
    
    mysqli_close($connection);
?>