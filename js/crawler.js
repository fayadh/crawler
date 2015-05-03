// CRAWLER 

// Use the tags Library to define the type of tags you want 
// to crawl and collect. 

var tagsLibrary = 
[
"OPTION",
"P",
"H1",
"H2"
];

// crawler function collects 
function crawler() {
	var allData = [];
	for(i = 0; i < tagsLibrary.length; i++) {
		crawledData = document.getElementsByTagName(tagsLibrary[i]);
		for (var j = 0; j < crawledData.length; j++) {
			allData = allData.concat(crawledData[j]);
		};
	};
	return allData;
};

