import { LoginPage } from "../pages/loginPage";
import { dahboardPage } from "./dashboardPage";



export class POManager{

constructor(page) {
    this.page = this.page;
    this.LoginPage = new LoginPage(page);
    this.dahboardPage = new dahboardPage(page);
}

getLoginPage(){
    return this.LoginPage;
}

getdashboardPage(){
    return this.dahboardPage;
}

}