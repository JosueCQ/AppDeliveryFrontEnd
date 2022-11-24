import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductComponent } from '../product.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  formValue !: FormGroup;
  productObj: Product = new Product();
  name = "nombre";
  branch = "marca";
  stars = 5;
  price = 9999;
  descripcionProduct = "Descripcion";
  codeProduct = "111";
  imgURL= "https:xxxx"

  constructor(private formbuilder: FormBuilder,
              private productService: ProductService) {}

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      nameProduct: [''],
      branchProduct: [''],
      starsProduct: [''],
      priceProduct: [''],
      descripcionProduct: [''],
    }); 
  }

  CreateProduct(){

    
    this.productObj.name = this.name;
    this.productObj.branch = this.branch;
    this.productObj.price = this.price;
    this.productObj.description = this.descripcionProduct;
    this.productObj.stars = this.stars;
    this.productObj.imageUrl = this.imgURL;
    this.productObj.productCode = this.codeProduct;

    this.productService.postProduct(this.productObj).subscribe(response =>{
      console.log(response);
      alert('product created Successfully')
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
    },
    err=> {
      alert('Something Went Wrong');
    })
  }

}
