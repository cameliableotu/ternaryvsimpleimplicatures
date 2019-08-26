
PennController.ResetPrefix(null);
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
)




  

