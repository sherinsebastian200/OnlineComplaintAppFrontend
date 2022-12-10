import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  constructor(private api:ApiService, private route:Router){}
  name = ""
  address = ""
  email = ""
  phone = ""
  username = ""
  password = ""

  readValues = () => {
    let data = {
      "name": this.name,
      "address": this.address,
      "email": this.email,
      "phone": this.phone,
      "username": this.username,
      "password": this.password
    }
    this.api.userReg(data).subscribe(
      (response:any)=>{
        if(response.status == "success"){
          console.log(response)
          alert("User Registration Successfull")
          this.route.navigate(["/userLogin"])
        }else{
          alert("User Registration Failed")
        }
      }
    )
  }
}