from django.conf.urls import patterns, include, url
urlpatterns = patterns('whatshappening.views',
                       url(r'^$', 'what_home', name='what_home'),
                       url(r'^movies', 'movies', name='movies'),
                       url(r'^times', 'times', name='times'),
                       url(r'^tech', 'tech', name='tech'),
                       url(r'^music', 'music', name='music'),
)
