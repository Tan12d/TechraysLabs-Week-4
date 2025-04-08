$(document).ready(function (){

    // Your jquery code is here

    // console.log($); 
    // console.log(jQuery);
        

    // Syntax
    // $('selector').action()

    // clicks on all p elements. 
    // $('p').click(); // click on p
    // $('p').click(function() {
    //     console.log('You clicked on p', this);   
    //     $(this).hide();

    // }); // do this when we clicked on p


    //id - syntax
    // $('#id').action();

    //class - syntax
    // $('.class').action();


    // there are three main types of selectors in jQuery
    // 1. element selector 

        // Example: 
        // $('p').click();


    // 2. id selector

        // Example:
        // $("#second").click();

    // 3. class selector

        // Example:
        // $(".odd").click();
        
     
    // other selectors:
    // $('*').click();

    // $('p.odd').click();

    // $('p#second').click();

    //  $('p:first').click();

    //  $('p:last').click();

    // $("p:even").click();


    // -----------------------------------------------------------

    // Events in jQuery
    // Mouse Events = click, dbclick, mouseenter, mouseleave
    // Keyboard Events = keypress, keydown, keyup
    // Form Events = submit, change, focus, blur
    // Document/Window Events = load, resize, scroll, unload


    // $('p').dblclick(function() {
    //     console.log('You double clicked on p', this);
    // });

    // $('p').mouseenter(function() {
    //     console.log('You entered:', this);
    // });

    // $('p').hover(function() {
    //     console.log('You hovered on:', this);
    // },
    // function() {
    //     console.log('Thanks for coming:', this);
    // });


    // on method:
    // $('p').on(
    //     {
    //         click: function () {
    //             console.log('Thanks for clicking:', this);
    //         }     
    //     },
    //     {
    //         mouseleave: function () {
    //             console.log('mouseleave:', this);
    //         }
    //     }  
    // );


    // hide()
    // $("#wiki").hide(1000, function () {
    //     console.log('Hidden');        
    // });

    // // show()
    // $("#wiki").show(1000, function () {
    //     console.log('shown');        
    // });


    // $("#btn").click(function () {
    //     $("#wiki").toggle(1000);
    // });


    // fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // $("#btn").click(function () {
    //     $("#wiki").fadeOut(1000);
    // });


    // Slide methods -
    // $("#wiki").slideUp(1000);
    // $("#wiki").slideDown(1000);    
    // $("#wiki").slideToggle(1000, function () {
    //     console.log('slide done');
    // });
    
 
    // Animate method
    //  $("#wiki").animate({
    //      opacity: 0.3,
    //      height: '150px',
    //      width: '350px'
    //  }, 2000)

    // $("#wiki").animate({
    //     opacity: 0.3,
    //     height: '150px',
    //     width: '350px'
    // }, "fast");


    // Queue Animate
    $("#wiki").animate({ opacity: 0.3 }, 4000);  
    $("#wiki").animate({ opacity: 0.9 }, 1000);  
    $("#wiki").animate({ width: '350px' }, 1000);  


    // DOM Manipulation
    // $("#wiki").text(); // get text
    // $("#wiki").text("This is me..."); // set text
    // $("#wiki").html("<em>This is me...</em>");
    // $("body").html("This is better...");


    // $('#ta').val()
    $('#ta').val("This is the new value");
    $('#inp').val("This is the text field");

    // empty()
    // $('#wiki').empty();

    // text()
    // $('#wiki').text("This is the paragraph element");

    // To remove an element from DOM
    // $('#wiki').remove(); 

    // addClass()
    // $('#wiki').addClass('myClass');
    // $('#wiki').addClass('myClass2');
    
    
    // removeClass()
    // $('#wiki').removeClass('myClass2');


    // CSS
    $('#wiki').css('background-color', 'yellow');


    // Ajax using JQuery
    // $.get('https://code.jquery.com/jquery-3.7.1.js');

    // $.get('https://code.jquery.com/jquery-3.7.1.js', function (data, status) {
    //     alert(data);
    // });

    // $.get('https://code.jquery.com/jquery-3.7.1.js', function (data, status) {
    //     alert(status);
    // });

    $.post('https://code.jquery.com/jquery-3.7.1.js',
        { name: "Tan", age: 21 },    
        function (data, status) {
            alert(status);
        });
});


