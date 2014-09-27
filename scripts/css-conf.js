
var init = function(){
	var cssConfJSON = function(){
		var a = 	[ 
		    {
		        "cssconf": {
		            "location": {
		                "date": "September 12, 2014",
		                "country": "Germany",
		                "city": "Berlin",
		                "venue": "Radialsystem V",
		                "lat": 52.51039,
		                "long": 13.42864
		            },
		            "talks": [
		                {
		                    "speaker": "Mathias Bynens",
		                    "title": "3.14 things I didn’t know about CSS",
		                    "video": "mDdoOt_aVTQ",
		                    "slides": "https://speakerdeck.com/mathiasbynens/3-dot-14-things-i-didnt-know-about-css-at-css-day-2014",
		                    "related_website": "https://mathiasbynens.be",
		                    "twitter": "mathias",
		                    "github": "https://github.com/mathiasbynens"
		                },
		                {
		                    "speaker": "Sara Soueidan",
		                    "title": "Styling and Animating Scalable Vector Graphics with CSS",
		                    "video": "hI9roqOKKO8",
		                    "slides": "https://docs.google.com/presentation/d/1Iuvf3saPCJepVJBDNNDSmSsA0_rwtRYehSmmSSLYFVQ/",
		                    "related_website": "http://sarasoueidan.com/blog/cssconf-2014-talk/",
		                    "twitter": "SaraSoueidan",
		                    "github": "https://github.com/SaraSoueidan"
		                },
		                {
		                    "speaker": "Stoyan Stefanov",
		                    "title": "Lessons learned from building a CSS minifier",
		                    "video": null,
		                    "slides": null,
		                    "related_website": "http://www.phpied.com/",
		                    "twitter": "stoyanstefanov",
		                    "github": "https://github.com/stoyan"
		                },
		                {
		                    "speaker": "Rachel Andrew",
		                    "title": "CSS Grid Layout",
		                    "video": null,
		                    "slides": "https://speakerdeck.com/rachelandrew/css-conf-css-grid-layout",
		                    "related_website": "http://gridbyexample.com/",
		                    "twitter": "rachelandrew",
		                    "github": null
		                },
		                {
		                    "speaker": "John Brown",
		                    "title": "A CSS Dive Through Google's Powers of Tech",
		                    "video": null,
		                    "slides": "http://slides.com/thisisjohnbrown/cssconfeu-2014#/",
		                    "related_website": "http://www.google.com/events/io/experiment",
		                    "twitter": "thisisjohnbrown",
		                    "github": "https://github.com/ThisIsJohnBrown"
		                },
		                {
		                    "speaker": "Jina Bolton",
		                    "title": "Living Design Systems",
		                    "video": null,
		                    "slides": "https://speakerdeck.com/jina/living-design-systems",
		                    "related_website": "http://jina.me/",
		                    "twitter": "jina",
		                    "github": "https://github.com/jina"
		                },
		                {
		                    "speaker": "Nicole Sullivan",
		                    "title": "Obnoxiously slow end points",
		                    "video": null,
		                    "slides": null,
		                    "related_website": "http://stubbornella.org",
		                    "twitter": "stubbornella",
		                    "github": "https://github.com/stubbornella"
		                },
		                {
		                    "speaker": "Patrick Hamann",
		                    "title": "CSS and the critical path",
		                    "video": "VNpn0GCegYo",
		                    "slides": "https://speakerdeck.com/patrickhamann/css-and-the-critical-path-cssconfeu-september-2014",
		                    "related_website": "http://www.patrickhamann.com/",
		                    "twitter": "patrickhamann",
		                    "github": "https://github.com/phamann"
		                },
		                {
		                    "speaker": "Addy Osmani",
		                    "title": "CSS Performance Tooling",
		                    "video": null,
		                    "slides": "https://speakerdeck.com/addyosmani/css-performance-tooling",
		                    "related_website": "http://addyosmani.com",
		                    "twitter": "addyosmani",
		                    "github": "https://github.com/addyosmani"
		                },
		                {
		                    "speaker": "Bram Stein",
		                    "title": "The State of Web Typography",
		                    "video": null,
		                    "slides": "https://speakerdeck.com/bramstein/the-state-of-web-type",
		                    "related_website": "http://www.bramstein.com/",
		                    "twitter": "bram_stein",
		                    "github": "https://github.com/bramstein"
		                },
		                {
		                    "speaker": "Karolina Szczur",
		                    "title": "Validate me",
		                    "video": null,
		                    "slides": "https://speakerdeck.com/fox/validate-me",
		                    "related_website": "http://thefox.is/",
		                    "twitter": "fox",
		                    "github": "https://github.com/thefoxis"
		                }
		            ]
		        }
		    }
		]
		return a;
	}

	var createView = function(){
		
		var data = cssConfJSON(),
			talks = data[0].cssconf.talks,
			temp = document.getElementById("main-view").text,
			DOM = document.getElementById("main-body"),
			parsedTemp = [];
		_.each(talks,function(talk){
			parsedTemp.push(
				_.template(temp,talk)
			)
		});
		DOM.innerHTML = parsedTemp.toString().trim().split(",").join("");
	}
	return({
		"createView":createView
	});
}
var cssObj = new init();
cssObj.createView();