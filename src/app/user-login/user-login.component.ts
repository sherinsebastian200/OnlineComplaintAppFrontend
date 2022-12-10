import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private api:ApiService,private route:Router){}
  username=""
  password=""
  
  readValues = ()=>{
    let data:any = {
      "username":this.username,
      "password":this.password
    }
    this.api.userLogin(data).subscribe(
      (response:any) =>{
        if(response.status == "success"){
          localStorage.setItem("userInfo",response.userId)
          this.route.navigate(["/userProfile"])
        }else{
          alert("Invalid Credentials")
        }
      }
    )
  }
}