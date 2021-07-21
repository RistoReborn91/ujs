function CountLinks(e, _extLibName, _extLinkFieldName) {
	
	log("====================================");
	log("_extLinkFieldName: Specifies the name of the link field in case there are multiple in the external library.");
	log("_extLibName: The name of the linked library.");
	log("e: The current entry().");
	log("====================================");


	if (e != null && _extLibName != null && _extLinkFieldName != null) {
		var tasklib = libByName(_extLibName);
		var links = tasklib.linksTo(e);
		var result = 0;


		for (var i = 0; i < links.length; i++) {

		  if (links[i].field(_extLinkFieldName) == e) {

		  result++;
		  
		  } // if
		  
		} //  for loop


		return result;

	}
}
