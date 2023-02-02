# Account

{id , Username , Password , PhoneNumber , Address , Role , IsActive}

-SignUp : http://localhost:8080/api/Account/SignUp  
Method : Post gửi Username và Password

-SignIn : http://localhost:8080/api/Account/SignIn  
Method : Post gửi Username và Password

-GetAll : http://localhost:8080/api/Account  
Method : Get  
-GetAll : http://localhost:8080/api/Account?Username=cuong
Method :Get tim kiem
-GetDetail : http://localhost:8080/api/Account/1  
Method : Get

-Update : http://localhost:8080/api/Account/1  
Method : Put gửi Password , Role , PhoneNumber

-Delete : http://localhost:8080/api/Account/Delete/1  
Method : Put

# Category

-Get http://localhost:8080/api/Category  
Get all
-Get Detail http://localhost:8080/api/Category/1  
-Post http://localhost:8080/api/Category  
Method Post : {CategoryName}
-Put http://localhost:8080/api/1  
Method PUT : {CategoryName}  
-Delete http://localhost:8080/api/1  
Method Put

# Product

{id ,Category_ID, ProductName ,Description , Price , Discount , ProductImage, IsActive}

-AddProduct : http://localhost:8080/api/Product
Method : Post gửi ProductName ,Description , Price , Discount , ImageProduct,

-GetAll : http://localhost:8080/api/Product
Method : Get
-GetAll : http://localhost:8080/api/Product?ProductName=cuong
Method :Get tim kiem
-GetDetail : http://localhost:8080/api/Product/1
Method : Get

-Update : http://localhost:8080/api/Product/1 Method : Put gửi ProductName ,Description , Price , Discount , ImageProduct, TypeGender

-Delete : http://localhost:8080/api/Product/Delete/1 Method : Put

# Checkout

Post : http://localhost:8080/api/Checkout
gui =>
{
"Account_ID" :2 ,
"ListProduct":[
{
"Product_ID" : 2,
"Price" : "100000",
"Quantity" : 4,
"Discount" : 10
},
{
"Product_ID" : 3,
"Price" : "100000",
"Quantity" : 4,
"Discount" : 10
}

    ]

}

-Get : http://localhost:8080/api/Checkout

-Get : http://localhost:8080/api/Checkout/Detail/13 Lấy danh sách đơn hàng đã đặt theo người dùng đăng nhập -Get :http:localhost:8080/api/Checkout/ByAccount/2
