Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality: 90

})
Webcam.attach ("#camera")

function take_snapshot (){
    Webcam.snap(function(picture){
        document.getElementById("result").innerHTML='<img src="'+picture+'" id="capture_image"/>'
    })
} 

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_Cxtl4xAP/model.json",molo)

function molo(){
    console.log("model is loaded")
}


function check(){
    imaging= document.getElementById("capture_image")
    classifier.classify(imaging,gotresultsss)

}
function gotresultsss(error,result){
    if(error){
        console.error(error)


    }

    else {
        console.log(result)
        document.getElementById("result_name").innerHTML=result[0].label
        document.getElementById("result_accuracy").innerHTML = (result[0].confidence.toFixed(3)*100) 
    }
}
