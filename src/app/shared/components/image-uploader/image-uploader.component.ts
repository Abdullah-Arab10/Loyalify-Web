import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ValidationService } from '../../../core/validation.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent implements OnInit {
  @Input() label: string;
  @Input() multiple: boolean = false;
  @Input() control: string = '';
  @Output() imageFilesSelection = new EventEmitter<File>();
  @Output() imageFilesDelete = new EventEmitter<File>();
  @Output() imagePreview = new EventEmitter<string>();
  message: string;
  preview: any = [];
  progress: number;
  selectedFiles: File[];
  currentFile: File;
  fileName: string;
  image: string = '';
  form: FormGroup;
  sliderPointer = -1;

  multiImagesForPrivew: string[] = [];
  constructor(
    private rootFormGroup: FormGroupDirective,
    private validationService: ValidationService
  ) {}
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }

  delete() {
    this.image = '';
    this.form.controls[this.control].setValue('');
    this.imagePreview.emit(this.image);
  }
  selectFile(event: any) {
    this.message = '';
    this.preview = [];
    this.progress = 0;
    this.selectedFiles = event.target.files;

    this.fileName = event.target.files[0];
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      const file: File | null = this.selectedFiles[0] as File;

      const numberOfFiles = this.selectedFiles.length;

      if (this.selectedFiles && this.selectedFiles.length > 0) {
        const file: File | null = this.selectedFiles[0] as File;

        if (file) {
          this.preview = '';
          this.currentFile = file;

          const reader = new FileReader();

          reader.onload = (e: any) => {
            this.preview = e.target.result;
            this.image = reader?.result as string;
            this.imagePreview.emit(this.image);
            this.imageFilesSelection.emit(file);
            //  console.log(this.form.value);
          };
          reader.readAsDataURL(this?.currentFile);
        }
      }
    }
  }
  multiSelect(event: any) {
    const files: File[] = event.target.files;
    const file = files[0] as File;
    if (file) {
      this.imageFilesSelection.emit(file);
      this.sliderPointer++;
      this.preview = '';
      this.currentFile = file;

      const reader = new FileReader();

      reader.onload = (e: any) => {
        const res = reader?.result as string;

        this.multiImagesForPrivew.push(res);

        // this.form.controls['image'].setValue(file);
      };

      reader.readAsDataURL(this?.currentFile);
      //  this.imageFilesSelection.emit(this.multiImages);
    }
  }
  slideForward() {
    this.sliderPointer++;
    if (this.sliderPointer > this.multiImagesForPrivew.length - 1) {
      this.sliderPointer = 0;
    }
  }
  slideBack() {
    this.sliderPointer--;
    if (this.sliderPointer < 0) {
      this.sliderPointer = this.multiImagesForPrivew.length - 1;
    }
  }
  deleteMulti(image: any, i: number) {
    this.multiImagesForPrivew = this.multiImagesForPrivew.filter(
      (img) => img != image
    );
    this.imageFilesDelete.emit(image);
    i >= 0
      ? this.sliderPointer--
      : (this.sliderPointer = this.multiImagesForPrivew.length - 1);
  }
  get errorMessage() {
    let formControl = this.form.controls[this.control];
    for (const validatorName in formControl?.errors) {
      if (formControl?.touched)
        return this.validationService.getValidatorErrorMessage(
          validatorName,
          formControl?.errors[validatorName],
          this?.control
        );
    }
    return null;
  }
}
