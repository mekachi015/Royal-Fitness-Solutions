import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit{

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cellphone: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]], // Basic pattern for international numbers
      email: ['', [Validators.required, Validators.email]],
      userQuery: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission logic here
      
      // Show success alert
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      // Show error alert
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all required fields correctly.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }
  }

  onClear() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to clear the form?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear it!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactForm.reset();
        Swal.fire(
          'Cleared!',
          'Your form has been cleared.',
          'success'
        );
      }
    });
  }
}
