$(function(){
	  var jsonSearchEngine = [
	    { value: 'Arrays', description: 'ARR' , url:'#'},
	    { value: 'Basic Input/Output', description: 'BIO' , url:'#'},
	    { value: 'Character Sequences ', description: 'CRS' , url:'#' },
	    { value: 'Classes', description: 'CLS' , url:'#'},
	    { value: 'Compound data types', description: 'CDT' , url:'#'},
	    { value: 'Constants', description: 'CNT' , url:'#'},
	    { value: 'Data structures', description: 'DTS' , url:'#'},
	    { value: 'Dynamic Memory', description: 'DOP' , url:'#'},
	    { value: 'Friendship and inheritance', description: 'FAH' , url:'#'},
	    { value: 'Functions', description: 'FNS' },
	    { value: 'Namespaces', description: 'NMS' },
	    { value: 'Object Oriented Programming', description: 'OOP' , url:'#'},
	    { value: 'Operators', description: 'OPT' , url:'#'},
	    { value: 'Other Data Types', description: 'ODT' , url:'#'},
	    { value: 'Pointers', description: 'PNT' , url:'#'},
	    { value: 'Polymorphism', description: 'PLM' , url:'#'},
	    { value: 'Structure of a program ', description: 'SOF' , url:'#'},
	    { value: 'Templates', description: 'TMP' , url:'#'},
	    { value: 'Variables. Data Types', description: 'VDT' , url:'#'},
		{ value: 'Exceptions', description: 'Exceptions' , url:'#'},
	  ];
	  
	  // setup autocomplete function pulling from jsonSearchEngine[] array
	  $('#autocomplete').autocomplete({
	    lookup: jsonSearchEngine,
	    onSelect: function (suggestion) {
	      var thehtml = '<strong>Topic: </strong> ' + suggestion.value + ' <br> <strong>ID:</strong> ' + suggestion.data;
	      $('#outputcontent').html(thehtml);
	    }
	  });
	  

	});