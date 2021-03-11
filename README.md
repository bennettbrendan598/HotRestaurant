# HotRestaurant

Borrowed Code: 
found in console 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Tables Page</title>

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

</head>
<body>

	<div class="container">

		<div class="jumbotron">
			<h1 class="text-center"><span class="glyphicon glyphicon-fire"></span> Hot Restaurant</h1>
			<hr>
			<h2 class="text-center">We only have 5 tables! Book your seat before they all are gone!</h2>
			<br>

			<div class="text-center">
				<a href="/tables"><button type="button" class="btn btn-lg btn-primary"><span class="glyphicon glyphicon-list-alt"></span> View Tables</button></a>
				<a href="/reserve"><button type="button" class="btn btn-lg btn-danger"><span class="glyphicon glyphicon-credit-card"></span> Make Reservation</button></a>
			</div>

		</div>

    <footer class="footer">
      <div class="container">
	        <p><a href="/api/tables">API Table Link</a> | <a href="/api/waitlist">API Wait List</a></p>
      </div>
    </footer>

	</div>


</body>
</html>

<!-- BELOW CODE IS CRITICAL. IT HANDLES HOW FORM DATA IS LOADED FROM OUR SERVER -->
<script type="text/javascript">

	// In this code, jQuery is used to "download" the data from our server
	// We then dynamically display this content in our table. This is very similar to the group projects you just completed.
	// It's also very similar to the NYT search application. In fact, I copied a ton of code from there.

	function runTableQuery(){

		// Here we get the location of the root page.
		// We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
		var currentURL = window.location.origin;

		// The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
		$.ajax({url: currentURL + "/api/tables", method: "GET"})
			.done(function(tableData) {

				// Here we are logging the URL so we have access to it for troubleshooting
				console.log("------------------------------------");
				console.log("URL: " + currentURL + "/api/tables");
				console.log("------------------------------------");

				// Here we then log the NYTData to console, where it will show up as an object.
				console.log(tableData);
				console.log("------------------------------------")

				// Loop through and display each of the customers
				for (var i=0; i<tableData.length; i++){

					// Create the HTML Well (Section) and Add the table content for each reserved table
					var tableSection = $("<div>");
					tableSection.addClass('well');
					tableSection.attr('id', 'tableWell-' + i+1)
					$('#tableSection').append(tableSection);

					var tableNumber = i + 1;


					// Then display the remaining fields in the HTML (Section Name, Date, URL)
					$("#tableWell-"+ i+1).append('<h2><span class="label label-primary">' + tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
				}
			});
	}

	function runWaitListQuery(){

		// Here we get the location of the root page.
		// We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
		var currentURL = window.location.origin;

		// The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
		$.ajax({url: currentURL + "/api/waitlist", method: "GET"})
			.done(function(waitlistData) {

				// Here we are logging the URL so we have access to it for troubleshooting
				console.log("------------------------------------");
				console.log("URL: " + currentURL + "/api/waitlist");
				console.log("------------------------------------");

				// Here we then log the NYTData to console, where it will show up as an object.
				console.log(waitlistData);
				console.log("------------------------------------")

				// Loop through and display each of the customers
				for (var i=0; i<waitlistData.length; i++){

					// Create the HTML Well (Section) and Add the table content for each reserved table
					var waitlistSection = $("<div>");
					waitlistSection.addClass('well');
					waitlistSection.attr('id', 'waitlistWell-' + i+1)
					$('#waitlistSection').append(waitlistSection);

					var tableNumber = i + 1;

					// Then display the remaining fields in the HTML (Section Name, Date, URL)
					$("#waitlistWell-"+ i+1).append('<h2><span class="label label-primary">' + tableNumber + "</span> | " + waitlistData[i].customerID + "</h2>");
				}
			});
	}

	// This function resets all of the data in our tables. This is intended to let you restart a demo.
	function clearTable(){

		var currentURL = window.location.origin;
		$.ajax({url: currentURL + "/api/clear", method: "POST"})

	}

	$("#clear").on('click', function(){
		alert("Clearing...");
		clearTable();

		// Refresh the page after data is cleared
		location.reload();
	})


	// Run Queries!
	// ==========================================
	runTableQuery();
	runWaitListQuery();


</script>
