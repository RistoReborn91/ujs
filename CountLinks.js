function CountLinks(e, _extLibName) {
	
	log("====================================");
	// log("_extLinkFieldName: Specifies the name of the link field in case there are multiple in the external library.");
	log("_extLibName: The name of the linked library.");
	log("e: The current entry().");
	log("====================================");


	if (e != null && _extLibName != null) {
		var tasklib = libByName(_extLibName);
		var links = tasklib.linksTo(e);
		return links.length;

	}
}


