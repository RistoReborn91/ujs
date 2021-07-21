function CalcLinkedMax(e, _localFieldName, _extLibName, _extLinkFieldName, _extValueFieldName) {
	
	log("====================================");
	log("_extValueFieldName: The name of the linked library field from which results are calculated.");
	log("_extLinkFieldName: Specifies the name of the link field in case there are multiple in the external library.");
	log("_extLibName: The name of the linked library.");
	log("_localFieldName: The name of the local library field that will hold the result.");
	log("e: The current entry().");
	log("====================================");


	if (e != null && _localFieldName != null && _extLibName != null && _extValueFieldName != null) {
		var tasklib = libByName(_extLibName);
		var links = tasklib.linksTo(e);
		var result = 0;


		for (var i = 0; i < links.length; i++) {

		  if (links[i].field(_extLinkFieldName) == e) {

		  result++;
		  
		  } // if
		  
		} //  for loop


		e.set(_localFieldName, result);

	}
}
