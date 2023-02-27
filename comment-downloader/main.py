import requests
import pandas as pd
import json

page_id = '' # your page id, ex: '123456789'
post_id = '' # your post id, ex: '123456789'
access_token = '' # your access token, from https://developers.facebook.com/tools/explorer/

url = f'https://graph.facebook.com/v16.0/{page_id}_{post_id}/comments?access_token={access_token}'

response = requests.request("GET", url)

# save name, time, message in excel file
data = json.loads(response.text)

# create object with only name, time, message
def get_comment(comment):
    return {
        'name': comment['from']['name'],
        'time': comment['created_time'],
        'message': comment['message']
    }

excel_data = list(map(get_comment, data['data']))
df = pd.DataFrame(excel_data)
df.to_excel('comments.xlsx', index=False)