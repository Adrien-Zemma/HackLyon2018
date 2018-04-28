from urllib.request import Request, urlopen

import json

def sortData(data):
	path = []
	travel = {}
	try:
		for elem in data["routes"][0]["legs"][0]["steps"]:
			path.append(elem["html_instructions"])
		path = [x + "</br>" for x in path]
		travel["path"] = path
		travel["duration"] = data["routes"][0]["legs"][0]["duration"]["text"]
		travel["distance"] = data["routes"][0]["legs"][0]["distance"]["text"]
	except:
		print("request failed")
		return None

	return travel

def addingParamToUrl(param):
	url = "https://maps.googleapis.com/maps/api/directions/json?"
	for key, value in param.items():
		
		if (key != "waypoints"):
			url = url + value
		else:
			for elem in param["waypoints"]:
				url = url + elem
	url = url + "&key=AIzaSyCGNivwtcni9vmOnng9J7ARenkfBjRbnKw"
	return url

def request(url):
	req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
	try:
		data = json.loads(urlopen(req).read())
	except:
		print("Data field is unavailable")
		exit(84)
	return data

def buildWaypoint(waypoints):
	tab = []
	if (len(waypoints) > 0 and waypoints[0] != ""):
		tab.append("&waypoint=")
		for elem in waypoints:
			if (len(waypoints) >= 1):
				tab.append(elem + "|")
			else:
				tab.append(elem)
	return tab

def getPath(user):
	param = {}
	param["language"] = "language=" + "fr"
	param["mode"] = "&mode=" + user["input"]["mode"]
	#param["departure_time"] = "&departure_time=now"
	param["origin"] = "&origin=" + user["input"]["src"].replace(" ", "+")
	param["destination"] = "&destination=" + user["input"]["dest"].replace(" ", "+")
	
	url = addingParamToUrl(param)
	print (url)
	data = request(url)
	print("~"*30)
	print(data)
	print("~"*30)
	return (sortData(data))