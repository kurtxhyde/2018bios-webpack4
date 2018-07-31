//import {GLOBAL} from './config.js';


function YTT(vid, ElementID, playedHandle) {
    var tag = document.createElement('script');
    var state = "init";
    var player;

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);    
    
    this.onYouTubeIframeAPIReady = function() {
        initplayer()        
    }
    function initplayer(){
        player = new YT.Player(ElementID, {
            height: '100%',
            width: '100%',
            videoId: vid,
            playerVars: { 'autoplay': 0, 'rel': 0 ,'enablejsapi': 1,},
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }



    this.get_state = function() { return state; }
    this.stop = function() {
        //console.log('stop playing...' + player)
         stopVideo()
    }
    this.play = function() { 
        player.playVideo() 
    }
    this.loadvdo = function(id) {
        player.loadVideoById(id)
        player.stopVideo();
    }

    function onPlayerReady(event) {
        if (device.mobile() || device.tablet()) {

        } else {
        }
        state = "ready"
    }

    

    function onPlayerStateChange(event) {
        if (event.data == "1") {
            console.log("vdo:" + event.data)
            playedHandle();
        }
    }

    function stopVideo() {
        player.stopVideo();
    }
}

//类不存在变量提升（hoist），这一点与 ES5 完全不同。
/**
     * [constructor description]
     * @param  {[type]} vid          [description]
     * @param  {[type]} ElementID    [description]
     * @param  {[type]} playedHandle [description]
     * @return {[type]}              [description]
     */
class YTT_class{
    //name 属性
    //YTT_class.name  "YTT_class"
    constructor(vid, ElementID, playedHandle){
            console.log('ytt class contrusct...')
            this.vid = vid;
            this.ElementID = ElementID;
            this.playedHandle = playedHandle;
            const tag = document.createElement('script');
            this._state = "init"          
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);   
            YTT_class.played = false;
            
            this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
            this.stop = this.stop.bind(this);
            this.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
    };
    
    ///////////////////////////////
    //类的方法内部如果含有this，它默认指向类的实例。
    //但是，必须非常小心，一旦单独使用该方法，很可能报错。 //
    ///////////////////////////////
    /**
     * [_initplayer description]
     * 私有方法
     * 表示这是一个只限于内部使用的私有方法。
     * 但在类的外部，还是可以调用到这个方法。
     * (私有屬性)
     */
    
    static _initplayer(ElementID,vid, onPlayerReady,onPlayerStateChange){
        
        this.player = new YT.Player(ElementID, {
            height: '100%',
            width: '100%',
            videoId: vid,
            playerVars: { 'autoplay': 0, 'rel': 0 },
            events: {
                'onReady':onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        })
    }
    static get YTTPlayed() {
        return this.played;
    };
    static set YTTPlayed(tof) {
        this.played = tof;
    };
    static onPlayerReady(event) {
        if (device.mobile() || device.tablet()) {

        } else {
        }
        
    }

    // 公有方法
    onYouTubeIframeAPIReady () {
        YTT_class._initplayer(this.ElementID, this.vid, YTT_class.onPlayerReady, this.onPlayerStateChange);
    }
    onPlayerStateChange(event) {
        if (event.data == "1") {
            console.log("vdo:" + event.data);
            state = "playing";
            this.playedHandle();
            
        }
    }

    get state() { return this._state; }
    set state(s) { this._state = s; }

    stop () {
        try{
            if(this.player){
                this.player.stopVideo();    
            }else{
                throw "this.player not exist"
            }
        }catch(err){
            console.log(err)
        }
        

    }
   
}
export { YTT as YTT, YTT_class as YTT_class}
//

////////////////////////////
////*YOUTUBE UPLOAD API*////
////////////////////////////
///
// function YT_UPLOAD(){
//  var appkey = _GLOBAL.yt_appkey;


//   this.init=function(){

//   }

//   function (){}
// }


/*
Copyright 2015 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var signinCallback = function(result) {
    if (result.access_token) {
        var uploadVideo = new UploadVideo();
        uploadVideo.ready(result.access_token);
    }
};

var STATUS_POLLING_INTERVAL_MILLIS = 60 * 1000; // One minute.


/**
 * YouTube video uploader class
 *
 * @constructor
 */
var UploadVideo = function() {
    /**
     * The array of tags for the new YouTube video.
     *
     * @attribute tags
     * @type Array.<string>
     * @default ['google-cors-upload']
     */
    this.tags = ['360-cors-upload'];

    /**
     * The numeric YouTube
     * [category id](https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.videoCategories.list?part=snippet®ionCode=us).
     *
     * @attribute categoryId
     * @type number
     * @default 22
     */
    this.categoryId = 22;

    /**
     * The id of the new video.
     *
     * @attribute videoId
     * @type string
     * @default ''
     */
    this.videoId = '';

    this.uploadStartTime = 0;
};


UploadVideo.prototype.ready = function(accessToken) {
    this.accessToken = accessToken;
    this.gapi = gapi;
    this.authenticated = true;
    this.gapi.client.request({
        path: '/youtube/v3/channels',
        params: {
            part: 'snippet',
            mine: true
        },
        callback: function(response) {
            if (response.error) {
                console.log(response.error.message);
            } else {
                $('#channel-name').text(response.items[0].snippet.title);
                $('#channel-thumbnail').attr('src', response.items[0].snippet.thumbnails.default.url);

                $('.pre-sign-in').hide();
                $('.post-sign-in').show();
            }
        }.bind(this)
    });
    $('#button').on("click", this.handleUploadClicked.bind(this));
};

/**
 * Uploads a video file to YouTube.
 *
 * @method uploadFile
 * @param {object} file File object corresponding to the video to upload.
 */
UploadVideo.prototype.uploadFile = function(file) {
    var metadata = {
        snippet: {
            title: $('#title').val(),
            description: $('#description').text(),
            tags: this.tags,
            categoryId: this.categoryId
        },
        status: {
            privacyStatus: $('#privacy-status option:selected').text()
        }
    };
    var uploader = new MediaUploader({
        baseUrl: 'https://www.googleapis.com/upload/youtube/v3/videos',
        file: file,
        token: this.accessToken,
        metadata: metadata,
        params: {
            part: Object.keys(metadata).join(',')
        },
        onError: function(data) {
            var message = data;
            // Assuming the error is raised by the YouTube API, data will be
            // a JSON string with error.message set. That may not be the
            // only time onError will be raised, though.
            try {
                var errorResponse = JSON.parse(data);
                message = errorResponse.error.message;
            } finally {
                alert(message);
            }
        }.bind(this),
        onProgress: function(data) {
            var currentTime = Date.now();
            var bytesUploaded = data.loaded;
            var totalBytes = data.total;
            // The times are in millis, so we need to divide by 1000 to get seconds.
            var bytesPerSecond = bytesUploaded / ((currentTime - this.uploadStartTime) / 1000);
            var estimatedSecondsRemaining = (totalBytes - bytesUploaded) / bytesPerSecond;
            var percentageComplete = (bytesUploaded * 100) / totalBytes;

            $('#upload-progress').attr({
                value: bytesUploaded,
                max: totalBytes
            });

            $('#percent-transferred').text(percentageComplete);
            $('#bytes-transferred').text(bytesUploaded);
            $('#total-bytes').text(totalBytes);

            $('.during-upload').show();
        }.bind(this),
        onComplete: function(data) {
            var uploadResponse = JSON.parse(data);
            this.videoId = uploadResponse.id;
            $('#video-id').text(this.videoId);
            $('.post-upload').show();
            this.pollForVideoStatus();
        }.bind(this)
    });
    // This won't correspond to the *exact* start of the upload, but it should be close enough.
    this.uploadStartTime = Date.now();
    uploader.upload();
};

UploadVideo.prototype.handleUploadClicked = function() {
    $('#button').attr('disabled', true);
    this.uploadFile($('#file').get(0).files[0]);
};

UploadVideo.prototype.pollForVideoStatus = function() {
    this.gapi.client.request({
        path: '/youtube/v3/videos',
        params: {
            part: 'status,player',
            id: this.videoId
        },
        callback: function(response) {
            if (response.error) {
                // The status polling failed.
                console.log(response.error.message);
                setTimeout(this.pollForVideoStatus.bind(this), STATUS_POLLING_INTERVAL_MILLIS);
            } else {
                var uploadStatus = response.items[0].status.uploadStatus;
                switch (uploadStatus) {
                    // This is a non-final status, so we need to poll again.
                    case 'uploaded':
                        $('#post-upload-status').append('<li>Upload status: ' + uploadStatus + '</li>');
                        setTimeout(this.pollForVideoStatus.bind(this), STATUS_POLLING_INTERVAL_MILLIS);
                        break;
                        // The video was successfully transcoded and is available.
                    case 'processed':
                        $('#player').append(response.items[0].player.embedHtml);
                        $('#post-upload-status').append('<li>Final status.</li>');
                        break;
                        // All other statuses indicate a permanent transcoding failure.
                    default:
                        $('#post-upload-status').append('<li>Transcoding failed.</li>');
                        break;
                }
            }
        }.bind(this)
    });
};