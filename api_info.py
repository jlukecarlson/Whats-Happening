import urllib2
import json


def rotten_tomatoes_info():
    movie_site = urllib2.urlopen('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=jhen4usf32e95d5w94czht2r')
    return movie_site.read()
    
def nytimes_info():
    times_site = urllib2.urlopen('http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/30.json?&offset=40&api-key=cd43eb238db1ea3eada05319ff6213fc:4:68089269')
    return times_site.read()

def cnet_info():
    cnet_site = urllib2.urlopen('http://news.cnet.com/8300-11386_3-76.xml')
    return cnet_site.read()

def itunes_info():
    itunes_site = urllib2.urlopen('https://itunes.apple.com/us/rss/topsongs/limit=10/explicit=true/json')
    return itunes_site.read()
