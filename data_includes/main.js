PennController.ResetPrefix(null)
PennController.Sequence( "welcome", "details","send" , "final" )
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
PennController("welcome" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> Once upon a time in a faraway land there lived a very gifted wizard Merlin who liked to play with shadows and make others guess what they are. </p>")
	    ,
	                  
	     newImage ("wizardanddragon.png")
               .print ()
	       ,
	       newKey(" ")
        .wait());
PennController("details" ,
	    defaultText
	        .print()
	    
	       ,
newText ("<p> Now Merlin is playing the shadow game with a really cute baby dragon, who has to guess whose animal the shadow belongs to.</p>")
	,
newText ("<p> When he guesses the shadow correctly, you have to reward the baby dragon with a big apple, and when he guesses the shadow wrong, you'll just give him a tiny apple.  </p>")
,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	       newImage("mediumapple", "mediumapple.png")
        .settings.size(200,200)
	       // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
         .settings.add(250 , 0 , getImage("mediumapple") )
        .settings.add( 500 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;	    
PennController.Template(PennController.GetTable("table_stage1.csv"),
PennController.defaultTable.filter("Item","dog") ,
row => PennController( "dog" ,
newText( "Description" , row.Description )
	,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)


.log( "ID" , getVar("ID") )



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

  

