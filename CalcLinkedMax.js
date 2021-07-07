function CalcLinkedMax(e, _localFieldName, _extLibName, _extFieldName) {
	
	log("====================================");
	log("e: The current entry().");
	log("_localFieldName: The name of the local library field that will hold the result.");
	log("_extLibName: The name of the linked library.");
	log("_extFieldName: The name of the linked library field from which results are calculated.");
	log("====================================");


	if (e != null && _localFieldName != null && _extLibName != null && _extFieldName != null) {
		var tasklib = libByName(_extLibName);
		var links = tasklib.linksTo(e);
		var max = 0;


		for (var i = 0; i < links.length; i++) {

		  var current_value = links[i].field(_extFieldName);
		  
		  if (max < _current_value)
			  max = _current_value;
		  
		}


		e.set(_localFieldName, max);

	}
}