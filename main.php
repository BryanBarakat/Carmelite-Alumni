<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header('Content-Type: application/json; charset=utf-8');

    session_start();

    require("connect.php");

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    
    $first_name = $data["first_name"];
    $last_name = $data["last_name"];
    $date_of_birth = $data["date_of_birth"];
    $phone_personal_info = $data["phone_personal_info"];
    $gender = $data["gender"];
    $nationality = $data["nationality"];
    $residency = $data["residency"];
    $street = $data["street"];
    $building = $data["building"];
    $email = $data["email"];
    $phone_address = $data["phone_address"];
    $front_id_passport = $data["front_id_passport"];
    $back_id_passport = $data["back_id_passport"];
    $photo_id = $data["photo_id"];
    $school = $data["school"];
    $user_type = $data["user_type"];
    $final_year_school = $data["final_year_school"];
    $graduation_year_school = $data["graduation_year_school"];
    $year_of_entry_school = $data["year_of_entry_school"];
    $floor = $data["floor"];
    $career_title = $data["career_title"];
    $professional_career = $data["professional_career"];
    $career_company = $data["career_company"];
    $siblings_in_carmelite = $data["siblings_in_carmelite"];
    $sibling_names = $data["sibling_names"];
    $sibling_emails = $data["sibling_emails"];
    $sibling_phones = $data["sibling_phones"];
    $message = $data["message"];
    $university_studies = $data["university_studies"];
    $university_diplomas = $data["university_diplomas"];
    $university_years = $data["university_years"];
    $father_name = $data["father_name"];
    $governorate = $data["governorate"];
    $state = $data["state"];
    $other_phone = $data["other_phone"];
    
    $sql = "INSERT INTO users (first_name	,last_name	,date_of_birth	,phone_personal_info	,gender	,nationality,	residency	,street	,building	,email	,phone_address	,front_id_passport	,back_id_passport	,photo_id	,school	,user_type	,final_year_school	,graduation_year_school	,year_of_entry_school	,floor	,professional_career,	career_title	,career_company	,siblings_in_carmelite	,sibling_names	,sibling_emails	,sibling_phones	,message	,university_studies	,university_diplomas	,university_years	,father_name	,governorate,state,other_phone) VALUES ('$first_name'	,'$last_name'	,'$date_of_birth'	,'$phone_personal_info'	,'$gender'	,'$nationality'	,'$residency'	,'$street'	,'$building'	,'$email'	,'$phone_address','$front_id_passport'	,'$back_id_passport'	,'$photo_id'	,'$school'	,'$user_type'	,'$final_year_school'	,'$graduation_year_school'	,'$year_of_entry_school'	,'$floor'	,'$professional_career',	'$career_title'	,'$career_company'	,'$siblings_in_carmelite'	,'$sibling_names'	,'$sibling_emails'	,'$sibling_phones'	,'$message'	,'$university_studies'	,'$university_diplomas'	,'$university_years'	,'$father_name'	,'$governorate','$state','$other_phone')";
    $query = mysqli_query($connection,$sql);
    if($query){
        echo "Records inserted successfully.";
    } else{
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($connection);
    }
    
    mysqli_close($connection);
?>