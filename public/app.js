var app = angular.module('signzy',['ngRoute','ngResource'])

app.config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode({enabled:true});
  $routeProvider.
  when('/',{
    templateUrl:'partials/all.html',
    controller:'main'
  }).
  when('/video',{
    templateUrl: 'partials/video.html',
    controller:'main'
  })
})

app.controller('main',function($scope,$sce,$routeParams){
  var vids = [
    {
      video:"https://www.youtube.com/embed/YX40hbAHx3s",
      thumbnail: "http://img.youtube.com/vi/YX40hbAHx3s/0.jpg",
      title:"P vs. NP and the Computational Complexity Zoo"
    },
    {
      video:"https://www.youtube.com/embed/SrU9YDoXE88",
      thumbnail:"http://img.youtube.com/vi/SrU9YDoXE88/0.jpg",
      title:"How To Count Past Infinity"
    },
    {
      video:"https://www.youtube.com/embed/GJ4Qp2xeRds",
      thumbnail: "http://img.youtube.com/vi/GJ4Qp2xeRds/0.jpg",
      title:"How High Can We Build?"
    },
    {
      video:"https://www.youtube.com/embed/VNqNnUJVcVs",
      thumbnail: "http://img.youtube.com/vi/VNqNnUJVcVs/0.jpg",
      title: "Is Earth Actually Flat?"
    },
    {
      video:"https://www.youtube.com/embed/EgJXm65jaUs",
      thumbnail: "http://img.youtube.com/vi/EgJXm65jaUs/0.jpg",
      title: "Shaun Murphy 147 Break 2014 Ruhr Open Final"
    },
    {
      video:"https://www.youtube.com/embed/mXVGIb3bzHI",
      thumbnail: "http://img.youtube.com/vi/mXVGIb3bzHI/0.jpg",
      title: "Can Silence Actually Drive You Crazy?"
    }
  ]
  xframe_videos = []
  vids.forEach(function(element){
    video = {}
    video['video'] = $sce.trustAsResourceUrl(element.video)
    video['thumbnail'] = $sce.trustAsResourceUrl(element.thumbnail)
    video['title'] = element.title
    xframe_videos.push(video)
  })

  $scope.videos=xframe_videos;

  $scope.load = function(){
    $scope.video = $sce.trustAsResourceUrl($routeParams.video);
  }
})
