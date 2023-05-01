import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import {
  HttpClient,
  HttpEvent,
  HttpErrorResponse,
  HttpEventType,
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class SalesforceService {
  sessionActive: boolean = false;

  baseUrl = environment.URL;
  constructor(private http: HttpClient) { }

  getAllContactList() {
    //return this.http.get(`${this.baseUrl}/v0.1/salesforce/getAllContactsFromSalesforce`);
    return this.http.get(`${this.baseUrl}/v0.1/list/getAllListContacts`);
  }
  getContactStatus(salesRepId) {
    return this.http.get(
      `${this.baseUrl}/v0.1/list/getContactStatus?salesRepId=${salesRepId}`
    );
  }

  getAllLead() {
    return this.http.get(
      `${this.baseUrl}/v0.1/salesforce/getAllLeadsFromSalesforce`
    );
  }

  getAllFolders(){
    return this.http.get(
      `${this.baseUrl}/v0.1/salesforce/getAllReportsFolderFromSalesforce`
    );
  }

  getAllReportsOfFolder(folderName){
    let body = {folderName};
    return this.http.post(
      `${this.baseUrl}/v0.1/salesforce/getAllReportsFromSalesforce`
    ,body);
  }

  getAllReports() {
    return this.http.get(
      `${this.baseUrl}/v0.1/salesforce/getAllReportsFromSalesforce`
    );
  }

  uploadFile(formData) {
    return this.http.post(
      `${this.baseUrl}/v0.1/voiceMsg/SaveVoiceMsg`,
      formData
    );
  }

  editVoiceMessage(post) {
    return this.http.put(`${this.baseUrl}/v0.1/voiceMsg/editVoiceMsg`, post);
  }

  deleteVoiceMessage(_id) {
    return this.http.delete(
      `${this.baseUrl}/v0.1/voiceMsg/deleteVoiceMsg?_id=${_id}`
    );
  }

  getallIsdefaulttype1() {
    return this.http.get(`${this.baseUrl}/v0.1/voiceMsg/IsDefaultget?types=1`);
  }

  getallIsdefaulttype2() {
    return this.http.get(`${this.baseUrl}/v0.1/voiceMsg/IsDefaultget?types=2`);
  }

  getAllManagers() {
    return this.http.get(`${this.baseUrl}/v0.1/getCompanyManager`);
  }

  getAllSalesRep() {
    // return this.http.get(`${this.baseUrl}/v0.1/getCompanySalesRep`);
    return this.http.get(
      `${this.baseUrl}/v0.1/getCompanySalesRep`
    );
  }

  getallVoiceMessage() {
    return this.http.get(`${this.baseUrl}/v0.1/voiceMsg/getVoiceMsg?types=1`);
  }
  getallGreetings() {
    return this.http.get(`${this.baseUrl}/v0.1/voiceMsg/getVoiceMsg?types=2`);
  }

  importExcel(post) {
    return this.http.post(`${this.baseUrl}/v0.1/salesforce/uploadExcel`, post);

    // return this.http.post(`https://5585827aa4ed.ngrok.io/salesforce/uploadExcel`, post);
  }

  getAllList() {
    return this.http.get(`${this.baseUrl}/v0.1/salesforce/getAllList`);
  }

  updateList(post) {
    return this.http.put(`${this.baseUrl}/v0.1/list/editDialerList`, post);
  }

  TableoneReportSetting() {
    return this.http.get(`${this.baseUrl}/v0.1/UserReport/getReport`);
  }

  TabletwoReportSetting() {
    return this.http.get(`${this.baseUrl}/v0.1/UserReport/getColumnReport`);
  }

  postReportSetting(post) {
    return this.http.post(
      `${this.baseUrl}/v0.1/UserReport/saveColumnReport`,
      post
    );
  }


  getSetting() {
    return this.http.get(`${this.baseUrl}/v0.1/setting/getSettings`);
  }

  postSetting(post) {
    return this.http.post(`${this.baseUrl}/v0.1/setting/saveSettings`, post);
  }

  PostExportasExcelCSV(post) {
    return this.http.post(`${this.baseUrl}/v0.1/list/excelList`, post);
  }
  transferOwnership(resData) {
    return this.http.post(
      `${this.baseUrl}/v0.1/list/transferOwnership`,
      resData
    );
  }
  setDefaultVoiceGreetMsg(_id) {
    return this.http.post(`${this.baseUrl}/v0.1/voiceMsg/IsDefaultChange`, _id);
  }

  importFromCRM(post) {
    return this.http.post(
      `${this.baseUrl}/v0.1/salesforce/importExcelFromCRM`,
      post
    );
  }

  editList(post) {
    return this.http.put(`${this.baseUrl}/v0.1/salesforce/editList`, post);
  }

  getSession(userId) {
    return this.http.get(
      `${this.baseUrl}/v0.1/Session/getSessionByUser?Id=${userId}`
    );
  }

  delete(ListId) {
    return this.http.put(`${this.baseUrl}/v0.1/list/deleteDialerList`, ListId);
    // return this.http.put(`https://86422f38b794.ngrok.io/list/deleteDialerList`,ListId);
  }
  salesrepStatus(data) {
    return this.http.put(
      `${this.baseUrl}/v0.1/salesforce/updateSalesRepStatus`,
      data
    );
  }

  schedulerPost(data) {
    return this.http.post(`${this.baseUrl}/v0.1/scheduler/ScheduleTime`, data);
  }

  postSchedule(data) {
    return this.http.post(`${this.baseUrl}/v0.1/scheduler/postSchedule`, data);
  }

  getSchedule() {
    return this.http.get(`${this.baseUrl}/v0.1/scheduler/getSchedule`);
  }

  deleteSchedule(data) {
    return this.http.post(`${this.baseUrl}/v0.1/scheduler/deleteSchedule`, data);
  }

  schedulerGet() {
    return this.http.get(`${this.baseUrl}/v0.1/scheduler/getsalesRepTime`);
  }

  initiateSession(Contacts, sessionName) {
    let body = {
      Contacts,
      sessionName
    }
    return this.http.post(`${this.baseUrl}/v0.1/Session/initiateSession`, body);
  }

  getSessionSalesRep() {
    return this.http.get(`${this.baseUrl}/v0.1/Session/getSessionBySalesRep`);
  }

  getDistinctTimezone() {
    return this.http.get(`${this.baseUrl}/v0.1/timeZone/getDistinctTimezone`);
  }

  updateContact(contact) {
    return this.http.put(`${this.baseUrl}/v0.1/Session/updateSession`, contact)
  }
  stopSession() {
    return this.http.get(`${this.baseUrl}/v0.1/Session/stopSession`);
  }

  getMyListColumns() {
    return this.http.get(`${this.baseUrl}/v0.1/UserReport/getMyListColumns`);
  }

  getSessionColumns() {
    return this.http.get(`${this.baseUrl}/v0.1/UserReport/getSessionColumns`);
  }

  getReportsColumns() {
    return this.http.get(`${this.baseUrl}/v0.1/UserReport/getReportsColumns`);
  }  

  getUserRecordById(_id){
    return this.http.get(`${this.baseUrl}/v0.1/list/getUserRecordById?_id=${_id}`);
  }

}
