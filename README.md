# EBookCustomer

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.



## Angular Bookstore Dashboard 
  

A responsive bookstore dashboard built with Angular 19, Angular Material 19.2.9, and Bootstrap 5.3.5, using standalone components and a clean, card-based layout. Features include responsive grid layout, localStorage for book purchases, and toast notifications with ngx-toastr. 

##Features 

This is a Web Application is made using Standalone components of Angular 19 App 

 Angular Material UI components used such as (MatCard, MatGridList, MatButton, MatMenu, MatIcon) 

The Design has been made responsive using BreakpointObserver. 

In this project Notifications have been displayed in a Toaster via ngx-toastr. 

LocalStorage-based book cart has been used, No use of API. 

Dynamic Book Cards have been displayed with title, author, description, image, price. 

This project has been optimized for mobile grid layouts also. 

Standalone architecture with SCSS styling 

 

## Project Structure 

## First in src, we have app folder ,  

In App Folder, we have App Components and app.routes.ts also for routing, 

In app folder,  

I have Created a Front folder in which i have Signup, and Login Page components/pages. 

After Login we have to go to dashboard, 

So, I have Created a navigation component which consist of  siderbar in which all dashboard component will render., 

 


## The Navigation Component,  

I have created a Dashboard Component in which i show Products To buy to the user, 

A My-Books Component in which i show the bought products. 

A Read Component to show the attached Pdf. 

## Shared Folder 

I have created a shared folder which consist of a models folder which have a model.ts file which have a model for the Json of dummy Books. 

An another Services Folder, I have created, which consists of Services.service.ts . 

Services folder also consists of Auth folder. 

Auth Folder have authguard  to protect Navigation ,Dashboard, routes based on user authentication status from login .   

 

## Tech Stack - Technology Version 

## Angular - 19.x 

## Angular Material- 19.2.9 

## Bootstrap - 5.3.5 

## ngx-toastr - latest 

## SCSS 


 

## Setup Instructions 

Clone the repo 

```bash
git clone https://github.com/chopra123/E-book_Customer_Dashboard.git
```

## Install dependencies 

npm install 

 

## Run the app 

ng serve 

 

## Functionality Overview 

## Sign up page 

Enter email eg.  xyz@gmail.com, password:- 1234 

Click Sign up, 

If you have previously done signup then click on login button 

## Login page 

Enter the same email you have used to sign up  eg.  xyz@gmail.com,  

password:- 1234 

Click the Login Button. 

If the credentials match it will Show success popup and will redirect you to the dashboard page, if not it will show error popup. 

## Dashboard page 

In here you will see all the products, with details, 

Just Click the Buy button and it will be bought  and success Pop up will show, and info pop up will show to go to my-book page. 

Info toast is delayed using setTimeout(). 

## MY Books Page 

In My Books page the bought books will be shown with read button. 

It will redirect you to the PDF to read the dummy pdf file. 

You can go back to the My-books page, Read another book, and come back to your previous read book the pdf will start from the page where you left it.  

 

 

Note:- It was my first project on Angular 19 and working with Material 19, so i used Google to R&D, I had to R&D the.   “ng2-pdf-viewer". 

  

Developer 

Puneet Chopra 
 Angular Developer | Full-Stack Enthusiast 
 Puneet Chopra 
 https://www.linkedin.com/in/puneet-chopra-422795208/ 

 