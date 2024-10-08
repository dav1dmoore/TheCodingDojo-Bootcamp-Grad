<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>    

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Registration to the Directors & Movie Application</h1>
	<form:form action="/process/registration" method="POST" modelAttribute="user">
	        <div>
               <form:label path="firstName">
                   First Name:
               </form:label>
               <form:input type="text" path="firstName"/>
               <form:errors path="firstName" />
           </div>
           <div>
               <form:label path="lastName">
                   Last Name:
               </form:label>
               <form:input type="text" path="lastName"/>
               <form:errors path="lastName" />
           </div>
           <div>
               <form:label path="userName">
                   Username:
               </form:label>
               <form:input type="text" path="userName"/>
               <form:errors path="userName" />
           </div>
           <div>
               <form:label path="password">
                   Password:
               </form:label>
               <form:input type="text" path="password"/>
               <form:errors path="password" />
           </div>
           <button type="submit">
               Register
           </button>
       </form:form>



	<h1>Login to the Directors and Movies Application</h1>
	<form action="/process/login" method="POST" >
           <div>
               <label for="userName">
                   Username:
               </label>
               <input type="text" id="userName" name="userName"/>
           </div>
           <div>
               <label for="password">
                   Password:
               </label>
               <input type="text" id="password" name="password"/>
           </div>
           <div class="errorMessage">
           	<c:out value="${errorLogin}"/>
           </div>
           <button type="submit">
               Login
           </button>
       </form>
</body>
</html>