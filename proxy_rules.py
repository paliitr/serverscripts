import json

class AddHeader:
    def request(self, flow):
        header_values = {
          "host": "",
          "connection": "keep-alive",
          "cache-control": "max-age=0",
          "upgrade-insecure-requests": "1",
          "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "accept-encoding": "gzip, deflate, sdch",
          "accept-language": "en-US,en;q=0.8"
      }
        # with open('browser_headers.json') as f:
        #     json_values = json.load(f)
        #     header_values = json_values['chrome']
        header_values['host'] = flow.request.headers['host']
        print(header_values)
        print(flow.request.headers)
        for k in flow.request.headers:
            # print(k)
            flow.request.headers.pop(k, None)
            # flow.request.headers.pop('Proxy-Connection', None)
        for k in header_values:
            flow.request.headers[k] = header_values[k]
        print(flow.request.headers)

def start():
    return AddHeader()
