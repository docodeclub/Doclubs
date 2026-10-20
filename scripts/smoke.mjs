import assert from 'node:assert/strict';
const origin=process.env.TEST_ORIGIN||'http://127.0.0.1:3001';
const paths=['/','/clubs','/schools','/parents','/about','/contact','/privacy','/clubs/docode','/clubs/dosport','/clubs/dochess'];
const html=new Map();
const titles=new Set();
for(const path of paths){const response=await fetch(origin+path);assert.equal(response.status,200,path);assert.equal(response.headers.get('set-cookie'),null);const text=await response.text();assert.equal((text.match(/<h1[ >]/g)||[]).length,1,`${path}: h1`);assert.match(text,/<meta name="description"/);assert.match(text,/<link rel="canonical" href="https:\/\/www.doclubs.co.uk/);assert.match(text,/application\/ld\+json/);assert.match(text,/property="og:image"/);for (const brand of ["docode", "dosport", "dochess"]) assert.ok(text.includes(`href="https://www.${brand}.co.uk"`), `${path}: missing ${brand} website link`);assert.doesNotMatch(text,/Coming soon|Preparing to launch/);const title=text.match(/<title>(.*?)<\/title>/)?.[1];assert.ok(title);assert.ok(!titles.has(title));titles.add(title);html.set(path,text);console.log(`PASS ${path}`)}
for(const [path,text] of html){for(const match of text.matchAll(/href="(\/[^"?#]*)(?:\?[^"#]*)?(?:#([^" ]+))?"/g)){const target=match[1]||'/';if(html.has(target)&&match[2])assert.ok(html.get(target).includes(`id="${match[2]}"`),`${path}: missing anchor ${match[0]}`)}}
for(const path of ['/sitemap.xml','/robots.txt','/opengraph-image','/icon.svg','/brands/docode.png']){const response=await fetch(origin+path);assert.equal(response.status,200,path);if(path==='/opengraph-image')assert.match(response.headers.get('content-type'),/image\/png/);console.log(`PASS ${path}`)}
assert.equal((await fetch(origin+'/missing-page')).status,404);
assert.equal((await fetch(origin+'/api/enquiries',{method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify({route:'general',name:'Synthetic Test',email:'test@example.com',message:'Local smoke test only.'})})).status,503);
console.log('PASS 404 and unconfigured enquiry response; all metadata and anchor assertions passed.');
