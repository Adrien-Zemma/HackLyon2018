from urllib.request import Request, urlopen

import json

def sortData(data):
	path = []
	travel = {}
	for elem in data["routes"][0]["legs"][0]["steps"]:
		path.append(elem["html_instructions"])
	path = [x + "</br>" for x in path]
	travel["path"] = path
	travel["duration"] = data["routes"][0]["legs"][0]["duration"]["text"]
	travel["distance"] = data["routes"][0]["legs"][0]["distance"]["text"]

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

def getPath(origin, destination, mode, *waypoints):
	param = {}
	param["mode"] = "mode=" + mode
	param["language"] = "&language=" + "fr"
	param["origin"] = "&origin=" + origin.replace(" ", "+")
	param["destination"] = "&destination=" + destination.replace(" ", "+")
	param["destination"] = "&destination=" + destination.replace(" ", "+")
	param["waypoints"] = buildWaypoint(waypoints)
	param["avoid"]
	param["transit_mode"]
	param["transit_routing_preference"] 
	
	url = addingParamToUrl(param)
	data = request(url)
	return sortData(data)