As a user of the system I require a screen where I can enter my username and password to access the system with normal authentication, facebook and google.

As a User I require a section to be able to recover the password.

As a User I require a screen where I can see the current routine and the past routines.
Ready criteria

It is possible to see the different sections of current and past Routines with the name of the routine, start date and end date, they are buttons to see how the routine was structured.

Ready criteria

Current routine section, button with static data where you can see the name of the routine, start and end date

Redirects to the section where the routine by day separation would be seen in detail

Past routine section, button with static data where you can see the routine name, start and end date

Redirects to the section where the routine would be seen in detail due to the separation of days gone by

As a developer I need to create the mysql user database.

As a Developer in need of an API in node where you can do the basic CRUD operations.

As a developer I need to create a component topbar to add to the whole UI


# Endpoints

1 GET/READ route =  https://ifit-api.herokuapp.com/  

2 CREATE/POST route = https://ifit-api.herokuapp.com/

3 DELETE route = https://ifit-api.herokuapp.com/<routineId>

4 UPDATE/PUT route = https://ifit-api.herokuapp.com/<routinId>


When testing number 2 and 4 above, pass a data structured like the example below:

{
"startDate": "June 18, 2021",
"endDate": "June 22, 2021",
"routineName": "Tough Routine",
"routines": "[{\"day\":\"Day 1\",\"exercises\":[{\"do\":\"Lunges\",\"series\":3,\"repitition\":\"10-20-30\"},{\"do\":\"Abduction-Abduction\",\"series\":4,\"repitition\":\"15\"},{\"do\":\"Straight Leg Dead Lift\",\"series\":2,\"repitition\":\"10\"},{\"do\":\"Boxing jump deadlift\",\"series\":1,\"repitition\":\"10\"}]},{\"day\":\"Day 2\",\"exercises\":[{\"do\":\"Lunges\",\"series\":3,\"repitition\":\"10-20-30\"},{\"do\":\"Abduction-Abduction\",\"series\":4,\"repitition\":\"15\"},{\"do\":\"Straight Leg Dead Lift\",\"series\":2,\"repitition\":\"10\"},{\"do\":\"Boxing jump deadlift\",\"series\":1,\"repitition\":\"10\"}]},{\"day\":\"Day 3\",\"exercises\":[{\"do\":\"Lunges\",\"series\":3,\"repitition\":\"10-20-30\"},{\"do\":\"Abduction-Abduction\",\"series\":4,\"repitition\":\"15\"},{\"do\":\"Straight Leg Dead Lift\",\"series\":2,\"repitition\":\"10\"},{\"do\":\"Boxing jump deadlift\",\"series\":1,\"repitition\":\"10\"}]},{\"day\":\"Day 4\",\"exercises\":[{\"do\":\"Lunges\",\"series\":3,\"repitition\":\"10-20-30\"},{\"do\":\"Abduction-Abduction\",\"series\":4,\"repitition\":\"15\"},{\"do\":\"Straight Leg Dead Lift\",\"series\":2,\"repitition\":\"10\"},{\"do\":\"Boxing jump deadlift\",\"series\":1,\"repitition\":\"10\"}]}]"
}
