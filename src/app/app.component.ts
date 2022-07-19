import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'student_reg';
  firstName ='';
  lastName = ''; 
  motherName=''; 
  fatherName=''; 
  adress = ''; 
  email='';

  flag:boolean = false; 
  suceess = ''; 
  danger = ''; 
  notification = ''; 
  explination =''; 
  reloadCurrentPage() {
    window.location.reload();
   }
  sendTOMongo(){
    try{
      axios.post('http://localhost:8000/api/student',{
      'firstName':this.firstName ,
      'lastName': this.lastName,
      'motherName':this.motherName,
      'fatherName':this.fatherName ,
      'phone': this.adress,
      'email': this.email
    }).then(function(){})
    this.flag = true;
    this.suceess = "alert alert-success"; 
    this.notification="Well Done ! "; 
    this.explination = "Data has been sent to MongoDB successfully ! "; 
    }catch(error){
      this.flag = false;
    this.suceess = "alert alert-danger"; 
    this.notification="Something Wrong ! "; 
    this.explination = "Bad Requestest "; 

    }
    
    
  
  }


}
