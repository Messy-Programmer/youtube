import requests

# your API secret from (Tools -> API Keys) page
apiSecret = "API-KEY"
deviceId = "DEVICE-Id"
phone = '+91**********'
message = 'Hello! messy programmer, sending from python'

message = {
    "secret": apiSecret,
    "mode": "devices",
    "device": deviceId,
    "sim": 1,
    "priority": 1,
    "phone": phone,
    "message": message
}

r = requests.post(url = "https://www.cloud.smschef.com/api/send/sms", params = message)
  
# do something with response object
result = r.json()

print(result)