import { cp, mkdir, rm, symlink, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
const root=process.cwd();
const staging=path.join(root,'.pages-build');
await rm(staging,{recursive:true,force:true});
await mkdir(staging,{recursive:true});
for(const name of ['app','components','config','lib','public','package.json','pnpm-lock.yaml','next.config.ts','postcss.config.mjs','tsconfig.json'])await cp(path.join(root,name),path.join(staging,name),{recursive:true});
// GitHub Pages has no server runtime. Keep the API in source, omit it from this deployment.
await rm(path.join(staging,'app/api'),{recursive:true,force:true});
await symlink(path.join(root,'node_modules'),path.join(staging,'node_modules'),'dir');
const result=spawnSync(process.execPath,[path.join(root,'node_modules/next/dist/bin/next'),'build'],{cwd:staging,stdio:'inherit',env:{...process.env,GITHUB_PAGES:'true',NEXT_TELEMETRY_DISABLED:'1'}});
if(result.status!==0)process.exit(result.status||1);
await rm(path.join(root,'out'),{recursive:true,force:true});
await cp(path.join(staging,'out'),path.join(root,'out'),{recursive:true});
await writeFile(path.join(root,'out/.nojekyll'),'');
await writeFile(path.join(root,'out/CNAME'),'www.doclubs.co.uk\n');
