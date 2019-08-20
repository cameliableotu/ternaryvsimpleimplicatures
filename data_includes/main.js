PennController.ResetPrefix(null);
PennController.Sequence( "welcome", "send" , "final" )
;
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p> Hey everyone! </p>")
    ,
    newText("<p> Hey, everyone, we are going to play a really fun and nice game together with a wizard and baby dragon and some really cool shadows belonging to some animals.</p>" ),
    newText("<p>Please enter your ID, answer some questions and then click the button below to start the experiment.</p>")
    ,
    newTextInput("ID")
        .print()
    ,
     newText("<p> What is your age? </p>"),
    newTextInput("Age")
        .print()
	       ,
	  newText("<p> What is your gender?</p>"),
	       newTextInput ("Gender")
        .print()
	       , 
	        newText("<p> What is your profession?</p>"),
	    newTextInput ("Profession")  
        .print()
	       ,
	       
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID")))
	      
.log( "ID" , getVar("ID") );

PennController.SendResults( "send" );
PennController( "final" ,
    newText("<p> The baby dragon thanks you for the apples, and so does the wizard! Bubbye! :) Thank you for your participation!</p>")
        .print()
	       ,
	newImage ("dragon.png")
     .print ()
    ,
    newText("<p><a href='https://www.put.your/platform/confirmation/link.here'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
	       )

  

