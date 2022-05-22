import './fl/style.css';
import * as fl from './fl';

/*
*************
    USAGE
*************
*/

fl.stage.backgroundColor = new fl.Color('#eee');

// Build UI
const container = new fl.Sprite();

const startOrStopTimerButton = new fl.Button();
startOrStopTimerButton.x = 20;
startOrStopTimerButton.y = 140;
startOrStopTimerButton.label = 'Start Timer';

container.backgroundColor = new fl.Color(0x026458);

container.width = 600;
container.height = 300;

const repeatCountTextField = new fl.TextField();
repeatCountTextField.type = 'input';
repeatCountTextField.y = 60;
repeatCountTextField.x = 20;
repeatCountTextField.placeholder = 'Repeat Count';

const delayTextField = new fl.TextField();
delayTextField.type = 'input';
delayTextField.y = 100;
delayTextField.x = 20;
delayTextField.placeholder = 'Delay';

const timerTextField = new fl.TextField();
timerTextField.y = 20;
timerTextField.x = 20;
timerTextField.text = 'Count: 0';

// Add children to the Display List
container.addChild(startOrStopTimerButton);
container.addChild(repeatCountTextField);
container.addChild(delayTextField);
container.addChild(timerTextField);
fl.stage.addChild(container);

// Add Event Listeners
let timer: fl.Timer | null = null;
function onTimer(event: fl.TimerEvent) {
  const count: number = (event.target as fl.Timer).currentCount;
  timerTextField.text = `Count: ${count}`;
}
function onTimerComplete(event: fl.TimerEvent) {
  fl.trace((event.target as fl.Timer).currentCount);
  startOrStopTimerButton.label = 'Start Timer';
  startOrStopTimerButton.backgroundColor = fl.Color.WHITE;
}

startOrStopTimerButton.addEventListener(
  fl.MouseEvent.CLICK,
  (event: fl.MouseEvent) => {
    const button = event.target as fl.Button;
    if (button.label === 'Start Timer') {
      button.label = 'Stop Timer';
      button.backgroundColor = fl.Color.AQUA;
      timerTextField.text = 'Count: 0';

      const [delay, repeatCount] = [
        +delayTextField.text,
        +repeatCountTextField.text,
      ];

      timer = new fl.Timer(delay, repeatCount);
      timer.addEventListener(fl.TimerEvent.TIMER, onTimer);
      timer.addEventListener(fl.TimerEvent.TIMER_COMPLETE, onTimerComplete);
      timer.start();
    } else {
      button.label = 'Start Timer';
      button.backgroundColor = fl.Color.WHITE;
      timer!.removeEventListener(fl.TimerEvent.TIMER, onTimer);
      timer!.removeEventListener(fl.TimerEvent.TIMER_COMPLETE, onTimerComplete);
      timer?.stop();
    }
  }
);
