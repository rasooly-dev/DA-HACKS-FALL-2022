#import xmltojson
import json
import requests
import html_to_json


url = "https://www.deanza.edu/schedule/online-classes.html"

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 \
    (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
	'Content-Type': 'text/html'
}
  
# Get the page through get() method
html_response = requests.get(url=url, headers = headers)
real_shit_html = html_response.text
#print(real_shit_html)

output_json = html_to_json.convert(real_shit_html)

# write output.json
with open('output.json', 'w') as f:
	json.dump(output_json, f, indent=4)


# convert output_json to string
output_json_str = json.dumps(output_json)

arr = output_json_str.split('tbody')

print(arr[1])

#/html/body/div/div[2]/div/div/div/div/div/table/tbody
	

#print(json.dumps(output_json, indent=2))

#for key in output_json['html'][0]['body'][0]['div'][0]['div'][0]['div'][0]['div'][0]['div'][0]['_attributes'].keys():
#	print(key, "\n")
# print(output_json)


# def dfs(dic):
# 	if type(dic) == 'list':
# 		dic = dic[0]

# 	if 'tbody' in dic.keys():
# 		return dic
# 	else:
# 		for key in dic.keys():
# 			dfs(key)

# print(dfs(output_json))
  
# # Save the page content as sample.html
# with open("sample.html", "w") as html_file:
#     html_file.write(html_response.text)
      
# with open("sample.html", "r") as html_file:
#     html = html_file.read()
#     json_ = xmltojson.parse(html)
      
# with open("data.json", "w") as file:
#     json.dump(json_, file)
      
# print(json_)

