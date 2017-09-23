export class RegistrationModel{

    public fname:string;
    public lname:string;
    public uname:string;
    public email:string;
    public passwd:string;
    public cpasswd:string;
    public location:string;

    constructor(){
        this.fname='';
        this.lname='';
        this.email='';
        this.passwd='';
        this.cpasswd='';
        this.location='';
    }

}