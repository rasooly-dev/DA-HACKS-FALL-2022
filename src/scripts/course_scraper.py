#import xmltojson
import json
import requests
import html_to_json
from bs4 import BeautifulSoup
from urllib.request import urlopen
import re
from pprint import pprint

# ------------------------------------------------------------------------------
# BeautifulSoup Scraping
def openSite(site):
	html = urlopen(site)
	return BeautifulSoup(html, 'html.parser')

def findTbody(html):
	return html.find('tbody')

soup = openSite("https://www.deanza.edu/schedule/online-classes.html")
tbody = findTbody(soup)
#print(tbody.prettify())

courses = []
classObj = {}

for i in tbody.find_all('td'):
	# Finds CRN/COURSE eg. 21578 CHEM 1A 06Y
	regex1 = re.compile(r'<td rowspan="[0-9]">[a-zA-Z0-9- ]+</td>')
	element = regex1.findall(str(i))

	# regex1 gives 3 elements with td when we only want crn and course-id
	# hence the checks if in classObj
	if element:
		if "crn" not in classObj:
			rmRowspanLeft = element[0].index("\">")
			rmRowspanRight = element[0].index("</td>")
			classObj["crn"] = element[0][rmRowspanLeft+2: rmRowspanRight]
		elif "course-id" not in classObj:
			rmRowspanLeft = element[0].index("\">")
			rmRowspanRight = element[0].index("</td>")
			classObj["course-id"] = element[0][rmRowspanLeft+2: rmRowspanRight]
	
	# This parses the course name eg. "General Chemistry"
	if "<a href=\"/schedule/class-details.html" in str(i):
		idx_left = str(i).index("q=F\">")
		idx_right = str(i).index("</a>")
		classObj["course-name"] = (str(i)[idx_left+5: idx_right])
		courses.append(classObj)
		classObj = {}

pprint(courses)
courses_for_json = {"courses": courses}
	
with open('courses.json', 'w') as f:
	json.dump(courses_for_json, f, indent=2)

