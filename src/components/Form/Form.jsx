import React, { useState } from 'react';
import Input from "../../MiniComponents/Input/Input";
import Modal from '../Modal/Modal';
import axios from "axios";
import "./Form.css";

export const Form = () => {

    const [country,setCountry] = useState("Afghanistan");
    const [governorate,setGovernorate] = useState("Beirut");
    const [state,setState] = useState("BATROUN");
    const [first_name,setFirstName] = useState("");
    const [last_name,setLastName] = useState("");
    const [date_of_birth,setDateOfBirth] = useState("");
    const [phone_personal_info,setPhonePersonalInfo] = useState("");
    const [gender,setGender] = useState("Male");
    const [street,setStreet] = useState("");
    const [building,setBuilding] = useState("");
    const [email,setEmail] = useState("");
    const [phone_address,setPhoneAddress] = useState("");
    const [front_id_passport,setFrontIdPassport] = useState("");
    const [back_id_passport,setBackIdPassport] = useState("");
    const [photo_id,setPhotoId] = useState("");
    const [school,setSchool] = useState("مدرسة مار ضومط، القبيات");
    const [user_type,setUserType] = useState("Student / طالب");
    const [final_year_school,setFinalYearSchool] = useState("2021");
    const [graduation_year_school,setGraduationYearSchool] = useState("2021");
    const [year_of_entry_school,setYearOfEntrySchool] = useState("2021");
    const [floor,setFloor] = useState("");
    const [professional_career,setProfessionalCareer] = useState("");
    const [career_title,setCareerTitle] = useState("");
    const [career_company,setCareerCompany] = useState("");
    const [message,setMessage] = useState("");
    const [father_name,setFatherName] = useState("");
    const [siblings,setSiblings] = useState(true);
    const [other_phone,setOtherPhone] = useState("");
    const [nationality,setNationality] = useState("Afghanistan");
    const [siblingInfo, setSiblingInfo] = useState([
        { name: "", email: "", phone: "" },
        { name: "", email: "", phone: "" },
        { name: "", email: "", phone: "" },
    ]);
    const [universityStudies, setUniversityStudies] = useState([
        { university: "", diploma: "", year: "" },
        { university: "", diploma: "", year: "" },
        { university: "", diploma: "", year: "" },
        { university: "", diploma: "", year: "" },
    ]);

    const [modal,setModal] = useState(false);

    const siblingNames = siblingInfo.map((sibling) => sibling.name).join(", ");
    const siblingEmails = siblingInfo.map((sibling) => sibling.email).join(", ");
    const siblingPhones = siblingInfo.map((sibling) => sibling.phone).join(", ");

    const universityStudiesData = universityStudies.map((study) => study.university).join(", ");
    const universityStudiesDiplomas = universityStudies.map((study) => study.diploma).join(", ");
    const universityStudiesYears = universityStudies.map((study) => study.year).join(", ");

    const dataInfo = {
            first_name: first_name,
            last_name: last_name,
            date_of_birth: date_of_birth,
            phone_personal_info: phone_personal_info,
            gender: gender,
            nationality: nationality,
            residency: country,
            street: street,
            building: building,
            email: email,
            phone_address: phone_address,
            front_id_passport: front_id_passport,
            back_id_passport: back_id_passport,
            photo_id: photo_id,
            school: school,
            user_type: user_type,
            final_year_school: final_year_school,
            graduation_year_school: graduation_year_school,
            year_of_entry_school: year_of_entry_school,
            floor: floor,
            professional_career: professional_career,
            career_title: career_title,
            career_company: career_company,
            siblings_in_carmelite: siblings,
            sibling_names: siblingNames,
            sibling_emails: siblingEmails,
            sibling_phones: siblingPhones,
            message: message,
            university_studies: universityStudiesData,
            university_diplomas: universityStudiesDiplomas,
            university_years: universityStudiesYears,
            father_name: father_name,
            governorate: governorate,
            state: state,
            other_phone: other_phone,
    };

    const handleSiblingChange = (e, index, field) => {
        const updatedSiblingInfo = [...siblingInfo];
        updatedSiblingInfo[index][field] = e.target.value;
        setSiblingInfo(updatedSiblingInfo);
    };

    const handleUniversityStudyChange = (e, index, field) => {
        const updatedUniversityStudies = [...universityStudies];
        updatedUniversityStudies[index][field] = e.target.value;
        setUniversityStudies(updatedUniversityStudies);
    };

    const generateYears = () =>{
        let array = [];
        for(let i = 1940; i < 2022;i++){
            array.push(i);
        }
        return array.reverse();
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
    
        axios.post("http://localhost/PHP/main.php", dataInfo).then((response) => {
          console.log(JSON.parse(response.config.data));
          toggleModal();
        }).catch((err) =>{
            console.log(err);
        });
    };

    const closeModal = () => {
        setModal(false);
    };

    const toggleModal = () => {
        setModal(!modal);
    };

  return (
    <div className='application-container' id='form'>
        <div className="application-title">
            <h1><span>Application</span> Form</h1>
            <br />
            <h2>All your information are protected and will not be shared with any third party.</h2>
            <h2>جميع المعلومات الخاصة بك محمية ولن يتم مشاركتها مع أي طرف آخر</h2>
        </div>
        <div className="application-form">
            <form onSubmit={handleSubmit}>
                <div className="personal-info">
                    <div className="application-form-title">
                        Personal Information / معلومات شخصية
                    </div>
                    <div className="application-form-inputs">
                        <Input value={first_name} onChange={(e)=>setFirstName(e.target.value)} width="300px" type="text" nameInput="first_name" placeholder="First Name / الاسم"></Input>
                        <Input value={father_name} onChange={(e)=>setFatherName(e.target.value)} width="300px" type="text" nameInput="father_name" placeholder="Father's Name / اسم الأب"></Input>
                        <Input value={last_name} onChange={(e)=>setLastName(e.target.value)} width="300px" type="text" nameInput="last_name" placeholder="Last Name / الاسم"></Input>
                        <Input value={date_of_birth} onChange={(e)=>setDateOfBirth(e.target.value)} width="300px" type="date" nameInput="date_of_birth" label="Date of Birth / تاريخ الولادة" placeholder="first name / الاسم"></Input>
                        <Input value={phone_personal_info} onChange={(e)=>setPhonePersonalInfo(e.target.value)} width="300px" type="text" nameInput="phone_personal_info" placeholder="+xxx xxxxxx" label="Mobile Phone / رقم الهاتف"></Input>
                        <Input value={other_phone} onChange={(e)=>setOtherPhone(e.target.value)} width="300px" type="text" nameInput="other_phone" placeholder="+xxx xxxxxx" label="Other Phone / رقم آخر"></Input>
                        <Input value={gender} onChange={(e)=>setGender(e.target.value)} width="300px" nameInput="gender" options={["Male","Female"]} type="select" label="Gender"></Input>
                        <Input value={nationality} onChange={(e)=>setNationality(e.target.value)} width="300px" nameInput="nationality" options={["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]} type="select" label="Nationality / الجنسية"></Input>
                    </div>
                </div>
                <div className="current-address">
                    <div className="application-form-title">
                        Current Address / عنوان الإقامة الدائمة
                    </div>
                    <div className="prev-inps">

                        <Input width="300px" nameInput="residency" value={country} onChange={(e)=>setCountry(e.target.value)} options={["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]} type="select" label="Country of residence / بلد الإقامة"></Input>
                        {country == "Lebanon" && <Input value={governorate} onChange={(e)=>setGovernorate(e.target.value)} width="300px" type="select" options={["Beirut","Mount Lebanon","Bekaa","North Lebanon","Nabatiyeh","South Lebanon","Akkar","Baalbak El Hermel"]} label="Governorate / محافظة"></Input> }
                        {governorate != "Beirut" && governorate != "Akkar" && country == "Lebanon" && <Input value={state} onChange={(e)=>setState(e.target.value)} width="300px" type="select" options={["BATROUN","BECHAREH","AL MINIEH","DOUNIEH","TRIPOLI","ZGHARTA","KOURA","ALEY","BAABDA","JBEIL","KESERWAN","METN","CHOUF","RASHAYA","BEKAA WEST","ZAHLE","ALEY","BAABDA","JBEIL","KESERWAN","METN"]} label="Casa / القضاء"></Input> }
                    </div>
                    <div className="application-form-inputs">
                        <Input value={street} onChange={(e)=>setStreet(e.target.value)} width="300px" nameInput="street" type="text" className="fix-inp" placeholder="street / اسم الشارع"></Input>
                        <Input value={building} onChange={(e)=>setBuilding(e.target.value)} width="300px" nameInput="building" type="text" className="fix-inp" placeholder="building / اسم المبنى"></Input>
                        <Input value={floor} onChange={(e)=>setFloor(e.target.value)} width="300px" nameInput="floor" type="text" placeholder="floor / طابق"></Input>
                        <Input value={email} onChange={(e)=>setEmail(e.target.value)} width="300px" nameInput="email" type="text" placeholder="E-mail / البريد الإلكتروني"></Input>
                        <Input value={phone_address} onChange={(e)=>setPhoneAddress(e.target.value)} width="300px" nameInput="phone_address" type="text" placeholder="+xxx xxxxxx"></Input>
                    </div>
                    <div className="post-inps">
                        <Input value={front_id_passport} onChange={(e)=>setFrontIdPassport(e.target.value)} width="300px" nameInput="front_id_passport" type="file" label="Upload Front ID or Passport / تحميل نسخة عن بطاقات الهوية"></Input>
                        <Input value={back_id_passport} onChange={(e)=>setBackIdPassport(e.target.value)} width="300px" nameInput="back_id_passport" type="file" label="Upload Back ID or Passport / تحميل نسخة عن بطاقات الهوية"></Input>
                        <Input value={photo_id} onChange={(e)=>setPhotoId(e.target.value)} width="300px" nameInput="photo_id" type="file" className="fix-inp" label="Upload Photo ID / تحميل صورة شمسية"></Input>
                    </div>
                </div>
                <div className="year-diplomas">
                    <div className="application-form-title">
                        Year at the school and Diplomas / سنوات الدراسة في المدرسة و الشهادات
                    </div>
                    <div className="application-form-inputs">
                        <Input value={school} onChange={(e)=>setSchool(e.target.value)} width="300px" nameInput="school" type="select" options={["مدرسة مار ضومط، القبيات","مدرسة مار الياس، طرابلس (الطليان)","مدرسة سيدة الكرمل، الحازمية","مدرسة الكرملية، مجدليا"]} label="School / المدرسة"></Input>
                        <Input value={user_type} onChange={(e)=>setUserType(e.target.value)} width="300px" nameInput="user_type" type="select" options={["Student / طالب","Staff / عامل","Teacher / مدرس","Administrative / اداري"]}ptions label="Student or Staff? / طالب أم عامل؟"></Input>
                        <Input value={year_of_entry_school} onChange={(e)=>setYearOfEntrySchool(e.target.value)} width="300px" nameInput="year_of_entry_school" type="select" options={generateYears()} label="Year of entry / سنة الدخول"></Input>
                        <Input value={final_year_school} onChange={(e)=>setFinalYearSchool(e.target.value)} width="300px" nameInput="final_year_school" type="select" options={generateYears()} label="Final Year / سنة المغادرة"></Input>
                        <Input value={graduation_year_school} onChange={(e)=>setGraduationYearSchool(e.target.value)} width="300px" nameInput="graduation_year_school" type="select" options={generateYears()} label="Graduation Year / سنة التخرج"></Input>
                    </div>
                </div>
                <div className="uni-studies">
                    <div className="application-form-title">
                        University Studies / الدراسة الجامعية
                    </div>
                    <div className="application-form-inputs">
                        <Input value={universityStudies[0].university} onChange={(e) => handleUniversityStudyChange(e, 0, "university")} width="300px" type="text" placeholder="University / الجامعة ..."></Input>
                        <Input value={universityStudies[0].diploma} onChange={(e) => handleUniversityStudyChange(e, 0, "diploma")} width="300px" type="text" placeholder="Diploma / الشهادة ..."></Input>
                        <Input value={universityStudies[0].year} onChange={(e) => handleUniversityStudyChange(e, 0, "year")} width="300px" type="select" options={generateYears()} placeholder="Year / سنة"></Input>
                        <Input value={universityStudies[1].university} onChange={(e) => handleUniversityStudyChange(e, 1, "university")} width="300px" type="text" placeholder="University / الجامعة ..."></Input>
                        <Input value={universityStudies[1].year} onChange={(e) => handleUniversityStudyChange(e, 1, "diploma")} width="300px" type="text" placeholder="Diploma / الشهادة ..."></Input>
                        <Input value={universityStudies[1].year} onChange={(e) => handleUniversityStudyChange(e, 1, "year")} width="300px" type="select" options={generateYears()} placeholder="Year / سنة"></Input>
                        <Input value={universityStudies[2].university} onChange={(e) => handleUniversityStudyChange(e, 2, "university")} width="300px" type="text" placeholder="University / الجامعة ..."></Input>
                        <Input value={universityStudies[2].diploma} onChange={(e) => handleUniversityStudyChange(e, 2, "diploma")} width="300px" type="text" placeholder="Diploma / الشهادة ..."></Input>
                        <Input value={universityStudies[2].year} onChange={(e) => handleUniversityStudyChange(e, 2, "year")} width="300px" type="select" options={generateYears()} placeholder="Year / سنة"></Input>
                        <Input value={universityStudies[3].university} onChange={(e) => handleUniversityStudyChange(e, 3, "university")} width="300px" type="text" placeholder="University / الجامعة ..."></Input>
                        <Input value={universityStudies[3].diploma} onChange={(e) => handleUniversityStudyChange(e, 3, "diploma")} width="300px" type="text" placeholder="Diploma / الشهادة ..."></Input>
                        <Input value={universityStudies[3].year} onChange={(e) => handleUniversityStudyChange(e, 3, "year")} width="300px" type="select" options={generateYears()} placeholder="Year / سنة"></Input>
                    </div>
                </div>
                <div className="prof-info">
                    <div className="application-form-title">
                    Professional information / معلومات احترافية
                    </div>
                    <div className="application-form-inputs">
                        <Input value={professional_career} onChange={(e)=>setProfessionalCareer(e.target.value)} nameInput="professional_career" width="300px" type="text" placeholder="Career / المهنة ..."></Input>
                        <Input value={career_title} onChange={(e)=>setCareerTitle(e.target.value)} nameInput="career_title" width="300px" type="text" placeholder="Position, Title / الوظيفة ..."></Input>
                        <Input value={career_company} onChange={(e)=>setCareerCompany(e.target.value)} nameInput="career_company" width="300px" type="text" placeholder="Company, Establishment / اسم الشركة ، المؤسسة ..."></Input>
                    </div>
                </div>
                <div className="siblings">
                    <div className="application-form-title">
                    Do you have any older brothers / sisters / other family members of the Carmelite Fathers Alumni?
هل لديك اخوة / اخوات / او احد اعضاء العائلة من قدامى مدارس الآباء الكرمليين في لبنان؟
                    </div>
                    <Input value={siblings} onChange={(e)=>setSiblings(e.target.value)} width="100px" nameInput="siblings" className="yes-no" type="select" options={["Yes","No"]}></Input>
                    <div className="application-form-inputs">
                        <Input value={siblingInfo[0].name} onChange={(e) => handleSiblingChange(e, 0, "name")} width="300px" type="text" placeholder="Name / الإسم ..."></Input>
                        <Input value={siblingInfo[0].email} onChange={(e) => handleSiblingChange(e, 0, "email")} width="300px" type="text" placeholder="E-mail / البريد الإلكتروني ..."></Input>
                        <Input value={siblingInfo[0].phone} onChange={(e) => handleSiblingChange(e, 0, "phone")} width="300px" type="text" placeholder="Mobile Phone / رقم الهاتف ..."></Input>
                        <Input value={siblingInfo[1].name} onChange={(e) => handleSiblingChange(e, 1, "name")} width="300px" type="text" placeholder="Name / الإسم ..."></Input>
                        <Input value={siblingInfo[1].email} onChange={(e) => handleSiblingChange(e, 1, "email")} width="300px" type="text" placeholder="E-mail / البريد الإلكتروني ..."></Input>
                        <Input value={siblingInfo[1].phone} onChange={(e) => handleSiblingChange(e, 1, "phone")} width="300px" type="text" placeholder="Mobile Phone / رقم الهاتف ..."></Input>
                        <Input value={siblingInfo[2].name} onChange={(e) => handleSiblingChange(e, 2, "name")} width="300px" type="text" placeholder="Name / الإسم ..."></Input>
                        <Input value={siblingInfo[2].email} onChange={(e) => handleSiblingChange(e, 2, "email")} width="300px" type="text" placeholder="E-mail / البريد الإلكتروني ..."></Input>
                        <Input value={siblingInfo[2].phone} onChange={(e) => handleSiblingChange(e, 2, "phone")} width="300px" type="text" placeholder="Mobile Phone / رقم الهاتف ..."></Input>
                    </div>
                </div>
                <div className="message">
                    <div className="application-form-inputs">
                        <Input value={message} onChange={(e)=>setMessage(e.target.value)} nameInput="message" width="900px !important" type="text" placeholder="Here goes your message / اكتب هنا ..." label="ما هي رسالتك الى مدرستك؟"></Input>
                    </div>
                </div>
                <div className="button-confirm">
                    <button type='submit'>Confirm</button>
                </div>
            </form>
        </div>
        {/* {modal && <Modal onClick={closeModal}></Modal>} */}
    </div>
  );
};

export default Form;
