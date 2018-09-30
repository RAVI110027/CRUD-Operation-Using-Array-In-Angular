import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{

 
title='Employees Details of Evolent Health';
employees=[
  {firstName:"Ravi", lastName:"Shankar", emailId:"ravi.shankar@evolent.com", contactNo:7676684956, status:"Active"},
  {firstName:"Mahendra", lastName:"Kumar", emailId:"mahendra.kumar@tcs.com", contactNo:9907549354, status:"Inactive"},
  {firstName:"Tushar", lastName:"Dhoot", emailId:"tushar.dhoot@synechron.com", contactNo:8989478053, status:"Active"}
];

model:any={};
model2:any={};
msg:any='';
addEmployee(){
  debugger;
this.employees.push(this.model);  
this.model={};
// this.msg="Record is Added";
alert("Record Added");
}

deleteEmployee(i){
  this.employees.splice(i,1);
  // this.msg="Record is Deleted";
  alert("Record Deleted");
}

myvalue;
editEmployee(k){
  this.model2.firstName=this.employees[k].firstName;
  this.model2.lastName=this.employees[k].lastName;
  this.model2.emailId=this.employees[k].emailId;  
  this.model2.contactNo=this.employees[k].contactNo;
  this.model2.status=this.employees[k].status;
  this.myvalue=k;

}

updateEmployee(){
  console.log('hello');
  let k=this.myvalue;
  for(let i=0;i<this.employees.length;i++){
    console.log(i);
    if(i==k){
      this.employees[i]=this.model2;
      this.model2={};
      // this.msg="Record is Updated";
      alert("Record Updated");
    }
  }
}
clickMe(){
  this.msg="";
}
}

