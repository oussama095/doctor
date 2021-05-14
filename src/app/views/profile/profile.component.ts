import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../shared/service/patient/patientService';
import {Patient} from '../../shared/model/patient';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  patient!: Patient;
  profileFormGroup!: FormGroup;
  addressFormGroup!: FormGroup;

  constructor(private patientService: PatientService, private fb: FormBuilder, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.patientService.getPatient('1').then((patient: Patient) => {
      this.patient = patient;
      this.createForm();
    });
  }

  createForm(): void {
    this.addressFormGroup = this.fb.group({
      street1: this.fb.control(this.patient.address.street1, Validators.required),
      street2: this.fb.control(this.patient.address.street2),
      city: this.fb.control(this.patient.address.city, Validators.required),
      postalCode: this.fb.control(this.patient.address.postalCode, Validators.required)

    });
    this.profileFormGroup = this.fb.group({
      id: this.fb.control(this.patient.id, Validators.required),
      firstName: this.fb.control(this.patient.firstName, Validators.required),
      lastName: this.fb.control(this.patient.lastName, Validators.required),
      phoneNumber: this.fb.control(this.patient.phoneNumber, Validators.required),
      address: this.addressFormGroup,
      email: this.fb.control(this.patient.email, Validators.required),
      birthday: this.fb.control(this.patient.birthday, Validators.required)
    });
    this.profileFormGroup.disable();
  }

  enableEdit(): void {
    this.profileFormGroup.enable();
  }

  onCancel(): void {
    this.profileFormGroup.reset(this.patient);
    this.profileFormGroup.disable();
  }

  onSave(): void {
    if (this.profileFormGroup.valid) {
      this.patientService.updatePatient(this.profileFormGroup.value).then((patient) => {
        this.patient = patient;
        this.snackBar.open('Profile successfully updated');
        this.profileFormGroup.disable();
      }, error => {
        console.log(error);
        this.snackBar.open('Error While updating' + error.message);
      });
    }
  }
}
