function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gIjYGCYZSS":
        Script1();
        break;
      case "5vP3k5HnDSL":
        Script2();
        break;
      case "61OAGFCjN4T":
        Script3();
        break;
      case "6qlaCFg3TUR":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5YrSqzZ0uqF');
const duration = 750;
const easing = 'ease-out';
const id = '68m19AHbe02';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6qajv8q0bp8');
const duration = 750;
const easing = 'ease-out';
const id = '5Yp4eInLjUs';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5XJ33DNq2cg');
const duration = 3000;
const easing = 'ease-out';
const id = '6WFDtNXYSla';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5XJ33DNq2cg');
const duration = 750;
const easing = 'ease-out';
const id = '5hS0iox6pr1';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
