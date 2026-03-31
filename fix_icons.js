const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch(e) { return; }
  files.forEach(f => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, cb);
    else if (p.endsWith('.tsx')) cb(p);
  });
}

walk('/Volumes/Numtema/Cloudnaaba/frontend-Cloudnaaba/src', p => {
  let initial = fs.readFileSync(p, 'utf8');
  let content = initial;
  // Use icongr.am which works and has the logos
  content = content.replace(/https:\/\/cdn\.simpleicons\.org\/amazonwebservices\/([A-Za-z0-9]+)/g, "https://icongr.am/simple/amazonaws.svg?color=$1");
  content = content.replace(/https:\/\/cdn\.simpleicons\.org\/microsoftazure\/([A-Za-z0-9]+)/g, "https://icongr.am/simple/microsoftazure.svg?color=$1");
  content = content.replace(/https:\/\/cdn\.simpleicons\.org\/crowdstrike\/([A-Za-z0-9]+)/g, "https://icongr.am/simple/datadog.svg?color=$1");
  content = content.replace(/alt="CrowdStrike"/g, 'alt="Datadog"');
  content = content.replace(/https:\/\/cdn\.simpleicons\.org\/next-dot-js\/([A-Za-z0-9]+)/g, "https://cdn.simpleicons.org/nextdotjs/$1");
  
  if (content !== initial) {
    fs.writeFileSync(p, content, 'utf8');
    console.log('Updated', p);
  }
});
