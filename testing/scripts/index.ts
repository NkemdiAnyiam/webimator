import { webimator } from 'webimator';
import * as WebimatorTypes from 'webimator/types-and-interfaces';
import * as WebimatorErrors from "webimator/error-handling";
import * as WebimatorEasing from "webimator/easing";

const {Motion, Entrance, Emphasis, Exit, ConnectorSetter, ConnectorEntrance} = webimator.createAnimationClipFactories({
  customEntranceEffects: {
    hello: {
      generateKeyframes() {
        return {forwardFrames: []}
      },
      defaultConfig: {
        
      },
    },
  },
});

{
  const thing: WebimatorTypes.AnimSequence = webimator.newSequence();

  const func = function(sequence: WebimatorTypes.AnimSequence) {

  }

  func(webimator.newSequence())


  const connector = document.querySelector('.connector--red');

  console.log(webimator.newSequence() instanceof WebimatorTypes.AnimSequence);
}

const square = document.querySelector('.square');

const ent = Entrance(square, '~appear', []);

// console.log(ent.generateTimePromise === ent.generateTimePromise);

const entrance: WebimatorTypes.EntranceClip = Entrance(square, '~fly-in', ['from-bottom'], {duration: 1000, hideNowType: 'display-none'});
const motion = Motion(square, '~translate', [{translate: '200px, 200px'}], {duration: 1000, easing: 'bounce-out'});
console.log(entrance.getModifiers());
console.log(entrance.getModifiers('hideNowType'));
console.log(entrance.getModifiers(['cssClasses', 'composite']));

entrance.getTiming()
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// wait(1000).then(() => {
//   motion.finish();

//   wait(1000).then(() => {
//     motion.rewind().then(() => {
//       wait(1000).then(() => {
//         motion.rewind();
//         motion.finish();
//       })
//     });
//   })
// })

(async function() {
  // await wait(1000);
  // motion.play();
  // await wait(500);
  // motion.pause();
  // await wait(500);
  // motion.finish();
  // await wait(500);
  // console.log(motion.getStatus().paused);
  // motion.unpause();
  // motion.finish();
  // console.log(motion.getStatus().paused);

  // motion.addRoadblocks('forward', 'activePhase', '25%', [() => wait(2000)]);

  // await motion.finish().then((e) => {
  //   e.getTiming();
  //   e.pause()
  // });
  // console.log('HELLO WORLD')

  const seq = webimator.newSequence(
    entrance,
    motion,
    Emphasis(square, '~highlight', [], {}),
    Emphasis(square, '~un-highlight', [], {}),
    Emphasis(square, '~highlight', ['purple'], {}),
    Emphasis(square, '~un-highlight', [], {}),
    ConnectorSetter(document.querySelector('.connector--2'), [square, 'left', 'top'], [square, 'right', 'bottom']),
    ConnectorEntrance(document.querySelector('.square'), '~trace', ['from-A']),
  );
  

  // motion.addRoadblocks('forward', 'activePhase', '25%', [() => wait(2000)]);
  // motion.addRoadblocks('backward', 'activePhase', '50%', [() => wait(2000)]);
  
  motion.getStatus().inProgress

  // seq.

  // seq.play();
  // await seq.finish().then(() => {
  //   console.log('HELLO WORLD')
  // });

  // seq.rewind();
  // seq.finish().then(() => {
  //   console.log('WE BACK')
  // });

  const timeline = webimator.newTimeline({timelineName: 'Basic', autoLinksButtons: false});
  timeline.linkPlaybackButtons();
  await wait(1000);
  timeline.addSequences(seq);
  await timeline.step('forward');
  await timeline.step('backward');
  timeline.removeSequences(seq);
  timeline.addSequences(seq);

  // setTimeout(() => seq.removeClips(entrance), 3000);

  // timeline.step('forward');
  // timeline.toggleSkipping({forceState: 'on'}).then(() => {
  //   console.log('HEY, EVERYONE!!!');
  // })
})()
