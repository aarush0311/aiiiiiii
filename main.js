song="";
song1="";
leftWristx=0;
leftWristy=0;
RightWristx=0;
RightWristy=0;
scoreLeftWrist=0;
scoreRightWrist=0;
song_status="";
song1_status="";
function preload(){
    song=loadSound("belever.mp3");
    song1=loadSound("shape.mp3")
}
function setup(){
   canvas=createCanvas(600,500);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
   poseNet=ml5.poseNet(video,modelLoded);
   poseNet.on("pose",gotPoses);

}
function draw(){
image(video,0,0,600,500);
song_status=song.isPlaying();
song1_status=song.isPlaying();
fill("#0000FF");
stroke("#0000FF");
if(scoreRightWrist>0.2){
    circle(RightWristx,RightWristy,20);
    song1.stop();
    if(song_status==false){
        song.play();
        document.getElementById("song").innerHTML="song playing belever ";
    }
}
if(scoreleftWrist>0.2){
    circle(leftWristx,leftWristy,20);
    song.stop();
    if(song1_status==false){
        song1.play();
        document.getElementById("song").innerHTML="song  ";
    }
}

}
function play(){
    song.play();
    
}
function modelLoded(){
    console.log("modelLoded");
}
function gotPoses(results){
        if(results.length>0){
            console.log(results);
            leftWristx=results[0].pose.leftWrist.x;
            leftWristy=results[0].pose.leftWrist.y;
            console.log("leftWristx="+leftWristx+" ,leftWristy="+leftWristy);
            RightWristx=results[0].pose.rightWrist.x;
            RightWristy=results[0].pose.rightWrist.y;
            console.log("RightWristx="+RightWristx+" ,RightWristy="+RightWristy);
            scoreLeftWrist=results[0].pose.keypoints[9].score;
            console.log("scoreLeftWrist="+scoreLeftWrist);
            scoreRightWrist=results[0].pose.keypoints[10].score;
            console.log("scoreRightWrist="+scoreRightWrist);
    
        }
    }

