import os
import json
# print(os.path.abspath(os.getcwd(), './.vitepress//dist/hashmap.json'))
with open('./.vitepress/dist/hashmap.json') as f:
    url_obj = json.load(f)
    keys = url_obj.keys()

    # def get_urls(url):
    #     return url.replace('_', '/').replace('md', 'html')
    # map(get_urls, keys)

    for [i, key] in enumerate(keys):
        print(key)
        key = key.replace('_', '/').replace('md', 'html')
        # keys[i] = keys[i].replace('_', '/').replace('md', 'html')
    print(keys)
