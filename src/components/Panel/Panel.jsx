import React, { useEffect, useState } from 'react';
import Carmelite from "../../assets/logo-carme.png";
import Input from "../../MiniComponents/Input/Input";
import emailjs from '@emailjs/browser';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import axios from "axios";
import "./Panel.css";

export const Panel = () => {

  const [data,setData] = useState([]);
  const [emailTo,setEmailTo] = useState("");

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'carmelite_users.xlsx');
  };

  const sendMail = () =>{
    axios.post('http://localhost/PHP/send-email.php', [data,emailTo]).then((response)=>{
      console.log(response);
    }).catch((err)=>{
      console.log("Error sending email",err);
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    
    const templateParams = {
      service_id: 'service_shkhmnq',
      template_id: 'template_b101vhe',
      user_id: 'ZIFacLx2f25TXWkeH',
      data: JSON.stringify(data)
    };

    emailjs.send('service_shkhmnq', 'template_b101vhe', templateParams, 'ZIFacLx2f25TXWkeH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  const generatePDF = (data) => {
    const doc = new jsPDF();
    doc.text('Carmelite Alumni Users', 10, 10);
  
    let yPos = 30;
  
    data.forEach((row, rowIndex) => {
      Object.keys(row).forEach((fieldName, index) => {
        const fieldValue = row[fieldName];
        doc.text(`${fieldName}: ${fieldValue}`, 10, yPos + index * 10);
      });
  
      yPos += Object.keys(row).length * 10 + 10;
  
      if (rowIndex !== data.length - 1) {
        doc.addPage();
        yPos = 10;
      }
    });
  
    doc.save('carmelite_data.pdf');
  };
  

  const sendWhatsApp = () => {
    generatePDF(data);
    const phoneNumber = '+961 03291909';
    const message = 'Hello from your Carmelite!';

    let whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobileDevice) {
      whatsappLink = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    }

    window.open(whatsappLink, '_blank');
  };

  useEffect(()=>{
    axios.post("http://localhost/PHP/table.php").then((response)=>{
      const individualJSONStrings = response.data.split("}{");
      const parsedData = individualJSONStrings.map((jsonString, index) => {
        if (index === 0) {
          jsonString = jsonString + "}";
        } else if (index === individualJSONStrings.length - 1) {
          jsonString = "{" + jsonString;
        } else {
          jsonString = "{" + jsonString + "}";
        }
        return JSON.parse(jsonString);
      });
      setData(parsedData);
    }).catch((err)=>{
      console.log(err);
    })
  },[]);

  return (
    <div className='panel-container'>
      <div className="buttons-download">
        <button className='excel-download' onClick={exportToExcel}>Download as Excel Sheet</button>
        <button className='pdf-download' onClick={() => generatePDF(data)}>Download as PDF</button>
        <button className='whatsapp-download' onClick={sendWhatsApp}>Send by Whatsapp (pdf)</button>
        <button className='email-send' onClick={sendMail()}>Send By Email</button>
        <Input className="input-email" value={emailTo} onChange={(e)=>setEmailTo(e.target.value)}></Input>
      </div>
      <img src={Carmelite} alt=''></img>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DOB</th>
          <th>Personal Phone</th>
          <th>Gender</th>
          <th>Nationality</th>
          <th>Residency</th>
          <th>Street</th>
          <th>Building</th>
          <th>Email</th>
          <th>Phone Address</th>
          <th>Front Passport</th>
          <th>Back Passport</th>
          <th>Photo ID</th>
          <th>School</th>
          <th>User Type</th>
          <th>Final Year School</th>
          <th>Graduation Year School</th>
          <th>Year Of Entry School</th>
          <th>Floor</th>
          <th>Professional Career</th>
          <th>Career Title</th>
          <th>Career Company</th>
          <th>Siblings in Carmelite</th>
          <th>Siblings Names</th>
          <th>Siblings Emails</th>
          <th>Siblings Phones</th>
          <th>Message</th>
          <th>University Studies</th>
          <th>University Diplomas</th>
          <th>University Years</th>
          <th>Father Name</th>
          <th>Governorate</th>
          <th>State</th>
          <th>Other Phone</th>
        </tr>
        {data.map((row, index) => (
      <tr key={index}>
        <td>{row.first_name}</td>
        <td>{row.last_name}</td>
        <td>{row.date_of_birth}</td>
        <td>{row.phone_personal_info}</td>
        <td>{row.gender}</td>
        <td>{row.nationality}</td>
        <td>{row.residency}</td>
        <td>{row.street}</td>
        <td>{row.building}</td>
        <td>{row.email}</td>
        <td>{row.phone_address}</td>
        <td>{row.front_id_passport}</td>
        <td>{row.back_id_passport}</td>
        <td>{row.photo_id}</td>
        <td>{row.school}</td>
        <td>{row.user_type}</td>
        <td>{row.final_year_school}</td>
        <td>{row.graduation_year_school}</td>
        <td>{row.year_of_entry_school}</td>
        <td>{row.floor}</td>
        <td>{row.professional_career}</td>
        <td>{row.career_title}</td>
        <td>{row.career_company}</td>
        <td>{row.siblings_in_carmelite}</td>
        <td>{row.sibling_names}</td>
        <td>{row.sibling_emails}</td>
        <td>{row.sibling_phones}</td>
        <td>{row.message}</td>
        <td>{row.university_studies}</td>
        <td>{row.university_diplomas}</td>
        <td>{row.university_years}</td>
        <td>{row.father_name}</td>
        <td>{row.governorate}</td>
        <td>{row.state}</td>
        <td>{row.other_phone}</td>
      </tr>
    ))}
      </table>
    </div>
  )
}

export default Panel;