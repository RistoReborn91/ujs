function CalcLinkedMax(e, _localFieldName, _extLibName, _extFieldName) {
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