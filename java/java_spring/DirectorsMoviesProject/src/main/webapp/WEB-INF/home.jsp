<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Welcome back <c:out value="${firstName}"/> <c:out value="${lastName}"/> to the Directors and Movies Application</h1>
	<form action="/process/logout">
	<button type="submit">Logout</button>
	</form>
	<p><a href="/user/${userId}/edit">Edit your information</a></p>
	<form action="/user/${userId}/delete" method="POST">
		<input type="hidden" name="_method" value="delete">
		<button type="submit">Delete current user
		</button>
	</form>
	
	<h2>List of all Movies</h2>
	<table>
		<thead>
			<tr>
				<th>Title</th>
				<th>Description</th>
				<th>Director</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="movie" items="${movies}">
			<tr>
			<td><c:out value="${movie.title}"/></td>
			<td><c:out value="${movie.description}"/></td>
			<td><c:out value="${movie.getUser().getFullName()}"/></td>
			<td>
				<a href="#">View Details</a>
				<c:if test="${move.getUser().id == user_id}"
				<a href="/movie/${movie.id}/edit">Edit</a>
				<a href="#">Remove</a>
				<form action="/delete/${movie.id}" method="post">
				    <input type="hidden" name="_method" value="delete">
				    <input type="submit" value="Delete">
				    <button type="submit">Delete</button>
				</form>
				</c:if>
			</td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
	<p>
		<a href="/display/createMovie">Add New Movie</a>
	</p>
</body>
</html>