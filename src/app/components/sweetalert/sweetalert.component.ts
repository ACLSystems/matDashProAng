import { Component } from '@angular/core';
import swal from 'sweetalert2';
declare var $: any;

@Component({
    selector: 'app-sweetalert-cmp',
    templateUrl: 'sweetalert.component.html'
})

export class SweetAlertComponent {
    showSwal(type) {
      if (type == 'basic') {
          swal({
              title: "Here's a message!",
              buttonsStyling: false,
              confirmButtonClass: "btn btn-success"
          }).catch(swal.noop)

      } else if (type == 'title-and-text') {
          swal({
              title: "Here's a message!",
              text: "It's pretty, isn't it?",
              buttonsStyling: false,
              confirmButtonClass: "btn btn-info"
          }).catch(swal.noop)

      } else if (type == 'success-message') {
          swal({
              title: "Good job!",
              text: "You clicked the button!",
              buttonsStyling: false,
              confirmButtonClass: "btn btn-success",
              type: "success"
          }).catch(swal.noop)

      } else if (type == 'warning-message-and-confirmation') {
          swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes, delete it!',
             buttonsStyling: false
          }).then((result) => {
            if (result.value) {
              swal(
                {
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  type: 'success',
                  confirmButtonClass: "btn btn-success",
                  buttonsStyling: false
                }
              )
            }
          })
      } else if (type == 'warning-message-and-cancel') {
          swal({
              title: 'Are you sure?',
              text: 'You will not be able to recover this imaginary file!',
              type: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, keep it',
              confirmButtonClass: "btn btn-success",
              cancelButtonClass: "btn btn-danger",
              buttonsStyling: false
          }).then((result) => {
            if (result.value) {
              swal({
                  title: 'Deleted!',
                  text: 'Your imaginary file has been deleted.',
                  type: 'success',
                  confirmButtonClass: "btn btn-success",
                  buttonsStyling: false
              }).catch(swal.noop)
            } else {
              swal({
                  title: 'Cancelled',
                  text: 'Your imaginary file is safe :)',
                  type: 'error',
                  confirmButtonClass: "btn btn-info",
                  buttonsStyling: false
              }).catch(swal.noop)
            }
          })

      } else if (type == 'custom-html') {
          swal({
              title: 'HTML example',
              buttonsStyling: false,
              confirmButtonClass: "btn btn-success",
              html: 'You can use <b>bold text</b>, ' +
                  '<a href="http://github.com">links</a> ' +
                  'and other HTML tags'
          }).catch(swal.noop)

      } else if (type == 'auto-close') {
          swal({
              title: "Auto close alert!",
              text: "I will close in 2 seconds.",
              timer: 2000,
              showConfirmButton: false
          }).catch(swal.noop)
      } else if (type == 'input-field') {
          swal({
              title: 'Input something',
              html: '<div class="form-group">' +
                  '<input id="input-field" type="text" class="form-control" />' +
                  '</div>',
              showCancelButton: true,
              confirmButtonClass: 'btn btn-success',
              cancelButtonClass: 'btn btn-danger',
              buttonsStyling: false
          }).then(function(result) {
              swal({
                  type: 'success',
                  html: 'You entered: <strong>' +
                      $('#input-field').val() +
                      '</strong>',
                  confirmButtonClass: 'btn btn-success',
                  buttonsStyling: false

              })
          }).catch(swal.noop)
      }
    }
}
