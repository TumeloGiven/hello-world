$(function(){
	  var jsonSearchEngine = [
	    { value: 'Arrays', data: 'ARR' , url:'#'},
	    { value: 'Basic Input/Output', data: 'BIO' , url:'#'},
	    { value: 'Character Sequences ', data: 'CRS' , url:'#' },
	    { value: 'Classes', data: 'CLS' , url:'#'},
	    { value: 'Compound data types', data: 'CDT' , url:'#'},
	    { value: 'Constants', data: 'CNT' , url:'#'},
	    { value: 'Data structures', data: 'DTS' , url:'#'},
	    { value: 'Dynamic Memory', data: 'DOP' , url:'#'},
	    { value: 'Friendship and inheritance', data: 'FAH' , url:'#'},
	    { value: 'Functions', data: 'FNS' },
	    { value: 'Namespaces', data: 'NMS' },
	    { value: 'Object Oriented Programming', data: 'OOP' , url:'#'},
	    { value: 'Operators', data: 'OPT' , url:'#'},
	    { value: 'Other Data Types', data: 'ODT' , url:'#'},
	    { value: 'Pointers', data: 'PNT' , url:'#'},
	    { value: 'Polymorphism', data: 'PLM' , url:'#'},
	    { value: 'Structure of a program ', data: 'SOF' , url:'#'},
	    { value: 'Templates', data: 'TMP' , url:'#'},
	    { value: 'Variables. Data Types', data: 'VDT' , url:'#'},
		{ value: 'Exceptions', data: 'Exceptions' , url:'#'},
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
