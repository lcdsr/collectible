import { Component, OnInit, ViewEncapsulation,  } from '@angular/core';
import { ModalController, NavParams, Input } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Location} from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RegisterUserComponent implements OnInit {

  
  user$: Observable<any>;
  base64Image: SafeUrl;
  public img: string;
  public inputEmail: string ='';
  private _inputPassword: string = '';
  public get inputPassword(): string {
    return this._inputPassword;
  }
  public set inputPassword(value: string) {
    this._inputPassword = value;
  }


  constructor(
    private _modalCtl: ModalController,
    private _navParams: NavParams,
    private _location: Location,
    private _router: Router,
    public _DomSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const {user} = this._navParams.data;
    this.user$ = user.data;
    this.base64Image = this._DomSanitizer.bypassSecurityTrustUrl(user.data);
    this.img =  user.data;
    console.log(this.base64Image);
    console.log("monmnail",this.inputEmail);
    
  }

  dismiss() {
    this._modalCtl.dismiss('toto');
    //après le dismiss on fait un redirect si possible dans la collection nouvellement créé!
    this._router.navigate(['/itemAdd'])
  }
  registerUser(){
    console.log(this.inputEmail+":"+this.inputPassword);
    console.log(btoa(this.inputEmail+":"+this.inputPassword));
    //localStorage.setItem("user",btoa(this.inputEmail+":"+this.inputPassword));
  }

  back(){
    this._location.back();
  }

}
