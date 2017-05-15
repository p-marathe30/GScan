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
      video:"https://www.youtube.com/embed/QfM5rHH_xTs?list=PLXi7NaQwA3TSpV6HAKBtrvlnPFS8jXFGu",
      thumbnail:"http://img.youtube.com/vi/QfM5rHH_xTs/0.jpg"
    },
    {
      video:"https://www.youtube.com/embed/lrbL1s9qwBs?list=PLXi7NaQwA3TSpV6HAKBtrvlnPFS8jXFGu",
      thumbnail: "http://img.youtube.com/vi/lrbL1s9qwBs/0.jpg"
    },
    {
      video:"https://www.youtube.com/embed/5adMpnV5jWk?list=PLXi7NaQwA3TSpV6HAKBtrvlnPFS8jXFGu",
      thumbnail: "http://img.youtube.com/vi/5adMpnV5jWk/0.jpg"
    },
    {
      video:"https://www.youtube.com/embed/5adMpnV5jWk?list=PLXi7NaQwA3TSpV6HAKBtrvlnPFS8jXFGu",
      thumbnail: "http://img.youtube.com/vi/5adMpnV5jWk/0.jpg"
    },
    {
      video:"https://www.youtube.com/embed/5adMpnV5jWk?list=PLXi7NaQwA3TSpV6HAKBtrvlnPFS8jXFGu",
      thumbnail: "http://img.youtube.com/vi/5adMpnV5jWk/0.jpg"
    },
    {
      video:"https://www.youtube.com/embed/5adMpnV5jWk?list=PLXi7NaQwA3TSpV6HAKBtrvlnPFS8jXFGu",
      thumbnail: "http://img.youtube.com/vi/5adMpnV5jWk/0.jpg"
    }
  ]
  xframe_videos = []
  vids.forEach(function(element){
    video = {}
    video['video'] = $sce.trustAsResourceUrl(element.video)
    video['thumbnail'] = $sce.trustAsResourceUrl(element.thumbnail)
    xframe_videos.push(video)
    console.log(video.video);
  })

  $scope.videos=xframe_videos;

  $scope.load = function(){
    $scope.video = $sce.trustAsResourceUrl($routeParams.video);
  }

  $scope.play = function(v){
    console.log(v);
  }
})
