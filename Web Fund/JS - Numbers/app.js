var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

function roll_call_1(arr){
    for(var x = 0; x < arr.length; ++x){
        console.log(arr[x].first_name, arr[x].last_name);
    }
    console.log("\n");
}
roll_call_1(students);

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
}

function roll_call_2(arr){
    console.log('Students');
    for(var x = 0; x < arr.Students.length; ++x){
        var s_string = x + ' - ' + arr.Students[x].first_name.toUpperCase() + arr.Students[x].last_name.toUpperCase() + ' - ' 
                         + (arr.Students[x].first_name + arr.Students[x].last_name).length;
        console.log(s_string);   
    }
    
    console.log('Instructors');
    for(var x = 0; x < arr.Instructors.length; ++x){
        var i_string = x + ' - ' + arr.Instructors[x].first_name.toUpperCase() + arr.Instructors[x].last_name.toUpperCase() + ' - ' 
                         + (arr.Instructors[x].first_name + arr.Instructors[x].last_name).length; 
        console.log(i_string);
    }
}
roll_call_2(users);