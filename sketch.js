let lstmmodel;

async function setup() {
  createCanvas(640, 480);
  lstmmodel = await tf.loadLayersModel('model1_tfjs/model.json');
  console.log('模型載入完成');
}

function draw() {
  background(220);
  if (!model) {
    text('載入中…', width/2, height/2);
    return;
  }
  // 這裡可以把你累積好的 [1,30,258] 張量拿去 model.predict
}
